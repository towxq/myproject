$(function(){
    $('#goSave').click(function(){
        $('#saveModal').modal("show");
    });


    $('.title').click(function(){
        window.location.href = "/user/index";
    });

    $('#projectformsbuit').click(function(){
        var projectName = $('#projectName').val();
        var projectUrl =$('#projectUrl').val();
        var projectDesc =$('#projectDesc').val();
        if(projectName==""){
            alert("项目名不能为空！");
            return false;
        }
        if(projectUrl==""){
            alert("项目地址不能为空！");
            return false;
        }
        if(projectDesc==""){
            alert("项目描述不能为空！");
            return false;
        }
        $.ajax({
            type: 'POST',
            url: '/user/addprojrct',
            data: $("#projectform").serialize(),
            success: function (results) {
                $('#saveModal').modal("hide");
                alert(results.feedback.feedbackMessage);
            },
            error: function() {
                alert("失败");
            }
        });
    });

    $('#adduser').click(function(){
        var username = $('#userName').val();
        var password = $('#passWord').val();
        if(username==""){
            alert("用户名不能为空！");
            return false;
        }
        if(password==""){
            alert("密码不能为空！");
            return false;
        }
        $.ajax({
            type: 'POST',
            url: '/user/adduser',
            data: $("#userform").serialize(),
            success: function (results) {
                $('#saveModal').modal("hide");
                alert(results.feedback.feedbackMessage);
            },
            error: function() {
                alert("失败");
            }
        });
    })

    $('.btn.btn-danger.del.project').click(function(){
        var projectid = $(this).attr("projectid");
        $.ajax({
            type: 'POST',
            url: '/user/delproject',
            data: {"projectid":projectid},
            success: function (results) {
                alert(results.feedback.feedbackMessage);
            },
            error: function() {
                alert("失败");
            }
        });
    })

    $('.btn.btn-danger.del.user').click(function(){
        var userid = $(this).attr("userid");
        $.ajax({
            type: 'POST',
            url: '/user/deluser',
            data: {"userid":userid},
            success: function (results) {
                alert(results.feedback.feedbackMessage);
            },
            error: function() {
                alert("失败");
            }
        });
    })

    $('.btn.btn-primary.update.user').click(function(){
        var username = $(this).attr("username");
        $.ajax({
            type: 'POST',
            url: '/user/selectuserbyusername',
            data: {"username":username},
            success: function (results) {
                $('#userRoleupdate').remove();
                $('#newpassword').text("新密码");
                $('#userName').val(results.user.username);
                $('#telnNmber').val(results.user.telnumber);
                $('#saveModal').modal("show");
            },
            error: function() {
                alert("失败");
            }
        });
    })




})
