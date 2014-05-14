###1.新建一个shell文件
    touch xx(mydemo).shell

###2.打开vi编辑器
	vi
### 按i键切换为插入模式
###在vi里面编辑相关命令
	# !/bin/bash/ 
 	cd 20140409/
    vi demo2.html
    echo "success"
    #end 
	
###编辑完成后，先按ESC键，切换为命令模式，然后按shift+w+q+!保存并退出

###3.给shell文件增加执行权限
	chmod +x mydemo.sh

###4.执行shell文件
     sh ./mydemo.sh
	