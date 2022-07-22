import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const router = new VueRouter({
    mode:"hash",
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/home',
            component: () => import("@/views/home/home")
        },
        {
            path: '/home',
            name: 'home',
            meta: { title: "I AM GOD IN MY HTML" },
            component: () => import("@/views/home/home")
        },
        {
            path: '/realHome',
            name: 'realHome',
            meta: { title: "@#% 欢迎光临 %#@" },
            component: () => import("@/views/home/realHome")
        },
    ],


})

export default router

router.beforeEach((to, from, next)=> {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
