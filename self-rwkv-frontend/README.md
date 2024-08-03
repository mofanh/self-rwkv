# 前端配置

## UI
- 组件：[AntDesign](https://ant-design.antgroup.com/docs/react/use-with-vite-cn)
- 样式：[AntDesign UI](https://ant-design.antgroup.com/theme-editor-cn#)
- 可视化：[LiteGraph.js](https://github.com/jagenjo/litegraph.js?tab=readme-ov-file)
  - 教程：[掘金](https://juejin.cn/post/7376477309321068554)
- vscode组件：vscode-styled-components


## 可视化交互node设置[LiteGraph.js]
[实现模型动态载入、自主输出代码+终端调用、网络检索]
- 通用节点
  - 进度条
  - 下拉框

- 模型动态载入[明理]
  - 加载模型
  - state加载
  - 初始化state后存储待查询查问[state微调]
- 模型调用[道理]
  - 模型输入到代码到编辑器
  - 模型输入命令到终端
- 信息检索
  - RAG
  - graphRAG


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
