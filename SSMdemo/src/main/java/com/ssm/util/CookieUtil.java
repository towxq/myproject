package com.ssm.util;

import com.alibaba.fastjson.JSON;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CookieUtil {

	/**
	 *
	 * 依据cookie的名称得到cookie 内的Object
	 *
	 */
	public static <T> T getCookieValue(String cookieName, Cookie[] cookies, Class<T> clazz) {
		Cookie cookie = getCookie(cookieName, cookies);
		if (cookie == null || cookies == null) {
			return null;
		}
		return JSON.parseObject(cookie.getValue(), clazz);
	}

	/**
	 *
	 * 依据cookie的名称得到cookie 内的Object
	 *
	 */
	public static <T> T getCookieValue(String cookieName, HttpServletRequest request, Class<T> clazz) {
		return getCookieValue(cookieName, request.getCookies(), clazz);
	}

	/**
	 *
	 * 依据cookie的名称得到cookie value
	 */
	public static String getCookieValue(String cookieName, Cookie[] cookies) {

		Cookie cookie = getCookie(cookieName, cookies);
		if (cookie == null || cookies == null) {
			return null;
		}
		return cookie.getValue();
	}

	/**
	 *
	 * 从请求内得到对应名称的cookie value
	 */
	public static String getCookieValue(String cookieName, HttpServletRequest request) {
		return getCookieValue(cookieName, request.getCookies());
	}

	/**
	 *
	 * 依据cookie的名称从请求内得到cookie
	 *
	 */
	public static Cookie getCookie(String cookieName, HttpServletRequest request) {
		return getCookie(cookieName, request.getCookies());
	}

	/**
	 *
	 * 依据cookie的名称得到cookie
	 */
	public static Cookie getCookie(String cookieName, Cookie[] cookies) {

		if (cookieName == null || cookies == null || cookies.length == 0) {
			return null;
		}
		for (Cookie cookie : cookies) {
			if (cookie.getName().equals(cookieName)) {
				return cookie;
			}
		}
		return null;
	}

	/**
	 *
	 * 删除cookie
	 */
	public static void delCookie(Cookie cookie, String path, String domain, HttpServletResponse resp) {
		if (path != null && !"".equals(path)) {
			cookie.setPath(path);
		}
		if (domain != null && !"".equals(domain)) {
			cookie.setDomain(domain);
		}
		cookie.setMaxAge(0);
		resp.addCookie(cookie);
	}

	/**
	 * 按照名称删除cookie
	 */
	public static void delCookie(String name,String path,String domain,HttpServletRequest request,HttpServletResponse resp){
		Cookie cookie = getCookie(name, request);
		if(cookie == null){
			cookie = new Cookie(name,null);
		}
		
		if (path != null && !"".equals(path)) {
			cookie.setPath(path);
		}
		if (domain != null && !"".equals(domain)) {
			cookie.setDomain(domain);
		}
		cookie.setMaxAge(0);
		resp.addCookie(cookie);
	}
	/**
	 *
	 * 添加cookie
	 *
	 */
	public static void addCookie(String cookieName, String value, String path, String domain, Integer maxAge,
			HttpServletResponse resp) {
		Cookie cookie = new Cookie(cookieName, value);
		if (path != null && !"".equals(path)) {
			cookie.setPath(path);
		}
		if (domain != null && !"".equals(domain)) {
			cookie.setDomain(domain);
		}
		if(maxAge != 0){
			cookie.setMaxAge(maxAge);
		}
		resp.addCookie(cookie);
	}

	/**
	 * 获取cookies json格式
	 * @param request
	 * @return
	 */
	public static String getCookieJson(HttpServletRequest request){
		Cookie[] cookies = request.getCookies();
		String cookieJson = JSON.toJSONString(cookies);
		return cookieJson;
	}
}
