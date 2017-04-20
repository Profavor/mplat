package com.favorsoft.exceptions;

/**
 * Error Code Manager ENUM Class
 * 2016.12.13 created by profavor
 */
public enum ErrorCode {
	//MPLAT-00000 "정의되지 않은 오류"
	
	UNDEFINED_ERROR("MPLAT-00000", "정의되지 않은 에러"),
	SYSTEM_ERROR("MPLAT-00001", "시스템에러."),
	INVALID_ID("MPLAT-00002", "데이터 정보를 찾을 수 없습니다."),
	ERROR_LOG_SAVE("MPLAT-00003", "에러로그 저장 중 에러가 발생하였습니다."),
	ERROR_DATA_SAVE("MPLAT-00004", "데이터 저장 중 오류가 발생하였습니다.");
	
	private String code;
	private String message;
	
	private ErrorCode(String code, String message){
		this.code = code;
		this.message = message;
	}
	
	public String getMessage() {
		return this.message;
	}
	public String getCode() {
		return this.code;
	}
}