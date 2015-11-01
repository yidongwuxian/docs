# web前端编码规范 #

### Edit:    xingyang  ###
### Email:   xingyang@coamc.com  ###
### Version:  1.0  ###


## HTML相关：##

1. body,html标签里不要加样式。
2. HTML页面当中尽量用class，少用id，id适用于做脚本绑定元素时使用。
3. 使用四个空格的 soft tabs。
4. 嵌套的节点应该缩进（四个空格）。
5. 在属性上，使用双引号，不要使用单引号。
6. 不要忽略可选的关闭标签（例如，</li> 和</body>）。
7. HTML页面不要写行内样式，应写到css文件里，用link rel引入。
    
	######不规范的:#####
		<div style="width:100%;float:left;background-color: #fff">
    	…
    	</div>

	#####规范的:#####
		<div class="moudleBox1"></div>
		index_main.css
		.moudleBox1{ 
			width:100%;
			float: left;
			background-color: #fff 
		}
8.	当表示“<”或“>”是要用
		`&lt;或& gt;`来表示。
9. html标签不要用大写，要用小写表示。
	##### 如表示段落用 #####
		<p></p>
   ######不提倡用  
		<P></P>
10. 模块间要加注释标明模块的具体含义。
	
		<!-- header start -->
		<div class="nav">
		    ...
		</div>
		<!-- header end -->

11. 为了避免IE的诡异模式，要在 header 头部里加入：
	
	`<meta http-equiv="X-UA-Compatible" content="IE=edge" />`

	

## css相关： ##
1. class命名
	
	不要用left，right等抽象的动词，很容易造成代码互相覆盖，建议用表示具体模块用途的名词来表示。
  
 
	######不建议用
 
`如：.Crumbs_Left, .Crumbs_Right`

    命名可以采用模块的前两个字母+具体功能名称结合使用：

	如表示平台安全模块里面的内容（platform_ safe_content）

    用pl_cn 来表示。

	尽量采用短命名且有意义的命名，单词首字母小写。

	避免过度使用简写。.btn 可以很好地描述 button，但是 .s 不能代表任何元素。

2.不要用同名样式名。

3.声明顺序

#####相关的属性声明应该以下面的顺序分组处理：
1. Positioning
2. Box model 盒模型
3. Typographic 排版
4. Visual 外观
		
		.declaration-order { /* Positioning */ position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: 100; /* Box-model */ display: block; float: right; width: 100px; height: 100px; line-height: 1.5; text-align: center; /* Typography */ font: normal 13px "Helvetica Neue", sans-serif;  color: #333;  /* Visual */ background-color: #f5f5f5; border: 1px solid #e5e5e5; border-radius: 3px; /* Misc */ opacity: 1; }

    大致顺序是：

    	.wx_fisp{ position:relatvie; float:left; width:200px; height:200px; line-height:center; text-align:center; color:#000; font:16px "SimSun"; }


	完整的属性和顺序请参考以下：
		
		var order = [ 'position' , 'top' , 'right' , 'bottom' , 'left' , 'z-index' , 'display' , 'float' , 'width' , 'height' , 'max-width' , 'max-height' , 'min-width' , 'min-height' , 'padding' , 'padding-top' , 'padding-right' , 'padding-bottom' , 'padding-left' , 'margin' , 'margin-top' , 'margin-right' , 'margin-bottom' , 'margin-left' , 'margin-collapse' , 'margin-top-collapse' , 'margin-right-collapse' , 'margin-bottom-collapse' , 'margin-left-collapse' , 'overflow' , 'overflow-x' , 'overflow-y' , 'clip' , 'clear' , 'font' , 'font-family' , 'font-size' , 'font-smoothing' , 'osx-font-smoothing' , 'font-style' , 'font-weight' , 'hyphens' , 'src' , 'line-height' , 'letter-spacing' , 'word-spacing' , 'color' , 'text-align' , 'text-decoration' , 'text-indent' , 'text-overflow' , 'text-rendering' , 'text-size-adjust' , 'text-shadow' , 'text-transform' , 'word-break' , 'word-wrap' , 'white-space' , 'vertical-align' , 'list-style' , 'list-style-type' , 'list-style-position' , 'list-style-image' , 'pointer-events' , 'cursor' , 'background' , 'background-attachment' , 'background-color' , 'background-image' , 'background-position' , 'background-repeat' , 'background-size' , 'border' , 'border-collapse' , 'border-top' , 'border-right' , 'border-bottom' , 'border-left' , 'border-color' , 'border-image' , 'border-top-color' , 'border-right-color' , 'border-bottom-color' , 'border-left-color' , 'border-spacing' , 'border-style' , 'border-top-style' , 'border-right-style' , 'border-bottom-style' , 'border-left-style' , 'border-width' , 'border-top-width' , 'border-right-width' , 'border-bottom-width' , 'border-left-width' , 'border-radius' , 'border-top-right-radius' , 'border-bottom-right-radius' , 'border-bottom-left-radius' , 'border-top-left-radius' , 'border-radius-topright' , 'border-radius-bottomright' , 'border-radius-bottomleft' , 'border-radius-topleft' , 'content' , 'quotes' , 'outline' , 'outline-offset' , 'opacity' , 'filter' , 'visibility' , 'size' , 'zoom' , 'transform' , 'box-align' , 'box-flex' , 'box-orient' , 'box-pack' , 'box-shadow' , 'box-sizing' , 'table-layout' , 'animation' , 'animation-delay' , 'animation-duration' , 'animation-iteration-count' , 'animation-name' , 'animation-play-state' , 'animation-timing-function' , 'animation-fill-mode' , 'transition' , 'transition-delay' , 'transition-duration' , 'transition-property' , 'transition-timing-function' , 'background-clip' , 'backface-visibility' , 'resize' , 'appearance' , 'user-select' , 'interpolation-mode' , 'direction' , 'marks' , 'page' , 'set-link-source' , 'unicode-bidi' , 'speak' ]
		
      

4.选择器

	使用 classes 而不是通用元素标签来优化渲染性能。
	避免在经常出现的组件中使用一些属性选择器 (例如，[class^="..."])。浏览器性能会受到这些情况的影响。
	减少选择器的长度，每个组合选择器选择器的条目应该尽量控制在 3 个以内。
	只在必要的情况下使用后代选择器 (例如，没有使用带前缀 classes 的情况).

5.注释规范：

#####文件顶部注释
	/*
	* @description: 模块名称
	* @author: xingyang
	* @update: 2015-10-30 18:32
	*/

#####模块注释
	/* module: module1 by  xingyang */ 
	/* module: module2 by sunshilang */

6.编辑器配置

6.1 使用四个空格的 soft-tabs。
	
6.2 设置文件编码为 UTF-8。
 
	@charset "utf-8";

7.css文件里的中文字体都用英文来表示：
	
#####如：微软雅黑，宋体，黑体
	font-family:"microsoft yahei","SimSun","SimHei";

8.css文件里的注释要用英文，注释内容代表所做模块的名称。
	
######例如：
	
	/* crumbs */  
	/* platform_safe */

9.前缀属性

当使用厂商前缀属性时，通过缩进使取值垂直对齐以便多行编辑。

    /* Prefixed properties */ .selector { -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.15); box-shadow: 0 1px 2px rgba(0,0,0,.15); }

10.一个标签上引用的className不要过多，越少越好。
    
########不要出现这种情况：
	<div class="class1 class2 class3 class4"></div>

## js相关：##
1. 普通局部变量小写英文，如果需要组合，使用驼峰命名写法。
	
	`var siteMap = {};`

2. 标点后面加一个空格，前面不加空格; 操作符前后各加一个空格;
	
######不规范
	for (var i=0;i<l;i++) { 
		...
	}
#####规范
	for (var i = 0; i < l; i++) {  
		...
	}

3.缩进
	 
	使用 4 个空格做为一个缩进层级，不允许使用 2 个空格 或 tab 字符。
	
		// good
		switch (variable) {
		
		    case '1':
		        // do...
		        break;
		
		    case '2':
		        // do...
		        break;
		
		    default:
		        // do...
		
		}
		
		// bad
		switch (variable) {
		
		case '1':
		    // do...
		    break;
		
		case '2':
		    // do...
		    break;
		
		default:
		    // do...
		
		}

4.在对象创建时，属性中的 : 之后必须有空格，: 之前不允许有空格。
		
		示例：

		// good
		var obj = {
			a: 1,
			b: 2,
			c: 3
		};
		
		// bad
		var obj = {
			a : 1,
			b:2,
			c :3
		};


5.函数声明、具名函数表达式、函数调用中，函数名和 ( 之间不允许有空格。
		
		示例：

	    // good
	    function funcName() {
	    }
	    
	    var funcName = function funcName() {
	    };
	    
	    funcName();
	    
	    // bad
	    function funcName () {
	    }
	    
	    var funcName = function funcName () {
	    };
	    
	    funcName ();

6., 和 ; 前不允许有空格。
	    	
		示例：
	    
	    // good
	    callFunc(a, b);
	    
	    // bad
	    callFunc(a , b) ;


7.在函数声明、函数表达式、函数调用、对象创建、数组创建、for语句等场景中，不允许在 , 或 ; 前换行。

		示例：
		
		// good
		var obj = {
		    a: 1,
		    b: 2,
		    c: 3
		};
		
		foo(
		    aVeryVeryLongArgument,
		    anotherVeryLongArgument,
		    callback
		);
		
		
		// bad
		var obj = {
		    a: 1
		    , b: 2
		    , c: 3
		};
		
		foo(
		    aVeryVeryLongArgument
		    , anotherVeryLongArgument
		    , callback
		);

8.在语句的行长度超过 120 时，根据逻辑条件合理缩进。

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

9.不得省略语句结束的分号。

10.函数名 使用 动宾短语。

    示例：
    
    function getStyle(element) {
    }

11.boolean 类型的变量使用 is 或 has 开头。

    示例：
    
    var isReady = false;
    var hasMoreCommands = false;


12.类型检测优先使用 typeof。对象类型检测使用 instanceof。null 或 undefined 的检测使用 == null。

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


13.转换成 string 时，使用 + ''。
	
	示例：
    
    // good
    num + '';
    
    // bad
    new String(num);
    num.toString();
    String(num);


14.转换成 number 时，通常使用 +。

	示例：

    // good
    +str;
    
    // bad
    Number(str);

15.string 转换成 number，要转换的字符串结尾包含非数字并期望忽略时，使用 parseInt。

    示例：
    
    var width = '200px';
    parseInt(width, 10);


16.使用 parseInt 时，必须指定进制。

	示例：
    
    // good
    parseInt(str, 10);
    
    // bad
    parseInt(str);


17.转换成 boolean 时，使用 !!。

	示例：

    var num = 3.14;
    !!num;


18.number 去除小数点，使用 Math.floor / Math.round / Math.ceil，不使用 parseInt。

	示例：

    // good
    var num = 3.14;
    Math.ceil(num);
    
    // bad
    var num = 3.14;
    parseInt(num, 10);


19.字符串开头和结束使用单引号 '。

	示例：

	var str = '我是一个字符串';
	var html = '<div class="cls">拼接HTML可以省去双引号转义</div>';


20.遍历数组不使用 for in。

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

21.清空数组使用 .length = 0。