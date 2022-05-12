import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Index from '@/views/Index'
import Homepage from '@/views/Homepage' // 主页
import Login from '@/views/Login' // 登陆
import Register from '@/views/Register' // 注册

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage
    }
  ]
})
