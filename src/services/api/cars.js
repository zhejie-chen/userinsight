// src/services/api/cars.js

import { supabase } from '../supabase'; // 导入 supabase 客户端实例

/**
 * 1. 为 NewReleasePage (时间线页面) 获取数据
 * 获取所有拥有“上市时间”的车辆数据。
 */
export async function getAllCarsForTimeline() {
    const { data, error } = await supabase
        .from('cars')
        .select('"国家/地区", "公司", "品牌", "车型", "能源形式", "厢型", "上市情况", "上市时间", "售价", "售价-人民币", "汇率", "售价直达", "结束时间", "24年销量", "改款"')
        .not('上市时间', 'is', null);

    if (error) {
        console.error('获取时间线数据失败:', error);
        throw error; // 抛出错误，让调用方处理
    }
    return data;
}

/**
 * 2. 为 OverseasMapPage (地图页面) 获取数据并进行处理
 * 获取所有车辆数据，并处理成地图所需的数据结构。
 */
export async function getAllCarsForMap() {
    // 国家中英文映射表
    const countryNameMap = {
        '德国': 'Germany', '挪威': 'Norway', '荷兰': 'Netherlands',
        '英国': 'United Kingdom', '墨西哥': 'Mexico', '巴西': 'Brazil',
        '泰国': 'Thailand', '印尼': 'Indonesia', '澳大利亚': 'Australia',
        '马来西亚': 'Malaysia',
    };

    const { data: cars, error } = await supabase.from('cars').select('*');

    if (error) {
        console.error('获取地图数据失败:', error);
        throw error; // 抛出错误
    }

    // --- 数据处理逻辑 ---
    const brandData = {};
    const countryData = {};

    for (const car of cars) {
        const brand = car['公司'];
        const countryZH = car['国家/地区'];
        const countryEN = countryNameMap[countryZH] || countryZH;

        // 构建 brandData
        if (brand && countryEN) {
            if (!brandData[brand]) {
                brandData[brand] = [];
            }
            if (!brandData[brand].includes(countryEN)) {
                brandData[brand].push(countryEN);
            }
        }

        // 构建 countryData
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

/**
 * 3. (示例) 将来可以添加的“增删改查”函数
 */

// 新增一辆车
export async function addCar(carData) {
    const { data, error } = await supabase
        .from('cars')
        .insert([carData]);
    if (error) {
        console.error('新增车辆失败:', error);
        throw error;
    }
    return data;
}

// 根据ID更新车辆信息
export async function updateCarById(id, updatedData) {
    const { data, error } = await supabase
        .from('cars')
        .update(updatedData)
        .eq('id', id); // 假设你的表有一个'id'列
    if (error) {
        console.error('更新车辆失败:', error);
        throw error;
    }
    return data;
}

// 根据ID删除车辆
export async function deleteCarById(id) {
    const { data, error } = await supabase
        .from('cars')
        .delete()
        .eq('id', id);
    if (error) {
        console.error('删除车辆失败:', error);
        throw error;
    }
    return data;
}