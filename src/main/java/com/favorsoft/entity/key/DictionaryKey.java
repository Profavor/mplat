package com.favorsoft.entity.key;

import lombok.Data;

import java.io.Serializable;

/**
 * Created by profa on 2017-02-04.
 */
@Data
public class DictionaryKey implements Serializable {
    private String dicId;
    private String lang;

    public DictionaryKey(){

    }

    public DictionaryKey(String dicId, String lang){
        this.dicId = dicId;
        this.lang = lang;
    }
}
