# 监听DOM尺寸变化

# ResizeObserver
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver)

创建一个`ResizeObserver`对象,声明要使用的回调函数,之后设置要监听的对象,如下使用部分`Vue3`代码举例

``` ts
// echarts图表DOM实例ref
const echartsRef = ref<HTMLElement>()
const resizeObserver = new ResizeObserver(_.debounce(entries => {
  for (let entry of entries) {
    const boxEl = entry.target;
    const dimensions = entry.contentRect;
    console.log(boxEl,`${dimensions.width} x ${dimensions.height}`);
    myCharts.value?.resize()
  }
}, 200));
...
onMounted(() => {
  resizeObserver.observe(echartsRef.value);
})
...
onUnmounted(() => {
  resizeObserver.disconnect()
})
```

::: warning
MDN提示这是一个实验中的功能,由于该功能对应的标准文档可能被重新修订，所以在未来版本的浏览器中该功能的语法和行为可能随之改变。
:::