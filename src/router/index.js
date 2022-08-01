import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home',
      component: Vue.defineAsyncComponent(() => import('@/views/home/home')),
    },
    {
      path: '/home',
      name: 'home',
      meta: { title: 'I AM GOD IN MY HTML' },
      component: Vue.defineAsyncComponent(() => import('@/views/home/home')),
    },
    {
      path: '/realHome',
      name: 'realHome',
      meta: { title: '@#% 欢迎光临 %#@' },
      component: Vue.defineAsyncComponent(
        () => import('@/views/home/realHome')
      ),
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
