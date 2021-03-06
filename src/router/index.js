import Vue from 'vue'
import VueRouter from 'vue-router'
import { getUserInfo } from '@/data/common.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

const routerMethods = ['push', 'replace']
routerMethods.forEach(method => {
  const originalCall = VueRouter.prototype[method]
  VueRouter.prototype[method] = function(location, onResolve, onReject) {
    if (onResolve || onReject) {
      return originalCall.call(this, location, onResolve, onReject)
    }
    return originalCall.call(this, location).catch(err => err)
  }
})

router.beforeEach((to, from, next) => {
  if (getUserInfo().isLogin){
    to.meta.isLogin = true;
    next();
  }else{
    to.meta.isLogin = false;
    if(to.path !== '/'){
      next({
        path: '/'
      })
    }else{
      next();
    }
  }
});
export default router
