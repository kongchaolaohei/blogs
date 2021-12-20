<!--
 * @Author: kongchaolaohei
 * @Date: 2021-12-20 10:21:04
 * @LastEditTime: 2021-12-20 10:35:20
 * @LastEditors: kongchaolaohei
 * @FilePath: /vuepress-note/docs/solution/other/重装mac系统xcode命令工具.md
-->

# 重装 mac 系统 xcode 命令工具

由于一些原因,我需要重装一下`xcode`命令行工具,目前找到了一种方法来重装.

```shell
# 删除现有xcode工具
sudo rm -rf /Library/Developer/CommandLineTools
# 下载xcode工具
xcode-select install
```

[可能有用的链接](https://www.imymac.com/zh-CN/mac-uninstaller/uninstall-xcode-on-mac.html)
