// src/services/api/cars.js

import { supabase } from '../supabase';

export async function getAllCarsForTimeline() {
    try {
        const [carsResponse, ratesResponse] = await Promise.all([
            supabase
                .from('car_launches')
                .select(`
                    country,
                    company,
                    brand,
                    model_name,
                    body_type,
                    launch_status,
                    launch_date,
                    price_local,
                    currency_code,
                    version_name
                `)
                .gte('confidence_score', 60) // 【新增】过滤掉置信度低于 60 的数据
                .not('launch_date', 'is', null)
                .order('launch_date', { ascending: false }),
            
            supabase
                .from('exchange_rates')
                .select('currency_code, rate_based_on_cny')
        ]);

        if (carsResponse.error) throw carsResponse.error;
        if (ratesResponse.error) throw ratesResponse.error;

        const rawCars = carsResponse.data || [];
        const rawRates = ratesResponse.data || [];

        const rateMap = {};
        rawRates.forEach(r => {
            if (r.currency_code && r.rate_based_on_cny) {
                rateMap[r.currency_code] = Number(r.rate_based_on_cny);
            }
        });

        const processedData = rawCars.map(item => {
            let rmbPrice = null;
            if (item.price_local && item.currency_code) {
                const rate = rateMap[item.currency_code];
                if (rate) {
                    rmbPrice = (Number(item.price_local) / rate).toFixed(0);
                } else {
                    console.warn(`未找到货币 ${item.currency_code} 的汇率，无法计算人民币价格`);
                }
            }

            let cleanCompany = item.company || item.brand;
            if (cleanCompany && cleanCompany.length > 2 && cleanCompany.endsWith('汽车')) {
                 cleanCompany = cleanCompany.replace(/汽车$/, '');
            }

            return {
                "国家": item.country,
                "公司": cleanCompany, 
                "品牌": item.brand,
                "车型": item.model_name,
                "厢型": item.body_type,      
                "上市时间": item.launch_date, 
                "售价": item.price_local,    
                "汇率": item.currency_code,
                "上市情况": item.launch_status,
                "售价-人民币": rmbPrice 
            };
        });

        return processedData;

    } catch (error) {
        console.error('获取时间线数据失败:', error);
        throw error;
    }
}

export async function getAllCarsForMap() {
    const countryNameMap = {
        '德国': 'Germany', '挪威': 'Norway', '荷兰': 'Netherlands',
        '英国': 'United Kingdom', '墨西哥': 'Mexico', '巴西': 'Brazil',
        '泰国': 'Thailand', '印尼': 'Indonesia', '澳大利亚': 'Australia',
        '马来西亚': 'Malaysia',
    };

    const { data: cars, error } = await supabase.from('cars').select('*');

    if (error) {
        console.error('获取地图数据失败:', error);
        throw error;
    }

    const brandData = {};
    const countryData = {};

    for (const car of cars) {
        const brand = car['公司'];
        const countryZH = car['国家'];
        const countryEN = countryNameMap[countryZH] || countryZH;

        if (brand && countryEN) {
            if (!brandData[brand]) brandData[brand] = [];
            if (!brandData[brand].includes(countryEN)) brandData[brand].push(countryEN);
        }

        if (countryEN && brand) {
            if (!countryData[countryEN]) countryData[countryEN] = { brands: {} };
            if (!countryData[countryEN].brands[brand]) countryData[countryEN].brands[brand] = { models: {} };
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