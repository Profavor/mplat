package com.favorsoft.apps.mdm.prop;

import com.favorsoft.apps.mdm.entity.Prop;
import com.favorsoft.apps.mdm.services.PropService;
import com.favorsoft.exceptions.CoreException;
import com.favorsoft.utils.CommonUtil;
import com.favorsoft.web.models.AjaxResponseModel;
import org.javers.core.Javers;
import org.javers.core.diff.Change;
import org.javers.repository.jql.QueryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

/**
 * Created by profa on 2017-06-15.
 */
@RestController
@RequestMapping("/api/mdm/prop")
public class PropController {
    private final Javers javers;

    @Autowired
    public PropController(Javers javers){
        this.javers = javers;
    }

    @Autowired
    private PropService propService;


    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public List<Prop> getAll(){
        return propService.getAll();
    }

    @RequestMapping(value = "/changes", method = RequestMethod.GET)
    public String getPropChanges(){
        QueryBuilder jqQueryBuilder = QueryBuilder.byClass(Prop.class);
        List<Change> changes = javers.findChanges(jqQueryBuilder.build());
        return javers.getJsonConverter().toJson(changes);
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public AjaxResponseModel save(@ModelAttribute Prop prop){
        AjaxResponseModel ajaxResponseModel = new AjaxResponseModel();
        try{
            ajaxResponseModel.setSuccess(propService.save(prop));
        }catch (CoreException e){
            ajaxResponseModel.setMessage(e.getErrorMessage());
            ajaxResponseModel.setStacktrace(CommonUtil.getRootCauseStackTrace(e));
        }finally {
            ajaxResponseModel.setProcessDate(new Date());
        }
        return ajaxResponseModel;
    }
}
