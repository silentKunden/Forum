/**
 * 
 */
//ajax
function getXMLHttpRequest() {
	    var xmlhttp;
	    if (window.XMLHttpRequest) {// code for all new browsers
	        xmlhttp = new XMLHttpRequest();
	    } else if (window.ActiveXObject) {// code for IE5 and IE6
	        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	    }

	    return xmlhttp;

	}
/*
$(function(){
	//登陆框弹出
	$("#login_font").click(function () {
	    $(".hide-center").fadeIn("slow");
	    $(".overCurtain").fadeIn("slow");
	   // alert(createCode());
	   var inpv = $("#form-img-yz");
	   inpv.css("background-img","image/1.jpg","text-align","center");
	   inpv.html(createCode());
	   //alert(inpv);
	    return false;
	})
	//登录框关闭
	$("#close").click(function () {
	    $(".hide-center").fadeOut("slow")
	    $(".overCurtain").fadeOut("slow")
	    
	})
	//注册框关闭
	$("#register-close").click(function() {
	    
	     $(".hide-center-register").fadeOut("slow");
	    $(".overCurtain-register").fadeOut("slow");
	});
	//注册框弹出
	$("#register_font").click(function() {
	    $(".hide-center-register").fadeIn("slow");
	    $(".overCurtain-register").fadeIn("slow");
	    var inpv = $("#form-img-yzm");
		   inpv.css("background-img","image/1.jpg","text-align","center");
		   inpv.html(createCode());

	});
	$("#form-register-rg").click(function() {
	   
	     $(".hide-center").fadeOut("slow")
	    $(".overCurtain").fadeOut("slow")
	     $(".hide-center-register").fadeIn("slow");
	    $(".overCurtain-register").fadeIn("slow");
	    
	});
	//找回密码
	$("#form-register-wp").click(function() {
		window.location.href="http://localhost/freeForumProj/jsp/findPassword.jsp";
		return false;
	});
	//验证码更换
	$("#form-img-yz").click(function() {
		$(this).html(createCode());
	});
	$("#form-img-yzm").click(function() {
		$(this).html(createCode());
	});
	//验证码验证
	$("#form-yz").blur(function() {
		var yzm = $(this)[0];
		//alert(yzm.value);
		if($("#form-img-yz").text()==null||$("#form-img-yz").text()==""){
			$("#error-font").html("请输入验证码");
		}else if(yzm.value.toUpperCase()!=code){			
			$("#error-font").html("验证码错误");
			$("#form-img-yz").html(createCode());
		}
	});
	$("#form-yzm").blur(function() {
		var yzm = $(this)[0];
		//alert(yzm.value);
		if($("#form-img-yzm").text()==null||$("#form-img-yz").text()==""){
			$("#error-font-r").html("请输入验证码");
		}else if(yzm.value.toUpperCase()!=code){			
			$("#error-font-r").html("验证码错误");
			$("#form-img-yzm").html(createCode());
		}
	});
	//登录用户名验证
	$("#form-controlId").blur(function() {
	    var _this = $("#form-controlId");
	    var username = _this.val();
	   // alert(username);
	    var xhr = getXMLHttpRequest();
	    if(username==null||username==""||username==undefined){
	        $("#error-font").html("请输入用户名");
	    }else{
	        xhr.onreadystatechange = function(){
	            if(xhr.readyState==4){
	            	if(xhr.status==200){
	            		//alert(xhr.responseText);
		                if(xhr.responseText=="false"){
		                	$("#error-font").html("用户不存在");    
		                }
	            	}
	            }
	        }

	        xhr.open("get","http://localhost/freeForumProj/checkuserservlet?userName="+username);
	        xhr.send(null);
	    }
	});

	$("#loginpasswordInputId").blur(function(){
	    var pw = $("#loginpasswordInputId").val();
	    var _this = $("#form-controlId");
	    var username = _this.val();
	    var xhr = getXMLHttpRequest();
	    if(pw==undefined||pw==""||pw==null){
	    	$("#error-font").html("请输入密码");
	    }
	});

	$("#BSignIn").click(function(){
	    var pw = $("#loginpasswordInputId").val();
	    var xhr = getXMLHttpRequest();
	    xhr.onreadystatechange = function(){
	            if(xhr.readyState==4){
	                if(xhr.responseText=="true"){
	                    window.location.href="";    
	                }else{
	                	$("#error-font").html("密码错误"); 
	                }
	            }
	        }
	        xhr.open("get","http://localhost/freeForumProj/proveuserservlet?password="+pw+"&username="+username);
	        xhr.send(null);
	});
});



//验证密码
$(function() {
	
	$("#form-controlId-un").blur(function() {
		
	    var _this = $("#form-controlId-un");
	    var username = _this.val();
	   // alert(username);
	    var xhr = getXMLHttpRequest();
	    if(username==null||username==""||username==undefined){
	        $("#error-font-r").html("请输入用户名");
	    }else{
	        xhr.onreadystatechange = function(){
	            if(xhr.readyState==4){
	            	if(xhr.status==200){
	            		//alert(xhr.responseText);
		                if(xhr.responseText=="true"){
		                	$("#error-font-r").html("用户已存在");    
		                }
	            	}
	            }
	        }

	        xhr.open("get","http://localhost/freeForumProj/checkuserservlet?userName="+username);
	        xhr.send(null);
	    }
	});
	$("#loginpasswordInputId-pw").blur(function(){
	    var pw = $("#loginpasswordInputId-pw").val();
	    var _this = $("#form-controlId-un");
	    var username = _this.val();
	    if(pw==undefined||pw==""||pw==null){
	    	$("#error-font-r").html("请输入密码");
	    }
	});
	$("#form-yz-s").blur(function(){
	    var f_pw = $("#form-yz-s").val();
	    var s_pw = $("#loginpasswordInputId-pw").val();
	    var _this = $("#form-controlId-un");
	    var username = _this.val();
	    if(s_pw==undefined||s_pw==""||s_pw==null&_this!=null){
	    	$("#error-font-r").html("再输入密码");
	    }else if(f_pw!=s_pw){
	    	$("#error-font-r").html("俩次密码不一致，请重新输入");
	    }
	});
		//邮箱模式
		function isMail(mail) {
			var remail = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i;
			return remail.test(email);
		}
		
		$("#form-mail").blur(function(){
		    var mail = $("#form-mail").val();
		    if(mail==undefined || mail==""||mail==null){
		    	$("#error-font-r").html("请输入邮箱");
		    }else{
		    	if(!isMail(mail)){
		    		$("#error-font-r").html("请正确输入邮箱");
		    	}
		    }
		});
});

	
	var title_h = '';
	title_h += '<div id="user-bg">';
	title_h += '<img src="image/ico_000.gif" width="150"><br>';
	title_h += '<div class="own-message gyw" title="关于我"><a href="http://localhost/freeForumProj/jsp/userInfo.jsp"><span class="glyphicon glyphicon-home navbar-text"></span></a></div>';
	title_h += '<div class="own-note" title="笔记"><a href="http://localhost/freeForumProj/jsp/userInfo.jsp"><span class="glyphicon glyphicon-folder-open navbar-text"></span></a></div>';
	title_h += '<div class="own-collection" title="收藏夹"><a href="http://localhost/freeForumProj/jsp/userInfo.jsp"><span class="glyphicon glyphicon-star navbar-text"></span></a></div><div></div></div>';
	
	//var content_h = '<input type="button" class="btn btn-default" id="logout" value="注销">';
	var content_h='<div class="logout" title="注销"><a href="http://localhost/freeForumProj/logoutservlet"><span class="glyphicon glyphicon-off navbar-text"></span></a></div>';
	//用户信息弹出
	$(function(){
		 $(".nav-message-u").popover({
				trigger: "manual" , 
				selector: true,
				html: true,
				//template: title_h+content_h
				
			}).on("mouseenter", function () {
	        var _this = this;
	        $(this).popover("show");
	        $(".popover").on("mouseleave", function () {
	            $(_this).popover('hide');
	        });
			}).on("mouseleave", function () {
		        var _this = this;
		        setTimeout(1,function () {
		            if (!$(".popover:hover").length) {
		                $(_this).popover("hide");
		            }
		        }, 300);
		    });
      
		$(".nav-user-u").popover({
			trigger: "manual" , 
			selector: true,
			html: true,
			//template: title_h+content_h
			title:title_h,
			content: content_h
		}).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
      
              
	    }).on("mouseleave", function () {
	        var _this = this;
	        setTimeout(1,function () {
	            if (!$(".popover:hover").length) {
	                $(_this).popover("hide");
	            }
	        }, 300);
	    });
	});
*/
	/*
	 * 	  搜索框弹出
	 */
    $(function(){    
    
    	$(".nav-search").on("mouseenter", function() {
    		
    		$(".form-group-search").css("display","inline-block");
    		$(".form-group-search").on("mouseleave",function(){
    			$(".form-group-search").fadeOut("slow");
    		});

    	}).on("mouseleave", function() {
    		
    		setTimeout(1, function(){
    			if(!$(".nav-search:out").length)
    			$(".form-group-search").fadeOut("slow");
    		},300)
    		
    	});
    	//关于我
    
    });
    //登录框关闭
   $(function(){
	   $("#close").click(function(){
	    	$(".login").fadeOut("slow");
	    }) 
   }) ;