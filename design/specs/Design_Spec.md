# 设计规范说明文档 - 土壤固废监测智慧助教平台原型

本文档简要说明了“土壤固废监测智慧助教平台”HTML 原型设计中使用的主要颜色方案、字体和图标规范。

## 1. 目标平台与模拟

* **主要平台:** Web 浏览器
* **模拟样式:** `index.html` 将模拟标准现代浏览器窗口（深色模式），包含简化的地址栏和标签页切换效果，用于展示各个原型页面。
* **主题:** 整体采用 **暗黑主题 (Dark Mode)** 为主视觉风格，以提供现代、专业且专注的视觉体验。

## 2. 颜色方案 (暗黑主题 - Tailwind CSS 默认调色板扩展)

我们将主要使用 Tailwind CSS 内置的颜色调色板，特别是灰色系 (`gray`)、蓝色系 (`blue`) 以及可能的强调色（如绿色 `green` 用于成功提示，红色 `red` 用于错误提示）。

* **背景色 (Primary Backgrounds):**
    * 页面背景: `bg-slate-900` 或 `bg-gray-900`
    * 卡片/模态框背景: `bg-slate-800` 或 `bg-gray-800`
    * 输入框/控件背景: `bg-slate-700` 或 `bg-gray-700`
* **文本色 (Text Colors):**
    * 主要文本: `text-slate-100` 或 `text-gray-100`
    * 次要文本/描述性文本: `text-slate-300` 或 `text-gray-400`
    * 链接文本: `text-blue-400` (hover: `text-blue-300`)
* **边框色 (Border Colors):**
    * 主要边框/分割线: `border-slate-700` 或 `border-gray-700`
    * 输入框边框: `border-slate-600` (focus: `border-blue-500`)
* **强调色/交互色 (Accent & Interaction):**
    * 主操作按钮背景: `bg-blue-600` (hover: `bg-blue-700`)
    * 主操作按钮文本: `text-white`
    * 次要操作按钮背景: `bg-slate-600` (hover: `bg-slate-500`)
    * 次要操作按钮文本: `text-slate-100`
    * 危险操作按钮背景: `bg-red-600` (hover: `bg-red-700`)
    * 成功提示: `bg-green-600`, `text-green-100`
    * 信息提示: `bg-sky-600`, `text-sky-100`
* **图标颜色:**
    * 一般图标: `text-slate-400` 或 `text-gray-400`
    * 交互图标 (hover): `text-blue-400` 或 `text-white`

**示例 (Tailwind 类):**

```html
<body class="bg-slate-900 text-slate-100">
  <div class="bg-slate-800 p-6 rounded-lg shadow-md">
    <h1 class="text-2xl font-semibold text-white mb-4">标题</h1>
    <p class="text-slate-300 mb-2">这是一段描述性文本。</p>
    <a href="#" class="text-blue-400 hover:text-blue-300">这是一个链接</a>
    <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      主要按钮
    </button>
    <input type="text" class="bg-slate-700 border border-slate-600 text-slate-100 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
  </div>
</body>