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

- b 标签是加粗，strong 标签是加粗并且强调重要性。
- 其他同理，参考[语义化](#语义化)的好处。

## SEO

- [MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/SEO)
- [Google SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=zh-cn#getting-started)

SEO 即搜索引擎优化（Search Engine Optimization），它是一种通过优化网站的内容、结构和功能以使其获得更高的搜索引擎排名的技术和策略。

前端需要注意的部分：

- 写好 meta 标签，合理的 TDK: title, description, keywords 三个标签。
- 使用语义化的 HTML 代码。
- 优化页面加载速度，响应式设计。
- 确保为您的视觉内容附加文字形式的说明，图片的 alt 属性。
- [构建并提交站点地图](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=zh-cn)。
- ...


## meta 标签

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)
- [Open Graph](https://ogp.me/)

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

## Doctype 的作用