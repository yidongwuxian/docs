#  svn 分支管理#

###创建分支
	svn cp -m "create branch" http://svn_server/xxx_repository/trunk http://svn_server/xxx_repository/branches/br_feature001 

###获得分支 
	svn co http://svn_server/xxx_repository/branches/br_feature001 

###合并主干上的最新代码到分支上
	cd br_feature001 
	svn merge http://svn_server/xxx_repository/trunk 
###如果需要预览该刷新操作，可以使用svn mergeinfo命令，如：
	svn mergeinfo http://svn_server/xxx_repository/trunk --show-revs eligible
或使用
	svn merge --dry-run
选项以获取更为详尽的信息。

###分支合并到主干
###一旦分支上的开发结束，分支上的代码需要合并到主干。SVN中执行该操作需要在trunk的工作目录下进行。命令如下：
	cd trunk 
	svn merge --reintegrate http://svn_server/xxx_repository/branches/br_feature001 
###分支合并到主干中完成后应当删该分支，因为在SVN中该分支已经不能进行刷新也不能合并到主干。

###合并版本并将合并后的结果应用到现有的分支上
	svn -r 148:149 merge http://svn_server/xxx_repository/trunk

###建立tags
###产品开发已经基本完成，并且通过很严格的测试，这时候我们就想发布给客户使用，发布我们的1.0版本
	svn copy http://svn_server/xxx_repository/trunk http://svn_server/xxx_repository/tags/release-1.0 -m "1.0 released"

###删除分支或tags
	svn rm http://svn_server/xxx_repository/branches/br_feature001
	svn rm http://svn_server/xxx_repository/tags/release-1.0