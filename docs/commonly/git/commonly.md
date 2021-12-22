<!--
 * @Author: kongchaolaohei
 * @Date: 2021-08-23 14:12:05
 * @LastEditTime: 2021-12-20 16:20:12
 * @LastEditors: kongchaolaohei
 * @FilePath: /vuepress-note/docs/commonly/git/commonly.md
-->

# git 常用操作

## 在本地仓创建关联远程仓库分支

```shell
git checkout -b localBranch origin/originBranch
git checkout -b [本地分支名] [远程源的名称]/[要跟踪的远程分支的名称]
```

## 回退版本后,想要找回会退的版本

当回退一个或多个版本后,想找回指定的版本可以以使用,`reflog`来查询一下自己想要恢复的版本号

```shell
# 使用git reflog之后可以查看所有的commit(包括删除或reset的)记录了,唯一指定后悔药)
git reflog
```

## git stash 的一些用途

当正在写一个`feature`或者`fixbug`时突然有其他的事情要去改代码,还是菜鸡的我总是先先提交一个`commit`之后,在去其他分支处理问题,这是如果用`git stash`命令那么又可以将代码纳入到缓存中,等处理完其他事情之后再从缓存中取出,不用在产生一个额外的`commit`记录了

```shell
# 将当前代码放入缓存
git stash

# 将代码弹出缓存
git stash pop

# 查看自己的缓存列表
git stash show

# 清除缓存中的所有代码
git stash clear
```

## 一个本地仓库同时关联多个远程仓库

实际开发中又遇到了,一个本地仓库需要同时维护好两个先上仓库的情况,解决方案就是`git remote`

```shell
# 第一部查看本地仓库关联的远程仓库信息
git remote -v
# origin  xxxxxx/xxxx.git (fetch)
# origin  xxxxxx/xxxx.git (push)

# 第二部添加自己需要关联的远程仓库
git remote add origin xxxxx.git
# git remote add [远程库源的名称] [远程库源的地址]

# 在提交本地仓改变的时候
git push --set-upstream origin xxx
# git push --set-upstream [远程库源名称] [目标远程分支名称]
# 提交时需要指定你要交到哪个仓库

# 在拉去远程仓库改变的时候
git pull origin xxx
# git pull [远程库源名称] [目标远程分支名称]
# 拉取时需要指定你要拉取哪一个仓库的哪一个分支
```
