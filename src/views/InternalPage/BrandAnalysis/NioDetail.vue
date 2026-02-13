<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { brandData } from './data';
import { 
  ArrowLeft, 
  ArrowRight,
  AlertCircle, 
  CheckCircle2, 
  BatteryFull, 
  Zap, 
  Expand, 
  Armchair, // Sofa/Couch alternative
  Car, // Car side
  Award, 
  Newspaper,
  Users, // For community/users
  Scale, // Balance scale
  Ruler, // Ruler
  Store // Shop/Store
} from 'lucide-vue-next';
import Footer from '../../../components/Footer.vue';

const router = useRouter();
const brand = computed(() => brandData.find(b => b.id === 'nio'));

const goBack = () => {
  router.push('/brand-analysis');
};

// 销量数据
const salesData = [
  { month: '23年4月前', sales: 500, percent: 5 },
  { month: '2023年中', sales: 2000, percent: 20},
  { month: '2024年', sales: 4000, percent: 40 },
  { month: '2025年9月', sales: 8000, percent: 80},
];

// ES8车型技术对比数据
const es8TechComparisonData = [
  { category: '智能驾驶', before: '基础ADAS', after: 'NOP+增强领航，激光雷达标配', improvement: '质的飞跃' },
  { category: '电池技术', before: '75kWh/100kWh', after: '75kWh/100kWh/150kWh（固态电池）', improvement: '续航大幅提升' },
  { category: '充电速度', before: '400V平台', after: '800V高压平台（乐道）', improvement: '补能效率倍增' },
  { category: '空间布局', before: '中大型', after: '大型SUV', improvement: '空间显著提升' },
  { category: '舒适性', before: '基础座椅', after: '女王副驾、零重力座椅、通风按摩标配', improvement: '舒适性大幅改善' },
];

// ES6车型技术对比数据
const es6TechComparisonData = [
  { category: '智能驾驶', before: '基础ADAS', after: 'NOP+增强领航，激光雷达标配', improvement: '质的飞跃' },
  { category: '电池技术', before: '75kWh', after: '75kWh/100kWh', improvement: '续航提升' },
  { category: '充电速度', before: '400V平台', after: '400V平台优化', improvement: '充电效率提升' },
  { category: '空间布局', before: '紧凑级', after: '中型SUV', improvement: '空间加大' },
  { category: '舒适性', before: '基础座椅', after: '加热通风按摩座椅', improvement: '舒适性提升' },
];

// 定价对比数据
const pricingData = [
  { model: 'ES8', beforePrice: '40.68-44.68万元', afterPrice: '29.88-33.88万元', discount: '8-12万元', selectionRate: '90%+' },
  { model: 'ES6', beforePrice: '35.18-43.28万元', afterPrice: '24.38-32.48万元', discount: '8-12万元', selectionRate: '90%+' },
  { model: '乐道L60', beforePrice: '21.98万元起', afterPrice: '17.98万元起', discount: '4万元', selectionRate: '90%+' },
  { model: '乐道L90', beforePrice: '26.58万元起', afterPrice: '17.98万元起', discount: '8.6万元', selectionRate: '90%+' },
];

// 车型销量对比数据
const modelSalesComparisonData = [
  { model: 'ES8', beforeSales: '数百辆', afterSales: '数千辆', growth: '5-8倍', factors: 'NT2.0平台+BaaS+空间升级' },
  { model: 'ES6', beforeSales: '2000-3000辆', afterSales: '6000-8000辆', growth: '2-3倍', factors: '平台换代+产品力提升' },
  { model: '乐道L60', beforeSales: '-', afterSales: '数千辆', growth: '起步即爆款', factors: '定价精准+配置下放+BaaS' },
  { model: '乐道L90', beforeSales: '-', afterSales: '稳定增长', growth: '市场认可', factors: '六座大空间+性价比' },
];
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 pt-[44px] flex flex-col">
    <header class="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex items-center">
          <button 
            @click="goBack"
            class="mr-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="返回"
          >
            <ArrowLeft class="w-6 h-6" />
          </button>
          <h1 class="text-3xl font-bold">蔚来品牌车型深度分析</h1>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-12 max-w-5xl flex-grow">
      
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up">
        <div class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div class="w-32 h-32 flex items-center justify-center p-4 bg-white rounded-xl flex-shrink-0">
            <img 
              :src="brand?.logo" 
              alt="蔚来logo" 
              class="w-full h-full object-contain"
              style="background-color: transparent;"
            />
          </div>
          <div class="flex-1 w-full">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">蔚来品牌车型深度分析</h2>
            <p class="text-xl text-slate-600 mb-6 text-center md:text-left">NT2.0平台+BaaS创新，从高端困境到主流市场的突破</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div class="bg-amber-50 p-4 rounded-xl border border-amber-100">
                <h3 class="text-sm text-amber-600 font-medium mb-1">危机期</h3>
                <p class="font-semibold text-slate-800">2023年4月-2025年9月前</p>
              </div>
              <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                <h3 class="text-sm text-green-600 font-medium mb-1">转型成效</h3>
                <p class="font-semibold text-slate-800">销量增长5-8倍</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section class="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.1s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-slate-200 pb-2">
          一、品牌背景与车型概览
        </h2>
        
        <div class="mb-8">
          <p class="text-lg mb-6">蔚来汽车作为中国高端新能源汽车品牌的代表，近年来经历了从高端困境到主流市场突破的转型过程。本分析将围绕蔚来的核心车型展开，深入剖析各车型的问题、转型策略及成效。</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 class="text-xl font-semibold mb-2">ES8</h3>
              <p class="text-slate-600">蔚来的旗舰SUV，经历了从月销数百辆到数千辆的爆发式增长</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 class="text-xl font-semibold mb-2">ES6</h3>
              <p class="text-slate-600">蔚来的销量支柱，通过平台换代实现销量翻倍</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 class="text-xl font-semibold mb-2">乐道L60</h3>
              <p class="text-slate-600">蔚来子品牌乐道的首款车型，定位20万级市场，月销近万台</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 class="text-xl font-semibold mb-2">乐道L90</h3>
              <p class="text-slate-600">乐道品牌的六座SUV，主打大空间和性价比，月销数千台</p>
            </div>
          </div>
          
          <div class="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
            <h3 class="text-xl font-semibold mb-4 text-slate-800">发展时间线</h3>
            <div class="relative">
              <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300"></div>
              
              <div class="space-y-6">
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-500">
                      <span class="text-xs font-bold text-slate-700">1</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2023年4月 - ES6销量低谷</h4>
                    <p class="text-slate-600">ES6遭遇销量低迷，品牌面临严峻考验</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-500">
                      <span class="text-xs font-bold text-slate-700">2</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2023年中 - NT2.0平台换代</h4>
                    <p class="text-slate-600">ES6基于NT2.0平台换代，产品力大幅提升</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-500">
                      <span class="text-xs font-bold text-slate-700">3</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2024年 - 乐道品牌发布</h4>
                    <p class="text-slate-600">L60、L90发布，进入20-30万主流价格带</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-500">
                      <span class="text-xs font-bold text-slate-700">4</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2025年9月 - ES8爆发式增长</h4>
                    <p class="text-slate-600">ES8实现爆发性增长，成功突破销量瓶颈</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-blue-200 pb-2">
          二、ES8车型深度分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-blue-700">2.1 初期困境：长期月销数百的销量瓶颈</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <h4 class="text-lg font-semibold mb-3">危机表现</h4>
              <p class="text-slate-700">
                作为蔚来旗舰车型，ES8在2025年9月前长期月销徘徊在数百辆，难以突破销量瓶颈。
              </p>
            </div>
            
            <div class="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <h4 class="text-lg font-semibold mb-3">核心问题</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span>定价门槛高：整车40.68-44.68万元，BaaS方案虽然降低门槛但仍较高，难以触达主流用户</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span>产品迭代速度慢：技术优势逐渐被竞品追平，在智能驾驶、续航等方面失去领先优势</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span>定位高端与市场需求脱节：过度聚焦高端市场，错过了15-30万主流价格带的红利</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-blue-700">2.2 产品力升级：从"中大型"到"大型SUV"的突破</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Expand class="w-5 h-5 text-blue-600 mr-2" />
                空间升级
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">车身尺寸：5280mm车长+3130mm轴距</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">空间升级：三排空间与装载能力显著提升</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">储物空间：230L前备箱+547L双层后备箱</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">用户价值：契合家庭用户需求，解决空间痛点</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Car class="w-5 h-5 text-blue-600 mr-2" />
                智驾技术突破
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">激光雷达+双Orin-X芯片，算力508TOPS</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">NOP+增强领航辅助，覆盖高速、城区</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">高速NOA变道成功率95%+</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">自动泊车功能全面优化，支持斜列车位</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Armchair class="w-5 h-5 text-blue-600 mr-2" />
                舒适性提升
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">女王副驾+零重力座椅标配</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">加热、通风、按摩功能齐全</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">二排座椅支持电动调节、腿托</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">双层隔音玻璃，NVH性能优化</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
            <h4 class="text-lg font-semibold mb-3 flex items-center">
              <BatteryFull class="w-5 h-5 text-blue-600 mr-2" />
              ES8技术升级路径
            </h4>
            
            <div class="overflow-x-auto mb-6">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-blue-100">
                    <th class="p-3 text-left border border-blue-200 text-blue-900">技术维度</th>
                    <th class="p-3 text-left border border-blue-200 text-blue-900">升级前</th>
                    <th class="p-3 text-left border border-blue-200 text-blue-900">升级后</th>
                    <th class="p-3 text-left border border-blue-200 text-blue-900">升级幅度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in es8TechComparisonData" :key="index" :class="index % 2 === 0 ? 'bg-white' : 'bg-slate-50'">
                    <td class="p-3 border border-blue-200 font-medium">{{ item.category }}</td>
                    <td class="p-3 border border-blue-200 text-slate-600">{{ item.before }}</td>
                    <td class="p-3 border border-blue-200 text-slate-800">{{ item.after }}</td>
                    <td class="p-3 border border-blue-200 text-blue-600 font-medium">{{ item.improvement }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-blue-700">2.3 BaaS创新：降低购车门槛的革命性方案</h3>
          
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
            <h4 class="text-lg font-semibold mb-3 flex items-center">
              <Zap class="w-5 h-5 text-blue-600 mr-2" />
              ES8的BaaS策略
            </h4>
            <div class="space-y-3">
              <div class="flex items-start">
                <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <span class="text-sm"><strong>价格调整：</strong>整车40.68-44.68万元，BaaS起售价29.88万元（电池减免10.8万元）</span>
              </div>
              <div class="flex items-start">
                <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <span class="text-sm"><strong>电池租赁：</strong>电池月费980元，解决电池衰减和保值率问题</span>
              </div>
              <div class="flex items-start">
                <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <span class="text-sm"><strong>换电体验：</strong>3分钟换电，媲美燃油车加油体验</span>
              </div>
              <div class="flex items-start">
                <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <span class="text-sm"><strong>用户接受度：</strong>90%用户选择BaaS方案</span>
              </div>
            </div>
            <div class="mt-4 p-4 bg-blue-100 rounded-lg border border-blue-200">
              <p class="font-medium text-blue-900">核心价值：</p>
              <p class="text-blue-800">大幅降低高端纯电大三排SUV购车门槛，90%用户选择</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-green-200 pb-2">
          三、ES6车型分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-green-700">3.1 销量瓶颈：从2000+到6000+的突破</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <h4 class="text-lg font-semibold mb-3">初期表现</h4>
              <p class="text-slate-700">
                ES6作为蔚来的销量支柱车型，在2023年月销长期在2000-3000辆徘徊，增长乏力。
              </p>
            </div>
            
            <div class="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <h4 class="text-lg font-semibold mb-3">核心问题</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span>产品力老化：基于NT1.0平台，在智能化、续航、空间等方面逐渐落后</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span>竞品冲击：比亚迪、特斯拉等竞品快速迭代，抢占市场份额</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span>价格竞争力不足：在同级别产品中性价比优势不明显</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-green-700">3.2 产品力升级：NT2.0平台全面换代</h3>
          
          <div class="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl mb-6">
            <h4 class="text-lg font-semibold mb-3 flex items-center">
              <Car class="w-5 h-5 text-green-600 mr-2" />
              ES6技术升级路径
            </h4>
            
            <div class="overflow-x-auto mb-6">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-green-100">
                    <th class="p-3 text-left border border-green-200 text-green-900">技术维度</th>
                    <th class="p-3 text-left border border-green-200 text-green-900">升级前</th>
                    <th class="p-3 text-left border border-green-200 text-green-900">升级后</th>
                    <th class="p-3 text-left border border-green-200 text-green-900">升级幅度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in es6TechComparisonData" :key="index" :class="index % 2 === 0 ? 'bg-white' : 'bg-slate-50'">
                    <td class="p-3 border border-green-200 font-medium">{{ item.category }}</td>
                    <td class="p-3 border border-green-200 text-slate-600">{{ item.before }}</td>
                    <td class="p-3 border border-green-200 text-slate-800">{{ item.after }}</td>
                    <td class="p-3 border border-green-200 text-green-600 font-medium">{{ item.improvement }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-green-700">3.3 定价策略：大幅降价提升竞争力</h3>
          
          <div class="bg-green-50 p-6 rounded-xl border border-green-100">
            <h4 class="text-lg font-semibold mb-3">ES6的定价调整</h4>
            <div class="space-y-3">
              <div class="flex items-start">
                <CheckCircle2 class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span class="text-sm"><strong>价格调整：</strong>从35.18-43.28万元降至24.38-32.48万元，降价8-12万元</span>
              </div>
              <div class="flex items-start">
                <CheckCircle2 class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span class="text-sm"><strong>BaaS方案：</strong>起售价进一步降低，90%用户选择该方案</span>
              </div>
              <div class="flex items-start">
                <CheckCircle2 class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span class="text-sm"><strong>性价比提升：</strong>降价的同时提升配置，性价比显著增强</span>
              </div>
              <div class="flex items-start">
                <CheckCircle2 class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span class="text-sm"><strong>销量提升：</strong>月销从2000-3000辆提升至6000-8000辆</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.4s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-purple-200 pb-2">
          四、乐道品牌车型分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-purple-700">4.1 乐道L60：定位20万级市场的成功突破</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <h4 class="text-lg font-semibold mb-3">产品定位</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">市场定位："20万级智能电动SUV"，进入主流价格带</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">目标用户：家庭用户，注重性价比和智能体验</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">核心卖点：智能化、空间、性价比</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <h4 class="text-lg font-semibold mb-3">定价策略</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">整车定价：21.98万元起</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">BaaS定价：17.98万元起，电池减免10.8万元</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">性价比：与同级别燃油车价格接近，配置更高</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">用户选择：90%用户选择BaaS方案</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-purple-700">4.2 乐道L90：六座大空间的差异化竞争</h3>
          
          <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
            <h4 class="text-lg font-semibold mb-3">产品定位与市场策略</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">核心优势</h5>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <span class="text-sm">六座布局：满足多孩家庭需求</span>
                  </li>
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <span class="text-sm">大空间：二排独立座椅，三排舒适空间</span>
                  </li>
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <span class="text-sm">配置下放：900V高压、空气悬架、8295芯片</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium mb-2">定价策略</h5>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <span class="text-sm">整车定价：26.58万元起</span>
                  </li>
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <span class="text-sm">BaaS定价：17.98万元起，降价8.6万元</span>
                  </li>
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <span class="text-sm">性价比：与理想L8等竞品形成价格优势</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.5s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-green-200 pb-2">
          五、营销与定价策略调整
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-green-700">5.1 定价策略：BaaS创新降低门槛</h3>
          
          <div class="overflow-x-auto mb-6">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-green-100">
                  <th class="p-3 text-left border border-green-200 text-green-900">车型</th>
                  <th class="p-3 text-left border border-green-200 text-green-900">整车定价</th>
                  <th class="p-3 text-left border border-green-200 text-green-900">BaaS定价</th>
                  <th class="p-3 text-left border border-green-200 text-green-900">降价幅度</th>
                  <th class="p-3 text-left border border-green-200 text-green-900">BaaS选择率</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in pricingData" :key="index" :class="index % 2 === 0 ? 'bg-white' : 'bg-slate-50'">
                  <td class="p-3 border border-green-200 font-medium">{{ item.model }}</td>
                  <td class="p-3 border border-green-200">{{ item.beforePrice }}</td>
                  <td class="p-3 border border-green-200">{{ item.afterPrice }}</td>
                  <td class="p-3 border border-green-200 text-green-600 font-bold">{{ item.discount }}</td>
                  <td class="p-3 border border-green-200 text-green-600">{{ item.selectionRate }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-green-700">5.2 营销与组织变革</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Scale class="w-5 h-5 text-green-600 mr-2" />
                价值锚定
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">以 "BaaS 方案 + 20-30 万起售价" 建立 "30 万级体验，20 万级价格" 的价值感知</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">形成 "换电 + 智驾" 双护城河</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Ruler class="w-5 h-5 text-green-600 mr-2" />
                决策链扁平化
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">从 7 级审批精简至 3 级（李斌 / 秦力洪 - 产品总监 - 项目经理）</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">市场反馈 14 天内转化为产品改进</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Users class="w-5 h-5 text-green-600 mr-2" />
                跨部门协同
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">成立 "三品牌协同小组"，整合蔚来智驾、座舱、终端营销团队</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">实现 "技术 - 产品 - 营销" 一体化推进</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-green-700">5.3 渠道结构优化：从 "商超旗舰店" 到 "商圈 + 社区双轮驱动"</h3>
          
          <div class="overflow-x-auto mb-6">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-green-100">
                  <th class="p-3 text-left border border-green-200 text-green-900" style="width: 120px;">渠道类型</th>
                  <th class="p-3 text-left border border-green-200 text-green-900">调整动作</th>
                  <th class="p-3 text-left border border-green-200 text-green-900">效果</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white">
                  <td class="p-3 border border-green-200 font-medium" style="width: 120px;">商超店</td>
                  <td class="p-3 border border-green-200 text-slate-700">关闭 20% 低效门店，保留核心商圈旗舰店（如上海陆家嘴、北京三里屯）</td>
                  <td class="p-3 border border-green-200 text-green-600 font-medium">单店坪效提升 60%，运营成本降低 35%</td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="p-3 border border-green-200 font-medium" style="width: 120px;">社区店</td>
                  <td class="p-3 border border-green-200 text-slate-700">新增 300 + 社区体验中心，提供试驾、交付、售后一站式服务</td>
                  <td class="p-3 border border-green-200 text-green-600 font-medium">用户试驾半径缩短至 15 分钟，试驾转化率提升至 45%</td>
                </tr>
                <tr class="bg-white">
                  <td class="p-3 border border-green-200 font-medium" style="width: 120px;">下沉市场</td>
                  <td class="p-3 border border-green-200 text-slate-700">与当地经销商合作，采用 "轻资产代理模式"，共享蔚来服务体系</td>
                  <td class="p-3 border border-green-200 text-green-600 font-medium">渠道建设周期从 6 个月缩短至 2 个月，成本降低 50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <section class="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.6s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-purple-200 pb-2">
          六、数据对比与成效分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-purple-700">6.1 销量变化：ES6销量表现</h3>
          
          <div class="h-80 mb-6 flex flex-col pt-12">
            <div class="flex-1 flex items-end justify-between space-x-2 md:space-x-4 px-2 md:px-4 pb-2 border-b border-slate-100">
              <div 
                v-for="(item, index) in salesData" 
                :key="index"
                class="flex flex-col items-center justify-end h-full flex-1 group relative"
              >
                <div class="mb-2 px-2 py-1 bg-white shadow-lg rounded text-xs md:text-sm font-bold text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full whitespace-nowrap z-10 border border-purple-100">
                  {{ item.sales }}辆
                  <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white"></div>
                </div>
                
                <div class="w-full bg-purple-100 rounded-t-lg relative transition-all duration-300 group-hover:bg-purple-200"
                     :style="{ height: item.percent + '%' }">
                  <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg h-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
            
            <div class="flex justify-between px-2 md:px-4 mt-2">
              <div v-for="(item, index) in salesData" :key="index" class="flex-1 text-center">
                <div class="text-xs md:text-sm font-medium text-slate-600 truncate transform -rotate-45 origin-center mt-2" style="white-space: nowrap;">{{ item.month }}</div>
                <div class="hidden md:block text-xs text-slate-400 mt-2 transform scale-90">{{ item.description }}</div>
              </div>
            </div>
          </div>
          
          <div class="overflow-x-auto mt-8">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-purple-100">
                  <th class="p-3 text-left border border-purple-200 text-purple-900">车型</th>
                  <th class="p-3 text-left border border-purple-200 text-purple-900">危机期销量</th>
                  <th class="p-3 text-left border border-purple-200 text-purple-900">转型后销量</th>
                  <th class="p-3 text-left border border-purple-200 text-purple-900">增长幅度</th>
                  <th class="p-3 text-left border border-purple-200 text-purple-900">关键成功因素</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in modelSalesComparisonData" :key="index" :class="index % 2 === 0 ? 'bg-white' : 'bg-slate-50'">
                  <td class="p-3 border border-purple-200 font-medium">{{ item.model }}</td>
                  <td class="p-3 border border-purple-200 text-slate-600">{{ item.beforeSales }}</td>
                  <td class="p-3 border border-purple-200 text-slate-800">{{ item.afterSales }}</td>
                  <td class="p-3 border border-purple-200 text-purple-600 font-medium">{{ item.growth }}</td>
                  <td class="p-3 border border-purple-200 text-slate-600">{{ item.factors }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-purple-700">6.2 第三方评价验证</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Award class="w-5 h-5 text-purple-600 mr-2" />
                J.D. Power调研
              </h4>
              <p class="mb-3 text-slate-600">蔚来用户满意度持续领先行业</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">服务质量：换电服务体系获得高度认可</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">品牌忠诚度：用户复购率行业前列</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">用户推荐：NPS（净推荐值）行业领先</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Newspaper class="w-5 h-5 text-purple-600 mr-2" />
                媒体评测
              </h4>
              <p class="mb-3 text-slate-600">ES8空间体验大幅提升</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">空间表现：大型SUV空间领先同级</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">舒适性：女王副驾、零重力座椅获得好评</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">产品力：NT2.0平台技术获得认可</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <BatteryFull class="w-5 h-5 text-purple-600 mr-2" />
                BaaS方案认可度
              </h4>
              <p class="mb-3 text-slate-600">90%用户选择BaaS方案</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">用户价值：降低购车门槛效果显著</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">市场教育：BaaS模式成功教育市场</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">行业影响：BaaS成为行业标杆</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-purple-700">6.3 转型成效总结</h3>
          
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div class="bg-white p-5 rounded-lg shadow-sm text-center border border-purple-100">
                <div class="text-3xl font-bold text-purple-600 mb-2">5-8倍</div>
                <p class="text-sm font-medium text-slate-800">销量突破</p>
                <p class="text-xs text-slate-500 mt-1">ES8从月销数百辆到数千辆</p>
              </div>
              <div class="bg-white p-5 rounded-lg shadow-sm text-center border border-purple-100">
                <div class="text-3xl font-bold text-purple-600 mb-2">起步即爆</div>
                <p class="text-sm font-medium text-slate-800">乐道成功</p>
                <p class="text-xs text-slate-500 mt-1">L60进入主流市场</p>
              </div>
              <div class="bg-white p-5 rounded-lg shadow-sm text-center border border-purple-100">
                <div class="text-3xl font-bold text-purple-600 mb-2">领先行业</div>
                <p class="text-sm font-medium text-slate-800">用户满意度</p>
                <p class="text-xs text-slate-500 mt-1">J.D. Power调研满意度持续领先</p>
              </div>
              <div class="bg-white p-5 rounded-lg shadow-sm text-center border border-purple-100">
                <div class="text-3xl font-bold text-purple-600 mb-2">行业前列</div>
                <p class="text-sm font-medium text-slate-800">品牌忠诚度</p>
                <p class="text-xs text-slate-500 mt-1">用户复购率、NPS行业领先</p>
              </div>
              <div class="bg-white p-5 rounded-lg shadow-sm text-center border border-purple-100">
                <div class="text-3xl font-bold text-purple-600 mb-2">90%</div>
                <p class="text-sm font-medium text-slate-800">BaaS认可</p>
                <p class="text-xs text-slate-500 mt-1">90%用户选择BaaS方案，模式成功</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up" style="animation-delay: 0.7s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-indigo-200 pb-2">
          七、经验与启示
        </h2>
        
        <h3 class="text-xl font-semibold mb-6 text-indigo-700 text-center">从蔚来车型转型中获得的启示</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <div class="flex items-start">
              <div class="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-indigo-600">1</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">BaaS创新降低购车门槛</h4>
                <p class="text-slate-700">
                  蔚来通过BaaS电池租赁方案，成功降低高端纯电车的购车门槛，90%用户选择BaaS证明了这一模式的价值。购车门槛是限制纯电车普及的核心因素，BaaS提供了解决方案。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <div class="flex items-start">
              <div class="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-indigo-600">2</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">NT2.0平台技术突破是基础</h4>
                <p class="text-slate-700">
                  平台换代带来120余项功能优化，激光雷达、双电机四驱等配置大幅提升产品力。产品力提升是转型的根本，没有产品力支撑的降价只是饮鸩止渴。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <div class="flex items-start">
              <div class="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-indigo-600">3</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">用户社群运营构建品牌护城河</h4>
                <p class="text-slate-700">
                  NIO House、NIO Day等构建了独特的用户社群文化，用户粘性和复购率行业领先。在产品同质化严重的今天，用户体验和品牌文化是核心竞争力。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <div class="flex items-start">
              <div class="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-indigo-600">4</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">换电网络是差异化优势</h4>
                <p class="text-slate-700">
                  换电站网络解决了补能焦虑，3-5分钟换电体验媲美燃油车，构建了难以复制的技术和服务优势。换电是蔚来最核心的差异化竞争力。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100 md:col-span-2">
            <div class="flex items-start">
              <div class="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-indigo-600">5</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">子品牌乐道成功切入主流市场</h4>
                <p class="text-slate-700">
                  通过乐道品牌进入20-30万主流价格带，避免过度聚焦高端市场。多品牌战略可以覆盖不同细分市场，最大化市场份额。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-slate-800 text-white py-8 mt-12">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm opacity-75">
          © 2026 新能源汽车品牌车型战略分析报告 | 数据更新至 2025年底
        </p>
        <Footer />
      </div>
    </footer>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>