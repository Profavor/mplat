package com.favorsoft.web.messages;

import lombok.Getter;

/**
 * Created by profa on 2017-02-04.
 */
public enum MessageType {

    Name("NAME"),
    ShortName("SHORTNAME"),
    Description("DESCRIPTION"),
    Message("MESSAGE"),
    Abbreviation("ABBREVIATION");
    @Getter
    private String messageType;

    MessageType(String messageType){
        this.messageType = messageType;
    }
}
