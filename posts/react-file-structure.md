---
title: React 项目的文件结构
date: 2023-04-04
---

# React 项目的文件结构

## 预览

![file structure](/file-structrue.png)

## index.js

你可能已经注意到了，每个 component 的文件夹下都会有一个 index.js，它的内容类似于：

```js
export * from './App'
export { default } from './App'
```

你可能会说：那为什么不把组件代码也放在 index 里？但是那所有的组件就都会有一个 index 文件，index 将会充满我们的编辑器，不利于我们的查看。

而如果没有这个文件进行重新导出，导入 App 组件需要这样写：

```js
import App from '../App/App'
```

通过 js 文件“重定向”，我们可以将其缩短为：

```js
import App from '../App'
```

## components

一个示例组件结构如下：

```
src/
└── components/
    └── FileViewer/
        ├── Directory.js
        ├── File.js
        ├── FileContent.js
        ├── FileViewer.helpers.js
        ├── FileViewer.js
        ├── index.js
        └── Sidebar.js
```

## hooks

hooks 文件夹用来存储项目通用的 hooks 函数。

如果 hook 特定于一个组件使用，就把它放在组件文件夹下。

我一般会使用这种命名方式 `use-worker.hook.js`：

- 烤肉串式 kebab-case 而不是驼峰式
- 在文件名中加上 .hook

当然你也可以使用常规的 `useWorker.js` 命名方式。

## helpers

helpers 文件夹用来存储项目通用的 helper 函数，也就是特定于项目的辅助函数。

如果函数特定于一个组件使用，那就把它放在组件文件夹下，就像 `FileViewer.helpers.js` 这样。

## utils

utils 文件夹用来存储项目无关的实用程序，你可以把它理解为仅限于个人使用的 lodash 库。

## constants

constants 文件夹用来存储项目的公共常量，其中大部分与样式相关。

当然如果常量特定于组件，你也可以把它放在组件文件夹下，就像 `App.constants.js` 一样。

## pages

如果你使用 Next.js 这种包含路由的框架，就会有 pages 文件夹。

## 简单项目

当然如果只是一个简单的项目，你也可以去除文件夹的束缚，比如我写的这个[井字棋小游戏](https://github.com/mancuoj/react-tic-tac-toe)。

## 相关链接

- [Delightful React File/Directory Structure](https://www.joshwcomeau.com/react/file-structure/)
