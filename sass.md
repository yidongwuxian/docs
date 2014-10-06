# SASS学习指南 #
##1.1 安装
sass是依赖ruby环境的，所以需要先下载ruby,ruby有二进制和一键安装包几种安装方式，本文采用的是一键安装包的方式安装。
###下载地址：http://www.jb51.net/jiaoben/141880.html
###安装环境是win7+64位

在安装的时候，请勾选Add Ruby executables to your PATH这个选项，添加环境变量，不然以后使用编译软件的时候会提示找不到ruby环境
![](http://www.webjx.com/files/allimg/130705/0935010.png)

安装完ruby之后，在开始菜单中，找到刚才我们安装的ruby，打开Start Command Prompt with Ruby <br />
![](http://www.webjx.com/files/allimg/130705/0935011.png)

##1.2 安装sass
###在命令行窗口输入     

    gem install sass

###koala这个编译工具已经内置了sass，所以如果你安装了koala，就根本不需要安装sass，注意ruby还是得安装。（压缩css,js文件比较好使）
    koala网址：http://koala-app.com/


###1.3使用sass编写，然后通过命令行命令转化为css文件
###打开编辑器创建style.sass文件，拷贝官网的演示代码，如：
    $blue: #3bbfce
    $margin: 16px

    .content-navigation
      border-color: $blue
      color: darken($blue, 9%)
    
    .border
      padding: $margin / 2
      margin: $margin / 2
      border-color: $blue
但是项目中我们需要用到的是.CSS后缀名的样式文件，转换方法如下：

在命令行键入

    sass --watch style.sass:style.css


###Sass 的一些有用特性: 
1.  Variables: 变量以$开始，它能定义 颜色，数字，或者文字。 
2.  Nesting: 嵌套，将选择器嵌入到其他层级的选择器。 
3.  Mixins: 混合类型，允许抽象出性质的共同点，然后命名并且加入到选择器中。 
4.  Selector Inheritance: 继承，继承其它选择器的属性。 
5.  Functions: 函数，支持简单的算术操作，如+-×/，及函数。如：将某颜色亮度增加10%: lighten(red, 10%)。


###Sass具体用法
详见http://sass-lang.com/guide

生产环境当中，一般使用最后一个选项。

　　`sass --style compressed test.sass test.css`

你也可以让SASS监听某个文件或目录，一旦源文件有变动，就自动生成编译后的版本。

　　// watch a file

　　`sass --watch input.scss:output.css`

　　// watch a directory

　　`sass --watch app/sass:public/stylesheets`

##具体实例参见以下代码：
###news.scss

    $hide:hidden;
    $we:100%;
    $ce:center;
    $imgsrc:img/news;
     
    .h350{  
    	height: 350px; 
    }
    .pr{
    	position:relative;
    } 
    .ow{ 
    	overflow:hidden; 
    }
      
    .simsu{
    	font-family: "Simsun";
    }
    
    html,body{ 
    	overflow-x: $hide; 
    }
     
    
    .sliderPlayer{
    	width: $we; 
     	@extend .h350;
     	text-align: $ce;
    }
    
    .sliderPlayerBd{ 
    	@extend .h350; 
    	@extend .pr; 
    	background: url(../#{$imgsrc}/pic1920.jpg) no-repeat; 
    	@extend .ow;
    }
     
    @mixin borderStyle($value:#fff){
    	border:1px solid $value;
    }
    
    @mixin transitionStyle{
    	transition-property: border;
    	transition-duration: 0.2s;
    	transition-timing-function: ease;
    }
    
    .input-text-style-3:hover{ 
    	@include borderStyle(#ff9241);
    	@include transitionStyle;
    }
    .input-text-style-3:focus{ 
    	@include borderStyle(#e74849);
    	@include transitionStyle;
    }

###在命令行里执行
    sass --style compact news.scss news.css
###命令，自动生成news.css和news.css.map文件。

###输出news.css
    .h350, .sliderPlayer, .sliderPlayerBd { height: 350px; }
    
    .pr, .sliderPlayerBd { position: relative; }
    
    .ow, .sliderPlayerBd { overflow: hidden; }
    
    .simsu { font-family: "Simsun"; }
    
    html, body { overflow-x: hidden; }
    
    .sliderPlayer { width: 100%; text-align: center; }
    
    .sliderPlayerBd { background: url(../img/news/pic1920.jpg) no-repeat; }
    
    .input-text-style-3:hover { border: 1px solid #ff9241; transition-property: border; transition-duration: 0.2s; transition-timing-function: ease; }
    
    .input-text-style-3:focus { border: 1px solid #e74849; transition-property: border; transition-duration: 0.2s; transition-timing-function: ease; }
    
    /*# sourceMappingURL=news.css.map */
    
###附：Scss开发利器Compass
一.何为Compass

Compass is an open-source CSS Authoring Framework.
Compass是一个开源的CSS创作框架。

Compass = Sass framework powered by community
Compass特点

* 拥有内建的CSS3 mixins
* 很多的实用的CSS取代方法
* 很多辅助工具
* 输出SASS文件为压缩的CSS

二.安装Compass建立项目
1.安装Compass
Compass需要运行在Ruby环境下，必须确定本地已经安装Ruby。

$ gem update --system
$ gem install compass
2.建立项目
$ gem compass create myproject
在config.rb配置文件中，可以修改一些基础配置

3.实时编译Scss文件
cd myproject
compass watch
每次保存完scss文件，compass会实时编译生成css文件。

三.Compass核心框架
1.CSS3
说实话开始我很厌烦CSS3的原因在于我要花费很多时间来处理不同浏览器属性，如：-webkit， -moz等等。

###CSS3圆角
    .box{
      -moz-border-radius:5px;
      -webkit-border-radius:5px;
      -o-border-radius:5px;
      -ms-border-radius:5px;
      -khtml-border-radius:5px;
      border-radius:5px
    }

CSS3的渐变色

     #linear-gradient {
       background-image: -webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #ffffff), color-stop(100%, #dddddd));
       background-image: -webkit-linear-gradient(left top, #ffffff, #dddddd);
       background-image: -moz-linear-gradient(left top, #ffffff, #dddddd);
       background-image: -o-linear-gradient(left top, #ffffff, #dddddd);
       background-image: -ms-linear-gradient(left top, #ffffff, #dddddd);
       background-image: linear-gradient(left top, #ffffff, #dddddd);
    }

面对这样繁琐的浏览器属性谁的头都会大，看看Compass是怎样一句话解决的。

    @import "compass/css3"
    .box{
      @include border-radius(5px);
    }
    #linear-gradient { @include background-image(linear-gradient(left top, white, #dddddd)); }


####具体用法详见官网http://compass-style.org/reference/compass/css3/


3.Utilities（实用工具）

* Color
* General
* Print
* Sprites
* Tables

里面有个最实用的功能当属sprite。

你在还在一点一点的拼sprite图吗？快用Compass吧。

我们只要把小图放在一个文件夹里，compass会自动合并并计算出位置。

    import "icon/*.png";
    @include all-icon-sprites;
compass生成后的CSS。

    .icon-sprite,
    .icon-delete,
    .icon-edit,
    .icon-new,
    .icon-save   { background: url('/images/icon-s34fe0604ab.png') no-repeat; }
    .icon-delete { background-position: 0 0; }
    .icon-edit   { background-position: 0 -32px; }
    .icon-new{ background-position: 0 -64px; }
    .icon-save   { background-position: 0 -96px; }
4.Reset

    @import "compass/reset"

一句话把所有的reset搞定

#附：bootstrap+sass+compass组合
1.先下载gem install bootstrap-sass

    http://rubydoc.info/gems/bootstrap-sass/3.2.0.2/frames


or, alternatively, if you're not using a Gemfile for your dependencies:

    $ compass create my-new-project -r bootstrap-sass --using bootstrap