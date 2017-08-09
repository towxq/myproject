package com.ssm.service;

import com.ssm.model.Project;

import java.util.List;

/**
 * Created by 01210367 on 2017/7/31.
 */
public interface ProjectService {
    public List<Project> getAllProject();

    public boolean insert(Project project);

    public boolean delproject(String projectid);

    public int selectcount();

    public List<Project> getAllProject(int page, int pagesize);
}
