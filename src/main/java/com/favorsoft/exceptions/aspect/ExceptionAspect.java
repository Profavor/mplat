package com.favorsoft.exceptions.aspect;

import javax.servlet.http.HttpServletRequest;

import com.favorsoft.entity.ErrorLog;
import com.favorsoft.entity.Usr;
import com.favorsoft.exceptions.CoreException;
import com.favorsoft.exceptions.ErrorCode;
import com.favorsoft.service.ErrorLogService;
import com.favorsoft.utils.CommonUtil;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Component;
/**
 * @author profavor
 * @since 2017
 * Exception handling
 */
@Aspect
@Component
public class ExceptionAspect{
	private static final Logger logger = LoggerFactory.getLogger(ExceptionAspect.class);
	
	@Autowired
	private ErrorLogService errorLogService;
	
	@Autowired
	private HttpServletRequest request;

	Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	
	//Exception 발생시 
	@AfterThrowing(pointcut="execution(* com.favorsoft.apps.*.*(..))", throwing="ex")
	public void throwingLogging(CoreException ex) {
		if("MPLAT".equals(ex.getMessage().substring(1,6))){
			ErrorLog errorLog = null;
			if(logger.isErrorEnabled() || logger.isDebugEnabled()){
				logger.error(CommonUtil.getRootCauseStackTrace(ex));
			}
			
			for(ErrorCode errorCode : ErrorCode.values()){
				if(errorCode.getCode().equals(ex.getErrorCode())){
					errorLog = new ErrorLog(errorCode, ex.getErrorStackTrace());
					break;
				}
			}
			
			if(errorLog == null){
				errorLog = new ErrorLog(ErrorCode.UNDEFINED_ERROR, ex.getErrorStackTrace());
			}

			setErrorLog(errorLog);
			errorLogService.saveLog(errorLog);
		}
	}
	
	@AfterThrowing(pointcut="execution(* com.favorsoft.apps.*.*(..))", throwing="ex")
	public void throwingLogging(Exception ex) {
		ErrorLog errorLog = null;		
		
		if(!"MPLAT".equals(ex.getMessage().substring(1,6))){
			if(logger.isErrorEnabled() || logger.isDebugEnabled()){
				logger.error(CommonUtil.getRootCauseStackTrace(ex));
			}
			errorLog = new ErrorLog(ErrorCode.UNDEFINED_ERROR, CommonUtil.getRootCauseStackTrace(ex));
			setErrorLog(errorLog);
		}
		
		if(errorLog != null){
			errorLogService.saveLog(errorLog);
		}
	}

	private ErrorLog setErrorLog(ErrorLog errorLog){
		if(authentication != null){
			WebAuthenticationDetails details = (WebAuthenticationDetails) authentication.getDetails();
			String remoteAddress = details.getRemoteAddress();
			errorLog.setIpAddress(remoteAddress);
			errorLog.setUsr((Usr) authentication.getPrincipal());
		}else{
			errorLog.setIpAddress(request.getRemoteAddr());
		}
		return errorLog;
	}
}