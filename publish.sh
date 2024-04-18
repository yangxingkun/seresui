#!/usr/bin/env sh

# 忽略错误
# set -e

# 构建
pnpm run build:seres_ui &&
# 切换官方源
pnpm config set registry https://registry.npmjs.org &&
# 版本发布
pnpm run publish:seres_ui &&
# 切回淘宝源
pnpm config set registry https://registry.npmmirror.com

# cd -