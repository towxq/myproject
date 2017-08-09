package com.ssm.model;

import java.util.Date;

public class User {
    private String id;

    private String username;

    private String password;

    private String telnumber;

    private Date createtime;

    private String userrole;

    public User(String id, String username, String password, String telnumber, Date createtime,String userrole) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.telnumber = telnumber;
        this.createtime = createtime;
        this.userrole = userrole;
    }

    public User() {
        super();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getTelnumber() {
        return telnumber;
    }

    public void setTelnumber(String telnumber) {
        this.telnumber = telnumber == null ? null : telnumber.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public String getUserrole() {
        return userrole;
    }

    public void setUserrole(String userrole) {
        this.userrole = userrole;
    }
}