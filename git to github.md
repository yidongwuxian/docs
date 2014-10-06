#用git到github新增文件和更新文件的方法
1.1新增文件方法
1.用git bash敲命令

     $ cd ~/.ssh

2.新建一个存放代码的文件夹（例如：H:）

    cd H:
切换到H盘

3.用git clone命令把线上代码下载到本地。（现在下载的是线上docs项目）

    $ git clone https://github.com/yidongwuxian/docs.git
4.进入本地相应文件夹

    cd docs

5.根据需求新增文件或修改文件

6.git status看下变动状态。

    $ git status
7.git add添加文件

       $ git add 1.txt 

8.commit 确认文件，把文件放到暂存区里。（如未设置邮箱和账户名，需要先配置，才能执行commit文件）

    $ git commit -m '测试'

9.执行git push 把本地文件推送到服务器上。

    $ git push
2.1更新文件方法

1.可以先在服务器线上将文件删除，然后执行git pull同步本地文件就可以了。（比如删除线上文件1.txt）

	$ git pull

2.如多人开发一个项目，只能采取把项目先git clone到本地，在依次修改，git add,git commit -m "#xxx",git push

