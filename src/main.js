// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import navVue from './components/nav'
// 导入elemrnt-ui及其样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入mint-ui
import Mint from 'mint-ui'
// 导入mint-ui样式
import 'mint-ui/lib/style.css'
import Axios from 'axios'

// 注册组件
Vue.use(Mint)
Vue.use(ElementUI)
Vue.prototype.axios = Axios

Vue.config.productionTip = false
// 注册全局组件
Vue.component('navVue', navVue)
// 定义全局过滤器
Vue.filter('lis', function (value) {
  return value.split('')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 设置动态标题
router.beforeEach((to, from, next) => {
  if (to.meta.content) {
    let head = document.getElementsByTagName('head')
    let meta = document.createElement('meta')
    meta.content = to.meta.content
    head[0].appendChild(meta)
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
