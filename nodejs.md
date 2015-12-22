#nodejs3.0学习笔记#

1.Express框架

2.MVC设计模式

3.ejs模版引擎

4.MongoDB数据库

功能包括路由控制，页面模版，数据库访问，用户注册，登录，用户会话等内容。


1-1：Express框架

-路由控制

-模版解析支持

-动态视图

-用户会话

-CSRF保护

-静态文件服务

-错误控制器

-访问日志

-缓存

-插件支持



###相应文件下输入以下命令：
    npm install -g express-generator@3
解决无法安装jade或（ejs）模版文件的问题。


###默认安装jade模版文件
	express

###安装ejs模版文件
	express -e 文件名

###1.建立项目后，进入microblog目录，打开package.json，在dependencies中添加


	,"express-partials": "*"
###2.然后运行cmd并切换至文件夹目录运行
	npm install。
###3.app.js里面引用
	var partials = require('express-partials');

	app.set('view engine', 'ejs');
###下面添加
	app.use(partials());


-.node_modules, 存放所有的项目依赖库。(每个项目管理自己的依赖，与Maven,Gradle等不同)

-.package.json，项目依赖配置及开发者信息

-.app.js，程序启动文件

-.public，静态文件(css,js,img)

-.routes，路由文件(MVC中的C,controller)

-.Views，页面文件(Ejs模板)


##express3.X不支持layout.ejs解决方案 

###express3.X默认不支持layout.ejs

###解决方案--安装一个插件
	npm install express-partials 

###app.js代码里面添加这俩行代码即可运行正常
	partials=require('express-partials');
	app.use(partials());

###详细代码如下
###app.js

	/**
	* Module dependencies.
	*/
	 
	var express = require('express')
	  , routes = require('./routes')
	  , user = require('./routes/user')
	  , http = require('http')
	  , partials = require('express-partials')
	  , path = require('path');
	 
	var app = express();
	 
	app.configure(function(){
	  app.set('port', process.env.PORT || 3000);
	  app.set('views', __dirname + '/views');
	  app.set('view engine', 'ejs');
	  app.use(partials());
	  app.use(express.favicon());
	  app.use(express.logger('dev'));
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());
	  app.use(express.cookieParser('your secret here'));
	  app.use(express.session());
	  app.use(app.router);
	  app.use(express.static(path.join(__dirname, 'public')));
	});
	 
	app.configure('development', function(){
	  app.use(express.errorHandler());
	});

	/*
	开始微博网站的制作。
	路由部分
	*/
	app.get("/",routes.index);
	app.get("/u/:user",routes.user);
	app.post("/post",routes.post);
	app.get("/reg",routes.reg);
	app.post("/reg",routes.doReg);
	app.get("/login",routes.login);
	app.post("/login",routes.doLogin);
	app.get("/logout",routes.logout);
	
	/*
	路由结束
	*/
	http.createServer(app).listen(app.get('port'), function(){
	  console.log("Express server listening on port " + app.get('port'));
	});

	---------------------------------------------------------------------------------
	routes/index.js
	--------------------------------------------------------------------------------
	 
	/*
	* GET home page.
	*/
	 
	exports.index = function(req, res){
	  res.render('index.ejs', { title: 'Express' });
	};
	exports.hello = function(req,res){
	    res.send("this time is"+new Date().toString());
	}
	//微博路由开启
	exports.user=function(req,res){
	};
	exports.post=function(req,res){
	};
	exports.reg=function(req,res){
	};
	exports.doReg=function(req,res){
	};
	exports.login=function(req,res){
	};
	exports.doLogin=function(req,res){
	};
	exports.logout=function(req,res){
	};
	//微博路由结束

	--------------------------------------------------------------
	views/layout.ejs
	--------------------------------------------------------------
	<!DOCTYPE html>
	<html>
	  <head>
	    <title><%= title %></title>
	    <link rel='stylesheet' href='/stylesheets/style.css' />
	  </head>
	  <body>
	    <%- body %>
	  </body>
	</html>
	
	---------------------------------------------------------------
	views/index.ejs
	---------------------------------------------------------------
	  <h1><%= title %></h1>
	  <p>Welcome to <%= title %> this is a test</p>


