import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloFromVux from '@/components/HelloFromVux'
import text from '@/components/text'
import input from '@/components/input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'HelloFromVux',
      component: HelloFromVux
    },
    {
      path: '/text',
      name: 'text',
      component: text
    },
    {
      path: '/input',
      name: 'input',
      component: input
    },
    // 重定向
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
