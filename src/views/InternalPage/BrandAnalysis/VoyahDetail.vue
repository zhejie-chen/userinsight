<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { brandData } from './data';
import { 
  ArrowLeft, 
  AlertCircle, 
  CheckCircle2, 
  Target, 
  Tags, 
  Rocket, 
  Zap, 
  Users, 
  Cpu, 
  Award, 
  Scale,
  Activity,
  ThumbsUp
} from 'lucide-vue-next';
import Footer from '../../../components/Footer.vue';

const router = useRouter();
const brand = computed(() => brandData.find(b => b.id === 'voyah'));

const goBack = () => {
  router.push('/brand-analysis');
};

// 销量数据 - 转换为百分比用于CSS图表渲染 (Max: 2500)
const salesData = [
  { month: '2021-2022年', sales: 800, percent: 32, description: '长期低迷' },
  { month: '2023年', sales: 800, percent: 32, description: '濒临退市' },
  { month: '2024年', sales: 1500, percent: 60, description: '销量回升' },
  { month: '2025年', sales: 2500, percent: 100, description: '持续优化' },
];

// FREE车型技术对比数据
const freeTechComparisonData = [
  { category: '动力形式', before: '纯电为主', after: '纯电+增程双布局', improvement: '动力多元化' },
  { category: '价格定位', before: '31.36-36.99万元', after: '15-25万元', improvement: '回归主流' },
  { category: '市场定位', before: '高端定位', after: '主流价格带', improvement: '定位清晰' },
  { category: '产品视角', before: '研发视角', after: '用户视角', improvement: '市场导向' },
  { category: '补能体验', before: '依赖充电桩', after: '可油可电', improvement: '补能焦虑缓解' },
  { category: '目标用户', before: '高端用户', after: '主流家庭用户', improvement: '用户群体扩大' },
];

// 定价对比数据
const pricingData = [
  { model: 'FREE', beforePrice: '31.36万元起', afterPrice: '15-25万元', discount: '6-16万元', strategy: '回归15-25万主流价格带' },
  { model: '梦想家', beforePrice: '36.99万元起', afterPrice: '20-30万元', discount: '7-17万元', strategy: '回归主流，价格竞争力提升' },
  { model: '整体策略', beforePrice: '定价虚高，高不成低不就', afterPrice: '回归15-25万主流价格带', discount: '-', strategy: '价格调整是第一要务' },
];

// 销量变化数据
const salesChangeData = [
  { time: '2021-2022年', sales: '500-1000辆', event: 'FREE发布，定价31.36万起', performance: '长期低迷' },
  { time: '2023年', sales: '500-1000辆', event: '销量持续低迷，面临生存危机', performance: '濒临退市' },
  { time: '2024年', sales: '1000-2000辆', event: '价格下探，增程版切入', performance: '销量回升' },
  { time: '2025年', sales: '2000-3000辆', event: '持续优化，销量稳定上升', performance: '持续优化' },
];
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 pt-[44px] flex flex-col">
    <header class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex items-center">
          <button 
            @click="goBack"
            class="mr-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="返回"
          >
            <ArrowLeft class="w-6 h-6" />
          </button>
          <h1 class="text-3xl font-bold">岚图品牌车型深度分析</h1>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-12 max-w-5xl flex-grow">
      
      <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up">
        <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <div class="w-32 h-32 flex items-center justify-center p-4 rounded-xl flex-shrink-0">
            <img :src="brand?.logo" alt="岚图logo" class="w-full h-full object-contain" style="background-color: transparent;" />
          </div>
          <div class="flex-1 mt-6 md:mt-0 w-full">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">岚图品牌车型深度分析</h2>
            <p class="text-xl text-slate-700 dark:text-slate-300 mb-6 text-center md:text-left">央企框架下，从产品定义模糊到用户需求导向，增程技术切入的持续优化之路</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl">
                <h3 class="text-sm text-amber-600 dark:text-amber-400 font-medium mb-1">危机期</h3>
                <p class="font-semibold text-slate-800 dark:text-slate-200">长期销量低迷</p>
              </div>
              <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                <h3 class="text-sm text-green-600 dark:text-green-400 font-medium mb-1">转型成效</h3>
                <p class="font-semibold text-slate-800 dark:text-slate-200">销量增长2-3倍</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.1s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-blue-200 dark:border-blue-800 pb-2">
          一、品牌背景与车型概览
        </h2>
        
        <div class="mb-8">
          <p class="text-lg mb-6">岚图汽车作为东风集团旗下的高端新能源汽车品牌，近年来经历了从"高不成低不就"到精准定位的转型过程。本分析将围绕岚图的核心车型展开，深入剖析各车型的问题、转型策略及成效。</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-2">FREE</h3>
              <p class="text-slate-700 dark:text-slate-300">岚图品牌的首款车型，经历了从月销500-1000辆到2000-3000辆的销量回升</p>
            </div>
            <div class="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-2">梦想家</h3>
              <p class="text-slate-700 dark:text-slate-300">岚图品牌的MPV车型，通过价格调整和产品力提升获得市场认可，力压腾势D9，月销1w+</p>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl mb-6">
            <h3 class="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">发展时间线</h3>
            <div class="relative">
              <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
              
              <div class="space-y-6">
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-800/50 flex items-center justify-center border-2 border-blue-500 dark:border-blue-400">
                      <span class="text-xs font-bold">1</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2021-2022年 - 市场探索期</h4>
                    <p class="text-slate-700 dark:text-slate-300">岚图FREE发布，定价31.36万元起，销量长期低迷</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-800/50 flex items-center justify-center border-2 border-blue-500 dark:border-blue-400">
                      <span class="text-xs font-bold">2</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2023年 - 危机持续期</h4>
                    <p class="text-slate-700 dark:text-slate-300">FREE、梦想家销量持续低迷，月销500-1000辆，面临生存危机</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-800/50 flex items-center justify-center border-2 border-blue-500 dark:border-blue-400">
                      <span class="text-xs font-bold">3</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2024年 - 战略调整期</h4>
                    <p class="text-slate-700 dark:text-slate-300">价格下探至15-25万主流价格带，增程版切入市场</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-800/50 flex items-center justify-center border-2 border-blue-500 dark:border-blue-400">
                      <span class="text-xs font-bold">4</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2025年 - 持续优化期</h4>
                    <p class="text-slate-700 dark:text-slate-300">销量稳定上升，持续优化产品和服务</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-blue-200 dark:border-blue-800 pb-2">
          二、FREE车型深度分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">2.1 初期困境：快倒闭的销量困境</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3">危机表现</h4>
              <p class="text-slate-700 dark:text-slate-300">
                岚图FREE曾经也经历过快倒闭的销量，月销长期徘徊在500-1000辆，面临严峻生存挑战。
              </p>
            </div>
            
            <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3">核心问题</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>定价虚高：FREE初期31.36万元起，远超15-25万主流价格带，陷入"高不成低不就"困境</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>定位模糊：脱离主流需求，研发视角而非用户视角，产品定位不清晰</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>技术滞后：在增程/混动市场爆发时反应迟缓，动力单一</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>动力单一：早期以纯电为主，忽略增程/混动市场爆发，补能焦虑劝退家庭用户</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">2.2 产品力升级：从高端定位到市场导向</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Target class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                定位重塑：回归主流市场
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>问题：定位模糊，脱离主流需求，研发视角而非用户视角</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>调整：从高端定位转向15-25万主流价格带</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>用户导向：从"我认为用户需要什么"转向"用户真正需要什么"</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Tags class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                价格下探：回归合理价位
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>问题：定价虚高，FREE 31.36万元起，梦想家36.99万元起</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>调整：调整至15-25万主流价格带</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>市场认可：销量稳定上升，价格竞争力提升</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Rocket class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                增程切入：响应市场需求
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>问题：动力单一，早期以纯电为主，忽略增程/混动市场爆发</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>调整：推出增程版，响应"可油可电"的市场需求</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>用户价值：解决家庭用户补能焦虑，提升可及性</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl mb-6">
            <h4 class="text-lg font-semibold mb-3 flex items-center">
              <Zap class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              FREE技术升级路径
            </h4>
            
            <div class="overflow-x-auto mb-6">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-blue-100 dark:bg-blue-800/50">
                    <th class="p-3 text-left border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-100">技术维度</th>
                    <th class="p-3 text-left border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-100">转型前</th>
                    <th class="p-3 text-left border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-100">转型后</th>
                    <th class="p-3 text-left border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-100">升级幅度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in freeTechComparisonData" :key="index" :class="index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'">
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
          <h3 class="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">2.3 市场导向：从"我认为"到"用户需要"</h3>
          
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl mb-6">
            <h4 class="text-lg font-semibold mb-3 flex items-center">
              <Users class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              FREE的市场导向转型
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <div class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span><strong>问题识别：</strong>从"研发视角"转向"市场视角"，识别用户真实需求</span>
                </div>
                <div class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span><strong>定价调整：</strong>从"我们认为值这个价"转向"市场能接受的价"</span>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span><strong>产品设计：</strong>从"我们认为好的功能"转向"用户真正需要的功能"</span>
                </div>
                <div class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span><strong>市场反馈：</strong>快速响应用户反馈，持续优化产品和服务</span>
                </div>
              </div>
            </div>
            <div class="mt-4 p-4 bg-blue-100 dark:bg-blue-800/30 rounded-lg">
              <p class="font-medium text-blue-900 dark:text-blue-100">用户价值：</p>
              <p class="text-blue-800 dark:text-blue-200">解决用户核心痛点，提升用户满意度</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-green-200 dark:border-green-800 pb-2">
          三、梦想家车型分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">3.1 初期困境：高不成低不就的定位</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3">危机表现</h4>
              <p class="text-slate-700 dark:text-slate-300">
                梦想家作为岚图品牌的MPV车型，初期定价36.99万元起，销量长期低迷，面临生存挑战。
              </p>
            </div>
            
            <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3">核心问题</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>定价过高：36.99万元起，远超20-30万主流MPV价格带</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>配置错位：堆砌豪华材质却忽视核心痛点</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>动力单一：早期以纯电为主，忽略增程/混动市场爆发</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>央企思维固化：缺乏用户视角，决策链条长</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">3.2 产品力升级与价格调整</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3">产品力升级</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>推出增程版，解决补能焦虑</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>优化第二排座椅舒适性，提升MPV核心体验</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>提升内饰做工和材质，满足高端用户需求</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>升级智能座舱和智驾系统，提升科技感</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3">价格调整策略</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>价格下探：从36.99万元起降至20-30万元</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>价格竞争力：与腾势D9、极氪009等形成价格优势</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>版本精简：优化产品配置，降低用户决策成本</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-green-600 dark:text-green-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>市场反应：销量开始回升，市场认可度提升</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.4s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-purple-200 dark:border-purple-800 pb-2">
          四、营销与定价策略调整
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400">4.1 定价策略：大幅降价回归主流</h3>
          
          <div class="overflow-x-auto mb-6">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-purple-100 dark:bg-purple-800/50">
                  <th class="p-3 text-left border border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-100">产品</th>
                  <th class="p-3 text-left border border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-100">转型前定价</th>
                  <th class="p-3 text-left border border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-100">转型后定价</th>
                  <th class="p-3 text-left border border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-100">降价幅度</th>
                  <th class="p-3 text-left border border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-100">策略分析</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in pricingData" :key="index" :class="index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'">
                  <td class="p-3 border border-purple-200 dark:border-purple-700 font-medium">{{ item.model }}</td>
                  <td class="p-3 border border-purple-200 dark:border-purple-700 text-slate-600 dark:text-slate-400">{{ item.beforePrice }}</td>
                  <td class="p-3 border border-purple-200 dark:border-purple-700 text-slate-600 dark:text-slate-400">{{ item.afterPrice }}</td>
                  <td class="p-3 border border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 font-medium">{{ item.discount }}</td>
                  <td class="p-3 border border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400">{{ item.strategy }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400">4.2 营销创新：强化品质背书</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Cpu class="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                鸿蒙座舱智驾赋能
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>搭载鸿蒙智能座舱，实现多设备互联生态</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>智能驾驶系统：与华为深度合作，实现高阶智驾能力</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>用户体验：流畅的交互体验，智能语音助手</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>差异化优势：依托华为技术，打造智能座舱智驾标杆</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Zap class="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                增程技术传播
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>传播增程技术优势</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>技术优势：可油可电，无续航焦虑</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>用户价值：解决家庭用户核心痛点</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>市场教育：增程技术逐渐被市场接受</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Award class="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                品质形象传播
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>强化品质形象，差异化竞争</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>品质背书：东风集团品质保障</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>对比营销：vs新势力，品质更可靠</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>用户认知：传统车企，品质有保障</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.5s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-indigo-200 dark:border-indigo-800 pb-2">
          五、数据对比与成效分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">5.1 FREE销量变化：从濒临退市到稳定上升</h3>
          
          <div class="h-80 mb-6 flex flex-col pt-12">
            <div class="flex-1 flex items-end justify-between space-x-2 md:space-x-4 px-2 md:px-4 pb-2 border-b border-slate-100">
              <div 
                v-for="(item, index) in salesData" 
                :key="index"
                class="flex flex-col items-center justify-end h-full flex-1 group relative"
              >
                <div class="mb-2 px-2 py-1 bg-white dark:bg-slate-700 shadow-lg rounded text-xs md:text-sm font-bold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full whitespace-nowrap z-10 border border-blue-100 dark:border-blue-800">
                  {{ item.sales }}辆
                  <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white dark:border-t-slate-700"></div>
                </div>
                
                <div class="w-full bg-blue-100 dark:bg-blue-900/40 rounded-t-lg relative transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60"
                     :style="{ height: item.percent + '%' }">
                  <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg h-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
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
                <tr class="bg-indigo-100 dark:bg-indigo-800/50">
                  <th class="p-3 text-left border border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100">时间节点</th>
                  <th class="p-3 text-left border border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100">月销量</th>
                  <th class="p-3 text-left border border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100">关键事件</th>
                  <th class="p-3 text-left border border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100">市场表现</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in salesChangeData" :key="index" :class="index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'">
                  <td class="p-3 border border-indigo-200 dark:border-indigo-700 font-medium">{{ item.time }}</td>
                  <td class="p-3 border border-indigo-200 dark:border-indigo-700 text-slate-600 dark:text-slate-400">{{ item.sales }}</td>
                  <td class="p-3 border border-indigo-200 dark:border-indigo-700 text-slate-600 dark:text-slate-400">{{ item.event }}</td>
                  <td class="p-3 border border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 font-medium">{{ item.performance }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">5.2 第三方评价验证</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Award class="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                品质认可
              </h4>
              <p class="mb-3 text-slate-700 dark:text-slate-300">媒体评测显示，岚图品质获得认可</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>品质保障：东风集团品质管理体系</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>可靠性：传统车企，品质更可靠</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>用户信任：品牌信任度提升</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Zap class="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                增程技术认可
              </h4>
              <p class="mb-3 text-slate-700 dark:text-slate-300">增程技术获得市场认可</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>技术优势：可油可电，无续航焦虑</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>用户价值：解决家庭用户核心痛点</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>市场接受：增程技术逐渐被市场接受</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Scale class="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                价格竞争力提升
              </h4>
              <p class="mb-3 text-slate-700 dark:text-slate-300">价格竞争力大幅提升</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>价格调整：从31.36万起降至15-25万</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>性价比：价格竞争力显著提升</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-1.5 mr-2 text-xs flex-shrink-0" />
                  <span>市场反响：销量稳定上升</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">5.3 转型成效总结</h3>
          
          <div class="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">2-3倍</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">销量回升</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">从500-1000辆到2000-3000辆</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">主流价格</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">定位清晰</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">从高端定位转向15-25万</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">可油可电</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">增程成功</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">响应"可油可电"需求</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">东风品质</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">品质认可</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">品牌信任度提升</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">持续优化</div>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">销量表现</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">持续优化产品和服务</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg animate-fade-in-up" style="animation-delay: 0.6s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-amber-200 dark:border-amber-800 pb-2">
          六、经验与启示
        </h2>
        
        <h3 class="text-xl font-semibold mb-6 text-amber-700 dark:text-amber-400 text-center">从岚图车型转型中获得的启示</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
            <div class="flex items-start">
              <div class="bg-amber-100 dark:bg-amber-800/50 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-amber-600 dark:text-amber-400">1</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">避免"研发视角"，坚持"用户导向"</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  岚图最大的教训是早期脱离主流需求，研发视角而非用户视角。产品定位必须基于用户真实需求，而非"我认为用户需要什么"。从"研发视角"转向"用户视角"是转型的第一步。
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
                <h4 class="text-lg font-semibold mb-2">定价要回归市场主流</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  岚图初期定价31.36万起，远超15-25万主流价格带，导致"高不成低不就"。回归主流价格带后，销量稳定上升。定价不是"我认为值这个价"，而是"市场能接受这个价"。
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
                <h4 class="text-lg font-semibold mb-2">响应市场趋势，及时调整技术路径</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  在增程/混动市场爆发时，岚图反应迟缓，错失市场红利。及时推出增程版，响应"可油可电"的市场需求，销量开始回升。技术路径要紧跟市场趋势，不能固守单一形式。
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
                <h4 class="text-lg font-semibold mb-2">传统车企优势：品质背书</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  岚图背靠东风集团，拥有强大的品质管理体系。通过强化"东风出品"的品质形象，差异化竞争，提升品牌信任度。传统车企的品质背书是新势力无法复制的优势。
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
                <h4 class="text-lg font-semibold mb-2">转型需要持续优化</h4>
                <p class="text-slate-700 dark:text-slate-300">
                  岚图的转型不是一蹴而就的，而是持续优化产品和服务的过程。销量从500-1000辆到2000-3000辆，是持续优化的结果。转型需要耐心，持续优化才能实现长期成功。
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