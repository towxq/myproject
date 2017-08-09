package com.ssm.util;

import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import sun.net.www.http.HttpClient;

import java.util.Map;

public class  JacksonUtil{
	public static void httppost(String url,Map<String,Object> param){
		CloseableHttpClient closeableHttpClient = HttpClients.createDefault();

	}
}