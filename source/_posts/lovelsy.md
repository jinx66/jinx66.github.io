---
title: Lsy💗💗💗💗
date: 2024-09-26 1:27:32
categories:
  - 日常
tags:
  - Python

sticky: 10

thumbnail: "thumbnail.jpg #2f76d7"
---

## Chrome Devtools 的用处

- 前端开发：开发预览、远程调试、性能调优、`bug`跟踪、断点调试等
- 前端开发：开发预览、远程调试、性能调优、bug跟踪、断点调试等
- 后端开发：网络抓包、开发调试Response
- 测试：服务端`API`数据是否正确、审查页面元素样式及布局、页面加载性能分析、自动化测试
- 其他：安装扩展插件，如`AdBlock、Gliffy、Axure`等

## 菜单面板拆解

- `Elements` - 页面dom元素
- `Console` - 控制台
- `Sources` - 页面静态资源
- `Network` - 网络
- `Performance` - 设备加载性能分析
- `Application` - 应用信息，PWA/Storage/Cache/Frames
- `Security` - 安全分析
- `Audits` - 审计，自动化测试工具

我的移动端网页[jinx66](https://jinx66.gitee.io/)

![图片变灰色点一下也能看..](post/chrome/ebded4d78c50b3b3244d0c9c4586891.png)

## 使用技巧

- 打印对象的小技巧

之前的打印是

```javascript
console.log('hello', hello);
console.log('world', world);
```
高级点的打印是

```javascript
console.log({hello, world});
```
这样就看到key和value了

- `getEventListeners（object）`：获取指定对象的绑定事件

`getEventListeners(object)`返回在指定对象上注册的事件侦听器。返回值是一个对象，其中包含每个已注册事件类型（例如，`click`或`keydown`）的数组。每个数组的成员是描述为每种类型注册的侦听器的对象。

- 变量打印：`%s、%o、%d、`和`%c`

```javascript
const text = "文本1"
console.log(`打印${text}`)
```
还有比较特殊的`%c`，可用于改写输出样式。
这是我网站console.log打印的，f12可以看

```javascript
  console.log(
    "%c Jinx天天开心哈哈哈哈哈哈 %c https://jinx66.gitee.io/",
    "color:#fff;font-size: 14px;font-family: serif;background:linear-gradient(90deg,#ff4d91,#ff4d91);padding:15px 10px;",
    "color:#000;background:linear-gradient(90deg,#ff4d91,#ffffff);padding:15px 10px;font-size: 14px;font-family: serif;"
  );
```
你还可以这么玩：

```javascript
console.log('%c Auth ', 
            'color: white; background-color: #2274A5', 
            'Login page rendered');
console.log('%c GraphQL ', 
            'color: white; background-color: #95B46A', 
            'Get user details');
console.log('%c Error ', 
            'color: white; background-color: #D33F49', 
            'Error getting user details');
```
```javascript
console.log('%c 想 ', 
            'color: white; background-color: #ff4d91', 
            'miss');
console.log('%c 你 ', 
            'color: white; background-color: #ff4d91', 
            'you');
console.log('%c 了 ', 
            'color: white; background-color: #ff9dc2', 
            '！！！！');
```

![图片变灰色点一下也能看..](post/chrome/424080ffebe1dac8d0bbef558077605.png)

后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...后面的有空的话会更新...
 