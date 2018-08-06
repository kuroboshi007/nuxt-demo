# 项目搭建流程
  

## 搭建环境  

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
这个过程是要等一会的，如果你这个过程安装失败，也不要慌张，你可以直接诶删除项目中的node_modules文件夹后，重新npm install进行安装。

4. npm run dev 启动服务

``` bash
npm run dev
```

5. 在浏览器输入 localhost:3000,可以看到结果。  
默认端口3000，由于我其它项目占用了端口。必须先更改端口才可运行。 

>/package.json

``` bash
"config":{
    "nuxt":{
      "host":"127.0.0.1", //IP地址
      "port":"8868" // 端口
    }
  }
```
tips：严格模式下最后一个 , 记得省略，不然会报错

6. Hello World
惯例的Hello World。将pages/index.vue下的项目名称改为Hello World
  

## 常用配置  

#### head
使用 head 方法设置当前页面的头部标签。就是html的<head></head>部分  
  
> nuxt.config.js 

``` bash
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

``` bash
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






[vue-meta]: https://github.com/declandewet/vue-meta#lists-of-tags 