package com.ssm.util;

import java.io.Serializable;

/**
 * Http接口返回值
 * @author wxq
 *
 * @param <T>
 */
public class ServiceResult<T> implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -815876717500264241L;
	
	private T result;
	private String msg = "";
	private int code = 0;

	public ServiceResult(){
		
	}
	
	public T getResult() {
		return result;
	}


	public void setResult(T result) {
		this.result = result;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

}
