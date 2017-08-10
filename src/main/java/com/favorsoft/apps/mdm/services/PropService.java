package com.favorsoft.apps.mdm.services;

import com.favorsoft.apps.mdm.entity.Prop;
import com.favorsoft.apps.mdm.repository.PropRepository;
import com.favorsoft.components.handsontable.models.HandsontableSaveModel;
import com.favorsoft.components.handsontable.models.HandsontableSaveType;
import com.favorsoft.components.handsontable.services.HandsontableService;
import com.favorsoft.components.handsontable.services.impl.HandsontableServiceImpl;
import com.favorsoft.exceptions.CoreException;
import org.javers.core.Javers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by profa on 2017-06-15.
 */
@Service
public class PropService extends HandsontableServiceImpl<Prop>{
    @Autowired
    private Javers javers;

    @Autowired
    private PropRepository propRepository;

    public List<Prop> getAll(){
        return propRepository.findAll();
    }

    public boolean save(HandsontableSaveModel save){
        boolean flag = false;
        try{
            Prop prop = new Prop();
            if(HandsontableSaveType.COL.name().equalsIgnoreCase(save.getSaveType())){
                this.save(HandsontableSaveType.COL, save);
            }

            propRepository.save(prop);
            javers.commit("author", prop);
            flag = true;
        }catch (CoreException e) {
            e.setErrorMessage("Prop 저장중 오류가 발생하였습니다.");
        }
        return flag;
    }

}
