---
layout: post
title: 微博内容抓取，并发送提醒邮件
tags:  [Node.js]
categories: [Node.js]
author: fucaobao
---


最近学习爬虫，做了一个小demo，源码[new-weibo-crawler](https://github.com/fucaobao/new-weibo-crawler.git)，用来爬取某人微博的最新内容，并对比变化，发送新增的微博到指定邮箱中~~

### 一、爬虫登录微博

由于微博登录时需要输入验证码，因此常规的输入帐号密码的方式不可行

(对于某些大牛来说，还是可以识别的)。此时，我采用如下方式：

1. 手动在浏览器登录微博

2. 用Fillder取到登录时的cookie

	![WeiboCookie](/assets/images/WeiboCookie.png)

3. 在NodeJS中使用该Cookie

 登录成功后，weiboName可以获取到，否则weiboName为空。

***由于cookie存在有效期，如果Cookie失效，需要重新获取cookie***

![WeiboName](/assets/images/WeiboName.png)

### 二、抓取页面内容

由于微博的内容大部分都是通过JS生成的，没有现成的HTML内容，因此需要

变通。经过观察，somebody的首页中的内容，都在这个地方

  ![WeiboHomeFeed](/assets/images/WeiboHomeFeed.png)

即pl.content.homeFeed.index所在的那个JS中，经过解析即可获取最新

内容，结果如下：

  ![WeiboMainData](/assets/images/WeiboMainData.png)

其中的html就是我们所需要的内容。

然后解析该html，就可以获取到最新的微博。

### 三、发送提醒邮件

1. 这里采用的gmail，同时需要将[https://www.google.com/settings/security/lesssecureapps](https://www.google.com/settings/security/lesssecureapps)设置为"<b>启用</b>"。

2. 收件人可以是多个，收件人用逗号隔开。

![WeiboMailOptions](/assets/images/WeiboMailOptions.png)

最终的效果：

* 第一次发送的时候，会发出该页面的所有微博，如下所示：

![WeiboResults](/assets/images/WeiboResults.png)

* 从第二次开始，只发送新增的微博内容，如下所示：

![WeiboResults1](/assets/images/WeiboResults1.png)


* 以后微博如没有变化，则不再发送，直到somebody发送的新的微博为止。



