<!DOCTYPE html>
<html>
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
    <link href="/css/index.css" rel="stylesheet" />
    <link href="/css/header.css" rel="stylesheet" />
</head>
<body>
<div id="index">
    <header id="header"  class="header">
        <nav class="navbar navbar-default">
            <div class="title" ><span class="glyphicon glyphicon-magnet">个人案例项目导航</span></div>
            <button  type="button" class="navbar-toggle btn-mobilemenu"><span class="txt">菜单</span><span class="bars"><span class="icon-bar icon-bar1"></span><span class="icon-bar icon-bar2"></span><span class="icon-bar icon-bar3"></span></span></button>
            <div  class="navlinks">
                <div class="links"><a href="/user/projectlist/1/5"><span>项目管理</span><span>项目管理</span></a></div>
                <div class="links"><a href="/user/userlist/1/5"><span>用户管理</span><span>用户管理</span></a></div>
                <div class="links logout"><a ><span>注销</span><span>注销</span></a></div>
            </div>
        </nav>
        <h1 class="mobile-welcome">Hello</h1>
        <div  class="navbar-mobile">
            <ul class="header_nav">
                <li ><a >project manage</a></li>
                <li ><a >user manage</a></li>
                <li><a>注销</a></li>
            </ul>
        </div>
    </header>
    <div  class="pager">
        <div class="next-button glyphicon next loading"></div>
    </div>

    <div id="nav-panels"  class="panels">
        <#list projects as project>
        <a target="_blank"  class="panel ${project.bgColor!}">
            <div class="content">
                <div class="fixed"><span class="small">${(project.projectcreatetime?string("yyyy-MM-dd HH:mm:ss"))!}</span>
                    <h2>${project.projectname}</h2><span class="excerpt">
            <p>${project.projectdesc}</p></span>
                </div>
            </div>
            <div class="color">
                <div class="footer"></div>
            </div>
        </a>
        </#list>
        <div class="next-page glyphicon"></div>
    </div>

</div>
</body>
</html>
