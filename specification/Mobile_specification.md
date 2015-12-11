# web前端（移动端）编码规范 #

### Edit:    yangjia  ###
### Email:   yangjia@coamc.com ###
### Version:  1.0  ###



## 命名规则
一，项目命名  

	* 全部采用小写方式，以下划线分隔
	* 例：my_project_name
	
二，目录命名

	* 参照项目命名规则
	* 有复数结构时，要采用复数命名法
	* 例：scripts,sytles,images,data_models

三，html,css,js文件命名

	* 参照项目命名规则
	* 例：error_report.html,retina_sprites.css,account_model.js
	
四，css类命名

	1,布局（grid）(.g-);  
	2,模块（module）(.m);  
	3,元件（unit）（.u-);  
	4,功能（function）(.f-);  
	5,皮肤（skin）(.s-);  
	6,状态（.z-）;  
注：  

	* 在你样式中的选择器总是要以上面前五类开头，然后在里面使用后代选择器。
	* 如果这五类不能满足你的需求，你可以另外定义一个或多个大类，但必须符合单个字母+"-"为前缀的命名规则，即 .x- 的格式。
	* 不要用left，right等抽象的动词，很容易造成代码互相覆盖，建议用表示具体模块用途的名词来表示。
	
后代选择器命名

	* 约定不以单个字母+"-"为前缀且长度大于等于2的类选择器为后代选择器，如：.item为m-list模块里的每一个项，.text为m-list模块里的文本部分：.m-list .item{}.m-list .text{}。
	* 一个语义化的标签也可以是后代选择器，比如：.m-list li{}。
	* 通过使用后代选择器的方法，你不需要考虑他的命名是否已被使用，因为他只在当前模块或元件中生效，同样的样式名可以在不同的模块或元件中重复使用，互不干扰；
	* 后代选择器不需要完整表现结构树层级，尽量能短则短。
	* 后代选择器不要在页面布局中使用，因为污染的可能性较大；

相同语义的不同类命名
	
	* 方法：直接加数字或字母区分即可（如：.m-list、.m-list2、.m-list3等，都是列表模块，但是是完全不一样的模块）。
	* 其他举例：.m-logo2、.m-logo3、u-btn、u-btn2等等。

模块和元件的扩展类的命名方法
	
	* 当A、B、C、...它们类型相同且外形相似区别不大，那么就以它们中出现率最高的做成基类，其他做成基类的扩展。
	* 方法：+“-”+数字或字母（如：.m-list的扩展类为.m-list-1、.m-list-2等）。
	* 补充：基类自身可以独立使用（如：class="m-list"即可），扩展类必须基于基类使用（如：class="m-list m-list-2"）。
	* 如果你的扩展类是表示不同状态，那么你可以这样命名：u-btn-dis，u-btn-hov，m-box-sel，m-box-hov等等，然后像这样使用：class="u-btn u-btn-dis"。

模块和元件的后代选择器的扩展类
	
	* 有时候模块内会有些类似的东西，如果你没有把它们做成元件和扩展，那么也可以使用后代选择器和扩展。
	* 后代选择器：.m-login .btn{}。
	* 后代选择器扩展：.m-login .btn-1{}，.m-login .btn-dis{}。

分组选择器有时可以代替扩展方法

	* 有时候虽然两个同类型的模块很相似，但是你希望他们之间不要有依赖关系，也就是说你不希望使用扩展的方法，那么你可以通过合并选择器来设置共性的样式。
	* 使用本方法的前提是：相同类型、功能和外观都相似，写在同一片代码区域方便维护。
	
	/* 两个元件共性的样式 */

		.u-tip1,.u-tip2{}
		.u-tip1 .itm,.u-tip2 .itm{}

	/* 在分别是两个元件各自的样式 */

		/* tip1 */
			.u-tip1{}
			.u-tip1 .itm{}
		/* tip2 */
			.u-tip2{}
			.u-tip2 .itm{}





## HTML
一，语法  

	* 缩进使用四个空格（tab）
	* 嵌套的节点应该缩进
	* 属性上使用双引号
	* HTML页面不要写行内样式，应写到css文件里，用link rel引入。
	* HTML页面当中尽量用class，少用id，id适用于做脚本绑定元素时使用。
	* body,html标签里不要加样式。
	* html标签不要用大写，要用小写表示
二，DOCTYPE

	* 页面开头大写
	<!DOCTYPE html>
三，lang属性
	
	lang=zh-cn

四，字符编码

	选择UTF-8
	
五，meta标签

	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
	<meta content="yes" name="apple-mobile-web-app-capable">
	<meta content="black" name="apple-mobile-web-app-status-bar-style">
	<meta content="telephone=no" name="format-detection">

第一个meta标签表示：强制让文档的宽度与设备的宽度保持1:1，并且文档最大的宽度比例是1.0，且不允许用户点击屏幕放大浏览；

第二个meta标签是iphone设备中的safari私有meta标签，它表示：允许全屏模式浏览；

第三个meta标签也是iphone的私有标签，它指定的iphone中safari顶端的状态条的样式；

第四个meta标签表示：告诉设备忽略将页面中的数字识别为电话号码

六，JS生成标签

	在js文件中生成标签让内容变的更难查找，更难编辑，性能更差。应该尽量避免这种情况出现。

七，减少标签数量

	在编写HTML代码时，需要尽量避免多余的父节点；
	在很多时候需要迭代和重构来使HTML变得更少。

八，注释

	模块间要加注释标明模块的具体含义。
		<!-- header start -->
		<div class="nav">
		    ...
		</div>
		<!-- header end -->

九，脚本加载

	<html>
      <head>
        <link rel="stylesheet" href="main.css">
      </head>
      <body>
        <!-- body goes here -->
     
        <script src="main.js" async></script>
      </body>
    </html>
	
十，语义化

根据元素（有时被错误地称作“标签”）其被创造出来时的初始意义来使用它。打个比方，用 header 元素来定义头部标题，p 元素来定义文字段落，用 a 元素来定义链接锚点，等等。

有根据有目的地使用 HTML 元素，对于可访问性、代码重用、代码效率来说意义重大。
	
not good

	<b>My page title</b>
    <div class="top-navigation">
      <div class="nav-item"><a href="#home">Home</a></div>
      <div class="nav-item"><a href="#news">News</a></div>
      <div class="nav-item"><a href="#about">About</a></div>
    </div>
     
    <div class="news-page">
      <div class="page-section news">
        <div class="title">All news articles</div>
        <div class="news-article">
          <h2>Bad article</h2>
          <div class="intro">Introduction sub-title</div>
          <div class="content">This is a very bad example for HTML semantics</div>
          <div class="article-side-notes">I think I'm more on the side and should not receive the main credits</div>
          <div class="article-foot-notes">
            This article was created by David <div class="time">2014-01-01 00:00</div>
          </div>
        </div>
     
        <div class="section-footer">
          Related sections: Events, Public holidays
        </div>
      </div>
    </div>
     
    <div class="page-footer">
      Copyright 2014
    </div>

good

	 
    <header>
      <h1>My page title</h1>
    </header>    
    <nav class="top-navigation">
      <ul>
        <li class="nav-item"><a href="#home">Home</a></li>
        <li class="nav-item"><a href="#news">News</a></li>
        <li class="nav-item"><a href="#about">About</a></li>
      </ul>
    </nav>    
    <main class="news-page" role="main">    
      <section class="page-section news">     
        <header>
          <h2 class="title">All news articles</h2>
        </header>
        <article class="news-article">
          <header>
            <div class="article-title">Good article</div>
            <small class="intro">Introduction sub-title</small>
          </header>
          <div class="content">
            <p>This is a good example for HTML semantics</p>
          </div>
          <aside class="article-side-notes">
            <p>I think I'm more on the side and should not receive the main credits</p>
          </aside>
          <footer class="article-foot-notes">
            <p>This article was created by David <time datetime="2014-01-01 00:00" class="time">1 month ago</time></p>
          </footer>
        </article>
        <footer class="section-footer">
          <p>Related sections: Events, Public holidays</p>
        </footer>
      </section>
    </main>     
    <footer class="page-footer">
      Copyright 2014
    </footer>


##CSS

一，缩进

	*使用四个空格
	
二，空格

以下几种情况不需要空格

1.	属性名后  
 
   		color :red;

2.	多个规则的分隔符','前   

  		background: rgba(0, 0, 0, .5)

3.	!important '!'后
	
4.	属性值中'('后和')'前

5.	行末不要有多余的空格

以下几种情况需要空格
	
1.	属性值前	

		background: rgba(0, 0, 0, .5)

2.	选择器'>','+','~'前

3.	'{'前

	    .dialog {}

4. !important '!'前
	
5. 属性值的','后

		background: rgba(0, 0, 0, .5)
	
6. 注释'/*'后和'*/'前

三，引号

	* 最外层统一使用双引号
	* url的内容要用引号
	* 属性选择器中的属性值需要引号 li[data-type="single"]

四，颜色

	颜色16进制用小写字母
	颜色16进制尽量用简写

五，属性简写
 
	font
	background
	transition
	animation

六，媒体查询

	尽量将媒体查询的规则靠近与他们相关的规则，不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部，这样做只会让大家以后更容易忘记他们

	

	.element {
	    ...
	}
	
	.element-avatar{
	    ...
	}
	
	@media (min-width: 480px) {
	    .element {
	        ...
	    }
	
	    .element-avatar {
	        ...
	    }
	}
	
七，注释规范
	
#####文件顶部注释
	/*
	* @description: 模块名称
	* @author: yangjia
	* @update: 2015-10-30 18:32
	*/

#####模块注释
	/* module: module1 by  yangjia */ 
	/* module: module2 by yangjia2 */

八，字体设置
	
使用无衬线字体

	body {
		font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
	}

九，基础交互

设置全局的CSS样式，避免图中的长按弹出菜单与选中文本的行为
	
	a, img {
		-webkit-touch-callout: none; /* 禁止长按链接与图片弹出菜单 */
		}
		html, body {
		-webkit-user-select: none; /* 禁止选中文本（如无文本选中需求，此为必选项） */
		user-select: none;
	

}
	
	
十，杂项

1.	不允许有空的规则；

		/* not good */
		.element {
		}

2.	元素选择器用小写字母；

		/* not good */
		LI {
		    ...
		}
		
		/* good */
		li {
		    ...
		}

3.	去掉小数点前面的0；
	
		/* not good */
		.element {
		    color: rgba(0, 0, 0, 0.5);
		}
		
		/* good */
		.element {
		    color: rgba(0, 0, 0, .5);
		}

4.	去掉数字中不必要的小数点和末尾的0；

		/* not good */
		.element {
		    width: 50.0px;
		}
		
		/* good */
		.element {
		    width: 50px;
		}

5.	属性值'0'后面不要加单位；

		/* not good */
		.element {
		    width: 0px;
		}
		
		/* good */
		.element {
		    width: 0;
		}

6.	同个属性不同前缀的写法需要在垂直方向保持对齐

7.	无前缀的标准属性应该写在有前缀的属性后面；
		
		/* not good */
		.element {
		    border-radius: 3px;
		    -webkit-border-radius: 3px;
		    -moz-border-radius: 3px;
		
		    background: linear-gradient(to bottom, #fff 0, #eee 100%);
		    background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
		    background: -moz-linear-gradient(top, #fff 0, #eee 100%);
		}
		
		/* good */
		.element {
		    -webkit-border-radius: 3px;
		       -moz-border-radius: 3px;
		            border-radius: 3px;
		
		    background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
		    background:    -moz-linear-gradient(top, #fff 0, #eee 100%);
		    background:         linear-gradient(to bottom, #fff 0, #eee 100%);
		}
	
8.	不要在同个规则里出现重复的属性，如果重复的属性是连续的则没关系；

9.	不要在一个文件里出现两个相同的规则；

10.	用 border: 0; 代替 border: none;；

11.	选择器不要超过4层（在scss中如果超过4层应该考虑用嵌套的方式来写）；

12.	发布的代码中不要有 @import；

13.	尽量少用'*'选择器。

14.	一个标签上引用的className不要过多，越少越好。

15.	css文件里的中文字体都用英文来表示。

16.	学会使用webkit-box

		当你指定了一个块级元素时，并且为其定义了边框，设置了其宽度为100％。在移动设备开发过程中我们通常会对文本框定义为宽度100％，将其定义为块级元素以实现全屏自适应的样式，但此时你会发现，该元素的边框(左右)各1个像素会溢了文档，导致出现横向滚动条，为解决这一问题，我们可以为其添加一个特殊的样式-webkit-box-sizing:border-box;用来指定该盒子的大小包括边框的宽度。

17. 块儿级化a标签

		请保证将每条数据都放在一个a标签中，为何这样做？因为在触控手机上，为提升用户体验，尽可能的保证用户的可点击区域较大

18. 利用CSS3边框背景属性

		 这个按钮有圆角效果，有内发光效果还有高光效果，这样的按钮使用CSS3写是无法写出来的，当然圆角可以使用CSS3来写，但高光和内发光却无法使用CSS3编写，

		这个时候你不妨使用-webkit-border-image来定义这个按钮的样式。
		
		-webkit-border-image就个很复杂的样式属性。	

19. 单位统一用rem。

20. 关闭ios键盘首字母自动大写。

		IOS的机子，默认英文输入法状态下，首字母是自动大写的，有时候挺烦人的。
		在iOS中，默认情况下键盘是开启首字母大写的功能的，如果业务不想出现首字母大写，可以这样：

		<input type="text" autocapitalize="off" />

21.	关闭ios输入自动修正

		和英文输入默认自动首字母大写那样，IOS还做了一个功能，默认输入法会开启自动修正输入内容，这样的话，用户经常要操作两次。所以这个功能有方便和不方便之处，如果有些业务不需要这个功能，可以通过前端代码关闭。
		
		<input type="text" autocorrect="off" />

22. 禁止文本缩放

		当移动设备横竖屏切换时，文本的大小会重新计算，进行相应的缩放，当我们不需要这种情况时，可以选择禁止：

		html {
		    -webkit-text-size-adjust: 100%;
		}

		需要注意的是，PC端的该属性已经被移除，该属性在移动端要生效，必须设置 `meta viewport'。

23.清除输入框内阴影

		在iOS上，输入框默认有内部阴影，但无法使用 box-shadow 来清除，如果不需要阴影，可以这样关闭：

		input,
		textarea {
		    border: 0; /* 方法1 */
		    -webkit-appearance: none; /* 方法2 */
		}
		

##javaScript

一，缩进
	
	使用soft tab（4个空格）。

二，分号
	
	以下几种情况后需加分号：

    变量声明
    表达式
    return
    throw
    break
    continue
    do-while

	/* var declaration */
	var x = 1;
	
	/* expression statement */
	x++;
	
	/* do-while */
	do {
	    x++;
	} while (x < 10);

三，空格

以下几种情况不需要空格：

1. 对象的属性名后

		// not good
		var a = {
		    b :1
		};
		
		// good
		var a = {
		    b: 1
		};

2.  前缀一元运算符后

3.	后缀一元运算符前

		// not good
		++ x;
		y ++;
		z = x?1:2;
		
		// good
		++x;
		y++;
		z = x ? 1 : 2;

4.	函数调用括号前

5.	无论是函数声明还是函数表达式，'('前不要空格

6.	数组的'['后和']'前

		// not good
		var a = [ 1, 2 ];
		
		// good
		var a = [1, 2];

7.	对象的'{'后和'}'前

8.	运算符'('后和')'前

		// not good
		var a = ( 1+2 )*3;
		
		// good
		var a = (1 + 2) * 3;

以下几种情况需要空格：

1.	二元运算符前后

2.	三元运算符'?:'前后

3.	代码块'{'前

4.	下列关键字前：else, while, catch, finally

5.	下列关键字后：if, else, for, while, do, switch, case, try, catch, finally, with, return, typeof

6.	单行注释'//'后（若单行注释和代码同行，则'//'前也需要），多行注释'*'后

7.	对象的属性值前

8.	for循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格

		// not good
		for(i=0;i<6;i++){
		    x++;
		}
		
		// good
		for (i = 0; i < 6; i++) {
		    x++;
		}
9.  无论是函数声明还是函数表达式，'{'前一定要有空格

10. 函数的参数之间

四，空行
	
以下几种情况需要空行：

1. 变量声明后（当变量声明在代码块的最后一行时，则无需空行）
	
		// need blank line after variable declaration
		var x = 1;

		// not need blank line when variable declaration is last expression in the current block
		if (x >= 1) {
		    var y = x + 1;
		}
		
		var a = 2;

2. 注释前（当注释在代码块的第一行时，则无需空行）

		// need blank line before line comment
		a++;
		
		function b() {
		    // not need blank line when comment is first line of block
		    return a;
		}

3. 代码块后（在函数调用、数组、对象中则无需空行）	
    
		// need blank line after blocks
		for (var i = 0; i < 2; i++) {
		    if (true) {
		        return false;
		    }
		
		    continue;
		}
		var obj = {
		    foo: function() {
		        return 1;
		    },
		
		    bar: function() {
		        return 2;
		    }
		};
	    // not need blank line when in argument list, array, object
		func(
		    2,
		    function() {
		        a++;
		    },
		    3
		);
		
		var foo = [
		    2,
		    function() {
		        a++;
		    },
		    3
		];		
		var foo = {
		    a: 2,
		    b: function() {
		        a++;
		    },
		    c: 3
		};
		
4. 文件最后保留一个空行




五，换行

1. 换行的地方，行末必须有','或者运算符；

		// not good
		var a = {
		    b: 1
		    , c: 2
		};
		
		x = y
		    ? 1 : 2;
		
		// good
		var a = {
		    b: 1,
		    c: 2
		};
		
		x = y ? 1 : 2;

2.	以下几种情况不需要换行：

下列关键字后：else, catch, finally
代码块'{'前

		// no need line break with 'else', 'catch', 'finally'
		if (condition) {
		    ...
		} else {
		    ...
		}
		
		try {
		    ...
		} catch (e) {
		    ...
		} finally {
		    ...
		}

以下几种情况需要换行：

代码块'{'后和'}'前
		
		// not good
		function test()
		{
		    ...
		}
		
		// good
		function test() {
		    ...
		}

变量赋值后

		// not good
		var a, foo = 7, b,
		    c, bar = 8;
		
		// good
		var a,
		    foo = 7,
		    b, c, bar = 8;

	
	

六，单行注释

1. 双斜线后，必须跟一个空格；

2. 缩进与下一行代码保持一致；

3. 可位于一个代码行的末尾，与代码间隔一个空格。

		if (condition) {
		    // if you made it here, then all security checks passed
		    allowed();
		}
		
		var zhangsan = 'zhangsan'; // one space after code

七，多行注释

	最少三行, '*'后跟一个空格，

	建议在以下情况下使用：

    难于理解的代码段
    可能存在错误的代码段
    浏览器特殊的HACK代码
    业务逻辑强相关的代码


	

	/*
	 * one space after '*'
	 */
	var x = 1;

八，文档注释

	各类标签@param, @method等请参考usejsdoc和JSDoc Guide；

	建议在以下情况下使用：

    所有常量
    所有函数
    所有类

	
	
	/**
	 * @func
	 * @desc 一个带参数的函数
	 * @param {string} a - 参数a
	 * @param {number} b=1 - 参数b默认值为1
	 * @param {string} c=1 - 参数c有两种支持的取值</br>1—表示x</br>2—表示xx
	 * @param {object} d - 参数d为一个对象
	 * @param {string} d.e - 参数d的e属性
	 * @param {string} d.f - 参数d的f属性
	 * @param {object[]} g - 参数g为一个对象数组
	 * @param {string} g.h - 参数g数组中一项的h属性
	 * @param {string} g.i - 参数g数组中一项的i属性
	 * @param {string} [j] - 参数j是一个可选参数
	 */
	function foo(a, b, c, d, g, j) {
	    ...
	}

九，引号

最外层统一使用单引号。
	

	// not good
	var x = "test";
	
	// good
	var y = 'foo',
	    z = '<div id="test"></div>';

十，变量命名

1. 标准变量采用驼峰式命名（除了对象的属性外，主要是考虑到cgi返回的数据）
	
		var thisIsMyName;

2. 'ID'在变量名中全大写

		var goodID;
	
3.	'URL'在变量名中全大写

		var reportURL;

4. 'Android'在变量名中大写第一个字母

		var AndroidVersion;

5. 'iOS'在变量名中小写第一个，大写后两个字母

		var iOSVersion;

6.	常量全大写，用下划线连接
    
    	var MAX_COUNT = 10;
    
7. 构造函数，大写第一个字母

		function Person(name) {
		    this.name = name;
		}

8.  jquery对象必须以'$'开头命名
    
		// not good
		var body = $('body');
		
		// good
		var $body = $('body');
   
9. boolean 类型的变量使用 is 或 has 开头。
    
	    var isReady = false;
	    var hasMoreCommands = false;

	
	
	
	

	


十一，变量声明

1. 一个函数作用域中所有的变量声明尽量提到函数首部，用一个var声明，不允许出现两个连续的var声明。

		function doSomethingWithItems(items) {
		    // use one var
		    var value = 10,
		        result = value + 10,
		        i,
		        len;
		
		    for (i = 0, len = items.length; i < len; i++) {
		        result += 10;
		    }
		}

十二，函数

1. 无论是函数声明还是函数表达式，'('前不要空格，但'{'前一定要有空格；
	
		// no space before '(', but one space before'{'
		var doSomething = function(item) {
		    // do something
		};
		function doSomething(item) {
	    // do something
		}

2.	函数调用括号前不需要空格；
	
		// not good
		doSomething (item);
		
		// good
		doSomething(item);
	
3. 立即执行函数外必须包一层括号；
		
		// requires parentheses around immediately invoked function expressions
		(function() {
		    return 1;
		})();

4. 不要给inline function命名；

		// not good
		[1, 2].forEach(function x() {
		    ...
		});
		
		// good
		[1, 2].forEach(function() {
		    ...
		});

		// not good
		var a = [1, 2, function a() {
		    ...
		}];
		
		// good
		var a = [1, 2, function() {
		    ...
		}];

5. 	参数之间用', '分隔，注意逗号后有一个空格	
	
		// use ', ' between function parameters
		var doSomething = function(a, b, c) {
		    // do something
		};
	
6. 	函数名 使用 动宾短语。
	    
	    function getStyle(element) {
	    }


十三，数组对象

1. 对象属性名不需要加引号；
	
		// not good
			var a = {
			    'b': 1
			};
		//good
		var a = {b: 1};
2. 对象以缩进的形式书写，不要写在一行；
		
3. 数组、对象最后不要有逗号。

		var a = {
		    b: 1,
		    c: 2,
		};
		
		// good
		var a = {
		    b: 1,
		    c: 2
		};
4. 遍历数组不使用 for in。

	数组对象可能存在数字以外的属性, 这种情况下 for in 不会得到正确结果.

		示例：
		
		var arr = ['a', 'b', 'c'];
		arr.other = 'other things'; // 这里仅作演示, 实际中应使用Object类型
		
		// 正确的遍历方式
		for (var i = 0, len = arr.length; i < len; i++) {
			console.log(i);
		}
		
		// 错误的遍历方式
		for (i in arr) {
			console.log(i);
		}

十四，括号

下列关键字后必须有大括号（即使代码块的内容只有一行）：if, else, for, while, do, switch, try, catch, finally, with。
	
	// not good
	if (condition)
	    doSomething();
	
	// good
	if (condition) {
	    doSomething();
	}

十五，null
	
适用场景：

1. 初始化一个将来可能被赋值为对象的变量

2. 与已经初始化的变量做比较

3. 作为一个参数为对象的函数的调用传参

4. 作为一个返回对象的函数的返回值

不适用场景：

1. 不要用null来判断函数调用时有无传参

		// not good
		function test(a, b) {
		    if (b === null) {
		        // not mean b is not supply
		        ...
		    }
		}
2. 不要与未初始化的变量做比较

		var a;
	
		if (a === null) {
		    ...
		}

		// good
		var a = null;
		
		if (a === null) {
		    ...
		}	

十六，nudefined
	
1. 永远不要直接使用undefined进行变量判断；

		// not good
		if (person === undefined) {
		    ...
		}

2. 使用typeof和字符串'undefined'对变量进行判断。
			
		// good
		if (typeof person === 'undefined') {
		    ...
		}
	
十七，jshint

1. 用'===', '!=='代替'==', '!='；
	
		// not good
		if (a == 1) {
		    a++;
		}
		
		// good
		if (a === 1) {
		    a++;
		}

2. for-in里一定要有hasOwnProperty的判断；

		// good
		for (key in obj) {
		    if (obj.hasOwnProperty(key)) {
		        // be sure that obj[key] belongs to the object and was not inherited
		        console.log(obj[key]);
		    }
		}

3. 不要在内置对象的原型上添加方法，如Array, Date；

		// not good
		Array.prototype.count = function(value) {
		    return 4;
		};

4. 	不要在内层作用域的代码里声明了变量，之后却访问到了外层作用域的同名变量；
	
		// not good
		var x = 1;
		
		function test() {
		    if (true) {
		        var x = 0;
		    }
		
		    x += 1;
		}
	
5. 	变量不要先使用后声明；
	

		// not good
		function test() {
		    console.log(x);
		
		    var x = 1;
		}
	
6.	不要在一句代码中单单使用构造函数，记得将其赋值给某个变量；

		// not good
		new Person();
		
		// good
		var person = new Person();
	
7.	不要在同个作用域下声明同名变量；

8.	不要在一些不需要的地方加括号，例：delete(a.b)；

		// not good
		delete(obj.attr);
		
		// good
		delete obj.attr;

9. 不要使用未声明的变量（全局变量需要加到.jshintrc文件的globals属性里面）；
		
10. 不要声明了变量却不使用；
 
11. 不要在应该做比较的地方做赋值； 

		// not good
		if (a = 10) {
		    a++;
		}
 
12. debugger不要出现在提交的代码里；	
	

13. 数组中不要存在空元素；

		// not good
		var a = [1, , , 2, 3];
		
		// not good
		var nums = [];

14. 不要在循环内部声明函数；
		
		for (var i = 0; i < 10; i++) {
		    (function(i) {
		        nums[i] = function(j) {
		            return i + j;
		        };
		    }(i));
		}
15. 不要像这样使用构造函数，例：new function () { ... }, new Object；
	
	// not good
	var singleton = new function() {
	    var privateVar;
	
	    this.publicMethod = function() {
	        privateVar = 1;
	    };
	
	    this.publicMethod2 = function() {
	        privateVar = 2;
	    };
	};		

十八，杂项  

1. 不要混用tab和space；
	
		// not good  
		var a   = 1;
	
2. 不要在一处使用多个tab或space；

3. 换行符统一用'LF'；  
	
4. 对上下文this的引用只能使用'_this', 'that', 'self'其中一个来命名；
	
		function Person() {
		    // not good
		    var me = this;
		
		    // good
		    var _this = this;
		
		    // good
		    var that = this;
		
		    // good
		    var self = this;
		}

5. 行尾不要有空白字符；
	
6. switch的falling through和no default的情况一定要有注释特别说明；

		switch (condition) {
		    case 1:
		    case 2:
		        ...
		        break;
		    case 3:
		        ...
		    // why fall through
		    case 4
		        ...
		        break;
		    // why no default
		}

7. 不允许有空的代码块。
	
		if (condition) {
	
		}

8. 清空数组使用 .length = 0。
	
9. 使用 parseInt 时，必须指定进制。

	
		示例：
	    
	    // good
	    parseInt(str, 10);
	    
	    // bad
	    parseInt(str);

10. number 去除小数点，使用 Math.floor / Math.round / Math.ceil，不使用 parseInt。

		示例：

	    // good
	    var num = 3.14;
	    Math.ceil(num);
	    
	    // bad
	    var num = 3.14;
	    parseInt(num, 10);

11. 转换成 boolean 时，使用 !!。

		示例：

	    var num = 3.14;
	    !!num;

12. string 转换成 number，要转换的字符串结尾包含非数字并期望忽略时，使用 parseInt。

	    示例：
    
	    var width = '200px';
	    parseInt(width, 10);

13. 转换成 number 时，通常使用 +。

		示例：

	    // good
	    +str;
	    
	    // bad
	    Number(str);

14. 转换成 string 时，使用 + ''。

		示例：
    
	    // good
	    num + '';
	    
	    // bad
	    new String(num);
	    num.toString();
	    String(num);

15. 类型检测优先使用 typeof。对象类型检测使用 instanceof。null 或 undefined 的检测使用 == null。 
 
		示例：  

	    // string
	    typeof variable === 'string'
	    
	    // number
	    typeof variable === 'number'
	    
	    // boolean
	    typeof variable === 'boolean'
	    
	    // Function
	    typeof variable === 'function'
	    
	    // Object
	    typeof variable === 'object'
	    
	    // RegExp
	    variable instanceof RegExp
	    
	    // Array
	    variable instanceof Array
	    
	    // null
	    variable === null
	    
	    // null or undefined
	    variable == null
	    
	    // undefined
	    typeof variable === 'undefined'

16. 在语句的行长度超过 120 时，根据逻辑条件合理缩进。

		示例：
		
			// 较复杂的逻辑条件组合，将每个条件独立一行，逻辑运算符放置在行首进行分隔，或将部分逻辑按逻辑组合进行分隔。
			// 建议最终将右括号 ) 与左大括号 { 放在独立一行，保证与 if 内语句块能容易视觉辨识。
			if (user.isAuthenticated()
			    && user.isInRole('admin')
			    && user.hasAuthority('add-admin')
			    || user.hasAuthority('delete-admin')
			) {
			    // Code
			}
		
			// 按一定长度截断字符串，并使用 + 运算符进行连接。
			// 分隔字符串尽量按语义进行，如不要在一个完整的名词中间断开。
			// 特别的，对于HTML片段的拼接，通过缩进，保持和HTML相同的结构。
			var html = '' // 此处用一个空字符串，以便整个HTML片段都在新行严格对齐
			    + '<article>'
			    +     '<h1>Title here</h1>'
			    +     '<p>This is a paragraph</p>'
			    +     '<footer>Complete</footer>'
			    + '</article>';
			
			// 也可使用数组来进行拼接，相对 + 更容易调整缩进。
			var html = [
			    '<article>',
			        '<h1>Title here</h1>',
			        '<p>This is a paragraph</p>',
			        '<footer>Complete</footer>',
			    '</article>'
			];
			html = html.join('');
			
			// 当参数过多时，将每个参数独立写在一行上，并将结束的右括号 ) 独立一行。
			// 所有参数必须增加一个缩进。
			foo(
			    aVeryVeryLongArgument,
			    anotherVeryLongArgument,
			    callback
			);
		
			// 也可以按逻辑对参数进行组合。
			// 最经典的是baidu.format函数，调用时将参数分为“模板”和“数据”两块
			baidu.format(
			    dateFormatTemplate,
			    year, month, date, hour, minute, second
			);
			
			// 当函数调用时，如果有一个或以上参数跨越多行，应当每一个参数独立一行。
			// 这通常出现在匿名函数或者对象初始化等作为参数时，如setTimeout函数等。
			setTimeout(
			    function () {
			        alert('hello');
			    },
			    200
			);
			
			order.data.read(
			    'id=' + me.model.id, 
			    function (data) {
			        me.attchToModel(data.result);
			        callback();
			    }, 
			    300
			);
		
			// 链式调用较长时采用缩进进行调整。
			$('#items')
			    .find('.selected')
			    .highlight()
			    .end();
			
			// 三元运算符由3部分组成，因此其换行应当根据每个部分的长度不同，形成不同的情况。
			var result = thisIsAVeryVeryLongCondition
			    ? resultA : resultB;
			
			var result = condition
			    ? thisIsAVeryVeryLongResult
			    : resultB;
			
			// 数组和对象初始化的混用，严格按照每个对象的 { 和结束 } 在独立一行的风格书写。
			var array = [
			    {
			        // ...
			    },
			    {
			        // ...
			    }
			];

##移动性能

要考虑Android低端机与2G网络场景下性能  
发布前必要检查项

1. 所有图片必须有进行过压缩
2. 考虑适度的有损压缩，如转化为80%质量的jpg图片
3. 考虑把大图切成多张小图，常见在banner图过大的场景

加载性能优化, 达到打开足够快

1. 图片使用CSS Sprites 
2. 外链 CSS 中避免 @import 引入
3. 考虑内嵌小型的静态资源内容
4. 尽量使用CSS3代替图片


运行性能优化, 达到操作足够流畅

1. 避免 iOS 300+ms 点击延时问题 注意！
2. 尽可能使用事件代理，避免批量绑定事件
3. 使用CSS3动画代替JS动画
4. 避免在低端机上使用大量CSS3渐变阴影效果，可考虑降级效果来提升流畅度
5. HTML结构层级保持足够简单，推荐不超过 5 个层级
6. 尽能少的使用CSS高级选择器与通配选择器


 





	
	

























	


