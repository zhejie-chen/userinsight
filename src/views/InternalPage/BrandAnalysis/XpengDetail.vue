<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { brandData } from './data';
import { 
  ArrowLeft, 
  AlertCircle, 
  CheckCircle2, 
  Car, 
  Zap, 
  Cpu, 
  Eye, 
  Layers, 
  Battery, 
  TrendingUp, 
  DollarSign, 
  Award, 
  Timer,
  Scan
} from 'lucide-vue-next';
import Footer from '../../../components/Footer.vue';

const router = useRouter();
const brand = computed(() => brandData.find(b => b.id === 'xpeng'));

const goBack = () => {
  router.push('/brand-analysis');
};

// 车型销量数据 - 按时间线展示
// 转换为百分比用于CSS图表渲染 (Max: 10000)
const salesTimelineData = [
  { month: '2020年', sales: 1000, percent: 10, description: 'P7发布' },
  { month: '2021-2022年', sales: 10000, percent: 100, description: 'P7辉煌期' },
  { month: '2023年', sales: 2000, percent: 20, description: 'P7销量下滑' },
  { month: '2024年10月', sales: 5000, percent: 50, description: 'P7+发布' },
  { month: '2025年8月', sales: 8000, percent: 80, description: '新P7发布' },
];

// 各车型技术对比数据
const p7TechComparisonData = [
  { category: '平台架构', before: '400V平台', after: '800V高压平台', improvement: '质的飞跃', icon: Layers },
  { category: '充电速度', before: '充电15分钟续航120km', after: '5C超充，充电10分钟续航400km+', improvement: '3倍+提升', icon: Zap },
  { category: '智能驾驶', before: '早期依赖高精地图', after: '纯视觉智驾，无图方案', improvement: '突破性进展', icon: Eye },
  { category: '感知硬件', before: '旧款芯片，无激光雷达', after: '激光雷达+双Orin芯片', improvement: '硬件大幅提升', icon: Scan },
  { category: '智驾标配', before: '高配选装/订阅', after: '全系标配XNGP高阶智驾', improvement: '智驾平权', icon: Cpu },
  { category: '续航能力', before: '500-600km', after: '600-700km+', improvement: '续航提升', icon: Battery },
];

// 各车型定价对比数据
const pricingData = [
  { model: 'P5', beforePrice: '15.69万起', afterPrice: 'MONA03 11.98万起', discount: '降低3.7万元', strategy: '切入10-15万大众市场' },
  { model: 'P7', beforePrice: '22.99万起', afterPrice: 'P7+ 19.98万起', discount: '降低3万元', strategy: '与燃油车价格持平' },
  { model: '新P7', beforePrice: '-', afterPrice: '21.98-30.18万', discount: '-', strategy: '价格提升但价值提升更大' },
];

// 车型销量对比数据
const modelSalesComparisonData = [
  { model: 'P7/P7+', beforeSales: '数百辆', afterSales: '数千辆', growth: '5-10倍', factors: '产品力升级+定价策略+智驾标配' },
  { model: 'MONA03', beforeSales: '-', afterSales: '上万辆', growth: '起步即爆款', factors: '定价精准+智能标配+切入大众市场' },
  { model: 'P5', beforeSales: '持续低迷', afterSales: '被MONA03取代', growth: '-', factors: '定价过高，被新品取代' },
];
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 pt-[44px] flex flex-col">
    <header class="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex items-center">
          <button 
            @click="goBack"
            class="mr-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="返回"
          >
            <ArrowLeft class="w-6 h-6" />
          </button>
          <h1 class="text-3xl font-bold">小鹏品牌车型深度分析</h1>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-12 max-w-5xl flex-grow">
      
      <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up">
        <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <div class="w-32 h-32 flex items-center justify-center p-4 rounded-xl flex-shrink-0">
            <img :src="brand?.logo" alt="小鹏logo" class="w-full h-full object-contain" style="background-color: transparent;" />
          </div>
          <div class="flex-1 mt-6 md:mt-0 w-full">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">小鹏品牌车型深度分析</h2>
            <p class="text-xl text-slate-700 dark:text-slate-300 mb-6 text-center md:text-left">智能科技标签重塑，从P7滞销到P7+爆款的科技突围</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl">
                <h3 class="text-sm text-amber-600 dark:text-amber-400 font-medium mb-1">危机期</h3>
                <p class="font-semibold text-slate-800 dark:text-slate-200">2022-2024年</p>
              </div>
              <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                <h3 class="text-sm text-green-600 dark:text-green-400 font-medium mb-1">转型成效</h3>
                <p class="font-semibold text-slate-800 dark:text-slate-200">销量增长5-10倍</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.1s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-green-200 dark:border-green-800 pb-2">
          一、品牌背景与车型概览
        </h2>
        
        <div class="mb-8">
          <p class="text-lg mb-6">小鹏汽车作为中国新能源汽车品牌中的科技代表，近年来经历了从P7爆款到销量下滑，再到通过产品力升级和新车型推出实现销量逆袭的过程。本分析将围绕小鹏的核心车型展开，深入剖析各车型的问题、转型策略及成效。</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-2">P7系列</h3>
              <p class="text-slate-700 dark:text-slate-300">小鹏品牌的核心车型，经历了从爆款到滞销再到逆袭的完整周期，展现了产品力迭代的重要性。</p>
            </div>
            <div class="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-2">P5</h3>
              <p class="text-slate-700 dark:text-slate-300">销量持续低迷的车型，因定价和定位问题未能成为销量支撑，最终被MONA03取代。</p>
            </div>
            <div class="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-2">MONA03</h3>
              <p class="text-slate-700 dark:text-slate-300">小鹏为切入大众市场推出的全新车型，通过精准定价和智能标配策略取得成功。</p>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl mb-6">
            <h3 class="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">发展时间线</h3>
            <div class="relative">
              <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-green-200 dark:bg-green-800"></div>
              
              <div class="space-y-6">
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center border-2 border-green-500 dark:border-green-400">
                      <span class="text-xs font-bold">1</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2020年 - P7发布</h4>
                    <p class="text-slate-700 dark:text-slate-300">初代P7发布，凭借智能化和设计获得市场认可，成为爆款</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center border-2 border-green-500 dark:border-green-400">
                      <span class="text-xs font-bold">2</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2021-2022年 - P7辉煌期</h4>
                    <p class="text-slate-700 dark:text-slate-300">P7月销突破万辆，成为小鹏销量支柱</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center border-2 border-green-500 dark:border-green-400">
                      <span class="text-xs font-bold">3</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2023年 - P7销量下滑</h4>
                    <p class="text-slate-700 dark:text-slate-300">竞品快速迭代，P7产品力落后，销量开始下滑</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center border-2 border-green-500 dark:border-green-400">
                      <span class="text-xs font-bold">4</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2024年10月 - P7+发布</h4>
                    <p class="text-slate-700 dark:text-slate-300">P7+发布，通过产品力升级和精准定价，实现发布即爆款</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center border-2 border-green-500 dark:border-green-400">
                      <span class="text-xs font-bold">5</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2025年 - MONA03发布</h4>
                    <p class="text-slate-700 dark:text-slate-300">MONA03发布，成功切入10-15万大众市场</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-blue-200 dark:border-blue-800 pb-2">
          二、P7系列深度分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">2.1 初代P7：从爆款到滞销的转变</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3">辉煌成就</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0" />
                  <span>2020-2022年月销一度突破万辆，是小鹏的销量支柱</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0" />
                  <span>凭借智能化和设计获得市场认可</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0" />
                  <span>推动小鹏市值一度超越蔚来、理想</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3">核心问题</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1 mr-2 flex-shrink-0" />
                  <span>产品力落后：2020年上市的初代P7，到2024年硬件（400V平台、旧款芯片、无激光雷达）已全面落后</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1 mr-2 flex-shrink-0" />
                  <span>补能体验差：充电15分钟续航120km，补能效率远不如竞品</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1 mr-2 flex-shrink-0" />
                  <span>智驾推进缓慢：早期依赖高精地图，无图方案推进缓慢，智驾体验落后</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1 mr-2 flex-shrink-0" />
                  <span>空间与家用适配不足：轿跑造型导致后排头部空间压抑，"得房率"低于同级家用轿车</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">2.2 P7+：产品力全面升级</h3>
          
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl mb-6">
            <h4 class="text-lg font-semibold mb-3 flex items-center">
              <Car class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              P7+技术升级路径
            </h4>
            
            <div class="overflow-x-auto mb-6">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-blue-100 dark:bg-blue-800/50">
                    <th class="p-3 text-left border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-100">技术维度</th>
                    <th class="p-3 text-left border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-100">初代P7</th>
                    <th class="p-3 text-left border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-100">P7+</th>
                    <th class="p-3 text-left border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-100">升级幅度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in p7TechComparisonData" :key="index" :class="index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'">
                    <td class="p-3 border border-blue-200 dark:border-blue-700 font-medium flex items-center">
                      <component :is="item.icon" class="w-4 h-4 mr-2 text-blue-500" />
                      {{ item.category }}
                    </td>
                    <td class="p-3 border border-blue-200 dark:border-blue-700 text-slate-600 dark:text-slate-400">{{ item.before }}</td>
                    <td class="p-3 border border-blue-200 dark:border-blue-700 text-slate-800 dark:text-slate-200">{{ item.after }}</td>
                    <td class="p-3 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 font-medium">{{ item.improvement }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                <h4 class="text-lg font-semibold mb-3">产品定义优化</h4>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                    <span>定位："未来AI豪华轿跑"，重塑智能轿跑标杆</span>
                  </li>
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                    <span>定价策略：19.98-30.18万元，与同级别燃油车（雅阁、凯美瑞）价格持平</span>
                  </li>
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                    <span>战略卡位：填补P7与高端车型间空白，稳固20-30万级轿车市场</span>
                  </li>
                </ul>
              </div>
              
              <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                <h4 class="text-lg font-semibold mb-3">智驾平权策略</h4>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                    <span>全系标配XNGP高阶智驾（无需选装/订阅）</span>
                  </li>
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                    <span>纯视觉方案，不依赖高精地图，城市NGP覆盖范围行业领先</span>
                  </li>
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                    <span>智驾渗透率达93%+，在20万级市场遥遥领先</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">2.3 新P7：持续进化</h3>
          
          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
            <h4 class="text-lg font-semibold mb-3">核心升级点</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <div class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span><strong>定价策略：</strong>21.98-30.18万元，价格提升但价值提升更大</span>
                </div>
                <div class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span><strong>三电升级：</strong>800V高压平台，5C超充</span>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span><strong>设计升级：</strong>颠覆设计+全栈自研AI</span>
                </div>
                <div class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs" />
                  <span><strong>配置下沉：</strong>高端配置下放，性价比提升</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.4s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-purple-200 dark:border-purple-800 pb-2">
          三、P5与MONA03车型分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400">3.1 P5：失败案例分析</h3>
          
          <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl mb-6">
            <h4 class="text-lg font-semibold mb-3">市场表现与核心问题</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 class="font-medium mb-2">市场表现</h5>
                <p class="text-slate-700 dark:text-slate-300 mb-4">P5销量持续低迷，未能成为小鹏的销量支撑。</p>
              </div>
              
              <div>
                <h5 class="font-medium mb-2">核心问题</h5>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs" />
                    <span>定价偏高：起售价15.69万元，高于同级秦PLUS DM-i（9.98万起）、海豚（11.68万起）</span>
                  </li>
                  <li class="flex items-start">
                    <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs" />
                    <span>性价比失衡：入门版配置低（无热泵、电动尾门），用户感知"高价低配"</span>
                  </li>
                  <li class="flex items-start">
                    <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs" />
                    <span>产品定位模糊：既没有P7的运动感，也没有家庭轿车的实用性</span>
                  </li>
                  <li class="flex items-start">
                    <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs" />
                    <span>用户定位明确：没有明确的目标用户群体，市场认知模糊</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400">3.2 MONA03：大众市场的成功突破</h3>
          
          <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
            <h4 class="text-lg font-semibold mb-3">产品定义与市场策略</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 class="font-medium mb-2">产品定位</h5>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                    <span>市场定位："15万级AI汽车"，切入占市场74%的10-15万大众市场</span>
                  </li>
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                    <span>对标竞品：直接对标卡罗拉、朗逸等主流燃油车</span>
                  </li>
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                    <span>智能平权：全系标配L2级智驾，Max版下放XNGP</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 class="font-medium mb-2">定价策略</h5>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                    <span>定价策略：11.98-15.58万元，较P5降低3.7万元</span>
                  </li>
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                    <span>与燃油车价格持平，建立价格竞争力</span>
                  </li>
                  <li class="flex items-start">
                    <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                    <span>简化版本，全系标配核心配置，降低用户决策成本</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <h5 class="font-medium mb-2">市场认可</h5>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                  <span>定价精准：11.98万起，对标主流燃油车</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                  <span>智能标配：全系标配L2级智驾</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs" />
                  <span>用户认知："15万级AI汽车"标签深入人心</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.5s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-indigo-200 dark:border-indigo-800 pb-2">
          四、数据对比与成效分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">4.1 销量变化：P7销量表现</h3>
          
          <div class="h-80 mb-6 flex flex-col pt-12">
            <div class="flex-1 flex items-end justify-between space-x-2 md:space-x-4 px-2 md:px-4 pb-2 border-b border-slate-100">
              <div 
                v-for="(item, index) in salesTimelineData" 
                :key="index"
                class="flex flex-col items-center justify-end h-full flex-1 group relative"
              >
                <div class="mb-2 px-2 py-1 bg-white dark:bg-slate-700 shadow-lg rounded text-xs md:text-sm font-bold text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full whitespace-nowrap z-10 border border-green-100 dark:border-green-800">
                  {{ item.sales }}辆
                  <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white dark:border-t-slate-700"></div>
                </div>
                
                <div class="w-full bg-green-100 dark:bg-green-900/40 rounded-t-lg relative transition-all duration-300 group-hover:bg-green-200 dark:group-hover:bg-green-800/60"
                     :style="{ height: item.percent + '%' }">
                  <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg h-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
            
            <div class="flex justify-between px-2 md:px-4 mt-2">
              <div v-for="(item, index) in salesTimelineData" :key="index" class="flex-1 text-center">
                <div class="text-xs md:text-sm font-medium text-slate-600 dark:text-slate-400 truncate">{{ item.month }}</div>
                <div class="text-xs text-slate-400 dark:text-slate-500 transform scale-90">{{ item.description }}</div>
              </div>
            </div>
          </div>
          
          <div class="overflow-x-auto mb-6">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-indigo-100 dark:bg-indigo-800/50">
                  <th class="p-3 text-left border border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100">车型</th>
                  <th class="p-3 text-left border border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100">危机期销量</th>
                  <th class="p-3 text-left border border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100">转型后销量</th>
                  <th class="p-3 text-left border border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100">增长幅度</th>
                  <th class="p-3 text-left border border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100">关键成功因素</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in modelSalesComparisonData" :key="index" :class="index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'">
                  <td class="p-3 border border-indigo-200 dark:border-indigo-700 font-medium">{{ item.model }}</td>
                  <td class="p-3 border border-indigo-200 dark:border-indigo-700 text-slate-600 dark:text-slate-400">{{ item.beforeSales }}</td>
                  <td class="p-3 border border-indigo-200 dark:border-indigo-700 text-slate-600 dark:text-slate-400">{{ item.afterSales }}</td>
                  <td class="p-3 border border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 font-medium">{{ item.growth }}</td>
                  <td class="p-3 border border-indigo-200 dark:border-indigo-700 text-slate-600 dark:text-slate-400">{{ item.factors }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-indigo-100 dark:bg-indigo-800/50">
                  <th class="p-3 text-left border border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100">车型</th>
                  <th class="p-3 text-left border border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100">危机期定价</th>
                  <th class="p-3 text-left border border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100">转型后定价</th>
                  <th class="p-3 text-left border border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100">降价幅度</th>
                  <th class="p-3 text-left border border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100">策略分析</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in pricingData" :key="index" :class="index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'">
                  <td class="p-3 border border-indigo-200 dark:border-indigo-700 font-medium">{{ item.model }}</td>
                  <td class="p-3 border border-indigo-200 dark:border-indigo-700 text-slate-600 dark:text-slate-400">{{ item.beforePrice }}</td>
                  <td class="p-3 border border-indigo-200 dark:border-indigo-700 text-slate-600 dark:text-slate-400">{{ item.afterPrice }}</td>
                  <td class="p-3 border border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 font-medium">{{ item.discount }}</td>
                  <td class="p-3 border border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400">{{ item.strategy }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">4.2 转型成效总结</h3>
          
          <div class="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">5-10倍</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">销量突破</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">P7从月销数百辆到数千辆</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">起步即爆</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">新品成功</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">MONA03切入大众市场</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">93%+</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">智驾渗透率</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">行业第一</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">全面升级</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">产品力提升</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">800V高压、5C超充、激光雷达标配</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">AI平权</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">品牌重塑</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">从"科技轿跑"到"AI平权"</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg animate-fade-in-up" style="animation-delay: 0.6s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-amber-200 dark:border-amber-800 pb-2">
          五、经验与启示
        </h2>
        
        <h3 class="text-xl font-semibold mb-6 text-amber-700 dark:text-amber-400 text-center">从小鹏车型转型中获得的启示</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
            <div class="flex items-start">
              <div class="bg-amber-100 dark:bg-amber-800/50 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-amber-600 dark:text-amber-400">1</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">产品力迭代速度是生存法则</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  小鹏P7从爆款到滞销仅用了2年时间，警示行业技术迭代慢6个月就可能被淘汰。新能源汽车技术迭代极快，必须保持持续创新能力，否则优势会迅速丧失。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
            <div class="flex items-start">
              <div class="bg-amber-100 dark:bg-amber-800/50 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-amber-600 dark:text-amber-400">2</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">智驾差异化是核心竞争力</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  小鹏通过XNGP全系标配，将智驾从高端配置变为标配，实现"智能平权"。在20万级市场，智驾渗透率达93%+，建立了明显的差异化优势。找到并放大自己的技术护城河至关重要。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
            <div class="flex items-start">
              <div class="bg-amber-100 dark:bg-amber-800/50 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-amber-600 dark:text-amber-400">3</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">定价策略要精准击穿主流</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  P7+定价19.98万起，与雅阁、凯美瑞等燃油车价格持平；MONA03定价11.98万起，较P5降低3.7万元。精准的价格定位可以快速打开市场，建立价格竞争力。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
            <div class="flex items-start">
              <div class="bg-amber-100 dark:bg-amber-800/50 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-amber-600 dark:text-amber-400">4</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">车型定位要与时俱进</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  从小众定位转向主流定位，从满足小众需求转向满足主流需求，才能获得更大的市场空间。MONA03的成功证明了这一点。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl md:col-span-2">
            <div class="flex items-start">
              <div class="bg-amber-100 dark:bg-amber-800/50 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-amber-600 dark:text-amber-400">5</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">简化产品线，降低用户决策成本</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  P5有6个版本、3个续航、3套付费选装包，用户决策成本高；而P7+和MONA03简化版本，全系标配核心配置，大幅降低用户决策成本。产品线简化，决策成本降低。
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
      <Footer />
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