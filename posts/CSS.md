---
title: CSS
date: 2023-03-29
---

# CSS

:::details 有关 CSS 的面试题，整理再放送 📢
- https://developer.mozilla.org/zh-CN/docs/Web/CSS
- https://chodocs.cn/interview/js/css.html
- https://q.shanyue.tech/fe/css/10.html
- https://github.com/yisainan/web-interview/blob/master/content/CSS.md
- https://lgwebdream.github.io/FE-Interview/css/
- https://vue3js.cn/interview/css/box.html
:::

[[toc]]

## 盒模型

当对一个文档进行布局的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型，将所有元素表示为一个个矩形的盒子。CSS 决定这些盒子的大小、位置以及属性。

其中有两种盒模型，分别是 W3C 标准盒模型和 IE 怪异盒模型，它们都由四个部分组成，分别是 content，padding，margin 和 border，但它俩的区别就在于 IE 盒模型的 content 会包含 border 和 padding。

你使用 width 和 height 属性定义的其实就是 content box 的大小，可以用 box-sizing 属性来改变盒模型的类型。

<iframe height="350" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/Mancuoj/embed/rNvdqMv?default-tab=css%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Mancuoj/pen/rNvdqMv">
  Untitled</a> by Mancuoj (<a href="https://codepen.io/Mancuoj">@Mancuoj</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

但其实盒模型也分别外部和内部显示类型，外部显示类型会决定盒子是块级（block）还是行内（inline），内部显示类型会决定盒子的布局方式，默认是正常的布局流，可以使用类似 `display: flex` 的设置来更改元素的内部显示类型。


## 外边距折叠

块级模型中会出现上边距 margin-top 和下边距 margin-bottom 折叠为单个边距的情况，其大小为边距间的最大值，有以下三种情况：

- 相邻的两个元素之间外边距 margin 重叠
- 没有内容将父元素和后代元素分开
- 空的块级元素，没有高度，上边距直接贴到了下边距上

一些特殊情况会改变折叠的规则：

- [清除浮动](#清除浮动)
- 创建新的 [BFC](#bfc)
- 参与折叠的外边距中包含负值，折叠后的外边距的值为最大的正边距与最小的负边距（即绝对值最大的负边距）的和
- 所有参与折叠的外边距都为负，折叠后的外边距的值为最小的负边距的值


## 清除浮动

浮动 float 属性会让元素脱离正常的文档流，其他元素会受到它的影响，所以我们需要清除它。

- 使用 `clear: left | right | both` 来清除浮动元素其后元素的浮动行为

## BFC

BFC 即 Block Formatting Context，块级格式化上下文。


## 选择器

## 选择器优先级

## em, px, vh, vw

## 相对单位

## 隐藏页面元素的方法

## 元素水平垂直居中的方法

## 两栏布局，三栏布局

## flex

## grid

## 动画

## 响应式设计

## 性能

## will-change

## 移动端兼容

## 预处理器

## 单行/多行文本溢出省略样式

## 视差滚动

## 画一个三角形

## Chrome 中文小于 12px

