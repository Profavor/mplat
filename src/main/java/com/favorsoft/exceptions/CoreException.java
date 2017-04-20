package com.favorsoft.exceptions;

import com.favorsoft.utils.CommonUtil;
import lombok.Data;

/**
 * Created by profa on 2017-02-04.
 */
@Data
public class CoreException extends RuntimeException{
    private String errorCode = "";
    private String errorMessage = "";
    private String errorStackTrace = "";

    public CoreException(ErrorCode errorCode){
        super("["+errorCode.getCode()+"] "+errorCode.getMessage());
        this.errorStackTrace = CommonUtil.getRootCauseStackTrace(this);
        this.errorCode = errorCode.getCode();
        this.errorMessage = errorCode.getMessage();
    }

    public CoreException(String errorMessage){
        super(errorMessage);
        this.errorStackTrace = CommonUtil.getRootCauseStackTrace(this);
        this.errorMessage = errorMessage;
    }
}
