package com.favorsoft.common;

import java.io.Serializable;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class AjaxModel<T> implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private boolean success;
	
	private T obj;

	private String message;

}
