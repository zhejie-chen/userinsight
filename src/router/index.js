import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import OverseasMapPage from '../views/OverseasMapPage.vue';
import NewReleasePage from '../views/NewReleasePage.vue';
import RegulationPage from '../views/RegulationPage.vue'; // [新增] 导入新页面

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/osmap',
        name: 'OverseasMap',
        component: OverseasMapPage,
    },
    {
        path: '/new-release',
        name: 'NewRelease',
        component: NewReleasePage,
        meta: { hideHeader: true }
    },
    { // [新增] 添加法规页面的路由
        path: '/regulation',
        name: 'Regulation',
        component: RegulationPage,
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;