package com.favorsoft.apps.mdm.services;

import com.favorsoft.apps.mdm.entity.Prop;
import com.favorsoft.apps.mdm.repository.PropRepository;
import com.favorsoft.exceptions.CoreException;
import org.javers.core.Javers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by profa on 2017-06-15.
 */
@Service
public class PropService {
    private final Javers javers;
    private final PropRepository propRepository;

    @Autowired
    public PropService(Javers javers, PropRepository propRepository){
        this.javers = javers;
        this.propRepository = propRepository;
    }

    public List<Prop> getAll(){
        return propRepository.findAll();
    }

    public boolean save(Prop prop){
        boolean flag = false;
        try{
            propRepository.save(prop);
            javers.commit("author", prop);
            flag = true;
        }catch (CoreException e) {
            e.setErrorMessage("Prop 저장중 오류가 발생하였습니다.");
        }
        return flag;
    }
}
