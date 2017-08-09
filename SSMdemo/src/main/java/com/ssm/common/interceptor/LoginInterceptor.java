package com.ssm.common.interceptor;

import com.ssm.service.ReadRedisService;
import com.ssm.service.WriteRedisService;
import com.ssm.util.ConstDef;
import com.ssm.util.CookieUtil;
import org.apache.log4j.Logger;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

/**
 * Created by 01210367 on 2017/7/19.
 */
public class LoginInterceptor extends HandlerInterceptorAdapter {

    @Resource(name = "readRedisService")
    private ReadRedisService readRedisService;

    @Resource(name= "writeRedisService")
    private WriteRedisService writeRedisService;

    private Logger logger = Logger.getLogger(LoginInterceptor.class);

    /**
     * handler 调用前处理
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String relativeUrl = request.getRequestURI().toString();
        String sessionId = CookieUtil.getCookieValue(ConstDef.SYSTEM_SEESION_NAME, request);
        // 有不再创建
        if (relativeUrl.startsWith("/user/login")){
            request.setAttribute("sessionId", sessionId);
            return super.preHandle(request, response, handler);
        }
        if (sessionId != null) {
            if (readRedisService.get(sessionId)==null){
                response.sendRedirect(request.getContextPath());
                return false;
            }
            logger.error("sessionId"+sessionId);
            request.setAttribute("sessionId", sessionId);
            return super.preHandle(request, response, handler);
        }
        sessionId = UUID.randomUUID().toString();
        Cookie cookie = new Cookie(ConstDef.SYSTEM_SEESION_NAME, sessionId);
        request.setAttribute("sessionId", sessionId);
        cookie.setPath("/");
        response.addCookie(cookie);
        logger.info("sessionId"+sessionId);
        logger.debug("sessionId"+sessionId);
        logger.error("sessionId"+sessionId);
        return super.preHandle(request, response, handler);
    }

}
