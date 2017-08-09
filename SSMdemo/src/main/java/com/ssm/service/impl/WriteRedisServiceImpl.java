package com.ssm.service.impl;

import com.alibaba.fastjson.JSON;
import com.ssm.service.WriteRedisService;
import com.ssm.util.ConstDef;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service("writeRedisService")
public class WriteRedisServiceImpl implements WriteRedisService {

	@Autowired
	 private static RedisTemplate<String, String> writeRedisTemplate; 
	
	public void set(String key, String value) {
		writeRedisTemplate.opsForValue().set(key, value);
		 //默认过期时间1小时
		writeRedisTemplate.expire(key, ConstDef.DEFAULT_EXPIRED_TIME, TimeUnit.SECONDS);
	}

	@Override
	public void set(String key, String value, long expried) {
		writeRedisTemplate.opsForValue().set(key, value);
		writeRedisTemplate.expire(key, expried, TimeUnit.SECONDS);
	}

	@Override
	public void set(String key, Object o) {
		writeRedisTemplate.opsForValue().set(key, JSON.toJSONString(o));
		writeRedisTemplate.expire(key, ConstDef.DEFAULT_EXPIRED_TIME, TimeUnit.SECONDS);
		
	}

	@Override
	public void set(String key, Object o, long expired) {
		writeRedisTemplate.opsForValue().set(key, JSON.toJSONString(o));
		writeRedisTemplate.expire(key,expired, TimeUnit.SECONDS);
	}
	
	@Override
	public void set(String prefix, String name, String value) {
		writeRedisTemplate.opsForValue().set(prefix+name, value);
		writeRedisTemplate.expire(prefix+name, ConstDef.DEFAULT_EXPIRED_TIME, TimeUnit.SECONDS);
	}

	@Override
	public void set(String prefix, String name, String value, long expried) {
		writeRedisTemplate.opsForValue().set(prefix+name, value);	
		writeRedisTemplate.expire(prefix+name, expried, TimeUnit.SECONDS);
	}

	@Override
	public void set(String prefix, String name, Object o) {
		writeRedisTemplate.opsForValue().set(prefix+name, JSON.toJSONString(o));
		writeRedisTemplate.expire(prefix+name, ConstDef.DEFAULT_EXPIRED_TIME, TimeUnit.SECONDS);
	}

	@Override
	public void set(String prefix, String name, Object o, long expired) {
		writeRedisTemplate.opsForValue().set(prefix+name, JSON.toJSONString(o));
		writeRedisTemplate.expire(prefix+name, expired, TimeUnit.SECONDS);
	}
	
	@Override
	public void set(String prefix, String name, String value, boolean flag) {
		//后期替换为set(String key, String value, boolean flag)
		writeRedisTemplate.opsForValue().set(prefix+name, value);
		
	}

	@Override
	public void set(String prefix, String name, Object o, boolean flag) {
		//后期替换为set(String key, String value, boolean flag)
		writeRedisTemplate.opsForValue().set(prefix+name, JSON.toJSONString(o));
	}
	
	@Override
	public void del(String key) {
		writeRedisTemplate.delete(key);
	}
	
	@Override
	public void del(String prefix, String name) {

		writeRedisTemplate.delete(prefix+name);
	}

	@Override
	public String  get(String prefix, String name) {
		return writeRedisTemplate.opsForValue().get(prefix+name);
	}

	@Override
	public String get(String key) {
		
		return writeRedisTemplate.opsForValue().get(key);
	}

	public static RedisTemplate<String, String> getWriteRedisTemplate() {
		return writeRedisTemplate;
	}

	public static void setWriteRedisTemplate(
			RedisTemplate<String, String> writeRedisTemplate) {
		WriteRedisServiceImpl.writeRedisTemplate = writeRedisTemplate;
	}

	
}
