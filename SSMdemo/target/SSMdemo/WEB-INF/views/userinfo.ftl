<#setting classic_compatible=true>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>用户</title>
    <style type="text/css">
        .STYLE1 {
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            font-size: 36px;
            color: #FF0000;
        }
        .STYLE13 {font-size: 24}
        .STYLE15 {font-family: Arial, Helvetica, sans-serif; font-size: 24px; }
    </style>
</head>

<body>
<table width="1500" height="600" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td width="500" height="200">&nbsp;</td>
        <td width="500" height="200" align="center"><div align="center"><span class="STYLE1">User List 用户 </span></div></td>
        <td width="500" height="200">&nbsp;</td>
    </tr>
    <tr>
        <td width="500" height="200">&nbsp;</td>
        <td width="500" height="200">
            <table width="500" height="200" border="1" cellpadding="0" cellspacing="0">
                <tr>
                    <td width="160" height="65" align="center"><span class="STYLE15">ID</span></td>
                    <td width="160" height="65" align="center"><span class="STYLE15">Username</span></td>
                    <td width="160" height="65" align="center"><span class="STYLE15">Password</span></td>
                </tr>
                <tr>
                    <td width="160" height="65" align="center"><span class="STYLE15">${user.id}</span></td>
                    <td width="160" height="65" align="center"><span class="STYLE15">${user.username}</span></td>
                    <td width="160" height="65" align="center"><span class="STYLE15">${user.password}</span></td>
                </tr>
            </table>
        </td>
        <td width="500" height="200">&nbsp;</td>
    </tr>
    <tr>
        <td width="500" height="200">&nbsp;</td>
        <td width="500" height="200">&nbsp;</td>
        <td width="500" height="200">&nbsp;</td>
    </tr>
</table>
</body>
</html>