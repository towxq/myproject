package com.ssm.controller;

import com.ssm.util.WeChatUtil;
import org.omg.CORBA.Request;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;

/**
 * Created by 01210367 on 2017/9/11.
 */
@Controller
@RequestMapping("wechatlogin")
public class wechatController {

    //获取微信返回的code
    @RequestMapping("getlogincode")
    public String getWechatLoginCode() throws UnsupportedEncodingException {
        String url = WeChatUtil.getCodeUrl();
        return "redirect:"+url;
    }

    @RequestMapping(value = "getlogincode", method = RequestMethod.GET)
    public String dowechatlogin(HttpServletRequest request, HttpServletResponse response, String code, ModelMap model){
        return "";
    }
}
