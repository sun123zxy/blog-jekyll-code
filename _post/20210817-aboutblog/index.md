---
title: "博客搭建随想"
abstract: Something about this blog.
post_time: 2021/08/17
last_modified_time: 2021/08/17
tags:
  - 站点相关
  - 前端
---
## 一些历史

可能是对高强度自定义有着不明不白的执念，也可能是想趁此机会玩玩前端，很早就在考虑自建博客的事情了。

记得一开始在博客园开博，就是看中它高度自定义的博客系统，当然还有隔壁广告泛滥的 CSDN 的同行衬托（笑）

只是光一套主题似乎还不能让咱满意，于是之后又逐渐完善了一套修改博客园自带皮肤的自定义主题切换系统。然而因为改版太多次，代码逻辑已然一团乱麻。想来想去，改别人的东西总是有极限的，与其推倒重构，还不如自己去搭个新的。

这么想着又咕了几个月（笑）

一开始也是打算在 Hexo 或者 Jekyll 上直接套个主题改改就好，毕竟是相当省事。不知道哪天心血来潮学了波 Jekyll，突然一想——既然小小的懂一点前端，又打算自己搭博客，要不干脆从零手撸个出来？

于是一边摸鱼一边折腾又是大半年，差不多可以用了。

以前用 markdown 写的文章都搬过来了，其他的回头再说吧。~~好像也没啥保留价值~~

那么，之后就在这边安家了。博客园那边应该还会同步发布，但后续的更新和修改就不能保证了。静态博客的评论系统要托管，感觉不太好弄，想评论什么的还是去博客园吧。（这博客真的有人看吗）

还有，话说正式启用博客的时间正好是8月17日，这个时间...

~~是妖妖梦、风神录正式版发售时间~~

算了我还是给国家省点子弹吧（

## 搭建随想

随便聊聊搭建过程中遇到的各种有趣的事情。

博客源代码：[github.com/sun123zxy/behind-blog.sun123zxy.top](https://github.com/sun123zxy/behind-blog.sun123zxy.top)

### 新技术

+ 基于 [Jekyll](https://jekyllrb.com/) 和 [jekyll-pandoc](https://github.com/mfenner/jekyll-pandoc) 插件，配合自制小工具 [InlineMathSpaceKiller](https://github.com/sun123zxy/InlineMathSpaceKiller) 的静态 markdown 博客。
+ 基于 [JQuery](https://jquery.com/) 的主题切换动画。
+ 支持锚点跳转的目录系统。
+ 数学公式使用 [KaTeX](https://katex.org/) 渲染。
+ 代码高亮使用 [highlight.js](https://highlightjs.org/) 分析代码结构，配合魔改后的样式表实现。

### 数学公式、jekyll-pandoc 和 InlineMathSpaceKiller

~~用插件干啥啊好好用原生 Jekyll Github 自动帮你编译它不香吗~~

香，但是没办法。本地我用 Typora 编写 markdown，希望能在尽可能少改动源文件的情况下上传文章——这包括文章里边的内嵌 latex 数学公式。倒腾了半天 jekyll 自带的 markdown 解析器，发现老是和公式打架——比如把公式里的 `|` 解析成表格——以及其它各种怪七怪八的问题。

翻了一圈 StackOverflow 找到了 jekyll-pandoc，正好用 Typora 导出时下过 Pandoc，拿进去一试发现还行，就给装上了。Pandoc 还自动把 `$` 和 `$$` 换成了 `\(`、`\)` 和 `\[`、`\]`，可以直接被 KaTeX 提供的 `auto-render.min.js` 识别，改 js 的功夫都省了。 

不料还有个问题——pandoc 没法解析形如 `$ \gcd(a,b) $` 这样 `$` 旁边紧跟着空格的行内公式——而 Typora 会忽视这个问题。

翻到这个 [issue](https://github.com/jgm/pandoc/issues/5672)，Pandoc 官方似乎不打算修复这个问题。就只好自己写个 SpaceKiller 做预处理了。没咋认真写，但至少能用。

### 文章存储结构

并没有使用 Jekyll 自带的 posts。

我不喜欢这种图文分离的组织格式。文本和图片本来就同属一篇文章，强行把图片拆开放到 `/assets/images/.../` 里面既不合逻辑，又丧失了可移植性，简直匪夷所思。

最后使用了打开 output 选项的 collection 来实现，每篇文章都有一个独立的文件夹，包含 `index.md` （文本）和所需图片、文件等所有内容。`index.md` 里面直接使用相对引用插入图片，和无博客状态下写作体验完全一致，爽到飞起。

### 页面设计

参考了原来博客园使用的魔改版 iMetro 主题，不过貌似比原来清爽很多？

白模写好后就准备肝 css，一开始几乎完全照搬博客园版本——结果就是整出来个高仿（

![我高仿我自己.jpg](imitate.jpg)

后来有了一些更好的想法，比如把侧边栏做成 panel 样式之类的，就成现在这个样子了。