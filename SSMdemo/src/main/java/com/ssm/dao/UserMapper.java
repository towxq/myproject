package com.ssm.dao;

import com.ssm.model.User;

import java.util.List;
import java.util.Map;

public interface UserMapper {
    int deleteByPrimaryKey(String id);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(String id);

    User selectByUsername(String username);

    List<User> selectAllUser(Map map);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    int selectusercount();
}