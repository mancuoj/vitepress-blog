---
title: CSS
date: 2023-03-30
---

# CSS

:::details 将相关面试题整理再放送，推荐使用`CTRL-F`进行查找 📢
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

使用 width 和 height 属性定义的其实就是 content 部分的大小，可以用 box-sizing 属性来改变盒模型的类型。

<iframe height="350" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/Mancuoj/embed/rNvdqMv?default-tab=css%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Mancuoj/pen/rNvdqMv">
  Untitled</a> by Mancuoj (<a href="https://codepen.io/Mancuoj">@Mancuoj</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

但其实盒模型也分别外部和内部显示类型，外部显示类型会决定盒子是块级（block）还是行内（inline），内部显示类型会决定盒子的布局方式，默认是正常的布局流，可以使用类似 `display: flex` 的设置来更改元素的内部显示类型。

## 布局方法

- 正常流布局
- 浮动布局：使用 float 属性使元素脱离文档流
- 定位布局：使用 position 属性来进行定位
- flex 布局
- grid 布局
- 多列布局：把内容按列排序的方式，就像文本在报纸上排列那样

## 定位方式 position

使用以下关键字用来指定一个元素在文档中的定位方式：

- static：默认的布局行为，元素会放在文档流的默认位置，此时使用 `top, right, bottom, left, z-index` 属性均无效。
- relative：元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白），也就是相对于元素在未添加定位时的位置进行定位
- absolute：元素会被移出正常文档流（不为元素预留空间），通过指定元素相对于最近的非 static 定位祖先元素的偏移进行定位；绝对定位的元素可以设置 margin，且不会与其他边距合并
- fixed：元素会被移出正常文档流，通过指定元素相对于屏幕视口（viewport）的位置进行定位；元素的位置在屏幕滚动时不会改变；fixed 属性会创建新的层叠上下文。当元素祖先的 `transform、perspective、filter 或 backdrop-filter` 属性不是 none 时，容器由视口改为该祖先；例如某些网站固定在头部的导航栏
- sticky：元素会先根据正常文档流进行定位，相对于最近的拥有“滚动机制”的祖先和最近块级祖先的值计算偏移，到达相对位置后，元素会固定在该位置；例如某些网站头部下拉一定位置后固定的导航栏

## 外边距折叠

块级模型中会出现上边距 margin-top 和下边距 margin-bottom 折叠为单个边距的情况，其大小为边距间的最大值，有以下三种情况：

- 相邻的两个元素之间的外边距重叠
- 没有内容将父元素和后代元素分开
- 空的块级元素，没有高度，上边距直接贴到了下边距上

一些特殊情况会改变折叠的规则：

- 清除浮动
- 创建新的 BFC
- 参与折叠的外边距中包含负值，折叠后的外边距的值为最大的正边距与最小的负边距（即绝对值最大的负边距）的和
- 所有参与折叠的外边距都为负，折叠后的外边距的值为最小的负边距的值

## 清除浮动

浮动 float 属性会让元素脱离正常的文档流，其他元素会受到它的影响，所以我们需要清除它。

- 使用 `clear: left | right | both` 来清除浮动元素其后元素的浮动行为
- 使用 clearfix 技巧，也就是先向包含浮动内容及其本身的盒子后方插入一些生成的内容，并使用 `clear: both` 将生成的内容清除浮动：
  - 使用 `::after`
  - 在其后手动添加一个空的 div
- 将 overflow 设置为除 `visible` 之外的任意值
- 使用 `display: flow-root` 无副作用地创建 BFC，类似于创建一个新的根元素（如 `<html>`）

推荐使用伪元素：

```css
.box::after {
  content: "";
  display: block;
  clear: both;
}
```

## BFC

BFC 即 Block Formatting Context，块级格式化上下文，其实就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。

通常我们创建 BFC 是为了：

- 清除浮动
  - 包含内部浮动
  - 排除外部浮动，实现双栏布局
- 避免外边距折叠

下列方式会创建 BFC：

- 根元素 html
- 浮动元素，float 不为 none
- 绝对定位元素，position 为 absolute 或 fixed
- overflow 不为 visible、clip 的元素
- display 为 `inline-block、flow-root、table-cell 或 table-caption` 的元素
- display 为 `flex、inline-flex、grid 或 inline-grid` 元素的直接子元素，但是它们本身不能是 `flex、grid 或 table` 容器
- ...

## 选择器

基本选择器：

- 通配符（通用）选择器 `*`
- 标签选择器 `<tag>`
- ID 选择器 `#id`
- 类选择器 `.class`
- 属性选择器：`[attr], [attr=xx]`
- 分组选择器 `A, B`：任意一个选择器选中的元素

关系选择器：

- 后代选择器 `A B`：A 内部的所有 B 元素，只要是后代即可，不管 DOM 的跳数
- 子代选择器 `A > B`：类似于后代选择器，但只能是直接子元素
- 一般兄弟选择器 `A ~ B`：共享同一个父节点，B 可以在 A 后任意位置
- 紧邻兄弟选择器 `A + B`：类似于一般兄弟，但 B 必须紧跟在 A 后面

伪类：

- `:root, :empty, :checked, :disabled`
- `:first-child, :last-child, :nth-child(), :nth-last-child()`
- `:is(), :not(), :where(), :has()`
- ...

伪元素：

- `::after, ::before`
- `::marker, ::selection, ::first-line`
- ...

## 选择器优先级

CSS 声明的权重，它由匹配的选择器中的每一种选择器类型的数值决定（可叠加），当有多个声明的时候，优先级才有意义。

| 选择器                             | 权重  |
| ---------------------------------- | ----- |
| 通配符选择器，关系选择器，`:not()` | 00000 |
| 标签选择器，伪元素                 | 00001 |
| 类选择器，属性选择器，伪类         | 00010 |
| ID 选择器                          | 00100 |
| 内联样式                           | 01000 |
| `!important`                       | 10000 |

## em, rem, px, vh, vw



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

