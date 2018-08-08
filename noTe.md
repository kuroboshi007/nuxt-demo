# 项目搭建流程笔记
  

## 1. 搭建环境  

1. 安装vue-cli，已经安装过的可以省略。  

``` bash
 npm install vue-cli -g 
```

2. 安装模板， 这里选择 starter模板

``` bash
$ vue init nuxt-community/starter-template my-project （项目名称） 
$ cd my-project                     
# install dependencies
$ npm install # Or yarn install
```
3. npm install安装依赖包

``` bash
npm install
```
安装失败时可以直接删除项目中的node_modules文件夹，之后再重新安装。

4. npm run dev 启动服务

``` bash
npm run dev
```

5. 在浏览器输入 localhost:3000,可以看到结果。  
默认端口3000，由于我其它项目占用了端口。必须先更改端口才可运行。 

>/package.json

``` json
"config":{
    "nuxt":{
      "host":"127.0.0.1", //IP地址
      "port":"8868" // 端口
    }
  }
```
tips：严格模式下最后一个 , 记得省略，不然会报错

6. Hello World
惯例的Hello World。将pages/index.vue下的项目名称改为Hello World测试。
  

## 2. 常用配置  

### head
使用 head 方法设置当前页面的头部标签。就是html的<head></head>部分  
  
> nuxt.config.js 

``` js
  head: {
    title: 'nuxt-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'as title...' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
```
head在子组件中的配置  

``` js
export default {
  data () {
    return {
      title: 'Hello World!'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
```
官方提醒
>注意：为了避免子组件中的meta标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为meta标签配一个唯一的标识编号。请阅读关于 [vue-meta] 的更多信息。


### 全局CSS 

将放置在 */assets/css/normailze.css*全局引用

>/nuxt.config.js

```js
css:[
  '~assets/css/normailze.css',
  '...css...'
],
```



### 插件 

项目里用到了iview UI组件，示例就用iview 

1. 安装 

```bash
$ npm install iview --save
```
  

2. 引用 

```js
1. plugins/iview.js配置文件中，引入iview
  import Vue from 'vue'
  import iView from 'iview';

Vue.use(iView);

2. /nuxt.config.js增加plugins并引入iview.js
  plugins: [
    { src: '~/plugins/iview.js', ssr: true }
  ],
```
  

### loading
Nuxt 有默认的动画，可对其进行修改。  
页面切换的时候如果不想显示加载进度条，可以在 nuxt.config.js 里面增加 loading: false 的配置：
```js
module.exports = {
  loading: false
}
```
更多配置查看[loading]
  


### build
build 中包含了很多 webpack 选项，比方说loaders,vendor。其中的 babel 选项替代了 .babelrc 文件，意味着关于 babel 的配置都可以在此选项中进行编写。若是有其他的 webpack 配置也可以在此选项中进行配置，笔者的配置如下，多出的配置是 eslint 的配置  

```js
build: {

  vendor: ['axios'],

  extend (config, { isDev, isClient }) {
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  }...
},
```
>tips: 开启了 SSR 的插件不要放在 vendor 里面，无法正常运行。

### axios 的配置
在/nuxt.config.js中更改，这里引用的axios是作为nuxt的一个模块，详细配置参考[Nuxt Axios Module]

```bash
npm install @nuxtjs/axios # Or yarn install  

/nuxt.config.js

  module.exports = {
    modules: [
      '@nuxtjs/axios',
    ],

    axios: {
      // proxyHeaders: false
    }
  }
```

## 3. 默认模版和默认布局

### 默认模板
在根目录下创建一个app.html即可  
建立了默认模板后需要重启服务器，默认布局不需要
``` html
<!DOCTYPE html>
<html lang="en">
<head>
   {{ HEAD }}
</head>
<body>
    {{ APP }}
</body>
</html>
```
>HEAD和APP都需要大写,HEAD是nuxt.config.js里配置的 head ；APP是 pages 下的主页面

### 默认布局  
根目录下的layouts/default.vue  
layouts目录下可创建多个布局，  
子页面切换

```js
export default {
  layout: 'other' // 调用其它layout
}
```





  
## 4. 路由 
nuxt.js会根据pages目录自动生成vue路由配置。

### 嵌套路由：

创建内嵌子路由，需要添加一个 Vue 文件，同时添加一个与该文件同名的目录用来存放子视图组件。
在父级 Vue 文件内增加 <nuxt-child/> 用于显示子视图内容。

### 动态路由
文件建立时头部加上 **_**  e.g /news/\_id.vue

#### params传递参数
用法同 vue 相似。  
```html
传入
  <template>
    <div>
      <ul>
        <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
        <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
        <li><nuxt-link :to="{name:'news',params:{newsId:3306}}">NEWS</nuxt-link></li>
      </ul>
    </div>
  </template>

接受
  <template>
    <div>
        <h2>News Index page</h2>
        <p>NewsID:{{$route.params.newsId}}</p>
         <ul>
          <li><a href="/">Home</a></li>
        </ul>
    </div>
  </template>
```



## iview 注意事项

1. 使用Iview时候，报：no-parsing-error Parsing error: x-invalid-end-tag 解决办法

```bash
在根目录下 .eslintrc.js 文件 rules 下添加：
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]
更改后再
    npm run dev

```
使用vscode还需按以下更改 
```
首选项----》设置---》"vetur.validation.template": false
```

[vue-meta]: https://github.com/declandewet/vue-meta#lists-of-tags 
[loading]: https://zh.nuxtjs.org/api/configuration-loading 
[Nuxt Axios Module]: https://axios.nuxtjs.org/ 


## admin00
混合使用iview-admin测试 