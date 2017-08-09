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
    <link href="/js/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
    <script src="/js/jquery-1.11.2.min.js"></script>
    <script src="/js/bootstrap/dist/js/bootstrap.min.js"></script>
    <title>登录</title>
    <link href="/css/login.css" rel="stylesheet" />
    <script src="/js/tagcanvas.min.js"></script>
</head>
<body>
<div class="container">
    <section id="content">
        <div class="filter"></div>
        <form id="loginFrom" autocomplete="off">
            <h1>登录</h1>
            <div class="glyphicon glyphicon-user">
                <input id="username" name="username" type="text" autocomplete="off" placeholder="账号" class="input-text" />
            </div>
            <div class="glyphicon glyphicon-lock">
                <input id="password" name="password" type="password" autocomplete="off" placeholder="密码" class="input-text" />
            </div>
        </form>
        <div class="button">
            <input id="submitBtn" type="button" value="登录" class="btn btn-primary" />
        </div>
    </section>
</div>
<div class="taglist">
    <canvas id="myCanvas"></canvas>
    <div id="tags">
        <a href="javascript:;">想看么</a>
        <a href="javascript:;">就不给你看</a>
        <a href="javascript:;">想知道里面有啥么</a>
        <a href="javascript:;">你猜</a>
        <a href="javascript:;">登录才能看哦</a>
        <a href="javascript:;">都是个人案例撒</a>
        <a href="javascript:;">不登陆是不能看的哦</a>
        <a href="javascript:;">没有帐号吧</a>
        <a href="javascript:;">没有密码吧</a>
        <a href="javascript:;">跟我要权限啊</a>
        <a href="javascript:;">我就不给你，哈哈</a>
    </div>
</div>
<script>
    $(function(){
        var myCanvas = $("#myCanvas")[0];
        myCanvas.width = $(window).width();
        myCanvas.height = $(window).height();
        TagCanvas.Start('myCanvas', 'tags', {
            textColour: '#FFF',
            shadow:"#FFF",
            shadowBlur:5,
            shadowOffset:[2,1],
            reverse: true,
            depth: 0.8,
            dragControl: true,
            decel:0.95,
            maxSpeed: 0.05,
            initial: [-0.2, 0],
            zoom:1.1
        });
        $("#submitBtn").click(function () {
            var username = $('#username').val();
            var password = $('#password').val();
            if(username==""||password==""){
                alert("用户名和密码不能为空");
                return false;
            }
            $.ajax({
                type: 'POST',
                url: 'user/login',
                data: $("#loginFrom").serialize(),
                success: function (results) {
                    if (results.feedback.feedbackCode == "77779") {
                        alert(results.feedback.feedbackMessage);
                        $(".input-text").val("");
                    }else{
                        window.location.href = "user/index";
                    }
                }
            });
        });
    });
</script>
</body>
</html>