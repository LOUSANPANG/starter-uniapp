# vue-cli 构建 vue2 项目

## 项目构建

  ```bash
  # 项目初始化
  npx -p @vue/cli@latest vue create -p dcloudio/uni-preset-vue starter-uniapp

  # 安装
  yarn

  # 运行
  # 比如 yarn dev:wx-beta
  yarn dev:%PLATFORM%

  # 构建
  # 比如 yarn build:wx-beta
  yarn build:%PLATFORM%

  # 在 APP 使用，需在 HBuildX 中打开项目，运行、发行
  ```

## 支持平台

  > 微信小程序
  > 支付宝小程序
  > H5
  > APP

## 目录

  ```bash
  ├── docker # docker nginx icons
  ├── docs # 文档优化说明
  ├── public
  ├── src
  │   ├── components # 公共组件
  │   ├── hybrid # App端存放本地html文件的目录
  │   ├── js_sdk # md5 jsweixin uuid
  │   ├── mixins # 权限、加载更多、下拉刷新、socket、网络
  │   ├── mycomponents # 支付宝小程序自定义组件存放目录
  │   ├── nativeplugins # 原生插件
  │   ├── pages # 页面
  │   ├── pagesChild # 分包
  │   ├── platforms # 存放各平台专用页面的目录
  │   ├── responsive # 宽屏适配指南
  │   ├── services # 请求
  │   ├── static # 本地静态图片
  │   ├── store # vuex
  │   ├── style # 全局样式
  │   ├── test # jest
  │   ├── uni_modules # 请求库、ui库
  │   ├── utils # 工具
  │   ├── utssdk # 存放uts文件
  │   ├── workers # webworker 
  │   ├── wxcomponents # 微信小程序组件
  │   ├── router.js # 自定义路由
  │   ├── App.vue
  │   ├── main.js
  │   ├── manifest.json
  │   ├── pages.json
  │   └── uni.scss
  ├── README.md
  ├── package.json
  ├── vue.config.js
  ├── .gitlab-ci.yml
  └── yarn.lock
  ```
