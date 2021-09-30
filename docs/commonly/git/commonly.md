# git常用操作
## 在本地仓创建关联远程仓库分支

```shell
git checkout -b localBranch origin/originBranch
git checkout -b [本地分支名] [远程源的名称]/[要跟踪的远程分支的名称]
```

## 回退版本后,想要找回会退的版本

当回退一个或多个版本后,想找回指定的版本可以以使用,`reflog`来查询一下自己想要恢复的版本号
```shell
# 使用git reflog之后可以查看所有的commit(包括删除或reset的)记录了,唯一指定后悔药
git reflog
```

## git stash的一些用途


