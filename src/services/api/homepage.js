// src/services/api/homepage.js

import { supabase } from '../supabase';

/**
 * 获取首页 "海外上新" 卡片的数据
 * Fetches all items from the homepage_new_releases table.
 */
export async function getNewReleases() {
    console.log('Fetching new release data for homepage...');

    // 从我们新创建的表中读取数据
    const { data, error } = await supabase
        .from('homepage_new_releases')
        // 注意: 我们 select 数据库字段名 (localPrice, rmbPrice)
        // JS 会自动将它们映射为驼峰命名
        // 我们还 select 了 'id' 用于 v-for 的 key
        .select('id, name, country, localPrice, rmbPrice, image')
        .order('display_order', { ascending: true }); // 按 display_order 排序

    if (error) {
        console.error('Error fetching new releases:', error);
        throw error;
    }

    // Supabase 返回的数据格式 (对象数组)
    // 已经与 newReleaseCarData.js 兼容, 无需 .map() 转换
    console.log('Successfully fetched new release data:', data);
    return data;
}

/* 你未来可以在此文件中添加更多用于首页的 API 函数
  export async function getOtherHomepageData() { ... }
*/