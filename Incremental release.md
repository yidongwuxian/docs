   
# 什么是增量式？ #

   
- ###增量式：

     静态资源的内容变化时，可以用某种增量的方式体现这种变化。
- ###增量式的一边实现方式：

     1.文件名增加随机版本号

     2.资源文件MD5校验
 
     3.时间戳校验

- 使用增量式的原因：
  
    1.运维**灰度环境**问题（版本回滚）：
      
          1.1 灰度环境： 线上环境的镜像测试环境。
          1.2 不影响线上资源。
 
    2.CDN部署问题（版本标识）：
   
          1.1 静态资源缓存清除与替换：
          1.1.1 CDN使用文件名索引缓存资源
          1.1.2 仅仅使用原文件名无法做到版本替换

- 具体实现方法（以替换时间戳校验为例）：
     
          1.服务器搭建nodejs环境
          2.具体项目的public/tools目录下新建一个grunt文件夹
            在grunt里新建package.json，编辑
            {
			  "name": "xx",
			  "description": "optimizing js css and png.",
			  "version": "0.1.0",
			  "homepage": "http://xx.com",
			  "author": {
			    "name": "xx",
			    "url": "http://xx.com/"
			  },
			  "devDependencies": {
			    "grunt-contrib-jshint": "~0.7.0",
			    "grunt-contrib-less": "~0.8.1",
			    "grunt-contrib-csslint": "~0.1.2",
			    "grunt-contrib-concat": "~0.3.0",
			    "grunt-contrib-uglify": "~0.2.4",
			    "grunt-contrib-cssmin": "~0.6.2",
			    "grunt-contrib-qunit": "~0.3.0",
			    "grunt": "~0.4.1"
			  }
			}
           3.用命令npm install 或npm install --save-dev，自动将package.json中的模块安装到node-modules文件夹下。
           4.对于要压缩、合并的css,js可在Gruntfile.js里修改。
  