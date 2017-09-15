package com.ssm.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Properties;

/**
 * Created by 01210367 on 2017/9/11.
 */
public class WeChatUtil {
    private static Properties prop = new Properties();
    static {
        BufferedReader br = null;
        try {
            br = new BufferedReader(new InputStreamReader(
                    WeChatUtil.class.getResourceAsStream("/wechat.properties"), "utf-8"));
            prop.load(br);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                br.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static String getCodeUrl() throws UnsupportedEncodingException {
        return String.format("https://open.weixin.qq.com/connect/oauth2/authorize?",prop.getProperty("appID"),URLEncoder.encode("/freshwelfare/wechatlogin","utf-8"));
    }
}
