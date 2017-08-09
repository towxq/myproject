package com.ssm.service.impl;

import com.ssm.dao.ProjectMapper;
import com.ssm.model.Project;
import com.ssm.service.ProjectService;
import freemarker.core.ReturnInstruction;
import org.omg.CORBA.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.Object;
import java.util.*;

/**
 * Created by 01210367 on 2017/7/31.
 */
@Service("projectService")
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectMapper projectMapper;

    @Override
    public List<Project> getAllProject() {
        return projectMapper.selectAll();
    }

    @Override
    public int selectcount() {
        return projectMapper.selectcount();
    }

    @Override
    public List<Project> getAllProject(int page, int pagesize) {
        Map<String,Object> map = new HashMap<String, Object>();
        if (page==1){
            page=0;
        }else {
            page=(page-1)*pagesize;
        }
        map.put("page",page);
        map.put("pagesize",pagesize);
        return projectMapper.selectAllLimit(map);
    }

    @Override
    public boolean insert(Project project) {
        project.setId(UUID.randomUUID().toString());
        project.setProjectcreatetime(new Date());
        project.setProjectupdatetime(new Date());
        int insertsum = projectMapper.insert(project);
        if (insertsum!=0){
            return true;
        }else {
            return false;
        }
    }

    @Override
    public boolean delproject(String projectid) {
        int delsum = projectMapper.deleteByPrimaryKey(projectid);
        if (delsum!=0){
            return true;
        }else {
            return false;
        }
    }


}
