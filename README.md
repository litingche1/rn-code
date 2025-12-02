# RNStarter - React Native 基础框架 (仿小红书示例)

这是一个基于 Expo 和 React Native 构建的跨平台移动应用基础框架。集成了现代化的开发工具链和常用的移动端功能，并包含了一个仿小红书风格的 UI 演示。

## 🚀 快速开始

### 环境要求

*   [Node.js](https://nodejs.org/) (推荐 LTS 版本)
*   [Git](https://git-scm.com/)
*   手机端安装 **Expo Go** 应用 (iOS / Android)

### 安装

1.  克隆项目
    ```bash
    git clone <your-repo-url>
    cd RNStarter 
    ```

2.  安装依赖
    ```bash
    npm install
    ```

### 启动项目

在终端中运行以下命令启动开发服务器：

```bash
npm run start
```

或者清除缓存启动（解决依赖报错或样式不生效问题）：
```bash
npm run start -- --clear
```

**常见启动问题：**
如果遇到 Expo Go 扫码无法连接，通常是由于多网卡或代理导致 IP 识别错误。请尝试指定 IP 启动（替换为你的局域网 IP）：
```powershell
$env:REACT_NATIVE_PACKAGER_HOSTNAME="192.168.x.x"; npm run start
```
或者使用隧道模式（无需同一局域网）：
```bash
npx expo start --tunnel
```

## 🛠 技术栈与插件

本项目集成了以下核心库和工具：

### 核心框架
*   **Expo SDK 52**: 提供最便捷的 React Native 开发体验。
*   **React Native 0.76**: 移动端跨平台渲染引擎。
*   **TypeScript**: 提供静态类型检查，提升代码质量。

### 路由与导航
*   **@react-navigation/native (v6)**: 核心路由库。
*   **@react-navigation/native-stack**: 堆栈导航（页面跳转）。
*   **@react-navigation/bottom-tabs**: 底部标签栏导航。

### UI 与样式
*   **NativeWind (v4)**: 在 React Native 中使用 Tailwind CSS 的样式方案，极速构建 UI。
*   **Lucide React Native**: 现代化、一致性的图标库。
*   **React Native SVG**: SVG 图标支持。

### 状态管理
*   **Zustand**: 轻量级、易用的全局状态管理库。

### 网络请求
*   **Axios**: 强大的 HTTP 客户端。

## 📱 目录结构

```
RNStarter/
├── assets/             # 静态资源（图片、字体等）
├── src/
│   ├── components/     # 可复用组件 (Button, Card, Input 等)
│   ├── navigation/     # 路由配置 (AppNavigator, TabNavigator)
│   ├── screens/        # 页面文件
│   │   ├── HomeScreen.tsx    # 首页 (仿小红书双列流)
│   │   ├── ProfileScreen.tsx # 个人中心
│   │   └── ...
│   ├── services/       # API 服务与网络请求
│   ├── store/          # Zustand 状态管理
│   ├── types/          # TypeScript 类型定义
│   └── utils/          # 工具函数
├── App.tsx             # 应用入口
├── babel.config.js     # Babel 配置 (NativeWind/Reanimated)
├── global.css          # Tailwind CSS 全局样式入口
├── metro.config.js     # Metro 打包配置
├── tailwind.config.js  # Tailwind 配置文件
└── package.json        # 项目依赖配置
```

## ✨ 功能演示

目前已实现以下仿小红书功能模块：
1.  **首页瀑布流**: 支持双列不等高布局 (Masonry Layout)。
2.  **底部导航栏**: 自定义 TabBar，包含突出的发布按钮。
3.  **个人主页**: 包含用户信息、数据统计及 Tab 切换。
4.  **基础组件库**: 封装了 `Button`, `Card`, `Input` 等常用组件。

