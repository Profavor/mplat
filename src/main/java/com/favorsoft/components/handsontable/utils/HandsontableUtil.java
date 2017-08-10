package com.favorsoft.components.handsontable.utils;

import com.favorsoft.components.handsontable.models.HandsontableSaveModel;
import com.google.gson.Gson;
import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONException;


import java.lang.reflect.Field;


/**
 * Created by profa on 2017-06-18.
 */
public class HandsontableUtil {

    public static Object convertJsonArrayToObject(HandsontableSaveModel save, Object obj) throws JSONException, IllegalAccessException {
        Class clazz = obj.getClass();
        //Header
        JSONArray headerArray;
        JSONArray dataArray;
        Gson gson = new Gson();


        //gson.fromJson(save.getHeader());

        for(Field field : clazz.getFields()){
//           for(int i=0; i<headerArray.length(); i++){
  //             if(field.getName().equalsIgnoreCase((String)headerArray.get(i))){
    //                Object value = dataArray.get(i);
     //               if(value instanceof String){
       //                 field.set(String.class, value);
         //           }

           //    }
         //  }
        }
        return obj;
    }

    public static Object newObject(Object object) throws IllegalAccessException, InstantiationException {
        return object.getClass().newInstance();
    }
}