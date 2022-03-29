---
tags: echarts
---

# echarts实例更新致datazoom重置

## 问题描述

再需要实时数据或其他场景需要不停使用`setOption`更新`echarts`是例时,如果使用了`datazoom`工具会导致,每当`echarts`实例更新时`datazoom`工具的状态被重置.

## 解决方法

[文档](https://echarts.apache.org/zh/api.html#events.datazoom)

自己维持一个`datazoom`的状态,在`echarts`实例更新的时候传入`setOption`中;实现需要使用`echarts`自有事件`datazoom`事件来监听`datazoom`的变化代码如下.

```js
myCharts.value.on('dataZoom',function(event){
  if(event.batch){
    dataZoomLimit.value.start = event.batch[0].start;
    dataZoomLimit.value.end = event.batch[0].end;
  }else{
    dataZoomLimit.value.start = event.start;
    dataZoomLimit.value.end = event.end;
  }
})
```
