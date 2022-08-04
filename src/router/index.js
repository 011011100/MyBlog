import * as VueRouter from 'vue-router'
import home from '@/views/home/home'
import realHome from '@/views/home/realHome'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home',
      component: home,
    },
    {
      path: '/home',
      name: 'home',
      meta: { title: 'I AM GOD IN MY HTML' },
      component: home,
    },
    {
      path: '/realHome',
      name: 'realHome',
      meta: { title: '@#% 欢迎光临 %#@' },
      component: realHome,
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  if (to.meta.title)
    document.title = to.meta.title

  next()
})
