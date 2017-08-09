package com.ssm.dao;

import com.ssm.model.Project;

import java.util.List;
import java.util.Map;

public interface ProjectMapper {
    int deleteByPrimaryKey(String id);

    int insert(Project record);

    int selectcount();

    int insertSelective(Project record);

    Project selectByPrimaryKey(String id);

    List<Project> selectAll();

    List<Project> selectAllLimit(Map map);

    int updateByPrimaryKeySelective(Project record);

    int updateByPrimaryKey(Project record);
}