# Linux基础知识

## 目前了解到的命令

### cd

这个是基本操作就不多讲了
```shell
cd ~        # 到root目录下
cd /			  # 到根目录
cd xxx/xxx  # 到指定目录
cd ../			# 到上一级目录
```

### mv

移动文件
```shell
mv [options] source dest
```

`mv`命令的几种情况

| 命令模式                                   | 命令行为                             |
| ------------------------------------------ | ------------------------------------ |
| mv source_file(源文件) dest_file(目标文件) | 将source_file文件名改为dest_file文件 |
| mv source_file(源文件) dest_dir(目标目录)  | 将source_file文件移动到dest_dir目录  |
| mv source_dir(源目录) dest_dir(目标目录)   | 将source_dir目录移动到dest_dir目录   |
| mv source_dir(源目录) dest_file(目标文件)  | 这个操作不合法                       |

### tar

按我目前的理解是`tar`一个打包命令

```shell
tar [options] [params]

# 我目前为止用过的
# 压缩
tar -czvf source_file|source_dir(可以使目录也可以是文件) dest_file.tar.gz
# 解压
tar -xzvf source_file.tar.gz source_dir(可选参数)

```
文档里有超级多的参数,不过我目前用到的只有其中几个

| 参数                              | 说明                                                         |
| --------------------------------- | ------------------------------------------------------------ |
| -c 或 --create                    | 建立新的备份文件(其中的**备份文件应该指的是`.tar`为后缀的文件**) |
| -x 或 --extract或 --get           | 从备份文件中还原文件                                         |
| -z 或 --gzip或 --ungzi            | 用gizp命令来处理备份文件                                     |
| -v                                | 显示操作过程                                                 |
| -f< 备份文件>或--file=< 备份文件> | 指定备份文件                                                 |

### ./configure make make install

这个就安装`nginx`弄了一次,还是看了同事的小抄(文档),当时没看懂这三个命令是干啥的,所以查了查:[参考文章](https://www.cnblogs.com/tinywan/p/7230039.html).

`./configure`简单来说就是生成一个**makefile**文件的命令,可以添加参数控制行为.

`make`就是编译了,不过这个命令能执行的前提是有**makefile**文件

`make install`就是安装了

### rm

`rm`删除文件或目录,这个命令可就用的多了(经常用来删除`node_modules`)

听同事的告诫: **删除目录时尽量用绝对路径(相对路径一旦写错,容易勿删其他目录的问题)**

```shell
rm [options] [file/dir]
```

| 参数 | 作用                                                         |
| ---- | ------------------------------------------------------------ |
| -i   | 删除前逐一询问                                               |
| -r   | 将目录及以下之档案亦逐一删除(如果删除的是目录就必须加这个参数) |
| -f   | 即使原档案属性设为唯读，亦直接删除，无需逐一确认             |

### ps

`ps`查看当前进程状态,类似任务管理器

```shell
ps [options] [--help]

# 模糊查询进程信息
# 其中grep为另一个linux命令 模糊查询
ps -ef | grep [进程名]
ps -ef | grep nginx
```

::: tip 
注意使用`grep`模糊查询进程时如果只出现了一条进程信息且是

`root 16937 16741 0 16:22 pts/1 00:00:00 grep --color=auto nginx`

类似情况, 说明没有你想要找到的进程信息(这个是grep查找自身产生的进程)
:::

| 参数     | 作用                                           |
| -------- | ---------------------------------------------- |
| -e 或 -A | 列出所有进程                                   |
| -f       | 全量的进程信息格式化(会多出一些信息比如日期等) |
| -aux     | 显示所有包含其他使用者的行程                   |

### wget

linux一般自带的工具 [官方手册](https://www.gnu.org/software/wget/manual/wget.html)

```shell
wget [options] [URL]

# 下载
wget http://www.baidu.com/index.html
# 下载为指定文件名的文件
# 将index.html下载为one.html
wget -O one.html http://www.baidu.com/index.html
```

总结一些之后可能会用的参数

| 参数        | 说明               |
| ----------- | ------------------ |
| -O          | 以不同的文件名保存 |
| -limit-rate | 限速下载           |
| -b          | 后台下载           |

### unzip zip
`unzip`解压文件
`zip`压缩文件或目录

```shell
# 解压文件
unzip source_file

# 解压到指定目录
unzip -d source_file dest_dir

# 压缩指定文件
zip source_file(要压缩的文件) name(压缩后的名称,可选)

# 压缩指定目录
# 如果是目录需要加-r 否则他只压缩这个目录,目录下的东西不压缩
zip -r source_dir(要压缩目录) name(压缩后的名称,可选)
```


