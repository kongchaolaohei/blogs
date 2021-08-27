# transform

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)
[兼容性](https://caniuse.com/?search=transform)

transform的变形套路主要是坐标的变换和3d透视的效果来使目标DOM变成一些不规则的图形

::: tip
由transform变换可以使盒模型也跟着变换.
:::

## skew

在需要平行四边形的按钮时,如果有视图范围和交互范围一致时,skew就非常的好用了

```html{8,16}
<style>
  .parallelogram {
    height: 100px;
    width:  200px;
    position: relative;
    background-color: aqua;
    font-size: 30px;
    transform: skewX(-45deg);
    transform-origin: bottom left;
  }
  .parallelogram>span {
    position: absolute;
    top: 50%;
    left: calc(50% + 21px);
    transform: skewX(45deg) translate(-50%, -50%);
  }
</style>
<div class="parallelogram">
  <span>parallelogram</span>
</div>
```

::: tip
值得注意的是在使用skew时会使目标DOM以及所有子孙元素都产生偏转,导致内容也会也会变形;
所以需要在一个适当的元素上在使用完全相反的skew来抵消形变,使内容正常的显示,如上方代码高亮处所示
:::