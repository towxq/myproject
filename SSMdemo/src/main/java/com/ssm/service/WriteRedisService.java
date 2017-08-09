package com.ssm.service;

public interface WriteRedisService {

	/**
	 * set String
	 * @param key
	 * @param value
	 */
	public void set(String key, String value);

	/**
	 * 
	 * @param prefix 前缀
	 * @param name 
	 * @param value
	 */
	public void set(String prefix, String name, String value);
	
	/**
	 * set String 设置失效时间  单位秒
	 * @param key
	 * @param value
	 * @param expried
	 */
	public void set(String key, String value, long expried);
	
	/**
	 * 
	 * @param prefix 前缀
	 * @param name
	 * @param value
	 * @param expried 过期时间
	 */
	public void set(String prefix, String name, String value, long expried);
	
	/**
	 * 缓存对象
	 * @param key
	 * @param o
	 */
	public void set(String key, Object o);
	
	/**
	 * 
	 * @param prefix 前缀
	 * @param name
	 * @param o
	 */
	public void set(String prefix, String name, Object o);
	
	/**
	 * 缓存对象并设置失效时间 单位秒
	 * @param key
	 * @param o
	 * @param expired
	 */
	public void set(String key, Object o, long expired);
	
	/**
	 * 
	 * @param prefix 前缀
 	 * @param name
	 * @param o
	 * @param expired
	 */
	public void set(String prefix, String name, Object o, long expired); 
	
	/**
	 * 
	 * @param prefix 前缀
	 * @param name
	 * @param value
	 * @param flag 是否需要持久化  
	 */
	public void set(String prefix, String name, String value, boolean flag);
	
	/**
	 * 
	 * @param prefix 前缀
	 * @param name
	 * @param Object
	 * @param flag 是否需要持久化  
	 */
	public void set(String prefix, String name, Object o, boolean flag);
	
	/**
	 * 删除缓存
	 * @param key
	 * @return 
	 */
	public void  del(String key);
	
	/**
	 * 删除
	 * @param prefix
	 * @param name
	 */
	public void del(String prefix, String name);
	
	
	/**
	 * 
	 * @param prefix
	 * @param name
	 * @return
	 */
	public  String  get(String prefix, String name);
	
	/**
	 * get
	 * @param key
	 * @return
	 */
	public  String get(String key);
	
	
	
}
