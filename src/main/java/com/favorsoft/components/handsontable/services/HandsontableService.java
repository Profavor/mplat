package com.favorsoft.components.handsontable.services;

import com.favorsoft.components.handsontable.models.HandsontableSaveModel;
import com.favorsoft.components.handsontable.models.HandsontableSaveType;

/**
 * Created by profa on 2017-06-15.
 */
public interface HandsontableService<T> {

    public void save(HandsontableSaveType saveType, HandsontableSaveModel save) throws InstantiationException, IllegalAccessException;
}
