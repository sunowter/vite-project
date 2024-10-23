# Vue 3 + Vite + Pinia + Hooks

打包成多个品牌方的代码，通过配置文件区分
num run + 以下命令
#### A项目
##### 本地运行
```js
    dev //本地运行
    dev:test//test环境
    dev:preview//预发布环境
    prod//生产环境
```
###### 服务器部署
```js
    build:test
    build:preview
    build
```
#### B：
##### 本地运行
```js
    dev:B//本地运行
    dev:test:B//test环境
    dev:preview:B//预发布环境
    prod:B//生产环境
```
###### 服务器部署
```js
    build:test:B
    build:preview:B
    build:B
```