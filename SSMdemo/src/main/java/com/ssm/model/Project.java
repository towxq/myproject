package com.ssm.model;

import java.util.Date;

public class Project {
    private String id;

    private String projectname;

    private String projecturl;

    private String projectdesc;

    private Date projectcreatetime;

    private Date projectupdatetime;

    private String bgColor;

    public Project(String id, String projectname, String projecturl, String projectdesc, Date projectcreatetime, Date projectupdatetime,String bgColor) {
        this.id = id;
        this.projectname = projectname;
        this.projecturl = projecturl;
        this.projectdesc = projectdesc;
        this.projectcreatetime = projectcreatetime;
        this.projectupdatetime = projectupdatetime;
        this.bgColor = bgColor;
    }

    public Project() {
        super();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getProjectname() {
        return projectname;
    }

    public void setProjectname(String projectname) {
        this.projectname = projectname == null ? null : projectname.trim();
    }

    public String getProjecturl() {
        return projecturl;
    }

    public void setProjecturl(String projecturl) {
        this.projecturl = projecturl == null ? null : projecturl.trim();
    }

    public String getProjectdesc() {
        return projectdesc;
    }

    public void setProjectdesc(String projectdesc) {
        this.projectdesc = projectdesc == null ? null : projectdesc.trim();
    }

    public Date getProjectcreatetime() {
        return projectcreatetime;
    }

    public void setProjectcreatetime(Date projectcreatetime) {
        this.projectcreatetime = projectcreatetime;
    }

    public Date getProjectupdatetime() {
        return projectupdatetime;
    }

    public void setProjectupdatetime(Date projectupdatetime) {
        this.projectupdatetime = projectupdatetime;
    }

    public String getBgColor() {
        return bgColor;
    }

    public void setBgColor(String bgColor) {
        this.bgColor = bgColor;
    }
}