---
title: ChatGPT解决日常开发问题
date: 2023-12-23 23:06:47
categories: 教程
tags:
  - ChatGPT
  - nvm

thumbnail: "thumbnail.jpg #2f76d7"
---


`ChatGPT` 是一个由 `OpenAI`开发的智能对话系统，它基于GPT（Generative Pre-trained Transformer）架构。GPT是一种基于Transformer模型的人工智能语言生成模型，能够理解和生成自然语言文本。

<!-- more -->
当然如果你想用ChatGPT是需要魔法的，懂得都懂哈。

这里提供  ChatGPT 官方的传送门：[ChatGPT](https://chat.openai.com/) | [文档](https://platform.openai.com/docs/introduction)

当然也有大佬自己用api key弄的网站，例如 [AIchatOS](https://chat18.aichatos.xyz/#/chat/1703344214208) ,不过它的回复肯定不如官方的好，而且速度还慢，实在不会魔法就用这个吧，文档类的问题直接文心一言

下面就讲讲如何使用 gpt 解决日常问题：

## 遇到问题

有点无聊，然后去 [Github](https://github.com/vbenjs/vue-vben-admin) 拉了个20k stars的vue3 + ts 的项目来看

然后安装依赖，pnpm install 之后就报错了

![](post/nvm/Snipaste_2023-12-23_23-19-35.png)

## 使用ChatGPT解决问题

这个项目需要高版本的node，Node.js 版本 16.14 以上，我台windows是弄了nvm和nrm的，但是mac就随便去官网下了一个12.22.1版本的，homebrew又装了个16.8.0版本的，实在有点乱，然后我把电脑的node全删干净之后，打算用nvm控制算了，直接gpt搜，不必去百度和csdn看那些写的很乱的教程而且还要收费的文章😅（如果gpt的答案实在不满意的话再去必应上搜）,然后gpt的回复如下

![](post/nvm/qqq.png)

一种是nvm一种是n，其实也差不了多少，想着window也用nvm那mac就用nvm吧
（上面这张图拿`snagit`截的，居然是要收费的...长截图snipaste居然不支持，然后pixpin🈶又没有mac版，把我整无语了😓）

然后就是傻瓜式安装，按上面的代码来

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install <node_version>
nvm use <node_version>
```

然后就可以了

![](post/nvm/Snipaste_2023-12-24_00-08-04.png)

然后就是重新pnpm install

![](post/nvm/Snipaste_2023-12-24_00-13-58.png)

然后就是pnpm serve跑起来

![](post/nvm/Snipaste_2023-12-24_16-12-19.png)

然后就是学习大佬代码（看完之后给我的感觉就是，我写的是什么fw代码，还用vue2 crud）

## 其他示例

有时在开发中遇到问题不知道怎么解决，可以试试使用 ChatGPT 进行问题解决。

![](post/nvm/2023-12-24_00-50-34.png)

## 总结

ChatGPT相对其他搜索引擎上的信息来说更加直接，回答得简单明了，能给出回答来帮助我们思考，而不是像搜索引擎一样，给出一堆信息，需要我们自己去筛选。但是搜索引擎给出的某些文章，例如csdn、掘金上面的部分文章，作者会加入一些自己的思考，一些自己的代码截图，一些自己的经历，有时候也能快速帮助我们解决问题，图片示例是ChatGPT无法提供的内容。总之，ChatGPT能让我们更快的解决问题，但是不能完全代替搜索引擎。遇到问题先自己思考，解决不了的话再尝试ChatGPT，不能过度依赖。有时候它还能是你的情感导师，能帮助你解决情感问题哈哈哈。对了手机版的ChatGPT还有语音对话功能，如果好奇的话可以试试，不过想在苹果手机使用ChatGPT比较麻烦...