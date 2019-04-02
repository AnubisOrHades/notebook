import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import nav from '@/components/nav'
import order from '@/components/order'
import filter from '@/components/filter'
import mintui from '@/components/mintui'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hw',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'hello word'
      }
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav,
      meta: {
        title: 'nav'
      }
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      meta: {
        title: 'order'
      }
    },
    {
      path: '/filter',
      name: 'filter',
      component: filter,
      meta: {
        title: 'filter'
      }
    },
    {
      path: '/mintui',
      name: 'mintui',
      component: mintui,
      meta: {
        title: 'mintui'
      }
    }
  ]
})
// Router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })
