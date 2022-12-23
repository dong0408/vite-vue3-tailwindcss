import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useUserStore } from '@/store'

NProgress.configure({
    showSpinner: false,
})
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'LoginPage',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('../pages/login/index.vue'),
    },
    {
        path: '/',
        name: 'IndexPage',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/index.vue'),
    },
    {
        path: '/home',
        name: 'homePage',
        meta: {
            title: '主页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/main/index.vue'),
    },
    {
        path: '/vueUse',
        name: 'VueUse',
        meta: {
            title: 'vueUse demo',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/vueUse.vue'),
    },
    {
        path: '/request',
        name: 'RequestPage',
        meta: {
            title: 'request demo',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/request.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(to => {
    NProgress.start()
    const store = useUserStore()
    const whiteList = ['/login']
    if (!store.user?.token && !whiteList.includes(to.path)) {
        return './login'
    }
})

router.afterEach(to => {
    NProgress.done()
})
export default router
