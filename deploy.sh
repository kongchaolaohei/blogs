#!/usr/bin/env sh
###
# @Author: kongchaolaohei
# @Date: 2021-10-06 11:42:59
# @LastEditTime: 2021-11-09 16:11:00
# @LastEditors: kongchaolaohei
# @FilePath: /vuepress-note/deploy.sh
###

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run docs:deploy

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:kongchaolaohei/blogs.git master:blogs

cd -

rm -rf docs/.vuepress/dist
