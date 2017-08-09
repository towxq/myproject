package com.ssm.common.redis;

import com.alibaba.fastjson.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;

import java.util.concurrent.TimeUnit;

/**
 * Redis 缓存工具类
 * @author wxq
 *
 */
public class RedisCacheUtil {
	
	@Autowired
	 private static RedisTemplate<String, String> redisTemplate;  
	
	
	/**
	 * set String
	 * @param key
	 * @param value
	 */
	public static void  set(String key,String value){
		
		 redisTemplate.opsForValue().set(key, value);
	}
	
	/**
	 * set String 设置失效时间  单位秒
	 * @param key
	 * @param value
	 * @param expried
	 */
	public static void set(String key,String value,long expried){
		
		redisTemplate.opsForValue().set(key, value);
		redisTemplate.expire(key, expried, TimeUnit.SECONDS);
	}
	
	
	/**
	 * 缓存对象
	 * @param key
	 * @param o
	 */
	public static void set(String key, Object o){
		
		redisTemplate.opsForValue().set(key, JSON.toJSONString(o));
	}
	
	/**
	 * 缓存对象并设置失效时间 单位秒
	 * @param key
	 * @param o
	 * @param expired
	 */
	public static void set(String key, Object o, long expired){
		
		redisTemplate.opsForValue().set(key, JSON.toJSONString(o));
		redisTemplate.expire(key,expired, TimeUnit.SECONDS);
	}
	
	/**
	 * 获取缓存对象
	 * @param key
	 * @param clazz
	 * @return
	 */
	public static <T> T get(String key, Class<T> clazz){
		
		return  JSON.parseObject(redisTemplate.opsForValue().get(key), clazz);
	}
	
	
	
	
	/**
	 * 删除缓存
	 * @param key
	 */
	public static void del(String key){
		
		redisTemplate.delete(key);
	}
	
	/**
	 * 判断当前key值是否存在
	 * @param key
	 */
	public static boolean hasKey(String key){
		
		return redisTemplate.hasKey(key);
	}

	/**
	 * get
	 * @param key
	 * @return
	 */
	public static String get(String key){
		
		return redisTemplate.opsForValue().get(key);
	}
	
	
	public static RedisTemplate<String, String> getRedisTemplate() {
		return redisTemplate;
	}

	public static void setRedisTemplate(RedisTemplate<String, String> redisTemplate) {
		RedisCacheUtil.redisTemplate = redisTemplate;
	}
	
	

}
