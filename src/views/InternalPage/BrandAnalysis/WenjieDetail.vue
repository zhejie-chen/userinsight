<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { brandData } from './data';
import { 
  ArrowLeft, 
  AlertCircle, 
  MessageSquare, 
  Wrench, 
  Check, 
  Map, 
  Video, 
  Key, 
  Flame, 
  Link, 
  ArrowRightLeft, 
  Award, 
  Maximize2, 
  Scale, 
  Gauge, 
  Megaphone, 
  Locate,
  CheckCircle2,
  Milestone
} from 'lucide-vue-next';

const router = useRouter();
const brand = computed(() => brandData.find(b => b.id === 'wenjie'));

const goBack = () => {
  router.push('/brand-analysis');
};

// 销量数据 - 按时间线展示M7销量变化
const salesTimelineData = [
  { month: '2023年9月前', sales: 500, percent: 5, description: '濒临退市' },
  { month: '2023年9月', sales: 3000, percent: 30, description: '初见起色' },
  { month: '2023年10月', sales: 6000, percent: 60, description: '快速增长' },
  { month: '2023年11月', sales: 8000, percent: 80, description: '持续爆款' },
  { month: '2023年12月', sales: 10000, percent: 100, description: '市场领先' },
];

// 技术对比数据 - M7升级前后对比
const m7TechComparisonData = [
  { category: '智能驾驶', before: '基础ADAS', after: 'HUAWEI ADS 2.0高阶智驾', improvement: '质的飞跃' },
  { category: '空间表现', before: '4785mm车长，空间有限', after: '3338mm有效空间，五座版', improvement: '大幅提升' },
  { category: '底盘调校', before: '常规悬挂', after: '双FSD可变阻尼减震器', improvement: '舒适性显著改善' },
  { category: '座舱体验', before: '基础座舱', after: '华为HarmonyOS座舱', improvement: '科技感大幅提升' },
  { category: '续航能力', before: '500km左右', after: '600km+（纯电）/ 1200km+（增程）', improvement: '续航焦虑大幅缓解' },
];

// 定价对比数据
const pricingData = [
  { model: '问界M7', beforePrice: '31.69-37.99万元', afterPrice: '24.98-32.98万元', strategy: '降价6.7-7万元，回归25-30万主流价格带' },
  { model: '问界M5', beforePrice: '25.98-33.18万元', afterPrice: '24.98-27.98万元', strategy: '降价1-5.2万元，提升性价比' },
];

// 用户痛点与解决方案
const userPainPoints = [
  {
    painPoint: '空间不足',
    userFeedback: '后备箱与储物空间不足，难以满足多场景家用需求',
    solution: [
      '投入超5亿元升级车身结构',
      '有效空间长度达3338mm',
      '装载承重超630kg',
      '新增五座版，解决老款空间短板'
    ],
    effect: '解决家庭用户刚需，空间满意度大幅提升'
  },
  {
    painPoint: '舒适性不足',
    userFeedback: '悬挂偏硬，长途乘坐体验差',
    solution: [
      '前后双FSD可变阻尼减震器',
      '多连杆独立悬挂升级',
      '针对家庭用车场景的调校优化'
    ],
    effect: '舒适性显著改善，符合家庭用户期待'
  },
  {
    painPoint: '价格偏高',
    userFeedback: '价格与产品力不匹配，性价比低',
    solution: [
      '全新设计语言，内饰品质升级',
      'Nappa真皮+实木装饰用料升级',
      '华为HarmonyOS智能座舱',
      '价格下探8-12万，精准卡位主流市场'
    ],
    effect: '性价比大幅提升，市场竞争力增强'
  }
];
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 pt-[44px] flex flex-col">
    <header class="bg-gradient-to-r from-orange-500 to-red-600 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex items-center">
          <button 
            @click="goBack"
            class="mr-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="返回"
          >
            <ArrowLeft class="w-6 h-6" />
          </button>
          <h1 class="text-3xl font-bold">问界品牌车型深度分析</h1>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-12 max-w-5xl flex-grow">
      
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up">
        <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <div class="w-32 h-32 flex items-center justify-center p-4 bg-white rounded-xl flex-shrink-0">
            <img :src="brand?.logo" alt="问界logo" class="w-full h-full object-contain" />
          </div>
          <div class="flex-1 mt-6 md:mt-0 w-full">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">问界品牌车型深度分析</h2>
            <p class="text-xl text-slate-600 mb-6 text-center md:text-left">依托华为生态，从"夹心层"困境到智驾标杆的华丽转身</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div class="bg-orange-50 p-4 rounded-xl border border-orange-100">
                <h3 class="text-sm text-orange-600 font-medium mb-1">危机期</h3>
                <p class="font-semibold text-slate-800">2023年9月前</p>
              </div>
              <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                <h3 class="text-sm text-green-600 font-medium mb-1">转型成效</h3>
                <p class="font-semibold text-slate-800">销量增长10倍+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.1s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-orange-200 pb-2">
          一、品牌背景与车型概览
        </h2>
        
        <div class="mb-8">
          <p class="text-lg mb-6">问界汽车作为华为深度赋能的新能源汽车品牌，通过与华为的紧密合作，在技术和营销上形成了独特优势。本分析将围绕问界的核心车型展开，深入剖析各车型的问题、转型策略及成效。</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 class="text-xl font-semibold mb-2">问界M7</h3>
              <p class="text-slate-600">问界品牌的核心车型，经历了从销量低谷到爆款的华丽转身，成为问界品牌的销量支柱。</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 class="text-xl font-semibold mb-2">问界M5</h3>
              <p class="text-slate-600">问界品牌的首款车型，在市场上获得一定关注，但始终无法获得持续成功，面临"夹心层"困境。</p>
            </div>
          </div>
          
          <div class="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
            <h3 class="text-xl font-semibold mb-4 text-orange-700">发展时间线</h3>
            <div class="relative">
              <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-200"></div>
              
              <div class="space-y-6">
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-500">
                      <span class="text-xs font-bold text-orange-600">1</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2022年 - 市场初探期</h4>
                    <p class="text-slate-600">问界M5发布，初期获得市场关注，但很快陷入"夹心层"困境</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-500">
                      <span class="text-xs font-bold text-orange-600">2</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2023年初 - 危机爆发期</h4>
                    <p class="text-slate-600">问界M7销量持续低迷，月销数百辆，品牌面临严峻考验</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-500">
                      <span class="text-xs font-bold text-orange-600">3</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2023年9月 - 转型转折点</h4>
                    <p class="text-slate-600">问界M7启动全面升级，产品力升级、价格下探、品牌重塑三管齐下</p>
                  </div>
                </div>
                
                <div class="flex items-start z-10 relative">
                  <div class="relative flex-shrink-0">
                    <div class="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-500">
                      <span class="text-xs font-bold text-orange-600">4</span>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-lg font-semibold">2023年底 - 持续爆款期</h4>
                    <p class="text-slate-600">问界M7成为持续爆款，月销破万辆，成功实现"起死回生"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-green-200 pb-2">
          二、问界M7深度分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-green-700">2.1 初期困境：销量低迷的根本原因</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <h4 class="text-lg font-semibold mb-3">危机表现</h4>
              <p class="text-slate-700">
                2023年9月前，问界M7长期处于销量低迷状态，月销量徘徊在数百辆，几乎面临退市危机。
              </p>
            </div>
            
            <div class="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <h4 class="text-lg font-semibold mb-3">核心问题</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span>定价过高：陷入"高不成低不就"的定价困境</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span>产品力不足：在空间、舒适性等方面存在明显短板</span>
                </li>
                <li class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span>品牌定位模糊：目标用户不清晰，市场认知不足</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-green-700">2.2 用户反馈与产品响应：需求驱动的产品升级</h3>
          
          <div class="space-y-6">
            <div 
              v-for="(item, index) in userPainPoints" 
              :key="index"
              class="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100"
            >
              <div class="bg-orange-50 px-6 py-3 flex items-center border-b border-orange-100">
                <div class="bg-orange-100 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                  <span class="text-orange-600 font-bold text-sm">{{ index + 1 }}</span>
                </div>
                <h4 class="text-lg font-semibold">{{ item.painPoint }} 👉 升级对策</h4>
              </div>
              <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div class="flex items-center mb-3">
                    <MessageSquare class="w-5 h-5 text-amber-500 mr-2" />
                    <h5 class="font-medium">用户反馈</h5>
                  </div>
                  <p class="text-slate-600">{{ item.userFeedback }}</p>
                </div>
                <div>
                  <div class="flex items-center mb-3">
                    <Wrench class="w-5 h-5 text-green-500 mr-2" />
                    <h5 class="font-medium">解决方案</h5>
                  </div>
                  <ul class="space-y-2">
                    <li v-for="(sol, i) in (Array.isArray(item.solution) ? item.solution : [item.solution])" :key="i" class="flex items-start">
                      <Check class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span class="text-sm">{{ sol }}</span>
                    </li>
                  </ul>
                </div>
                <div class="md:col-span-2">
                  <div class="bg-green-50 p-3 rounded-lg border border-green-100">
                    <p class="font-medium text-green-700">成效：{{ item.effect }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mb-10">
          <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-6">
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-blue-100">
                    <th class="p-3 text-left border border-blue-200 text-blue-900">技术维度</th>
                    <th class="p-3 text-left border border-blue-200 text-blue-900">转型前</th>
                    <th class="p-3 text-left border border-blue-200 text-blue-900">转型后</th>
                    <th class="p-3 text-left border border-blue-200 text-blue-900">升级幅度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white">
                    <td class="p-3 border border-blue-200 font-medium">空间表现</td>
                    <td class="p-3 border border-blue-200 text-slate-600">4785mm车长，空间有限</td>
                    <td class="p-3 border border-blue-200 text-slate-800">3338mm有效空间，五座版</td>
                    <td class="p-3 border border-blue-200 text-blue-600 font-medium">大幅提升</td>
                  </tr>
                  <tr class="bg-slate-50">
                    <td class="p-3 border border-blue-200 font-medium">底盘调校</td>
                    <td class="p-3 border border-blue-200 text-slate-600">常规悬挂</td>
                    <td class="p-3 border border-blue-200 text-slate-800">双FSD可变阻尼减震器</td>
                    <td class="p-3 border border-blue-200 text-blue-600 font-medium">舒适性显著改善</td>
                  </tr>
                  <tr class="bg-white">
                    <td class="p-3 border border-blue-200 font-medium">座舱体验</td>
                    <td class="p-3 border border-blue-200 text-slate-600">基础座舱</td>
                    <td class="p-3 border border-blue-200 text-slate-800">华为HarmonyOS座舱</td>
                    <td class="p-3 border border-blue-200 text-blue-600 font-medium">科技感大幅提升</td>
                  </tr>
                  <tr class="bg-slate-50">
                    <td class="p-3 border border-blue-200 font-medium">续航能力</td>
                    <td class="p-3 border border-blue-200 text-slate-600">500km左右</td>
                    <td class="p-3 border border-blue-200 text-slate-800">600km+（纯电）/ 1200km+（增程）</td>
                    <td class="p-3 border border-blue-200 text-blue-600 font-medium">续航焦虑大幅缓解</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-green-700">2.3 智驾技术突破：HUAWEI ADS 2.0</h3>
          
          <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-6">
            <div class="overflow-x-auto mb-6">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-blue-100">
                    <th class="p-3 text-left border border-blue-200 text-blue-900">技术维度</th>
                    <th class="p-3 text-left border border-blue-200 text-blue-900">转型前</th>
                    <th class="p-3 text-left border border-blue-200 text-blue-900">转型后</th>
                    <th class="p-3 text-left border border-blue-200 text-blue-900">升级幅度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in m7TechComparisonData.filter(i => i.category === '智能驾驶')" :key="index" :class="index % 2 === 0 ? 'bg-white' : 'bg-slate-50'">
                    <td class="p-3 border border-blue-200 font-medium">{{ item.category }}</td>
                    <td class="p-3 border border-blue-200 text-slate-600">{{ item.before }}</td>
                    <td class="p-3 border border-blue-200 text-slate-800">{{ item.after }}</td>
                    <td class="p-3 border border-blue-200 text-blue-600 font-medium">{{ item.improvement }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <div class="flex items-start">
                  <Locate class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm"><strong>不依赖高精地图：</strong>实现城区高阶智驾，打破高精地图依赖</span>
                </div>
                <div class="flex items-start">
                  <Map class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm"><strong>城区NCA全国覆盖：</strong>2023年12月覆盖全国，智驾能力领先</span>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex items-start">
                  <Milestone class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm"><strong>长距离NCA领航：</strong>MPI达200km，智驾可靠性大幅提升</span>
                </div>
                <div class="flex items-start">
                  <Gauge class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm"><strong>城市高架汇入汇出：</strong>成功率99%+，解决城市驾驶痛点</span>
                </div>
              </div>
            </div>
            <div class="mt-4 p-4 bg-blue-100 rounded-lg border border-blue-200">
              <p class="font-medium text-blue-900">核心价值：</p>
              <p class="text-blue-800">解决高速疲劳驾驶、城市拥堵、停车难等家庭用户核心需求，行业第一的噱头凸显购买价值</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-purple-200 pb-2">
          三、问界M5分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-purple-700">3.1 "夹心层"困境：始终无法获得持续成功</h3>
          
          <div class="bg-purple-50 p-6 rounded-xl mb-6 border border-purple-100">
            <h4 class="text-lg font-semibold mb-3">问题核心</h4>
            <p class="text-slate-700 mb-6">
              作为问界品牌的首款车型，M5在初期获得一定市场关注后，却始终无法获得持续成功，仅在换代月份销量短暂上跳，随后迅速回落。
            </p>
            
            <h4 class="text-lg font-semibold mb-3">根本原因</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <div class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm"><strong>定位尴尬：</strong>作为中型SUV，4785mm车长的空间表现不如同价位理想L6、问界M7等中大型SUV</span>
                </div>
                <div class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm"><strong>价格偏高：</strong>与竞品相比性价比不突出</span>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm"><strong>设计中庸：</strong>外观设计中规中矩，缺乏鲜明特色</span>
                </div>
                <div class="flex items-start">
                  <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm"><strong>空间不足：</strong>家庭用户刚需的装载与乘坐空间短板明显</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-purple-700">3.2 定价策略调整</h3>
          
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-purple-100">
                  <th class="p-3 text-left border border-purple-200 text-purple-900">车型</th>
                  <th class="p-3 text-left border border-purple-200 text-purple-900">危机期定价</th>
                  <th class="p-3 text-left border border-purple-200 text-purple-900">转型后定价</th>
                  <th class="p-3 text-left border border-purple-200 text-purple-900">策略分析</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in pricingData" :key="index" :class="index % 2 === 0 ? 'bg-white' : 'bg-slate-50'">
                  <td class="p-3 border border-purple-200 font-medium">{{ item.model }}</td>
                  <td class="p-3 border border-purple-200 text-slate-500 line-through">{{ item.beforePrice }}</td>
                  <td class="p-3 border border-purple-200 text-red-600 font-bold">{{ item.afterPrice }}</td>
                  <td class="p-3 border border-purple-200 text-purple-600">{{ item.strategy }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <section class="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.4s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-blue-200 pb-2">
          四、营销与智驾优势
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-blue-700">4.1 智驾宣传：ADS 2.0树立绝对技术壁垒</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Map class="w-5 h-5 text-blue-600 mr-2" />
                "无图智驾" 全国承诺
              </h4>
              <p class="text-slate-700 mb-4">
                余承东在发布会高调宣布"2023年12月城区NCA覆盖全国"，远超竞品45城目标，引发行业震动
              </p>
              <div class="flex justify-center">
                <div class="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700">
                  <CheckCircle2 class="w-4 h-4 mr-2" />
                  行业领先的覆盖范围
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Video class="w-5 h-5 text-blue-600 mr-2" />
                场景化实测传播
              </h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">官方发布"重庆8D魔幻路况""北京早高峰"智驾实测视频，展现自动变道、匝道汇入、避让行人等场景，播放量破千万</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">余承东亲自演示"大车开出小车感"，DATS 2.0动态扭矩调节使横向离心感降低14%，转向灵敏度提升36%</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
            <h4 class="text-lg font-semibold mb-3 flex items-center">
              <Key class="w-5 h-5 text-blue-600 mr-2" />
              智驾标配化
            </h4>
            <p class="text-slate-700 mb-4">
              Max版全系标配ADS 2.0，无需额外订阅，相较理想L系列节省5-8万智驾费用，形成"智价比"壁垒
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div class="bg-white p-4 rounded-lg shadow-sm text-center border border-blue-100">
                <p class="text-2xl font-bold text-blue-600 mb-1">5-8万</p>
                <p class="text-sm text-slate-600">智驾费用节省</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm text-center border border-blue-100">
                <p class="text-2xl font-bold text-blue-600 mb-1">全系标配</p>
                <p class="text-sm text-slate-600">ADS 2.0</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm text-center border border-blue-100">
                <p class="text-2xl font-bold text-blue-600 mb-1">零订阅</p>
                <p class="text-sm text-slate-600">无额外费用</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-blue-700">4.2 余承东个人IP：全方位站台，引爆舆论</h3>
          
          <div class="bg-blue-50 p-6 rounded-xl mb-6 border border-blue-100">
            <h4 class="text-lg font-semibold mb-3 flex items-center">
              <Megaphone class="w-5 h-5 text-blue-600 mr-2" />
              发布会 "遥遥领先" 名场面
            </h4>
            <p class="text-slate-700 mb-4">
              9月12日发布会全程120分钟，余承东亲自讲解产品，38次提及"遥遥领先"，强化品牌记忆点，AITO汽车直播观看人数破2000万
            </p>
            <div class="flex justify-center">
              <div class="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700">
                <Flame class="w-4 h-4 mr-2" />
                现象级传播效应
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-blue-700">4.3 Mate60 Pro现象级营销：手机倒流汽车</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Link class="w-5 h-5 text-blue-600 mr-2" />
                深度捆绑预热
              </h4>
              <p class="text-slate-700">
                新M7上市前两周，预热活动与Mate60 Pro深度联动，线下门店"看车赠Mate60优先购买权"，线上话题#问界新 M7+Mate60#阅读量破3亿
              </p>
              <div class="mt-4 text-center">
                <span class="inline-block bg-blue-100 px-3 py-1 rounded-full text-sm font-medium text-blue-700">
                  话题阅读量3亿+
                </span>
              </div>
            </div>
            
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <ArrowRightLeft class="w-5 h-5 text-blue-600 mr-2" />
                发布会直接导流
              </h4>
              <p class="text-slate-700">
                余承东在新M7发布会上直言"Mate60是现在最火的手机"，现场演示车机-手机互联，"车机像Mate60 Pro一样流畅"成为传播点
              </p>
              <div class="mt-4 text-center">
                <span class="inline-block bg-blue-100 px-3 py-1 rounded-full text-sm font-medium text-blue-700">
                  流量无缝转移
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style="animation-delay: 0.5s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-indigo-200 pb-2">
          五、数据对比与成效分析
        </h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-indigo-700">5.1 销量变化：问界M7的逆袭之路</h3>
          
          <div class="h-80 mb-6 flex flex-col pt-12">
            <div class="flex-1 flex items-end justify-between space-x-2 md:space-x-4 px-2 md:px-4 pb-2 border-b border-slate-100">
              <div 
                v-for="(item, index) in salesTimelineData" 
                :key="index"
                class="flex flex-col items-center justify-end h-full flex-1 group relative"
              >
                <div class="mb-2 px-2 py-1 bg-white shadow-lg rounded text-xs md:text-sm font-bold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full whitespace-nowrap z-10 border border-orange-100">
                  {{ item.sales }}辆
                  <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white"></div>
                </div>
                
                <div class="w-full bg-orange-100 rounded-t-lg relative transition-all duration-300 group-hover:bg-orange-200"
                     :style="{ height: item.percent + '%' }">
                  <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-lg h-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
            
            <div class="flex justify-between px-2 md:px-4 mt-2">
              <div v-for="(item, index) in salesTimelineData" :key="index" class="flex-1 text-center">
                <div class="text-xs md:text-sm font-medium text-slate-600 truncate">{{ item.month }}</div>
                <div class="text-xs text-slate-400 transform scale-90">{{ item.description }}</div>
              </div>
            </div>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-indigo-100">
                  <th class="p-3 text-left border border-indigo-200 text-indigo-900">时间节点</th>
                  <th class="p-3 text-left border border-indigo-200 text-indigo-900">月销量</th>
                  <th class="p-3 text-left border border-indigo-200 text-indigo-900">同比增长</th>
                  <th class="p-3 text-left border border-indigo-200 text-indigo-900">市场表现</th>
                  <th class="p-3 text-left border border-indigo-200 text-indigo-900">关键事件</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white">
                  <td class="p-3 border border-indigo-200 font-medium">2023年9月前</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">数百辆</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">-</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">濒临退市</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">销量持续低迷</td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="p-3 border border-indigo-200 font-medium">2023年9月</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">3000+辆</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">-</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">初见起色</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">启动全面转型</td>
                </tr>
                <tr class="bg-white">
                  <td class="p-3 border border-indigo-200 font-medium">2023年10月</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">6000+辆</td>
                  <td class="p-3 border border-indigo-200 text-green-600 font-medium">500%+</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">快速增长</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">产品力升级见效</td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="p-3 border border-indigo-200 font-medium">2023年11月</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">8000+辆</td>
                  <td class="p-3 border border-indigo-200 text-green-600 font-medium">600%+</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">持续爆款</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">口碑效应显现</td>
                </tr>
                <tr class="bg-white">
                  <td class="p-3 border border-indigo-200 font-medium">2023年12月</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">10000+辆</td>
                  <td class="p-3 border border-indigo-200 text-green-600 font-medium">800%+</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">市场领先</td>
                  <td class="p-3 border border-indigo-200 text-slate-600">成为持续爆款</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-indigo-700">5.2 第三方评价验证</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Award class="w-5 h-5 text-indigo-600 mr-2" />
                智驾领先地位
              </h4>
              <p class="mb-3 text-slate-600">第三方评测显示，HUAWEI ADS 2.0城区NCA能力行业领先</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">MPI指标：长距离NCA领航MPI达200km</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">成功率：城市高架汇入汇出成功率99%+</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">覆盖范围：城区NCA全国覆盖</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Maximize2 class="w-5 h-5 text-indigo-600 mr-2" />
                空间体验提升
              </h4>
              <p class="mb-3 text-slate-600">媒体评测显示，问界M7空间体验大幅提升</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">有效空间：3338mm，同级别领先</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">装载能力：承重超630kg，满足家庭需求</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">用户满意度：空间满意度提升40%+</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center">
                <Scale class="w-5 h-5 text-indigo-600 mr-2" />
                性价比优势
              </h4>
              <p class="mb-3 text-slate-600">市场调研显示，问界性价比大幅提升</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">价格优势：降价后性价比提升30%+</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">竞争力：在同价位产品中竞争力显著增强</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 class="w-4 h-4 text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-sm">用户认知：从"高价低配"到"物超所值"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-indigo-700">5.3 转型成效总结</h3>
          
          <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div class="bg-white p-5 rounded-lg shadow-sm text-center border border-indigo-100">
                <div class="text-3xl font-bold text-indigo-600 mb-2">10倍+</div>
                <p class="text-sm font-medium text-slate-800">销量增长</p>
                <p class="text-xs text-slate-500 mt-1">从月销数百辆到破万辆</p>
              </div>
              <div class="bg-white p-5 rounded-lg shadow-sm text-center border border-indigo-100">
                <div class="text-3xl font-bold text-indigo-600 mb-2">显著提升</div>
                <p class="text-sm font-medium text-slate-800">市场份额</p>
                <p class="text-xs text-slate-500 mt-1">中大型SUV市场占比提升</p>
              </div>
              <div class="bg-white p-5 rounded-lg shadow-sm text-center border border-indigo-100">
                <div class="text-3xl font-bold text-indigo-600 mb-2">智驾标杆</div>
                <p class="text-sm font-medium text-slate-800">品牌形象</p>
                <p class="text-xs text-slate-500 mt-1">从"夹心层"到行业标杆</p>
              </div>
              <div class="bg-white p-5 rounded-lg shadow-sm text-center border border-indigo-100">
                <div class="text-3xl font-bold text-indigo-600 mb-2">大幅提升</div>
                <p class="text-sm font-medium text-slate-800">用户口碑</p>
                <p class="text-xs text-slate-500 mt-1">空间、智驾、性价比满意度</p>
              </div>
              <div class="bg-white p-5 rounded-lg shadow-sm text-center border border-indigo-100">
                <div class="text-3xl font-bold text-indigo-600 mb-2">持续爆款</div>
                <p class="text-sm font-medium text-slate-800">市场地位</p>
                <p class="text-xs text-slate-500 mt-1">成功实现"起死回生"</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up" style="animation-delay: 0.6s;">
        <h2 class="text-2xl font-bold mb-6 border-b border-amber-200 pb-2">
          六、经验与启示
        </h2>
        
        <h3 class="text-xl font-semibold mb-6 text-amber-700 text-center">从问界车型转型中获得的启示</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <div class="flex items-start">
              <div class="bg-amber-100 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-amber-600">1</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">依托大厂生态快速建立信任</h4>
                <p class="text-slate-700">
                  问界的成功离不开华为强大的品牌背书和技术支持。对于缺乏品牌积淀的新势力，与大厂合作是快速建立用户信任的有效路径。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <div class="flex items-start">
              <div class="bg-amber-100 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-amber-600">2</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">智驾是差异化核心竞争力</h4>
                <p class="text-slate-700">
                  HUAWEI ADS 2.0的不依赖高精地图技术，让问界在智驾领域建立了明显优势。在新能源汽车同质化竞争严重的当下，找到自己的技术护城河至关重要。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <div class="flex items-start">
              <div class="bg-amber-100 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-amber-600">3</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">产品力升级必须精准命中用户痛点</h4>
                <p class="text-slate-700">
                  问界投入5亿升级空间、底盘和内饰，每项改进都直击家庭用户的核心需求。产品力升级不是盲目堆配置，而是要精准解决用户痛点。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <div class="flex items-start">
              <div class="bg-amber-100 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-amber-600">4</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">定价调整要回归市场主流</h4>
                <p class="text-slate-700">
                  从"高不成低不就"到精准卡位25-30万主流价格带，问界的定价调整证明了回归市场主流的重要性。脱离主流市场的定价策略难以持续。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-amber-50 p-6 rounded-xl border border-amber-100 md:col-span-2">
            <div class="flex items-start">
              <div class="bg-amber-100 p-3 rounded-full mr-4 flex-shrink-0">
                <span class="text-xl font-bold text-amber-600">5</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">营销要突出差异化优势</h4>
                <p class="text-slate-700">
                  问界的营销紧紧围绕"智驾第一"这一差异化优势展开，通过华为生态、门店渠道等放大优势。营销不是简单喊口号，而是要放大真正的核心竞争力。
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