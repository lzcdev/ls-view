import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('../views/Button.vue')
  },
  {
    path: '/rate',
    name: 'Rate',
    component: () => import('../views/Rate.vue')
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('../views/Loading.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
