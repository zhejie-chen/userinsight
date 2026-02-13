<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { brandData } from './data';
import { 
  ArrowLeft, 
  AlertCircle, 
  CheckCircle2, 
  Car, 
  CarFront,
  Layers, 
  Zap, 
  Factory, 
  Tag, 
  Presentation, 
  Network, 
  Award 
} from 'lucide-vue-next';
import Footer from '../../../components/Footer.vue';

const router = useRouter();
const brand = computed(() => brandData.find(b => b.id === 'leapmotor'));

const goBack = () => {
  router.push('/brand-analysis');
};

// 销量数据 - 转换为百分比用于CSS图表渲染 (Max: 10000)
const salesData = [
  { month: '2022年', sales: 5000, percent: 50, description: '销量瓶颈' },
  { month: '2023年1月', sales: 3000, percent: 30, description: '低谷期' },
  { month: '2023年2月', sales: 8000, percent: 80, description: '快速回升' },
  { month: '2023年中', sales: 9000, percent: 90, description: '持续稳定' },
  { month: '2024年', sales: 9500, percent: 95, description: '持续稳定' },
];

// C11车型技术对比数据
const c11TechComparisonData = [
  { category: '动力形式', before: '纯电为主', after: '纯电+增程双布局', improvement: '动力多元化' },
  { category: '纯电续航', before: '400-500km', after: '300km（同级最长）', improvement: '增程版纯电续航提升' },
  { category: '综合续航', before: '400-500km', after: '1210km', improvement: '续航大幅提升' },
  { category: '补能体验', before: '依赖充电桩', after: '可油可电，无续航焦虑', improvement: '补能体验质的提升' },
  { category: '价格定位', before: '定价偏高', after: '精准定价，14.98万起', improvement: '价格竞争力提升' },
  { category: '目标用户', before: '城市纯电用户', after: '家庭刚需用户，无续航焦虑', improvement: '用户群体扩大' },
];

// 定价策略数据
const pricingData = [
  { model: 'C11增程版', price: '14.98-18.98万', competitors: '宋PLUS DM-i、深蓝S7', priceDiff: '-2 ~ -5', marketPosition: '15万级中型SUV' },
  { model: 'C10', price: '12.28-14.28万', competitors: '同级别竞品', priceDiff: '-2 ~ -3', marketPosition: '12-15万级家庭SUV' },
  { model: 'C16', price: '15.18-18.18万', competitors: '同级别竞品', priceDiff: '-2 ~ -5', marketPosition: '15-20万级家庭SUV' },
  { model: 'B01', price: '8.98-11.98万', competitors: '秦PLUS DM-i等', priceDiff: '-1 ~ -2', marketPosition: '10万级家用刚需' },
  { model: 'B10', price: '9.98-12.98万', competitors: '同级别竞品', priceDiff: '-1 ~ -2', marketPosition: '10万级家用刚需' },
];

// 销量变化数据
const salesChangeData = [
  { time: '2022年', sales: '5000辆左右', event: '纯电版本为主', performance: '销量瓶颈' },
  { time: '2023年1月', sales: '销量下滑', event: '涨价导致观望情绪', performance: '低谷期' },
  { time: '2023年2月', sales: '8000+辆', event: '增程版发布', performance: '快速回升' },
  { time: '2023年中', sales: '8000-10000辆', event: '产品矩阵完善', performance: '持续稳定' },
  { time: '2024年', sales: '8000-10000辆', event: '销量稳定', performance: '持续稳定' },
];
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 pt-[44px] flex flex-col">
    <header class="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex items-center">
          <button 
            @click="goBack"
            class="mr-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="返回"
          >
            <ArrowLeft class="w-6 h-6" />
          </button>
          <h1 class="text-3xl font-bold">零跑品牌车型深度分析</h1>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-12 max-w-5xl flex-grow">
      
      <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up">
        <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <div class="w-32 h-32 flex items-center justify-center p-4 rounded-xl flex-shrink-0">
            <img :src="brand?.logo" alt="零跑logo" class="w-full h-full object-contain" style="background-color: transparent;" />
          </div>
          <div class="flex-1 mt-6 md:mt-0 w-full">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">零跑品牌车型深度分析</h2>
            <p class="text-xl text-slate-700 dark:text-slate-300 mb-6 text-center md:text-left">增程技术突破+精准定价，从价格反向操作到"半价理想"的逆袭</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl">
                <h3 class="text-sm text-amber-600 dark:text-amber-400 font-medium mb-1">危机期</h3>
                <p class="font-semibold text-slate-800 dark:text-slate-200">2023年1月、2024年初、2025年初</p>
              </div>
              <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                <h3 class="text-sm text-green-600 dark:text-green-400 font-medium mb-1">转型成效</h3>
                <p class="font-semibold text-slate-800 dark:text-slate-200">销量增长1.6-2倍</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.1s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
          一、品牌背景与车型概览
        </h2>
        
        <div class="mb-8">
          <p class="text-lg mb-6">零跑汽车作为中国新能源汽车品牌中的技术派代表，近年来经历了从销量低谷到成功逆袭的转型过程。本分析将围绕零跑的核心车型展开，深入剖析各车型的问题、转型策略及成效。</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div class="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-2">C11</h3>
              <p class="text-slate-700 dark:text-slate-300">零跑品牌的销量支柱，通过增程技术实现从5000到10000辆的跨越</p>
            </div>
            <div class="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-2">C10/C16</h3>
              <p class="text-slate-700 dark:text-slate-300">12-20万级家庭SUV，完善零跑的产品矩阵</p>
            </div>
            <div class="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-2">B01/B10</h3>
              <p class="text-slate-700 dark:text-slate-300">10万级家用刚需车型，覆盖更广泛的市场</p>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl mb-6">
            <h3 class="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">发展时间线</h3>
            <div class="relative">
              <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700"></div>
              
              <div class="space-y-6">
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center border-2 border-slate-500 dark:border-slate-400">
                      <span class="text-xs font-bold">1</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2022年 - 市场探索期</h4>
                    <p class="text-slate-700 dark:text-slate-300">C11月销徘徊在5000辆门槛，难以突破</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center border-2 border-slate-500 dark:border-slate-400">
                      <span class="text-xs font-bold">2</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2023年1月 - 第一次危机</h4>
                    <p class="text-slate-700 dark:text-slate-300">国补退出时涨价，而头部品牌降价，形成"买涨不买跌"观望情绪，销量大幅下滑</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center border-2 border-slate-500 dark:border-slate-400">
                      <span class="text-xs font-bold">3</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2023年2月 - 增程版发布</h4>
                    <p class="text-slate-700 dark:text-slate-300">推出增程版C11，起售价14.98万元，销量快速回升，单月破8000辆</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center border-2 border-slate-500 dark:border-slate-400">
                      <span class="text-xs font-bold">4</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2023年中 - 产品矩阵完善</h4>
                    <p class="text-slate-700 dark:text-slate-300">C10、C16、B01、B10发布，实现多价格带覆盖</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center border-2 border-slate-500 dark:border-slate-400">
                      <span class="text-xs font-bold">5</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2024年 - 销量稳定期</h4>
                    <p class="text-slate-700 dark:text-slate-300">C11月销稳定在8000-10000辆，实现持续稳定增长</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-blue-200 dark:border-blue-800 pb-2">
          二、C11车型深度分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">2.1 初期困境：从5000到10000辆的跨越</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3">危机表现</h4>
              <p class="text-slate-700 dark:text-slate-300">
                零跑C11月销长期徘徊在5000辆门槛难以突破，2023年1月甚至出现销量下滑。
              </p>
            </div>
            
            <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3">核心问题</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs" />
                  <span>定价反向操作：2023年国补退出，零跑T03涨价3000元、C11涨价6000元，而特斯拉等头部品牌大幅降价</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs" />
                  <span>产品定位不清晰：缺乏核心竞争力，产品定位模糊</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs" />
                  <span>竞品挤压：比亚迪、特斯拉等头部品牌降价挤压市场份额</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs" />
                  <span>质量问题：2023年爆出质量问题，品牌信任受损</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">2.2 产品力升级：从纯电到增程的战略拐点</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Car class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                增程版入场：战略拐点
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span>定价策略：起售价14.98万元，将中型新能源SUV门槛压至15万以下</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span>市场定位：精准卡位15万级中型SUV，与宋PLUS DM-i、深蓝S7等竞品形成价格优势</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span>用户价值：解决家庭用户补能焦虑，提供"可油可电"的灵活出行方案</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <CarFront class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                C11增程版：核心突破
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span>纯电续航：300km（同级最长）</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span>综合续航：1210km，解决补能焦虑</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span>市场表现：单月销量快速破8000辆</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span>用户认知："半价理想"标签，性价比形象深入人心</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Layers class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                产品矩阵完善：多价格带覆盖
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span>10万级：B01（8.98-11.98万元）、B10（9.98-12.98万元）覆盖家用刚需</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span>15-20万级：C10（12.28-14.28万元）、C16（15.18-18.18万元）锚定家庭SUV</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span>价格策略：与竞品形成2-5万元价格差，强化性价比优势</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl mb-6">
            <h4 class="text-lg font-semibold mb-3 flex items-center">
              <Zap class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              C11技术升级路径
            </h4>
            
            <div class="overflow-x-auto mb-6">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-blue-100 dark:bg-blue-800/50">
                    <th class="p-3 text-left border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-100">技术维度</th>
                    <th class="p-3 text-left border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-100">纯电版</th>
                    <th class="p-3 text-left border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-100">增程版</th>
                    <th class="p-3 text-left border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-100">升级幅度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in c11TechComparisonData" :key="index" :class="index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'">
                    <td class="p-3 border border-blue-200 dark:border-blue-700 font-medium">{{ item.category }}</td>
                    <td class="p-3 border border-blue-200 dark:border-blue-700 text-slate-600 dark:text-slate-400">{{ item.before }}</td>
                    <td class="p-3 border border-blue-200 dark:border-blue-700 text-slate-800 dark:text-slate-200">{{ item.after }}</td>
                    <td class="p-3 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 font-medium">{{ item.improvement }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">2.3 平台化降本：真入门满配</h3>
          
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl mb-6">
            <h4 class="text-lg font-semibold mb-3 flex items-center">
              <Factory class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              C11的平台化降本策略
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <div class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span><strong>减少SKU：</strong>从多版本多配置简化为核心配置，降低供应链复杂度</span>
                </div>
                <div class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span><strong>硬件提升：</strong>通过平台化设计提升硬件配置，实现"真入门满配"</span>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span><strong>自研降本：</strong>通过自研三电技术降低成本</span>
                </div>
                <div class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span><strong>规模效应：</strong>通过销量提升实现规模降本</span>
                </div>
              </div>
            </div>
            <div class="mt-4 p-4 bg-blue-100 dark:bg-blue-800/30 rounded-lg">
              <p class="font-medium text-blue-900 dark:text-blue-100">用户价值：</p>
              <p class="text-blue-800 dark:text-blue-200">"真入门满配"，入门即享受核心配置，性价比最大化</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-green-200 dark:border-green-800 pb-2">
          三、其他车型分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">3.1 C10/C16：完善12-20万级产品矩阵</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3">C10：12-15万级家庭SUV</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>定价：12.28-14.28万元</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>市场定位：紧凑型家庭SUV，主打性价比</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>价格优势：与同级别竞品形成2-3万元价格差</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>目标用户：注重性价比的年轻家庭用户</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3">C16：15-20万级家庭SUV</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>定价：15.18-18.18万元</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>市场定位：中型家庭SUV，主打空间和配置</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>价格优势：与同级别竞品形成2-5万元价格差</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>目标用户：注重空间和舒适性的中高端家庭用户</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">3.2 B01/B10：10万级家用刚需车型</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3">B01：8.98-11.98万元</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>市场定位：紧凑型家用轿车，主打性价比</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>价格优势：与秦PLUS DM-i等形成1-2万元价格差</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>目标用户：预算有限但注重实用性的年轻用户和家庭用户</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3">B10：9.98-12.98万元</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>市场定位：小型SUV，主打年轻用户市场</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>价格优势：与同级别竞品形成1-2万元价格差</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>目标用户：注重设计和性价比的年轻用户</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.4s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-green-200 dark:border-green-800 pb-2">
          四、营销与定价策略调整
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">4.1 定价策略：精准卡位，"半价理想"</h3>
          
          <div class="overflow-x-auto mb-6">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-green-100 dark:bg-green-800/50">
                  <th class="p-3 text-left border border-green-200 dark:border-green-700 text-green-900 dark:text-green-100">产品</th>
                  <th class="p-3 text-left border border-green-200 dark:border-green-700 text-green-900 dark:text-green-100">定价（万元）</th>
                  <th class="p-3 text-left border border-green-200 dark:border-green-700 text-green-900 dark:text-green-100">对标竞品</th>
                  <th class="p-3 text-left border border-green-200 dark:border-green-700 text-green-900 dark:text-green-100">价格差（万元）</th>
                  <th class="p-3 text-left border border-green-200 dark:border-green-700 text-green-900 dark:text-green-100">市场定位</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in pricingData" :key="index" :class="index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'">
                  <td class="p-3 border border-green-200 dark:border-green-700 font-medium">{{ item.model }}</td>
                  <td class="p-3 border border-green-200 dark:border-green-700 text-slate-600 dark:text-slate-400">{{ item.price }}</td>
                  <td class="p-3 border border-green-200 dark:border-green-700 text-slate-600 dark:text-slate-400">{{ item.competitors }}</td>
                  <td class="p-3 border border-green-200 dark:border-green-700 text-green-600 dark:text-green-400 font-medium">{{ item.priceDiff }}</td>
                  <td class="p-3 border border-green-200 dark:border-green-700 text-slate-600 dark:text-slate-400">{{ item.marketPosition }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">4.2 营销创新：性价比标签</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Tag class="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                "半价理想"标签
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>强化"半价理想"品牌标签，突出性价比优势</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>用户认知：理想的产品体验，零跑的价格</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>传播策略：通过对比营销强化性价比认知</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>市场反响：标签深入人心，提升品牌竞争力</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Zap class="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                限时权益营销
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>上市即给出限时权益，降低用户决策门槛</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>权益内容：现金抵扣、终身质保、家充桩</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>营销效果：预售期订单破万</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>用户激励：限时紧迫感，促进快速决策</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Presentation class="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                增程技术教育
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>教育市场，普及增程技术优势</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>技术优势：可油可电，无续航焦虑</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>用户价值：解决家庭用户核心痛点</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs" />
                  <span>认知建立：增程技术逐渐被市场接受</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">4.3 渠道与服务优化</h3>
          
          <div class="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl">
            <h4 class="text-lg font-semibold mb-3 flex items-center">
              <Network class="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
              渠道策略：加速下沉
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                <p class="font-medium mb-1">渠道下沉</p>
                <p class="text-sm text-slate-600 dark:text-slate-400">加速三四线城市渠道布局，扩大市场覆盖</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                <p class="font-medium mb-1">体验中心</p>
                <p class="text-sm text-slate-600 dark:text-slate-400">在核心城市建立体验中心，提升品牌可见度</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                <p class="font-medium mb-1">服务网络</p>
                <p class="text-sm text-slate-600 dark:text-slate-400">快速扩张服务网络，提升服务可及性</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                <p class="font-medium mb-1">海外合作</p>
                <p class="text-sm text-slate-600 dark:text-slate-400">与Stellantis合作，快速拓展海外市场</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                <p class="font-medium mb-1">数字化</p>
                <p class="text-sm text-slate-600 dark:text-slate-400">通过数字化工具提升渠道运营效率</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.5s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-purple-200 dark:border-purple-800 pb-2">
          五、数据对比与成效分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400">5.1 销量变化：C11从5000到10000的跨越</h3>
          
          <div class="h-80 mb-6 flex flex-col pt-12">
            <div class="flex-1 flex items-end justify-between space-x-2 md:space-x-4 px-2 md:px-4 pb-2 border-b border-slate-100">
              <div 
                v-for="(item, index) in salesData" 
                :key="index"
                class="flex flex-col items-center justify-end h-full flex-1 group relative"
              >
                <div class="mb-2 px-2 py-1 bg-white dark:bg-slate-700 shadow-lg rounded text-xs md:text-sm font-bold text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full whitespace-nowrap z-10 border border-purple-100 dark:border-purple-800">
                  {{ item.sales }}辆
                  <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white dark:border-t-slate-700"></div>
                </div>
                
                <div class="w-full bg-purple-100 dark:bg-purple-900/40 rounded-t-lg relative transition-all duration-300 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/60"
                     :style="{ height: item.percent + '%' }">
                  <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg h-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
            
            <div class="flex justify-between px-2 md:px-4 mt-2">
              <div v-for="(item, index) in salesData" :key="index" class="flex-1 text-center">
                <div class="text-xs md:text-sm font-medium text-slate-600 dark:text-slate-400 truncate">{{ item.month }}</div>
                <div class="text-xs text-slate-400 dark:text-slate-500 transform scale-90">{{ item.description }}</div>
              </div>
            </div>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-purple-100 dark:bg-purple-800/50">
                  <th class="p-3 text-left border border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-100">时间节点</th>
                  <th class="p-3 text-left border border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-100">C11月销量</th>
                  <th class="p-3 text-left border border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-100">关键事件</th>
                  <th class="p-3 text-left border border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-100">市场表现</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in salesChangeData" :key="index" :class="index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'">
                  <td class="p-3 border border-purple-200 dark:border-purple-700 font-medium">{{ item.time }}</td>
                  <td class="p-3 border border-purple-200 dark:border-purple-700 text-slate-600 dark:text-slate-400">{{ item.sales }}</td>
                  <td class="p-3 border border-purple-200 dark:border-purple-700 text-slate-600 dark:text-slate-400">{{ item.event }}</td>
                  <td class="p-3 border border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 font-medium">{{ item.performance }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400">5.2 第三方评价验证</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Award class="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                性价比标杆
              </h4>
              <p class="mb-3 text-slate-700 dark:text-slate-300">媒体评价零跑为"15万级性价比之王"</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                  <span>价格优势：与竞品形成2-5万元价格差</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                  <span>配置丰富："真入门满配"，性价比突出</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                  <span>市场认可：性价比标签深入人心</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Zap class="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                增程技术认可
              </h4>
              <p class="mb-3 text-slate-700 dark:text-slate-300">增程技术获得行业认可</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                  <span>纯电续航：300km同级最长</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                  <span>综合续航：1210km，解决补能焦虑</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                  <span>用户体验："可油可电"获得家庭用户认可</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Factory class="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                平台化降本成效
              </h4>
              <p class="mb-3 text-slate-700 dark:text-slate-300">平台化降本获得市场认可</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                  <span>成本控制：自研降本+规模效应</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                  <span>性价比：降本惠及用户，价格竞争力强</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                  <span>市场反馈：订单增长显著</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400">5.3 转型成效总结</h3>
          
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1.6-2倍</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">销量突破</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">C11从5000到8000-10000辆</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">多价格带</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">产品矩阵</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">B01、B10、C10、C16完善</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">破8000+</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">增程成功</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">验证增程技术路径成功</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">半价理想</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">性价比标签</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">市场竞争力提升</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">持续稳定</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">销量表现</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">避免大幅波动</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg animate-fade-in-up" style="animation-delay: 0.6s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-indigo-200 dark:border-indigo-800 pb-2">
          六、经验与启示
        </h2>
        
        <h3 class="text-xl font-semibold mb-6 text-indigo-700 dark:text-indigo-400 text-center">从零跑车型转型中获得的启示</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl">
            <div class="flex items-start">
              <div class="bg-indigo-100 dark:bg-indigo-800/50 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-indigo-600 dark:text-indigo-400">1</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">增程技术突破解决补能焦虑</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  零跑通过增程版入场，实现纯电续航300km（同级最长）、综合续航1210km，彻底解决家庭用户补能焦虑。在纯电基础设施尚不完善的当下，增程是快速打开市场的有效路径。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl">
            <div class="flex items-start">
              <div class="bg-indigo-100 dark:bg-indigo-800/50 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-indigo-600 dark:text-indigo-400">2</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">精准定价卡位主流价格带</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  C11增程版14.98万元起，将中型新能源SUV门槛压至15万以下；B01 8.98-11.98万元，覆盖10万级家用刚需。精准的价格定位可以快速打开市场，形成价格竞争力。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl">
            <div class="flex items-start">
              <div class="bg-indigo-100 dark:bg-indigo-800/50 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-indigo-600 dark:text-indigo-400">3</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">"半价理想"差异化标签</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  零跑强化"半价理想"品牌标签，突出性价比优势。在理想汽车品牌形象良好但价格较高的背景下，"半价理想"标签可以快速建立品牌认知，吸引用户关注。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl">
            <div class="flex items-start">
              <div class="bg-indigo-100 dark:bg-indigo-800/50 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-indigo-600 dark:text-indigo-400">4</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">平台化降本实现"真入门满配"</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  通过平台化设计、自研降本、规模效应，实现"真入门满配"，入门即享受核心配置，性价比最大化。降本不是简单的减配，而是通过技术创新和规模效应实现真正的性价比。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl md:col-span-2">
            <div class="flex items-start">
              <div class="bg-indigo-100 dark:bg-indigo-800/50 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-indigo-600 dark:text-indigo-400">5</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">避免定价反向操作</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  零跑2023年1月涨价的教训深刻，在头部品牌降价时逆势涨价会导致"买涨不买跌"的观望情绪。定价策略要紧跟市场，顺应价格趋势，避免反向操作。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-slate-800 dark:bg-slate-900 text-white py-8 mt-12">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm opacity-75">
          © 2026 新能源汽车品牌车型战略分析报告 | 数据更新至 2025年底
        </p>
      </div>
      <Footer></Footer>
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