一个 uniapp 基础框架，基于 HBuilderX 可视化运行（因为命令行安装各种包太累了）

# 目录结构

|--api                      接口定义目录
|--common
|  |--mixins                公共 mixins，按需引入
|     |--global.js          全局 mixin
|     |--reachBottom.js     上拉加载更多的常用方法
|  |--nav.js                页面跳转方法
|--components               全局组件
|--config                   项目配置文件
|--http                     http封装
|--pages
|  |--home
|     |--main               首页通常会存在tabbar，tabbar所在页面必须位于主包，因此将其拆分
|     |--views              除首页外的其他页面，用于分包操作
|--router                   自定义路由，用于跳转鉴权
|--static                   公共资源
|--storage                  本地存储
|--store                    状态管理
|  |--modules
|     |--system.js          系统一些常用的数值，如安全区域，胶囊按钮等
|     |--user.js            登录用户的信息
|--styles                   全局样式
|--.eslintrc.js
|--.prettierrc
|--.stylelintrc
|--App.vue                  一些需要在应用启动时执行的方法在此处执行，如获取系统常用数值
|--index.html
|--main.js
|--manifest.json
|--package.json
|--permission.js            自定义路由跳转鉴权
|--README.md
|--uni.scss