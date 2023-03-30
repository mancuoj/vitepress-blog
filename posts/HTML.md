---
title: HTML
date: 2023-03-29
---

# HTML

:::details 有关 HTML 的面试题，整理再放送 🤖
- https://developer.mozilla.org/zh-CN/docs/Web/HTML
- https://chodocs.cn/interview/js/html.html
- https://q.shanyue.tech/fe/
- https://lgwebdream.github.io/FE-Interview/html/
- https://github.com/yisainan/web-interview
- https://github.com/pwstrick/daily/blob/master/interview/html.md
:::

## 语义化

> According to the W3C: "A semantic Web allows data to be shared and reused across applications, enterprises, and communities."

HTML 语义化其实就是指我们应该用合适的标签来划分网页的结构。

- 用正确的标签做正确的事情。
- 让界面的内容更加结构化，结构更清晰。
- 方便浏览器，搜索引擎解析，利于 SEO，例如搜索引擎的爬虫会依赖与 HTML 标签来确定上下文和各个关键字的权重。
- 没有 CSS 的时候也能进行网页阅读。
- 屏幕阅读器可以将其用作指引，帮助视力受损的用户导航页面。
- 比起无穷无尽的 div 标签，语义化标签会让代码更具可读性，向开发人员建议将要填充的数据类型。
- 实例：使用 Safari 浏览器浏览网页时的“阅读器”功能就是依赖语义化来完成的。

## 语义化标签

- header, footer
- nav, aside
- main, section
- strong, em
- summary, details
- figure, figcaption
- ...

## b 和 strong，i 和 em 的区别

- b 标签是加粗，strong 标签是加粗并且强调重要性，使用阅读设备时会重读。
- i 是 italic 表示斜体文本，em 是 emphasis 表示强调的文本。
- 这两个都是语义化元素，可以参考[语义化](#语义化)的好处。

## SEO

SEO 即搜索引擎优化（Search Engine Optimization），它是一种通过优化网站的内容、结构和功能以使其获得更高的搜索引擎排名的技术和策略。

前端需要注意的部分：

- 写好 meta 标签，合理的 TDK: title, description, keywords 三个标签。
- 使用语义化的 HTML 代码。
- 优化页面加载速度，响应式设计。
- 确保为您的视觉内容附加文字形式的说明，图片的 alt 属性。
- [构建并提交站点地图](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=zh-cn)。
- ...


## meta 标签

在 head 标签中对页面进行描述的功能性标签，常常使用 name 和 content 以“名-值”对的方式给文档提供元数据。

一些常用的 meta 标签：

```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="不超过150个字符"/> 
  <meta name="keywords" content="blog, mancuoj"/>
  <meta name="author" content="name, email@gmail.com"/>
  <meta name="robots" content="index,follow"/>
  <meta name="og:title" content="title"/>
  <meta name="og:description" content="description"/>
  <meta name="og:url" content="url"/>
  <meta name="og:image" content="image"/>
  <meta name="twitter:title" content="title"/>
  <meta name="twitter:description" content="description"/>
  <meta name="twitter:image" content="image"/>
  <meta name="twitter:card" content="summary_large_image"/>
</head>
```

其中 `og:xx` 和 `twitter:xx` 都是社交媒体的元标签，用于分享到社交媒体时的展示。

## viewport

移动端浏览器通常都会在一个比移动端屏幕更宽的虚拟视口（也就是 viewport）中渲染页面，目的是将没有做移动端适配的网页正常展示给用户。

通俗理解就是让原本可能只能装下 300px 宽度的手机屏幕装下 1000px 宽度的网页内容（将网页同比缩小）。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`device-width` 就是 100vw，即 100% 的视口高度，`initial-scale` 用于控制页面首次加载时显示的缩放倍数。

## HTML5 的新特性

- 语义化标签
- Video, Audio
- Drag, Drop
- Canvas, SVG
- Geolocation
- localStorage、sessionStorage
- IndexedDB
- Web Workers
- WebSocket
- 新的表单控件：如 date、time、email、url、search 等。

## DOCTYPE 的作用

DOCTYPE 是 HTML5 的文档声明，通过它可以告诉浏览器，使用哪一个 HTML 版本标准解析文档。

如果没有 DOCTYPE，浏览器就不知道文档解析的标准是什么，会导致 HTML 文档以怪异模式呈现（不仅会降低解析效率，而且会在解析过程中产生一些难以预知的 bug）。


## 标准模式和怪异模式

- 严格模式：是以浏览器支持的最高标准运行
- 怪异模式（Quirks mode）：页面以宽松向下兼容的方式显示，模拟老式浏览器的行为


## 块级元素和行内元素

> 可以用 display 互相转换

块级元素（block element）：

- 总是在新行上开始，就是每个块级元素独占一行，默认从上到下排列
- 不设置 width 时，宽度就是容器的宽度
- 块级元素可以容纳其它行级元素和块级元素
- `div, p, form, ul, ol, li, h1~h6, dl, hr`

行内元素（inline element）：

- 和其它元素都会在一行显示
- width 就是文字或者图片的宽度，不能改变
- 行级元素只能容纳文本或者其它行内元素
- 设置 height 也无效，但 height 可以使用 `line-height` 属性调整
- padding 和 margin 可以设置上下左右，但是不会改变元素本身的大小
- `span, a, img, button, input, label, select, textarea`



## img 中 title 和 alt 的区别

- title：当鼠标移动到图片上时显示的文本
- alt：无法显示图像时的替代文本


## label 的作用

- 一个表单元素可以和多个 label 相关联。
- label 文本不仅与相应的 input 元素在视觉上相关联，程序中也是如此。当用户聚焦到这个表单输入元素时，屏幕阅读器可以读出标签，让使用辅助技术的用户更容易理解应输入什么数据。
- 可以点击关联的 label 来聚焦或者激活 input 元素，就像直接点击 input 元素一样。扩大了元素的可点击区域，让包括使用触屏设备在内的用户更容易激活这个元素。


## src 和 href 的区别

- src：它通常用于 `img、video、audio、script` 等元素，通过 src 指向请求外部资源的来源地址，指向的内容会嵌入到文档中当前标签所在位置，在请求资源时，它会将资源下载并应用到文档内。当浏览器解析到该元素时，会暂停其它资源下载，直到将该资源加载、编译、执行完毕。
- href：hyper reference，意味着超链接，指向网络资源，当浏览器识别到它指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理，通常用于 `a、link` 元素。