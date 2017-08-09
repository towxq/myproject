package com.ssm.common.redis;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

import java.util.Set;

/**
 * redis cache
 * @author wxq
 *
 */

public  class RedisCache {

	
	
		private static final String IP = "127.0.0.1"; // ip
	    private static final int PORT = 6379;         // 端口
	    private static final String AUTH="";          // 密码(原始默认是没有密码)
	    private static int   MAX_ACTIVE = 1024;       // 最大连接数
	    private static int   MAX_IDLE = 200;          // 设置最大空闲数
	    private static int   MAX_WAIT = 10000;        // 最大连接时间
	    private static int   TIMEOUT = 3000;         // 超时时间
	    private static boolean BORROW = true;         // 在borrow一个事例时是否提前进行validate操作
	    private static JedisPool pool = null;
	    private static Logger logger = LoggerFactory.getLogger(RedisCache.class);
	
	    static
	    {
	        JedisPoolConfig config = new JedisPoolConfig();
	        config.setMaxTotal(MAX_ACTIVE);
	        config.setMaxIdle(MAX_IDLE);
	        config.setMaxWaitMillis(MAX_WAIT);
	        config.setTestOnBorrow(BORROW);
	        pool = new JedisPool(config, IP, PORT, TIMEOUT);
	    }
	    
	    
	    /**
	     * 获取连接
	     */
	    public static synchronized  Jedis getJedis()
	    {
	        try
	        {
	            if(pool != null)
	            {
	                return pool.getResource();
	            }
	            else
	            {
	                return null;
	            }
	        }
	        catch (Exception e) {
	            logger.info("连接池连接异常");
	            return null;
	        }
	        
	    }
	    
	    /** 
     * 通过key删除（字节） 
     * @param key 
     */  
    @SuppressWarnings("unused")
	private static void del(byte [] key){  
        getJedis().del(key);  
    }  
    /** 
     * 通过key删除 
     * @param key 
     */  
    public static void del(String key){  
        getJedis().del(key);  
    }  
  
    /** 
     * 添加key value 并且设置存活时间(byte) 
     * @param key 
     * @param value 
     * @param liveTime 
     */  
    public static void set(byte [] key,byte [] value,int liveTime){  
        set(key, value);  
        getJedis().expire(key, liveTime);  
    }  
    /** 
     * 添加key value 并且设置存活时间 
     * @param key 
     * @param value 
     * @param liveTime 
     */  
    public static void set(String key,String value,int liveTime){  
        set(key, value);  
        getJedis().expire(key, liveTime);  
    }  
    /** 
     * 添加key value 
     * @param key 
     * @param value 
     */  
    public static void set(String key,String value){  
        getJedis().set(key, value);  
    }  
    /**添加key value (字节)(序列化) 
     * @param key 
     * @param value 
     */  
    public static void set(byte [] key,byte [] value){  
        getJedis().set(key, value);  
    }  
    /** 
     * 获取redis value (String) 
     * @param key 
     * @return 
     */  
    public static String get(String key){  
        String value = getJedis().get(key);  
        return value;  
    }  
    /** 
     * 获取redis value (byte [] )(反序列化) 
     * @param key 
     * @return 
     */  
    public static byte[] get(byte [] key){  
        return getJedis().get(key);  
    }  
  
    /** 
     * 通过正则匹配keys 
     * @param pattern 
     * @return 
     */  
    public static Set<String> keys(String pattern){  
        return getJedis().keys(pattern);  
    }  
  
    /** 
     * 检查key是否已经存在 
     * @param key 
     * @return 
     */  
    public static boolean exists(String key){  
        return getJedis().exists(key);  
    }  
//    /** 
//     * 清空redis 所有数据 
//     * @return 
//     */  
//    public static String flushDB(){  
//        return getJedis().flushDB();  
//    }  
    /** 
     * 查看redis里有多少数据 
     */  
    public static long dbSize(){  
        return getJedis().dbSize();  
    }  
    /** 
     * 检查是否连接成功 
     * @return 
     */  
    public static String ping(){  
        return getJedis().ping();  
    }  
    /** 
     * 获取一个jedis 客户端 
     * @return 
     */  
//    private static Jedis getJedis(){  
//        if(jedis == null){  
//            return jedisConnectionFactory.getShardInfo().createResource();  
//        }  
//        return jedis;  
//    }  
    public RedisCache (){  
  
    }  
//    //操作redis客户端  
//    private static Jedis jedis;  
//    @Autowired  
//    private static JedisConnectionFactory jedisConnectionFactory;  
}  
