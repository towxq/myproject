package com.ssm.service.impl;

import com.ssm.dao.UserMapper;
import com.ssm.model.User;
import com.ssm.service.UserService;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

/**
 * Created by 01210367 on 2017/7/19.
 */
@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User selectByUsername(String username) {
        return userMapper.selectByUsername(username);
    }

    @Override
    public List<User> selectAllUser(int page, int pagesize) {
        Map<String,Object> map = new HashMap<String, Object>();
        if (page==1){
            page=0;
        }else {
            page=(page-1)*pagesize;
        }
        map.put("page",page);
        map.put("pagesize",pagesize);
        return userMapper.selectAllUser(map);
    }

    @Override
    public int selectusercount() {
        return userMapper.selectusercount();
    }

    @Override
    public boolean insertUser(User user) {
        user.setId(UUID.randomUUID().toString());
        user.setCreatetime(new Date());
        user.setPassword(DigestUtils.md5Hex(user.getPassword()));
        int insertsum = userMapper.insert(user);
        if (insertsum!=0){
            return true;
        }else {
            return false;
        }
    }

    @Override
    public boolean deluser(String userid) {
        int delsum = userMapper.deleteByPrimaryKey(userid);
        if (delsum!=0){
            return true;
        }else {
            return false;
        }
    }


}
