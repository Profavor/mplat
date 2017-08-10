package com.favorsoft.components.handsontable.models;

import lombok.Data;
import org.codehaus.jettison.json.JSONArray;

/**
 * Created by profa on 2017-06-18.
 */
@Data
public class HandsontableSaveModel {
    private String saveType;
    private int startRow;
    private int endRow;
    private int startCol;
    private int endCol;

    private int row;
    private int col;
    private Object oldValue;
    private Object newValue;

    private Object headerList;
    private Object recordList;
    private Object dataList;
}