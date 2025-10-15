// src/services/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

// 1. 初始化 Supabase 客户端
// 我们只需要在这里定义一次，任何其他文件都可以导入这个 client 实例
const SUPABASE_URL = 'https://advawhgwgzkydiubzzjb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkdmF3aGd3Z3preWRpdWJ6empiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0NjE4NDAsImV4cCI6MjA3MDAzNzg0MH0.aXXSmvpdZH62P8GZ2-bqpnNrs0Kfhrnqx-BpBi1CEGc';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/**
 * 2. 为 NewReleasePage (时间线页面) 获取数据
 * 这个函数直接从 'cars' 表中获取所需的所有字段。
 */
export async function fetchCarDataForTimeline() {
    const { data, error } = await supabase
        .from('cars')
        .select('"国家/地区", "公司", "品牌", "车型", "能源形式", "厢型", "上市情况", "上市时间", "售价", "售价-人民币", "汇率", "售价直达", "结束时间", "24年销量", "改款"')
        .not('上市时间', 'is', null); // 只获取有上市时间的数据

    if (error) {
        console.error('获取时间线数据失败:', error);
        return [];
    }
    return data;
}

/**
 * 3. 为 OverseasMapPage (地图页面) 获取数据并进行处理
 * 这个函数是为地图专门设计的，它会完成您要求的“国家名字中英文替换”。
 */
export async function fetchCarDataForMap() {
    // 国家中英文映射表
    const countryNameMap = {
        '德国': 'Germany', '挪威': 'Norway', '荷兰': 'Netherlands',
        '英国': 'United Kingdom', '墨西哥': 'Mexico', '巴西': 'Brazil',
        '泰国': 'Thailand', '印尼': 'Indonesia', '澳大利亚': 'Australia',
        '马来西亚': 'Malaysia',
        // 您可以根据需要继续添加
    };

    // 注意：这里我们假设地图需要的数据结构与 carData.js 类似
    // 我们从数据库获取所有车的数据
    const { data: cars, error } = await supabase.from('cars').select('*');

    if (error) {
        console.error('获取地图数据失败:', error);
        return { brandData: {}, countryData: {} };
    }

    // 在这里，您可以编写逻辑将 `cars` 数组处理成 `brandData` 和 `countryData` 的结构
    // 这部分逻辑会比较复杂，我们先建立框架，确保能替换静态数据

    const brandData = {};
    const countryData = {};

    for (const car of cars) {
        const brand = car['公司']; // 假设用“公司”作为品牌
        const countryZH = car['国家/地区'];
        const countryEN = countryNameMap[countryZH] || countryZH; // 如果没找到映射，就用回中文名

        // --- 构建 brandData ---
        if (brand && countryEN) {
            if (!brandData[brand]) {
                brandData[brand] = [];
            }
            if (!brandData[brand].includes(countryEN)) {
                brandData[brand].push(countryEN);
            }
        }

        // --- 构建 countryData ---
        // (这部分逻辑会更复杂，需要根据 carData.js 的结构来构建，此处仅为示例)
        if (countryEN && brand) {
            if (!countryData[countryEN]) {
                countryData[countryEN] = { brands: {} };
            }
            if (!countryData[countryEN].brands[brand]) {
                countryData[countryEN].brands[brand] = { models: {} };
            }
            countryData[countryEN].brands[brand].models[car['车型']] = {
                sales: car['24年销量'],
                localPrice: car['售价'],
                rmbPrice: car['售价-人民币'],
                website: car['售价直达']
            };
        }
    }

    return { brandData, countryData };
}