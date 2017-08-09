package com.ssm.service.impl;

import com.alibaba.fastjson.JSON;
import com.ssm.service.ReadRedisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("readRedisService")
public class ReadRedisServiceImpl implements ReadRedisService {

	@Autowired
	 private static RedisTemplate<String, String> readRedisTemplate; 
	
	

	@Override
	public <T> T get(String key, Class<T> clazz) {
		return  JSON.parseObject(readRedisTemplate.opsForValue().get(key), clazz);
	}


	@Override
	public boolean hasKey(String key) {
		return readRedisTemplate.hasKey(key);
	}

	@Override
	public String get(String key) {
		return readRedisTemplate.opsForValue().get(key);
	}


	
	@Override
	public <T> T get(String prefix, String name, Class<T> clazz) {
		
		return JSON.parseObject(readRedisTemplate.opsForValue().get(prefix + name), clazz);
	}


	@Override
	public boolean hasKey(String prefix, String name) {
		
		
		return readRedisTemplate.hasKey(prefix+name);
	}

	@Override
	public String get(String prefix, String name) {
		return readRedisTemplate.opsForValue().get(prefix+name);
	}

	@Override
	public <T> List<T> getList(String key, Class<T> clazz) {
		
	
		return JSON.parseArray(readRedisTemplate.opsForValue().get(key), clazz);
	}


	public static RedisTemplate<String, String> getReadRedisTemplate() {
		return readRedisTemplate;
	}


	public static void setReadRedisTemplate(
			RedisTemplate<String, String> readRedisTemplate) {
		ReadRedisServiceImpl.readRedisTemplate = readRedisTemplate;
	}
	
	

	
}
