package com.favorsoft.service.impl;

import com.favorsoft.entity.ErrorLog;
import com.favorsoft.exceptions.CoreException;
import com.favorsoft.exceptions.ErrorCode;
import com.favorsoft.repository.ErrorLogRepository;
import com.favorsoft.service.ErrorLogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service(value = "errorLogService")
@Transactional(propagation = Propagation.REQUIRED)
public class ErrorLogServiceImpl implements ErrorLogService {
	private static final Logger logger = LoggerFactory.getLogger(ErrorLogServiceImpl.class);
	
	@Autowired
	private ErrorLogRepository errorLogRepository;
	
	public void saveLog(ErrorLog errorLog){
		try{    
			if(logger.isDebugEnabled()){
				logger.debug("ErrorLog Save Ready");
			}

			errorLogRepository.saveAndFlush(errorLog);
			
			if(logger.isDebugEnabled()){
				logger.debug("ErrorLog Save Success!");
			}			
		}catch(Exception e){		
			throw new CoreException(ErrorCode.ERROR_DATA_SAVE);
		}			
	}
}
