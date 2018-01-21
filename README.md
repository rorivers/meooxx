# ReactSPA
[![Build Status](https://travis-ci.org/meooxx/ReactSPA.svg?branch=master)](https://travis-ci.org/meooxx/ReactSPA)

> 使用React全家桶SPA
## [在线 github page 地址](https://meooxx.github.io/)
## 开始
```
#  git clone https://github.com/meooxx/ReactSPA.git
#  cd ReactSPA  
#  yarn install
#  yarn start 

```
## ！！注意
> *请一定使用 yarn* 因为yarn install时候优先从本地已经下载的包，复制过来。更重要的是，解决了各个包之间的依赖。

## 技术栈
* 框架： React & React-dom
* UI组件： AntD
* 路由： React-Router-dom & Hash History
* 状态管理: Redux
* Js: Es6
* sytle: PostCss
* 检查: eslint
* 抓取数据: Fetch
* 打包构建: Bable, webpack
* 包管理工具: Npm yarn

## 优势
* 支持Es6
* React-Router v4
* PostCss Browserlist 兼容查询 > 5%
* 支持浏览器自动刷新
* 用Redux管理状态流
## ? 一点疑问
> 用redux管理数据流的过程中, 难免会用到异步。这里用的是cnode的api, 问的是:比如说当通过post accesstoken获取用户信息的时候,有个 login按钮，当点击按钮的时候回发起异步的action, 我想通过这个返回的信息作出一些判断, 失败成功之类的. 但下面的代码又是同步的. 比异步抓取动作快一点. 导致没有获得返回数据之前就会执行, 会出现些错误. 实在想不到解决的方法,用了另外一种不优雅的替代方法, 尴尬.
 
## end

* 如果你能提出一些批评或者建议 非常感谢！
