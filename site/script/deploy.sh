#!/usr/bin/env sh

# 忽略错误
# set -e

# 构建
pnpm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist


git init

# git branch -m main master

git remote add seres https://gitee.com/con-booklover/seres.git
# git remote set-url seres https://gitee.com/seresui/seres.git

git remote -v

git add -A

git commit -m 'deploy'


# git branch

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
git push -f seres master:gh-pages
# 退出到本项目根目录

cd -

# 如果你只写 git push seres master，则默认推送 master 分支到远程的同名分支（也就是 seres 上的 master 分支）。
# 使用 master:gh-pages 表明你要推送的本地分支和远程分支名称不同

