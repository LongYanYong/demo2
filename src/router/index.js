import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            canTo: true,
            title: 'HOME 页面'
        },
        component: Home
    },
    {
        path: '/demo',
        name: 'demo',
        component: () => import(/* webpackChunkName: "about" */ '../views/demo.vue')
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            canTo: true,
            title: 'ABOUT 页面'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/slotDefault',
        name: 'slotDefault',
        meta: {
            canTo: true,
            title: 'slotDefault 页面'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/slots/default.vue')
    },
    {
        path: '/slotName',
        name: 'slotName',
        meta: {
            canTo: true,
            title: 'slotName 页面'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/slots/name.vue')
    },
    {
        path: '/slotScope',
        name: 'slotScope',
        meta: {
            canTo: true,
            title: 'slotScope 页面'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/slots/scope.vue')
    },
    {
        path: '/elementForm',
        name: 'elementForm',
        meta: {
            canTo: true,
            title: 'elementForm 页面'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/Form.vue')
    },
    {
        path: '/formValidation',
        name: 'formValidation',
        meta: {
            canTo: true,
            title: '表单验证页面'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/formValidation.vue')
    },
    {
        path: '/formRules',
        name: 'formRules',
        meta: {
            canTo: true,
            title: '表单验证页面2'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/formRules.vue')
    },
    {
        path: '/companyList',
        name: 'companyList',
        meta: {
            canTo: true,
            title: '公司列表页面'
        },
        component: () => import(/* webpackChunkName: "about" */ '../module/company/index.vue')
    },
    {
        path: '/companyDetails',
        name: 'companyDetails',
        meta: {
            canTo: true,
            title: '公司详情'
        },
        component: () => import(/* webpackChunkName: "about" */ '../module/company/details/index.vue')
    },
    {
        path: '/profits',
        name: 'profits',
        meta: {
            canTo: true,
            title: '毛利润页面'
        },
        component: () => import(/* webpackChunkName: "about" */ '../module/profits/index.vue')
    },
    {
        path: '/profitsDetails',
        name: 'profitsDetails',
        meta: {
            canTo: true,
            title: '毛利润查看页面'
        },
        component: () => import(/* webpackChunkName: "about" */ '../module/profits/details/index.vue')
    },
    {
        path: '/profitsEditor',
        name: 'profitsEditor',
        meta: {
            canTo: true,
            title: '毛利润编辑页面'
        },
        component: () => import(/* webpackChunkName: "about" */ '../module/profits/editor/index.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
// TODO： 路由钩子函数
// TODO: 进入任意页面路由之前的时候触发
// TODO： 判断进入页面条件是否允许
//  判断登录信息是否完善，否则进入登录页面
//  开始进度条
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'demo2'
    if (to.meta.canTo) {
        next()
    } else {
        next('/')
    }
    console.log(from)
    console.log(next)
    // Loading.service(options);
    next()
})
// TODO: 进入任意页面路由之后的时候触发
// TODO： 路由钩子函数
// TODO: 页面加载完成的时候触发
//  进度条关闭
router.afterEach((to, from, next) => {
    // Loading.close();
    console.log('chufale')
})

export default router
