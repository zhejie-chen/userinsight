import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import OverseasMapPage from '../views/OverseasMapPage.vue';
import NewReleasePage from '../views/NewReleasePage.vue';

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
        meta: { hideHeader: true } // 在 meta 中添加一个标志，告诉 Header 隐藏自己
    },
];

const router = createRouter({
    // 明确指定基础路径为根目录，增强可读性
    history: createWebHistory('/'),
    routes,
});

export default router;