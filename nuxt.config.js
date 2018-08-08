module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'X Management System',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'as title...' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css:[
    '~assets/normalize.css',
    '~assets/common.less',
    '~assets/icons/iconfont.css',
    // '~/plugins/theme.less'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /* 引入插件 */
  plugins: [
    { src: '~/plugins/iview.js', ssr: true }
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxy: true
    // 这里的true也可以是一个包含默认配置的对象
  },
  proxy: {  
    // '/rapi': {
    //   target: 'http://2k16j87776.imwork.net:27425/',
    //   pathRewrite: { '^/rapi': '' }
    // }
    changeOrigin: true,
  },
}

