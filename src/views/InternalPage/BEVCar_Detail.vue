<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Footer from '@/components/Footer.vue';
// 引入与原设计风格匹配的图标
import {
  ArrowLeft,
  AlertCircle,
  MessageSquare,
  Wrench,
  Check,
  Crosshair, // 对应 location-crosshairs
  MapPin,    // 对应 map-location-dot
  Waypoints, // 对应 road
  Gauge,     // 对应 tachometer-alt
  Video,
  Key,
  Megaphone, // 对应 bullhorn
  Flame,     // 对应 fire
  Link as LinkIcon,
  ArrowLeftRight, // 对应 exchange-alt
  Award,
  Maximize,  // 对应 expand-arrows-alt
  Scale      // 对应 balance-scale
} from 'lucide-vue-next';

const router = useRouter();

// 返回上一页
const goBack = () => {
  router.back();
};

// --- 数据定义 (源自 React 项目) ---
const brand = {
  id: 'wenjie',
  name: '问界',
  logo: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/293847952386/attachment/aitologo_20260206093018.webp',
};

const salesTimelineData = [
  { month: '2023年9月前', sales: 500, description: '濒临退市' },
  { month: '2023年9月', sales: 3000, description: '初见起色' },
  { month: '2023年10月', sales: 6000, description: '快速增长' },
  { month: '2023年11月', sales: 8000, description: '持续爆款' },
  { month: '2023年12月', sales: 10000, description: '市场领先' },
];

const m7TechComparisonData = [
  { category: '智能驾驶', before: '基础ADAS', after: 'HUAWEI ADS 2.0高阶智驾', improvement: '质的飞跃' },
  { category: '空间表现', before: '4785mm车长，空间有限', after: '3338mm有效空间，五座版', improvement: '大幅提升' },
  { category: '底盘调校', before: '常规悬挂', after: '双FSD可变阻尼减震器', improvement: '舒适性显著改善' },
  { category: '座舱体验', before: '基础座舱', after: '华为HarmonyOS座舱', improvement: '科技感大幅提升' },
  { category: '续航能力', before: '500km左右', after: '600km+（纯电）/ 1200km+（增程）', improvement: '续航焦虑大幅缓解' },
];

const pricingData = [
  { model: '问界M7', beforePrice: '31.69-37.99万元', afterPrice: '24.98-32.98万元', strategy: '降价6.7-7万元，回归25-30万主流价格带' },
  { model: '问界M5', beforePrice: '25.98-33.18万元', afterPrice: '24.98-27.98万元', strategy: '降价1-5.2万元，提升性价比' },
];

// 计算最大销量用于图表比例
const maxSales = 12000;
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 pt-20">
    
    <div class="bg-gradient-to-r from-orange-500 to-red-600 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex items-center">
          <button 
            @click="goBack"
            class="mr-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
            aria-label="返回"
          >
            <ArrowLeft class="w-6 h-6" />
          </button>
          <h1 class="text-3xl font-bold">问界品牌车型深度分析</h1>
        </div>
      </div>
    </div>

    <main class="container mx-auto px-4 py-12">
      <div class="max-w-5xl mx-auto">
        
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 transition-all hover:shadow-xl">
          <div class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div class="w-32 h-32 flex items-center justify-center bg-transparent">
              <img 
                :src="brand.logo" 
                alt="问界logo" 
                class="w-full h-full object-contain"
              />
            </div>
            <div class="flex-1">
              <h2 class="text-2xl md:text-3xl font-bold mb-4">问界品牌车型深度分析</h2>
              <p class="text-xl text-slate-700 mb-6">依托华为生态，从"夹心层"困境到智驾标杆的华丽转身</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <h3 class="text-sm text-orange-600 font-medium mb-1">危机期</h3>
                  <p class="font-semibold text-lg">2023年9月前</p>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                  <h3 class="text-sm text-green-600 font-medium mb-1">转型成效</h3>
                  <p class="font-semibold text-lg">销量增长10倍+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-6 border-b border-orange-200 pb-2">
            一、品牌背景与车型概览
          </h2>
          <div class="mb-8">
            <p class="text-lg mb-6 leading-relaxed">问界汽车作为华为深度赋能的新能源汽车品牌，通过与华为的紧密合作，在技术和营销上形成了独特优势。本分析将围绕问界的核心车型展开，深入剖析各车型的问题、转型策略及成效。</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div class="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <h3 class="text-xl font-semibold mb-2 text-slate-800">问界M7</h3>
                <p class="text-slate-600">问界品牌的核心车型，经历了从销量低谷到爆款的华丽转身，成为问界品牌的销量支柱。</p>
              </div>
              <div class="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <h3 class="text-xl font-semibold mb-2 text-slate-800">问界M5</h3>
                <p class="text-slate-600">问界品牌的首款车型，在市场上获得一定关注，但始终无法获得持续成功，面临"夹心层"困境。</p>
              </div>
            </div>
            
            <div class="bg-slate-50 p-6 rounded-xl mb-6 border border-slate-100">
              <h3 class="text-xl font-semibold mb-4 text-orange-700">发展时间线</h3>
              <div class="relative pl-2">
                <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-200"></div>
                <div class="space-y-8">
                  <div class="flex items-start relative z-10">
                    <div class="flex-shrink-0 w-12 flex justify-center">
                      <div class="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-500 text-orange-700 font-bold text-xs">1</div>
                    </div>
                    <div class="ml-4 pt-1">
                      <h4 class="text-lg font-semibold text-slate-800">2022年 - 市场初探期</h4>
                      <p class="text-slate-600">问界M5发布，初期获得市场关注，但很快陷入"夹心层"困境</p>
                    </div>
                  </div>
                  <div class="flex items-start relative z-10">
                    <div class="flex-shrink-0 w-12 flex justify-center">
                      <div class="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-500 text-orange-700 font-bold text-xs">2</div>
                    </div>
                    <div class="ml-4 pt-1">
                      <h4 class="text-lg font-semibold text-slate-800">2023年初 - 危机爆发期</h4>
                      <p class="text-slate-600">问界M7销量持续低迷，月销数百辆，品牌面临严峻考验</p>
                    </div>
                  </div>
                  <div class="flex items-start relative z-10">
                    <div class="flex-shrink-0 w-12 flex justify-center">
                      <div class="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-500 text-orange-700 font-bold text-xs">3</div>
                    </div>
                    <div class="ml-4 pt-1">
                      <h4 class="text-lg font-semibold text-slate-800">2023年9月 - 转型转折点</h4>
                      <p class="text-slate-600">问界M7启动全面升级，产品力升级、价格下探、品牌重塑三管齐下</p>
                    </div>
                  </div>
                  <div class="flex items-start relative z-10">
                    <div class="flex-shrink-0 w-12 flex justify-center">
                      <div class="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-500 text-orange-700 font-bold text-xs">4</div>
                    </div>
                    <div class="ml-4 pt-1">
                      <h4 class="text-lg font-semibold text-slate-800">2023年底 - 持续爆款期</h4>
                      <p class="text-slate-600">问界M7成为持续爆款，月销破万辆，成功实现"起死回生"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-6 border-b border-green-200 pb-2">
            二、问界M7深度分析
          </h2>
          
          <div class="mb-10">
            <h3 class="text-xl font-semibold mb-4 text-green-700">2.1 初期困境：销量低迷的根本原因</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div class="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <h4 class="text-lg font-semibold mb-3 text-amber-800">危机表现</h4>
                <p class="text-slate-700">2023年9月前，问界M7长期处于销量低迷状态，月销量徘徊在数百辆，几乎面临退市危机。</p>
              </div>
              <div class="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <h4 class="text-lg font-semibold mb-3 text-amber-800">核心问题</h4>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span><strong>定价过高：</strong>陷入"高不成低不就"的定价困境</span>
                  </li>
                  <li class="flex items-start">
                    <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span><strong>产品力不足：</strong>在空间、舒适性等方面存在明显短板</span>
                  </li>
                  <li class="flex items-start">
                    <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span><strong>品牌定位模糊：</strong>目标用户不清晰，市场认知不足</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="mb-10">
            <h3 class="text-xl font-semibold mb-4 text-green-700">2.2 用户反馈与产品响应：需求驱动的产品升级</h3>
            <div class="space-y-6">
              <div class="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden">
                <div class="bg-orange-50 px-6 py-3 flex items-center border-b border-orange-100">
                  <div class="bg-orange-100 h-8 w-8 rounded-full flex items-center justify-center mr-3 text-orange-700 font-bold text-sm">1</div>
                  <h4 class="text-lg font-semibold text-slate-800">空间不足 👉 空间升级</h4>
                </div>
                <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div class="flex items-center mb-3 text-amber-600">
                      <MessageSquare class="w-5 h-5 mr-2" />
                      <h5 class="font-medium">用户反馈</h5>
                    </div>
                    <p class="text-slate-600">后备箱与储物空间不足，难以满足多场景家用需求</p>
                  </div>
                  <div>
                    <div class="flex items-center mb-3 text-green-600">
                      <Wrench class="w-5 h-5 mr-2" />
                      <h5 class="font-medium">解决方案</h5>
                    </div>
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <Check class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span>投入超5亿元升级车身结构</span>
                      </li>
                      <li class="flex items-start">
                        <Check class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span>有效空间长度达3338mm</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden">
                <div class="bg-orange-50 px-6 py-3 flex items-center border-b border-orange-100">
                  <div class="bg-orange-100 h-8 w-8 rounded-full flex items-center justify-center mr-3 text-orange-700 font-bold text-sm">2</div>
                  <h4 class="text-lg font-semibold text-slate-800">舒适性不足 👉 底盘优化</h4>
                </div>
                <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div class="flex items-center mb-3 text-amber-600">
                      <MessageSquare class="w-5 h-5 mr-2" />
                      <h5 class="font-medium">用户反馈</h5>
                    </div>
                    <p class="text-slate-600">悬挂偏硬，长途乘坐体验差</p>
                  </div>
                  <div>
                    <div class="flex items-center mb-3 text-green-600">
                      <Wrench class="w-5 h-5 mr-2" />
                      <h5 class="font-medium">解决方案</h5>
                    </div>
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <Check class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span>前后双FSD可变阻尼减震器</span>
                      </li>
                      <li class="flex items-start">
                        <Check class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span>多连杆独立悬挂升级</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

               <div class="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden">
                <div class="bg-orange-50 px-6 py-3 flex items-center border-b border-orange-100">
                  <div class="bg-orange-100 h-8 w-8 rounded-full flex items-center justify-center mr-3 text-orange-700 font-bold text-sm">3</div>
                  <h4 class="text-lg font-semibold text-slate-800">价格偏高 👉 内饰升级与价格下调</h4>
                </div>
                <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div class="flex items-center mb-3 text-amber-600">
                      <MessageSquare class="w-5 h-5 mr-2" />
                      <h5 class="font-medium">用户反馈</h5>
                    </div>
                    <p class="text-slate-600">价格与产品力不匹配，性价比低</p>
                  </div>
                  <div>
                    <div class="flex items-center mb-3 text-green-600">
                      <Wrench class="w-5 h-5 mr-2" />
                      <h5 class="font-medium">解决方案</h5>
                    </div>
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <Check class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span>华为HarmonyOS智能座舱</span>
                      </li>
                      <li class="flex items-start">
                        <Check class="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span>价格下探8-12万，精准卡位主流市场</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-10">
            <h3 class="text-xl font-semibold mb-4 text-green-700">2.3 智驾技术突破：HUAWEI ADS 2.0</h3>
            <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-6 border border-blue-100">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <div class="flex items-start">
                    <Crosshair class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span><strong>不依赖高精地图：</strong>实现城区高阶智驾，打破高精地图依赖</span>
                  </div>
                  <div class="flex items-start">
                    <MapPin class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span><strong>城区NCA全国覆盖：</strong>2023年12月覆盖全国，智驾能力领先</span>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-start">
                    <Waypoints class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span><strong>长距离NCA领航：</strong>MPI达200km，智驾可靠性大幅提升</span>
                  </div>
                  <div class="flex items-start">
                    <Gauge class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span><strong>城市高架汇入汇出：</strong>成功率99%+，解决城市驾驶痛点</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-6 border-b border-purple-200 pb-2">
            三、问界M5分析
          </h2>
          <div class="mb-10">
            <h3 class="text-xl font-semibold mb-4 text-purple-700">3.1 "夹心层"困境</h3>
            <div class="bg-purple-50 p-6 rounded-xl mb-6 border border-purple-100">
              <h4 class="text-lg font-semibold mb-3 text-purple-800">根本原因</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <div class="flex items-start">
                    <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span><strong>定位尴尬：</strong>中型SUV，空间表现不如同价位竞品</span>
                  </div>
                  <div class="flex items-start">
                    <AlertCircle class="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span><strong>价格偏高：</strong>性价比不突出</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="overflow-x-auto rounded-xl border border-purple-100">
            <table class="w-full text-sm text-left">
              <thead class="bg-purple-100 text-purple-900">
                <tr>
                  <th class="p-3 font-semibold">车型</th>
                  <th class="p-3 font-semibold">危机期定价</th>
                  <th class="p-3 font-semibold">转型后定价</th>
                  <th class="p-3 font-semibold">策略分析</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in pricingData" :key="index" :class="index % 2 === 0 ? 'bg-white' : 'bg-purple-50'">
                  <td class="p-3 font-medium text-slate-900">{{ item.model }}</td>
                  <td class="p-3 text-slate-600">{{ item.beforePrice }}</td>
                  <td class="p-3 text-slate-600">{{ item.afterPrice }}</td>
                  <td class="p-3 text-purple-600">{{ item.strategy }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-6 border-b border-blue-200 pb-2">
            四、营销与智驾优势
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center text-blue-800">
                <MapPin class="w-5 h-5 mr-2" />
                "无图智驾" 全国承诺
              </h4>
              <p class="text-slate-700 mb-4">
                余承东在发布会高调宣布"2023年12月城区NCA覆盖全国"，远超竞品45城目标，引发行业震动
              </p>
            </div>
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 class="text-lg font-semibold mb-3 flex items-center text-blue-800">
                <Video class="w-5 h-5 mr-2" />
                场景化实测传播
              </h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <Check class="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>官方发布"重庆8D魔幻路况"等智驾实测视频，播放量破千万</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-10">
            <h3 class="text-xl font-semibold mb-4 text-blue-700">4.2 余承东个人IP & Mate60联动</h3>
             <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
               <h4 class="text-lg font-semibold mb-3 flex items-center text-blue-800">
                 <Megaphone class="w-5 h-5 mr-2" />
                 "遥遥领先" 名场面
               </h4>
               <p class="text-slate-700 mb-4">
                 38次提及"遥遥领先"，AITO汽车直播观看人数破2000万。与Mate60 Pro深度联动，实现手机流量倒流汽车。
               </p>
               <div class="flex justify-center gap-4">
                 <span class="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700">
                   <Flame class="w-4 h-4 mr-2" /> 现象级传播
                 </span>
                 <span class="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700">
                   <LinkIcon class="w-4 h-4 mr-2" /> 流量无缝转移
                 </span>
               </div>
             </div>
          </div>
        </section>

        <section class="bg-white rounded-2xl p-8 shadow-lg mb-8">
           <h2 class="text-2xl font-bold mb-6 border-b border-indigo-200 pb-2">
            五、数据对比与成效分析
          </h2>
          
          <div class="mb-10">
            <h3 class="text-xl font-semibold mb-6 text-indigo-700">5.1 销量变化：问界M7的逆袭之路</h3>
            <div class="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 h-80 flex items-end justify-between gap-4">
              <div 
                v-for="item in salesTimelineData" 
                :key="item.month" 
                class="flex flex-col items-center flex-1 group relative h-full justify-end"
              >
                <div class="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs p-2 rounded z-10 whitespace-nowrap pointer-events-none">
                  {{ item.month }}: {{ item.sales }} 辆 ({{ item.description }})
                </div>
                <div 
                  class="w-full max-w-[60px] bg-indigo-500 hover:bg-indigo-600 rounded-t-md transition-all duration-500 ease-out flex items-end justify-center"
                  :style="{ height: (item.sales / maxSales * 100) + '%' }"
                >
                  <span class="text-white text-xs font-bold mb-2 hidden sm:block">{{ item.sales }}</span>
                </div>
                <div class="mt-3 text-xs text-slate-500 font-medium text-center transform -rotate-45 sm:rotate-0 origin-top-left sm:origin-center truncate w-full">
                  {{ item.month }}
                </div>
              </div>
            </div>
            
            <div class="mt-6 text-center text-sm text-slate-500">
              图表：问界M7销量月度变化趋势 (数据来源: 官方公布)
            </div>
          </div>

          <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div class="bg-white p-4 rounded-lg shadow-sm text-center">
                <div class="text-2xl font-bold text-indigo-600 mb-1">10倍+</div>
                <p class="text-xs text-slate-500">销量增长</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm text-center">
                <div class="text-2xl font-bold text-indigo-600 mb-1">标杆</div>
                <p class="text-xs text-slate-500">智驾形象</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm text-center">
                <div class="text-2xl font-bold text-indigo-600 mb-1">提升</div>
                <p class="text-xs text-slate-500">市场份额</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm text-center">
                <div class="text-2xl font-bold text-indigo-600 mb-1">爆款</div>
                <p class="text-xs text-slate-500">持续热销</p>
              </div>
               <div class="bg-white p-4 rounded-lg shadow-sm text-center">
                <div class="text-2xl font-bold text-indigo-600 mb-1">口碑</div>
                <p class="text-xs text-slate-500">大幅回升</p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white rounded-2xl p-8 shadow-lg">
          <h2 class="text-2xl font-bold mb-6 border-b border-amber-200 pb-2">
            六、经验与启示
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-amber-50 p-6 rounded-xl border border-amber-100 flex items-start">
              <div class="bg-amber-100 p-2 rounded-full mr-4 text-amber-600 font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h4 class="text-lg font-semibold mb-2 text-slate-800">依托大厂生态</h4>
                <p class="text-slate-600 text-sm">与华为等科技巨头合作，是快速建立用户信任和技术壁垒的有效捷径。</p>
              </div>
            </div>
            <div class="bg-amber-50 p-6 rounded-xl border border-amber-100 flex items-start">
               <div class="bg-amber-100 p-2 rounded-full mr-4 text-amber-600 font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
               <div>
                <h4 class="text-lg font-semibold mb-2 text-slate-800">智驾核心竞争力</h4>
                <p class="text-slate-600 text-sm">无图智驾技术让问界建立了明显的差异化优势，技术护城河至关重要。</p>
              </div>
            </div>
             <div class="bg-amber-50 p-6 rounded-xl border border-amber-100 flex items-start">
               <div class="bg-amber-100 p-2 rounded-full mr-4 text-amber-600 font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
               <div>
                <h4 class="text-lg font-semibold mb-2 text-slate-800">定价回归主流</h4>
                <p class="text-slate-600 text-sm">精准卡位25-30万主流市场，脱离"夹心层"定价是销量爆发的关键。</p>
              </div>
            </div>
             <div class="bg-amber-50 p-6 rounded-xl border border-amber-100 flex items-start">
               <div class="bg-amber-100 p-2 rounded-full mr-4 text-amber-600 font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
               <div>
                <h4 class="text-lg font-semibold mb-2 text-slate-800">精准解决痛点</h4>
                <p class="text-slate-600 text-sm">投入5亿升级不是盲目堆料，而是直击家庭用户空间和舒适性痛点。</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* 可以在这里添加局部样式微调 */
</style>