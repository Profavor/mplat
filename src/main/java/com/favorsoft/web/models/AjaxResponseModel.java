package com.favorsoft.web.models;

import lombok.Data;

import java.util.Date;

/**
 * Created by profa on 2017-06-15.
 */
@Data
public class AjaxResponseModel {
    private boolean success;
    private String message;
    private String stacktrace;
    private Date processDate;
}
