# clip-path

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)
[兼容性](https://caniuse.com/?search=clip-path)

::: tip 
值得注意的是该属性达到的效果相当于一个可自定义图形的`overflow: hidden`,并不会切割盒模型;
:::

目前我用到的属性有`inset`,`circle`,`polygon`,`ellipse`,`path(目前不会用)`

我们先写一个测试样例
@[code{10-28}](./clip-path.html)

## inset 矩形

参数: `inset(<shape-arg>{1,4} [round <border-radius>]?)`

简单的说就是 inset(top right bottom left round radius);其中 top,right,bottom,left指的是元素上下左右边与相关盒模型的距离 round 后面的参数则指的是圆角

:::: code-group
::: code-group-item 无可选参数
@[code{30-35}](./clip-path.html)
:::
::: code-group-item 有可选参数
@[code{37-42}](./clip-path.html)
:::
::::

## circle 圆形

参数: `circle( [<shape-radius>]? [at <position>]? )`

简单说就是 circle(半径 at 圆心定位);其中圆心定位是可选的

:::: code-group
::: code-group-item 无可选参数
@[code{44-49}](./clip-path.html)
:::
::: code-group-item 有可选参数
@[code{51-56}](./clip-path.html)
:::
::::

## polygon 多边形

参数: `polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# )`

简单说就是 polygon([填充规则](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule), 路径点) 有点像canvas的画笔

:::: code-group
::: code-group-item 无可选参数
@[code{58-63}](./clip-path.html)
:::
::: code-group-item 有可选参数
@[code{65-70}](./clip-path.html)
:::
::::