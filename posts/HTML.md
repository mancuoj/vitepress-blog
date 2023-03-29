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

- meta 元数据


## Doctype 的作用


## `<meta>` 元数据元素

在 `<head>` 标签中对页面进行描述的功能性标签，常常由 name 和 content 组成，用来提供页面的元信息。
