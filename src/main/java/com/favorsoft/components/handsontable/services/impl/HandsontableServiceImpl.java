package com.favorsoft.components.handsontable.services.impl;

import com.favorsoft.components.handsontable.models.HandsontableSaveModel;
import com.favorsoft.components.handsontable.models.HandsontableSaveType;
import com.favorsoft.components.handsontable.services.HandsontableService;
import com.favorsoft.exceptions.CoreException;
import org.springframework.stereotype.Service;

/**
 * Created by profa on 2017-06-19.
 */
@Service(value = "handsontableService")
public class HandsontableServiceImpl<T> implements HandsontableService<T> {
    @Override
    public void save(HandsontableSaveType saveType, HandsontableSaveModel save){

        if(saveType == HandsontableSaveType.PASTE){
            //
        }

        else if(saveType == HandsontableSaveType.RECORD){

        }

        else if(saveType == HandsontableSaveType.COL){

        }

        else if(saveType == HandsontableSaveType.UNDO){


        }else {
            throw new CoreException("[SYSTEM] 저장타입이 존재하지 않습니다. -> "+saveType);
        }
    }
}
