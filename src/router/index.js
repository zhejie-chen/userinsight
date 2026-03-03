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
        },
        // --- 3. 添加比亚迪天神之眼页面的路由 ---
        {
            path: '/byd-ota',
            name: 'BYD_OTA',
            component: () => import('../views/InternalPage/BYD_OTA.vue'),
            // meta: { hideHeader: true } // 这个页面有自己的头部，隐藏全局头部
        },
        // --- 3. 添加比亚迪天神之眼页面的路由 ---
        {
            path: '/geely-ota',
            name: 'Geely_OTA',
            component: () => import('../views/InternalPage/Geely_OTA.vue'),
            // meta: { hideHeader: true } // 这个页面有自己的头部，隐藏全局头部
        },
        {
            path: '/bev', // 您可以自定义这个路径，例如 /brand/wenjie 或 /internal/wenjie
            name: 'BEVCarDetail',
            component: () => import('../views/InternalPage/BEVCar_Detail.vue'),
            // 注意：这里不要添加 meta: { hideHeader: true }，因为您需要显示统一的顶部导航条
        },
        {
            path: '/brand-analysis',
            name: 'BrandAnalysisHome',
            component: () => import('../views/InternalPage/BrandAnalysis/BrandHome.vue')
        },
        {
            path: '/brand-analysis/wenjie',
            name: 'WenjieDetail',
            component: () => import('../views/InternalPage/BrandAnalysis/WenjieDetail.vue')
        },
        {
            path: '/brand-analysis/nio',
            name: 'NioDetail',
            component: () => import('../views/InternalPage/BrandAnalysis/NioDetail.vue')
        },
        {
            path: '/brand-analysis/voyah',
            name: 'VoyahDetail',
            component: () => import('../views/InternalPage/BrandAnalysis/VoyahDetail.vue')
        },
        {
            path: '/brand-analysis/xpeng',
            name: 'XpengDetail',
            component: () => import('../views/InternalPage/BrandAnalysis/XpengDetail.vue')
        },
        {
            path: '/brand-analysis/leapmotor',
            name: 'LeapmotorDetail',
            component: () => import('../views/InternalPage/BrandAnalysis/LeapmotorDetail.vue')
        },
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

// === 新增：百度统计的路由监听 ===
router.afterEach((to, from) => {
  if (window._hmt) {
    if (to.path) {
      // 每次路由变化时，向百度统计发送页面访问记录
      window._hmt.push(['_trackPageview', to.fullPath]);
    }
  }
});

export default router