<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <title>主页</title>
    <link href="/js/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
    <script src="/js/jquery-1.11.2.min.js"></script>
    <script src="/js/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="/js/model/projectanduser.js"></script>
    <link href="/css/index.css" rel="stylesheet" />
    <link href="/css/header.css" rel="stylesheet" />
    <#include "fanye.ftl">
</head>
<body>
<div class="container">
    <header id="header" class="header">
        <nav class="navbar navbar-default">
            <div  class="title"><span class="glyphicon glyphicon-magnet">个人案例项目导航</span></div>
            <button  type="button" class="navbar-toggle btn-mobilemenu"><span class="txt">MENU</span><span class="bars"><span class="icon-bar icon-bar1"></span><span class="icon-bar icon-bar2"></span><span class="icon-bar icon-bar3"></span></span></button>
            <div class="navlinks">
                <div class="links"><a href="/user/projectlist/1/5"><span>项目管理</span><span>项目管理</span></a></div>
                <div class="links"><a href="/user/userlist/1/5"><span>用户管理</span><span>用户管理</span></a></div>
                <div class="links logout"><a href="/user/logout"><span>注销</span><span>注销</span></a></div>
            </div>
        </nav>
        <h1 class="mobile-welcome">Hello</h1>
        <div class="navbar-mobile">
            <ul class="header_nav">
                <li><a href="/user/projectlist">项目管理</a></li>
                <li><a href="/user/userlist">用户管理</a></li>
                <li><a href="/user/logout">注销</a></li>
            </ul>
        </div>
    </header>
    <div id="saveModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form method="post" class="form-horizontal" id="projectform">
                    <div class="modal-header">项目编辑</div>
                    <div class="modal-body">
                        <input id="projectId" type="hidden"/>
                        <div class="form-group">
                            <label for="projectName" class="col-sm-2 control-label">项目名称</label>
                            <div class="col-sm-10">
                                <input id="projectName" type="text" name="projectname" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="projectHref" class="col-sm-2 control-label">项目地址</label>
                            <div class="col-sm-10">
                                <input id="projectUrl" type="text" name="projecturl" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="projectSummary" class="col-sm-2 control-label">项目简介</label>
                            <div class="col-sm-10">
                                <textarea id="projectDesc"  name="projectdesc" class="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
                        <button type="button" class="btn btn-success" id="projectformsbuit">提交</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="page-header clearfix">
            <h1 style="line-height:34px" class="navbar-left">项目管理</h1>
            <div class="navbar-right"><a id="goSave" class="btn btn-primary">新增</a></div>
        </div>
    </div>
    <div class="row">
        <table class="table table-hover table-bordered">
            <thead>
            <tr>
                <th style="width: 10%;">项目名称</th>
                <th style="width: 10%;">项目地址</th>
                <th style="width: 25%;">项目简介</th>
                <th style="width: 15%;">录入时间</th>
                <th style="width: 15%;">修改时间</th>
                <th style="width: 15%;">操作</th>
            </tr>
            </thead>
            <tbody></tbody>
            <tbody>
                <#list projects as project >
                <tr>
                <td>${project.projectname!}</td>
                <td><a target="_blank">${project.projecturl!}</a></td>
                <td>${project.projectdesc!}</td>
                <td>${(project.projectcreatetime?string("yyyy-MM-dd HH:mm:ss"))!}</td>
                <td>${(project.projectupdatetime?string("yyyy-MM-dd HH:mm:ss"))!}</td>
                <td>
                    <button type="button"  class="btn btn-primary update project" projectid="${project.id!}">编辑</button>
                    <button type="button"  class="btn btn-danger del project" projectid="${project.id!}">删除</button>
                </td>
                </tr>
                </#list>
            </tbody>
        </table>
    </div>
    <div class="row">
        <ul class="pagination navbar-right">
            <#if (page!=1&&page>=counts)>
                <li><a href="${ctx}/user/projectlist/${page-1}/${pagesize}"><span>«</span></a></li>
                <li><a>${page}</a></li>
                <li class="disabled"><a href=""><span>»</span></a></li>
            </#if>

            <#if (page!=1&&page<counts)>
                <li><a href="${ctx}/user/projectlist/${page-1}/${pagesize}"><span>«</span></a></li>
                <li><a>${page}</a></li>
                <li><a href="${ctx}/user/projectlist/${page+1}/${pagesize}"><span>»</span></a></li>
            </#if>

            <#if (page==1&&page<counts)>
                <li class="disabled"><a href=""><span>«</span></a></li>
                <li><a>${page}</a></li>
                <li><a href="${ctx}/user/projectlist/${page+1}/${pagesize}"><span>»</span></a></li>
            </#if>
        </ul>
    </div>
</div>
<#--<@greet/>-->
<#--${myname}-->
<#--<#assign base=request.contextPath/>-->
<#--------${base}-->
<#--------${ctx}-->
</body>
</html>

<#--$('#saveModal').modal("show"); $('#saveModal').modal("hide"); 控制编辑层的弹出-->