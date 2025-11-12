import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

// 1. 导入我们新创建的页面
import ReportPage from '../views/ReportPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/sales-guide',
            name: 'SalesGuide',
            component: () => import('../views/SalesGuidePage.vue')
        },
        {
            path: '/osmap',
            name: 'OverseasMap',
            component: () => import('../views/OverseasMapPage.vue')
        },
        {
            path: '/new-release',
            name: 'NewRelease',
            component: () => import('../views/NewReleasePage.vue'),
            // --- 核心修改：添加下面这行 meta ---
            meta: { hideHeader: true }
        },
        {
            path: '/regulation',
            name: 'Regulation',
            component: () => import('../views/RegulationPage.vue')
        },
        {
            path: '/press-conference',
            name: 'PressConference',
            component: () => import('../views/PressConferencePage.vue')
        },
        // --- 2. 添加新路由规则 ---
        {
            path: '/report/:category', // 使用动态参数 :category
            name: 'Report',
            component: ReportPage,
            props: true // 自动将 URL 参数 (如 'domestic') 作为 prop 传递给组件
        }
    ],
    // 滚动行为：切换路由时滚动到顶部
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router