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
            component: () => import("@/components/home/home")
        },
        {
            path: '/home',
            name: 'home',
            meta: { title: "I AM GOD IN MY HTML" },
            component: () => import("@/components/home/home")
        },
        {
            path: '/realHome',
            name: 'realHome',
            meta: { title: "@#% 欢迎光临 %#@" },
            component: () => import("@/components/home/realHome")
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
