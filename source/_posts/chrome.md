---
title: Chrome Devtools 日常使用
date: 2024-12-22 19:57:32
categories:
  - 教程
tags:
  - Chrome
sticky: 1

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

后面的有空的话会更新...
 
` 2024年1月29日更`

` ===============================================================================================`

 
 一年没更...最近项目中用到了console.log才想起这篇文章，小更一下

 ## 起因

 因为我们前端一般是打包前端项目给后端，让后端帮忙发包，不是用jekins自动化部署，往往人为操作会导致打包命令打错或者是发包的时候没有找到正确目录，就会出现前后端互相甩锅的情况，前端说后端解压有问题，后端说前端打的包有问题，于是我就在每次打包的时候添加console.log信息以便于确认页面是否更新成功。在 Vue 2 项目中，你可以通过自定义 Webpack 的配置，在打包时将打包信息（如时间戳或 Git 提交哈希）嵌入到文件中。这种方式可以用来追踪版本变化。

 ## 配置文件

- 在 `vue.config.js` 中添加打包信息
如果你的项目使用 `Vue CLI`，可以在 `vue.config.js `中扩展 Webpack 配置：

```javascript
const webpack = require('webpack');
const dayjs = require('dayjs'); // 用于格式化日期
const childProcess = require('child_process'); // 获取Git信息

module.exports = {
  configureWebpack: config => {
    // 获取Git哈希值
    const gitHash = childProcess.execSync('git rev-parse --short HEAD').toString().trim();
    // 打包时间
    const buildTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

    return {
      plugins: [
        new webpack.DefinePlugin({
          // 定义全局变量
          'process.env': {
            VUE_APP_BUILD_TIME: JSON.stringify(buildTime),
            VUE_APP_GIT_HASH: JSON.stringify(gitHash),
          },
        }),
      ],
    };
  },
};
```

- 在代码中使用打包信息

我是加在了`app.vue`文件上


```javascript


<template>
  <div>
    // 这里省略掉app.vue的内容
    <!-- <p>打包时间：{{ buildTime }}</p>
    <p>Git哈希值：{{ gitHash }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      buildTime: process.env.VUE_APP_BUILD_TIME,
      gitHash: process.env.VUE_APP_GIT_HASH,
    };
  },
  mounted() {
    console.log(
        `%c ${打包日期:} %c ${this.buildTime} `,
        'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
        'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
      )
  }
};
</script>
```
 ## 打印结果

- 这是我项目中的打印结果，我去掉了哈希值的打印

![图片变灰色点一下也能看..](post/chrome/ee4b413660d4c6f905737781fd12d0c.png)
 

 也可以加入版本号，至于什么时候需要添加版本号呢，当下面这种情况可以使用

 ## 在用户浏览页面时检测到页面已经有新的版本，并提示用户刷新获取最新页面

 - 修改 vue.config.js

在 `vue.config.js` 中，利用 Node.js 写入一个新的 `version.json` 文件，每次打包时动态更新文件内容。

```javascript

const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const gitHash = require('child_process').execSync('git rev-parse --short HEAD').toString().trim();
const buildTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

// 生成 version.json 文件
const versionInfo = {
  buildTime,
  gitHash,
};

fs.writeFileSync(
  path.resolve(__dirname, 'public/version.json'),
  JSON.stringify(versionInfo, null, 2),
  'utf-8'
);

module.exports = {
  publicPath: process.env.VUE_APP_URL_PREPEND,
  // 其他配置...
};
```

 - 自动生成的 version.json 文件内容

 每次运行 `npm run build `时，会生成或更新` public/version.json` 文件：

```javascript

 {
  "buildTime": "2024-12-22 14:30:00",
  "gitHash": "a1b2c3d"
}
```
 - 前端检测逻辑
在前端代码中保持定时检查 version.json 文件的逻辑不变，具体代码如下：

```javascript

setInterval(async () => {
  try {
    const response = await fetch('/version.json');
    const latestVersion = await response.json();

    const storedVersion = JSON.parse(localStorage.getItem('appVersion') || '{}');
    
    if (latestVersion.gitHash !== storedVersion.gitHash) {
      this.$message.warning('有新版本发布，请刷新页面！')
      localStorage.setItem('appVersion', JSON.stringify(latestVersion));
    }
  } catch (error) {
    console.error('版本检测失败:', error);
  }
}, 60000); // 每分钟检查一次

```

## 优势
 - 全自动化：无需手动修改 version.json，版本信息在打包时自动生成。
 - 灵活扩展：可以根据需要在 version.json 中添加更多信息（如 versionName 或 branchName）。
 - 低维护成本：通过打包流程确保文件始终更新，无需人工干预。

## 适用场景
 - 频繁发布：适合需要频繁更新的项目，自动化生成版本信息，减少人为操作。(我的公司就是频繁发布，🐕看了都摇头)
 - 前端独立部署：尤其适用于前端通过 CDN 或静态资源服务器直接部署的场景，能及时通知用户刷新页面获取最新内容。

## 工作原理
 - 打包触发机制：vue.config.js 会在运行 npm run build 时自动被执行，这是 Vue CLI 的默认行为。
 - 文件生成逻辑：我们在 vue.config.js 中通过 Node.js 的 fs 模块动态创建或更新 public/version.json 文件。
 - 文件存放位置：生成的 version.json 会被放置在 public 目录下，因此会被 Vue CLI 的构建工具直接拷贝到打包后的 dist 文件夹中。

## 注意事项
 - 路径：public/version.json 的路径必须是 public，因为 Vue CLI 会将 public 目录内容直接拷贝到 dist 中。
 - 权限：确保运行打包命令的用户有权限写入文件。
 - 刷新策略：前端轮询逻辑需要保持稳定，避免因请求失败导致提示异常。

` 2024年12月22日更`
 
` ===============================================================================================`
