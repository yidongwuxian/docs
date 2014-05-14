# Grunt.js安装指南 #

- Author : Kirin
- Date: 2014/3/19


> 基本功能：

- 合并JS文件
- 压缩JS文件
- 单元测试（基于QUnit）

> 测试环境：window7


### 1. 安装grunt ###
####Grunt.js是基于nodejs环境的，需要先安装nodejs才能运行，请先前往nodejs官网下载。 ###
###[http://nodejs.org/](http://nodejs.org/ "nodejs官网") ####
###1.1 安装grunt命令行工具grunt-cli ###
###使用-g全局安装，这样可以在任何一个目录里使用了。
	命令: npm install -g grunt-cli
### 需要注意的是在linux或mac下有时会报没有权限的错误，这时须在前面加一个sudo，
	命令：sudo npm install -g grunt-cli
###安装后，可以查看改工具的版本。
	命令: grunt -version

###2. 安装grunt及其插件###
###2.1 进入到某项目根目录：
	使用命令: npm install grunt --save-dev

###此时，再查看grunt版本会多了一个4.0，如下###
	xxx: grunt -version
		 grunt-cli v0.1.6
		 grunt v0.4.0
###至此，grunt安装完毕。###

###3. 使用grunt合并，压缩JS文件###
- 新建项目Bejs

- 新建文件package.json

- 新建文件Gruntfile.js

- 执行grunt任务

###3.1 新建项目Bejs###
源码放在src下，该目录有两个js文件，selector.js和ajax.js。编译后代码放在dest，这个grunt会自动生成。
### 3.2 新建文件package.json###
#### package.json放在根目录下，它包含了该项目的一些元信息，如项目名称、描述、版本号，依赖包等。它应该和源码一样被提交到svn或git。
现在的项目结构如下：    
package.json内容需符合JSON语法规范，如下:
 	
	{
	  "name": "index",
	  "version": "0.1.0",
	  "devDependencies": {
	    "grunt": "~0.4.4",
	    "grunt-contrib-htmlmin": "~0.1.3",
	    "grunt-contrib-cssmin": "~0.6.1",
	    "grunt-contrib-uglify": "~0.2.2",
	    "grunt-contrib-imagemin": "~0.1.4",
	    "grunt-contrib-concat":"~0.1.1",
	    "grunt-regarde": "latest",
	    "grunt-contrib-connect": "latest",
	    "grunt-contrib-livereload": "latest"
	  }
	}

###备注：###
- grunt-contrib-jshint js语法检查 

- grunt-contrib-uglify 压缩，采用UglifyJS

- grunt-contrib-concat 合并文件

###3.2.1 此时，打开命令行工具进入到项目根目录
	命令: npm install

###3.2.2再查看根目录，发现多了个node_modules目录，包含了四个子目录 ###
###至此，grunt插件安装完毕。###

###3.3 新建文件Gruntfile.js###

Gruntfile.js也是放在项目根目录下，几乎所有的任务都定义在该文件中，它就是一个普通的js文件，里面可以写任意js代码而不仅局限于JSON。和package.json一样它也要和源码一样被提交到svn或git。

###Gruntfile.js内容如下：###
    module.exports = function(grunt) {
   
	    grunt.initConfig({
	        pkg : grunt.file.readJSON('package.json'),
	        concat : {
	            domop : {
	                src: ['src/js/didi.dialog.js','src/js/didi.jbase.js'],
	                dest:'dest/com.js'
	            }
	        },
	        uglify: {
	            options : {
	                banner :'/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	            },
	            build: {
	                src: ['src/js/didi.dialog.js','src/js/didi.jbase.js'],
	                dest: 'dist/js/com.js'
	                
	            }
	        }
	
	    });
	    grunt.loadNpmTasks('grunt-contrib-concat');
	
	    grunt.loadNpmTasks('grunt-contrib-uglify');
	    
	    grunt.registerTask('default', ['concat','uglify']);
	
	};

###3.4. 执行grunt任务，合并压缩js文件###
####打开命令行，进入到项目根目录：
	命令： grunt
从打印信息看出成功的生成了dest目录及期望的文件，这时的项目目录下多了dest目录，可以在dest目录里看到合并，压缩成功的文件。

###4. 使用grunt合并，压缩css文件###
- 新建项目Bejs

- 新建文件package.json

- 新建文件Gruntfile.js

- 执行grunt任务

###4.1 新建项目Bejs

源码放在src下，asset目录下放了一些图片和css文件。一会会把两个css资源reset.css和base.css合并，压缩到dest/css目录。一个合并版本comm.css，一个压缩版本comm-min.css。
###4.2 新建package.json
###package.json内容如下：
	{
	  "name": "index",
	  "version": "0.1.0",
	  "devDependencies": {
	    "grunt": "~0.4.4",
	    "grunt-contrib-htmlmin": "~0.1.3",
	    "grunt-contrib-cssmin": "~0.6.1",
	    "grunt-contrib-uglify": "~0.2.2",
	    "grunt-contrib-imagemin": "~0.1.4",
	    "grunt-contrib-concat":"~0.1.1",
	    "grunt-css":  ">0.0.0",
	    "grunt-regarde": "latest",
	    "grunt-contrib-connect": "latest",
	    "grunt-contrib-livereload": "latest"
	  }
	}
###4.2.1 打开命令行工具进入到项目根目录
	命令: npm install
###4.2.2再查看根目录，发现多了个node_modules目录，包含了四个子目录。 ###
###4.3 新建文件Gruntfile.js###

Gruntfile.js也是放在项目根目录下，几乎所有的任务都定义在该文件中，它就是一个普通的js文件，里面可以写任意js代码而不仅局限于JSON。和package.json一样它也要和源码一样被提交到svn或git。

###Gruntfile.js内容如下：###

	module.exports = function(grunt) {
   
	    grunt.initConfig({
	        pkg : grunt.file.readJSON('package.json'),
	        concat : {
	
	            css : {
	
	                src: ['src/css/*.css'],
	
	                dest:'dest/css/comm.css'
	
	            },
	            domop : {
	                src: ['src/js/didi.dialog.js','src/js/didi.jbase.js'],
	                dest:'dest/com.js'
	            }
	        },
	        cssmin: {
	
	            css: {
	
	                src:'dest/css/comm.css',
	
	                dest:'dest/css/comm-min.css'
	
	            }
	
	        },
	        uglify: {
	            options : {
	                banner :'/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	            },
	            build: {
	                src: ['src/js/didi.dialog.js','src/js/didi.jbase.js'],
	                dest: 'dist/js/com.js'
	                
	            }
	        }
	
	    });
	    grunt.loadNpmTasks('grunt-contrib-concat');
	
	    grunt.loadNpmTasks('grunt-contrib-uglify');
	    
	    grunt.loadNpmTasks('grunt-css');
	
	    grunt.registerTask('default', ['concat','uglify','cssmin']);
	
	};
####打开命令行，进入到项目根目录：
	命令： grunt
从打印信息看出成功的生成了dest目录及期望的文件，这时的项目目录下多了dest目录，可以在dest目录里看到合并，压缩成功的css文件。
###至此，css合并压缩完毕！

##success，祝好运！
