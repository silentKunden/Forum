<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%
	response.setCharacterEncoding("utf-8");
	request.setCharacterEncoding("utf-8");
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
	String socketPath = request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <link href="<%=basePath %>bootstrap-3.3.5-dist/css/bootstrap.min.css" rel="stylesheet">
		<link href="<%=basePath %>css/head.css" rel="stylesheet"> 
    </head>
    <script src="<%=basePath %>bootstrap-3.3.5-dist/js/jquery-1.11.3.min.js"></script>
    <script src="<%=basePath %>bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="<%=basePath %>js/head.js">	</script>
    <body>
    <nav class="navbar navbar-inverse navbar-fixed-top">   
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <img alt="Brand" src="image/free.jpg" height="46" width="104">

    </div>
		<p class="navbar-text">    </p>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
      	<li><a class="navbar-brand" href="#">首页</a></li>
        <li><a href="#">学习</a></li>
        <li><a href="#">话题</a></li>
        <li><a href="#">笔记</a></li>
        <li><a href="#">分享</a></li>
        <li><a href="#">下载</a></li>
        
      </ul>
     
      <c:if test="${username!=null}">
      <div class="nav-right-btn">

		<div class="nav-search">
			<span class="glyphicon glyphicon-search navbar-text" id="searchid" aria-hidden="true"></span>			
		</div>

		<div class="form-group-search">
          <input type="text" class="form-control" placeholder="输入关键字">
        </div>

		<div class="nav-message-u" data-container="body" data-html="true" data-toggle="popover" data-placement="bottom" data-trigger="hover" data-title="<a href='#'>消息</a>" data-content="你暂时没新的消息">
      		<span class="glyphicon glyphicon-envelope navbar-text" aria-hidden="true"></span>
      	</div>
		<div class="nav-user-u" class="nav-message" data-html="true" data-placement="auto" data-toggle="popover" data-placement="bottom" data-trigger="hover" >
      		<span class="glyphicon glyphicon-user navbar-text" aria-hidden="true"></span>
      	</div>

	  </div>
	  </c:if>
	  <c:if test="${username==null}">
	  <div class="nav-right-btn">

		<div class="nav-search">
			<span class="glyphicon glyphicon-search navbar-text" id="searchid" aria-hidden="true"></span>			
		</div>

		<div class="form-group-search">
          <input type="text" class="form-control" placeholder="输入关键字">
        </div>

		<div class="nav-message" id="login_font" >
      		<span class="glyphicon" id="searchid" aria-hidden="true">登陆</span>
      	</div>
		<div class="nav-user" id="register_font">
      		<span class="glyphicon" id="searchid" aria-hidden="true">注册</span>
      	</div>

	  </div>
	  
	  </c:if>
    </div>
  </div>
</nav>


					<%--登录框 --%> 
					
					
	<div class="form-group login">
	
		<div class="head-img">
			<img src="<%=basePath%>/images/1.jpg" alt="个人头像" class="img-circle">
			<button id="close" class="close-pos"><span class="glyphicon glyphicon glyphicon-remove"></span></button>
		</div>
	
    	<div class="input-group" id="login-pos">
    		<div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-user"></span></div>
      		<input  type="text" placeholder="  用户名" id="line-height">
    	</div>
    	
    	<div class="input-group" id="register-pos">
    		<div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-lock"></span></div>
      		<input  type="password" placeholder="  密码" id="line-height">
    	</div>
    	
    	<div class="val-pos input-group">
    		<div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-lock"></span></div>
    		<input type="text" name="val" placeholder="验证码" maxlength="5">
    		<img alt="点击换一张" src="">
    	</div>
    	
    	<div class="login-btn">
    		<button><span class="glyphicon glyphicon glyphicon-off"></span></button>
    	</div>
  </div>

    </body>
</html>
