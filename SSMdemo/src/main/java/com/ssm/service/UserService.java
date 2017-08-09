package com.ssm.service;


import com.ssm.model.User;

import java.util.List;

/**
 * Created by 01210367 on 2017/7/19.
 */
public interface UserService {
    public User selectByUsername(String username);

    public List<User> selectAllUser(int page, int pagesize);

    public boolean insertUser(User user);

   public boolean deluser(String userid);

    public int selectusercount();
}
