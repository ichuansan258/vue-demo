import Vue from 'vue'
import Router from 'vue-router'
import first from '@/components/first'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: first
    }
  ]
})
