// src/data/navigation.js

// 导出一个常量，包含所有导航链接
// status: 'active' (上线) | 'coming-soon' (即将上线)
// type: 'internal' (Vue Router 路由) | 'external' (外部 http 链接)

export const navigationData = [
    {
        id: 'domestic',
        label: '国内洞察',
        children: [ // 这是二级菜单
            {
                id: 'market-analysis',
                label: '市场分析',
                children: [ // 这是三级菜单
                    { id: 'report', label: '调研报告', link: '#', type: 'external', status: 'coming-soon' },
                    { id: 'competitor', label: '友商发布会', link: 'press-conference', type: 'internal', status: 'active' },
                    { id: 'insight', label: '洞察报告', link: '#', type: 'external', status: 'coming-soon' },
                ],
            },
            {
                id: 'tech-tracking',
                label: '技术追踪',
                children: [
                    { id: 'ota-map', label: 'OTA 地图', link: '#', type: 'external', status: 'coming-soon' },
                ],
            },
            {
                id: 'tech-tracking',
                label: '技术追踪',
                children: [
                    { id: 'ota-map', label: 'OTA 地图', link: '#', type: 'external', status: 'coming-soon' },
                ],
            },
        ],
    },
    {
        id: 'overseas',
        label: '海外洞察',
        children: [
            {
                id: 'global-market',
                label: '全球市场',
                children: [
                    { id: 'os-sales', label: '海外销量', link: '#', type: 'external', status: 'active' },
                    { id: 'os-map', label: '出海地图', link: '/osmap', type: 'internal', status: 'active' },
                    { id: 'os-new', label: '海外上新', link: '/new-release', type: 'internal', status: 'active' },
                    { id: 'os-insight', label: '海外洞察', link: '#', type: 'external', status: 'coming-soon' },
                ],
            },
            {
                id: 'policy',
                label: '法规与政策',
                children: [
                    { id: 'regulation', label: '法规对比', link: '/regulation', type: 'internal', status: 'active' },
                ],
            },
        ],
    },
    {
        id: 'tools',
        label: '工具',
        children: [
            {
                id: 'data-tools',
                label: '数据工具',
                children: [
                    { id: 'long-image', label: '长图工具', link: '#', type: 'external', status: 'coming-soon' },
                    { id: 'poster', label: '发布会海报', link: '#', type: 'external', status: 'coming-soon' },
                ],
            },
        ],
    },
];