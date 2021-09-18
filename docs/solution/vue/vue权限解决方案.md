# 相对复杂的权限解决方案

## 需求: 

- 利用现有的**upm**系统实现权限系统
- 支持多角色
- 权限的控制需要精确到功能性按钮级别
- 其他如无权限页等的基本操作

## 解决核心功能需要用到的工具

- [vue-router](https://router.vuejs.org/zh/) 
- [vuex](https://vuex.vuejs.org/zh/)
- [axios](http://www.axios-js.com/)
- [localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)



## 解决方案拆解

涉及到网站权限的实现那么,在Vue这个框架下,第一个想到的就是`vue-router`,以及`vue-router`中的`router.beforEach`,以我现在浅薄的经验来看,这两样东西基本上是绕不过去的必经之路;那么下面我将尝试拆解一下具体的解决思路.

### 登陆状态记录

比较简单的功能, 通过**upm**登录接口获取`token`存入`localStorage`,再通过`axios`封装的接口统一携带登陆信息.根据处理方式的不同可以使用不同的方式,我们目前采用的是将登录信息在`header`中携带.
```ts
const service = axios.create()
// 两种存取方式随便选一个就是
// 第一种 直接更改默全局配置
service.defaults.headers['xxx-token'] = localStorage.getItem('xxx-token') || undefined
// 第二种 在拦截器中配置 如果有其他特殊要求可以更灵活一些
service.interceptors.request.use(
  config => {
    config.headers['xxx-token'] = localStorage.getItem('xxx-token') || undefined
    return config
  },
  error => {
    console.error(error);
    return Promise.reject(error)
  }
)
```

### 动态路由处理
我总共使用过以下两种方式,不同的方式遇到的问题也是不一样的,(曾今也有不用动态路由做权限的黑历史,这种就不算了)
#### 按需增加路由
这个实现思路就是,在config文件中预置**公用路由**和**全量的权限路由**,调用**upm**角色权限接口中的权限列表和**全量的权限路由**进行过滤,之后和公用路由合并产生一个可用的路由列表, 这样无权限的路由就不会存在于生成的权限路由之中.(在执行该方法时主要利用的是`router.addRoute`这个API),

::: warning 遇到的问题

1. 使用这个方法时遇到了404和无权限访问路由的区分问题, 因为使用这个方法动态添加路由时, 没有权限的路由会被过滤掉, 根本不会添加到路由表里, 这样该状态和404状态就会混淆, 所以不得不再次引入**全量权限路由** 进行对比之后在判断, 该去404页面或是无权限页面.
2. 如果设计的页面权限无法覆盖到每一个路由的话, 那么需要根据具体的情况和规律来过滤路由,这个需要在设计路由和权限的关系之前需要考虑好

:::

#### 更改重定向

这个的实现思路的第一部,同样是将**公共路由**和**全量的权限路由**分别单独准备好,但是在过滤权限的时候**不是将其删除,而是设置路由中的`redirect`属性**来实现权限的控制(这样可以有效的分开404和其他状态);亲测优于第一种.

::: warning 遇到的问题

1. 遇到的问题如上述第二条一样,在设计之初要想好怎么组织权限和路由的关系

:::

### 项目中各种行为的处理

这个的话就得根据项目需求的各种奇怪要求来对症下药了,我这里总结一下解决的途径.

对于一些单纯用路由配置本身解决不了的问题,我目前的解决方案就是**`router.beforeEach`**和**`vuex`**的配合完成,有些情况还会需要`Axios`来配合

## 我的总结

### 慎用router.beforeEach中的next()方法

在处理一些需要使用路由守卫`router.beforeEach`解决的问题时,必不可少的就是`next()`的使用了,要注意调用`next()`之后的去向,在写这一部分的代码是,进场会进入死循环导致栈溢出.

### 关于用于指定路由唯一标识属性的选择

这个由于当初经验不足, 是通过路由中的`path`属性作为key来过滤路由,给自己添加了许多的麻烦(最好不要用path来当做key使用);后来使用`meta`属性自定义key来过滤路由,这个我觉得没有什么太大的问题,更灵活自由一些;还有就是使用`name`属性作为key这个也是非常不错的选择,因为在`vue-router`的文档中说明,每人一个`route`的`name`属性都是全局唯一的.

### 关于用户正常退出时,路由权限重置的方式

在用户正常退出之后,更换账号登录之后,需要重置一次权限路由.

根据`vue-router 3.x` 的文档中有关于 `router.addRoute`API的描述,当添加`name`相同的`route`会覆盖原来的`route`;这当时给我提供了思路,但是实测发现这个覆盖并不生效**(目前我还不知道为什么不生效,可能是我操作不对的原因?)**;

于是我尝试了另一种方法
```ts
(router as any).matcher = (createNewRouter(routes) as any).matcher
```
使用`matcher`方法来重置路由后,再重新添加一遍权限路由来实现,但是这个方法总觉得是歪门邪道,[github-issue](https://github.com/vuejs/vue-router/issues/1234) 即使参考了这个issue我还是有一些疑惑,希望大佬有一些好的指点吧

不过听同事在`vue 3.x`中使用的 `vue-router 4.x` 中的 `removeRoute()`和`addRoute()` 配合起来可以解决这个问题, 不过我还没有抽时间亲手试一试.


