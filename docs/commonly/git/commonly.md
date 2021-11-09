<!--
 * @Author: kongchaolaohei
 * @Date: 2021-08-23 14:12:05
 * @LastEditTime: 2021-11-09 14:50:38
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
