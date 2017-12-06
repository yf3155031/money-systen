import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import App from '@/App'
import Home from '@/page/home/Home'
import Test from '@/components/Test'
import List from '@/components/List'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: Home,
          children: [
            {
              path: 'test',
              component: Test
            },
            {
              path: 'list',
              component: List
            }
          ]
        },
        {
          path: '*',
          redirect: '/home'
        }
      ]
    }
  ]
})
