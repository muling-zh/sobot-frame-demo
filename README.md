# sobot-frame-page-demo

基于 Svelte + Vite 的页面演示项目，页面结构与交互逻辑参考 `sobotshop-main`，已完成 React 页面到 Svelte 组件迁移。

## 环境要求

- Node.js `18.15.0`

## 安装与运行

```bash
npm install
npm run dev
```

构建产物：

```bash
npm run build
```

## 页面路由

- `/member`：会员信息
- `/order-list`：历史订单
- `/goodlist`：推荐商品
- `/customcard`：定制卡片

## postMessage 协议

- 推荐商品页：`msgType = 24`
- 历史订单页：`msgType = 25`
- 历史订单页（创建工单）：`type = "createOrder"`
- 定制卡片页：`msgType = 28`

以上消息均通过 `window.parent.postMessage` 发送，用于与宿主容器联调。
