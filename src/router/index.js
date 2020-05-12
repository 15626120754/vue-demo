import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      menu: true
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      menu: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      menu: false
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
