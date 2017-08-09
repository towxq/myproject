package com.ssm.service;

import java.util.List;

public interface ReadRedisService {
	
	
	
	/**
	 * 获取缓存对象
	 * @param key
	 * @param clazz
	 * @return
	 */
	public <T> T get(String key, Class<T> clazz);
	
	
	public <T> List<T>  getList(String key, Class<T> clazz);
	
	
	/**
	 * 
	 * @param prefix 前缀
	 * @param name
	 * @param clazz
	 * @return
	 */
	public <T> T get(String prefix, String name, Class<T> clazz);
	

	/**
	 * 判断当前key值是否存在
	 * @param key
	 */
	public  boolean hasKey(String key);
	
	/**
	 * 
	 * @param prefix
	 * @param name
	 * @return
	 */
	public  boolean hasKey(String prefix, String name);
	
	/**
	 * get
	 * @param key
	 * @return
	 */
	public  String get(String key);
	
	/**
	 * 
	 * @param prefix
	 * @param name
	 * @return
	 */
	public String get(String prefix, String name);
}
