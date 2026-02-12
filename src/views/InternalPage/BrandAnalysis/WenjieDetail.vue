<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { brandData } from './data';
import Footer from '@/components/Footer.vue';
import { 
  ArrowLeft, 
  Map, 
  Video, 
  Key, 
  Award, 
  TrendingUp, 
  CheckCircle2,
  AlertCircle
} from 'lucide-vue-next';

const router = useRouter();
const brand = computed(() => brandData.find(b => b.id === 'wenjie'));

const goBack = () => {
  router.push('/brand-analysis');
};

// 销量数据（为了避免引入重型图表库，使用简单的 CSS 条形图）
const salesTimelineData = [
  { month: '2023.09前', sales: 500, percent: 5, label: '濒临退市' },
  { month: '2023.09', sales: 3000, percent: 30, label: '初见起色' },
  { month: '2023.10', sales: 6000, percent: 60, label: '快速增长' },
  { month: '2023.11', sales: 8000, percent: 80, label: '持续爆款' },
  { month: '2023.12', sales: 10000, percent: 100, label: '市场领先' },
];

const m7TechComparisonData = [
  { category: '智能驾驶', before: '基础ADAS', after: 'HUAWEI ADS 2.0高阶智驾', improvement: '质的飞跃' },
  { category: '空间表现', before: '4785mm车长，空间有限', after: '3338mm有效空间，五座版', improvement: '大幅提升' },
  { category: '底盘调校', before: '常规悬挂', after: '双FSD可变阻尼减震器', improvement: '舒适性显著改善' },
  { category: '座舱体验', before: '基础座舱', after: '华为HarmonyOS座舱', improvement: '科技感大幅提升' },
  { category: '续航能力', before: '500km左右', after: '600km+ / 1200km+', improvement: '焦虑缓解' },
];

const pricingData = [
  { model: '问界M7', beforePrice: '31.69-37.99万', afterPrice: '24.98-32.98万', strategy: '降价6.7-7万，回归主流' },
  { model: '问界M5', beforePrice: '25.98-33.18万', afterPrice: '24.98-27.98万', strategy: '降价1-5.2万，提升性价比' },
];
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 pt-16">
    <header class="bg-gradient-to-r from-orange-500 to-red-600 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex items-center">
          <button 
            @click="goBack"
            class="mr-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ArrowLeft class="w-6 h-6" />
          </button>
          <h1 class="text-3xl font-bold">问界品牌车型深度分析</h1>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-12 max-w-5xl">
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up">
        <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <div class="w-32 h-32 flex items-center justify-center p-4 bg-white rounded-xl">
            <img :src="brand?.logo" alt="Logo" class="w-full h-full object-contain" />
          </div>
          <div class="flex-1 mt-6 md:mt-0 text-center md:text-left">
            <h2 class="text-3xl font-bold mb-4">问界品牌深度复盘</h2>
            <p class="text-xl text-slate-600 mb-6">依托华为生态，从"夹心层"困境到智驾标杆的华丽转身</p>
            <div class="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <div class="bg-orange-50 p-4 rounded-xl border border-orange-100">
                <h3 class="text-sm text-orange-600 font-bold mb-1">危机期</h3>
                <p class="font-semibold text-slate-800">2023年9月前</p>
              </div>
              <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                <h3 class="text-sm text-green-600 font-bold mb-1">转型成效</h3>
                <p class="font-semibold text-slate-800">销量增长10倍+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <h2 class="text-2xl font-bold mb-6 border-b border-slate-200 pb-4">一、品牌背景与关键节点</h2>
        <div class="relative pl-4 space-y-8">
          <div class="absolute left-8 top-2 bottom-2 w-0.5 bg-orange-200"></div>
          
          <div class="flex relative z-10">
            <div class="w-8 h-8 rounded-full bg-orange-100 border-2 border-orange-500 flex items-center justify-center font-bold text-orange-600 mr-4 shrink-0">1</div>
            <div>
              <h4 class="text-lg font-bold">2022年 - 市场初探</h4>
              <p class="text-slate-600">问界M5发布，初期获得关注但陷入"夹心层"困境。</p>
            </div>
          </div>
          <div class="flex relative z-10">
            <div class="w-8 h-8 rounded-full bg-orange-100 border-2 border-orange-500 flex items-center justify-center font-bold text-orange-600 mr-4 shrink-0">2</div>
            <div>
              <h4 class="text-lg font-bold">2023年初 - 危机爆发</h4>
              <p class="text-slate-600">问界M7销量持续低迷，月销数百辆，面临退市风险。</p>
            </div>
          </div>
          <div class="flex relative z-10">
            <div class="w-8 h-8 rounded-full bg-orange-100 border-2 border-orange-500 flex items-center justify-center font-bold text-orange-600 mr-4 shrink-0">3</div>
            <div>
              <h4 class="text-lg font-bold">2023年9月 - 转型转折</h4>
              <p class="text-slate-600">新M7上市，产品力升级、价格下探、品牌重塑三管齐下。</p>
            </div>
          </div>
          <div class="flex relative z-10">
            <div class="w-8 h-8 rounded-full bg-orange-100 border-2 border-orange-500 flex items-center justify-center font-bold text-orange-600 mr-4 shrink-0">4</div>
            <div>
              <h4 class="text-lg font-bold">2023年底 - 持续爆款</h4>
              <p class="text-slate-600">M7月销破万，彻底扭转局势。</p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <h2 class="text-2xl font-bold mb-6 border-b border-slate-200 pb-4">二、M7 核心问题与解决方案</h2>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-red-50 p-6 rounded-xl">
            <h3 class="text-red-700 font-bold mb-4 flex items-center">
              <AlertCircle class="w-5 h-5 mr-2" /> 痛点
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2"></span>
                <span><strong class="text-slate-800">空间不足：</strong>后备箱与后排空间难以满足家庭刚需</span>
              </li>
              <li class="flex items-start">
                <span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2"></span>
                <span><strong class="text-slate-800">舒适性差：</strong>悬挂偏硬，长途体验不佳</span>
              </li>
              <li class="flex items-start">
                <span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2"></span>
                <span><strong class="text-slate-800">性价比低：</strong>旧款定价30万+，配置无竞争力</span>
              </li>
            </ul>
          </div>

          <div class="bg-green-50 p-6 rounded-xl">
            <h3 class="text-green-700 font-bold mb-4 flex items-center">
              <CheckCircle2 class="w-5 h-5 mr-2" /> 对策 (投入5亿升级)
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2"></span>
                <span><strong class="text-slate-800">大五座：</strong>有效空间3338mm，优化车身结构</span>
              </li>
              <li class="flex items-start">
                <span class="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2"></span>
                <span><strong class="text-slate-800">FSD底盘：</strong>标配可变阻尼减震，大幅提升舒适性</span>
              </li>
              <li class="flex items-start">
                <span class="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2"></span>
                <span><strong class="text-slate-800">降价增配：</strong>价格下探7万，标配华为智驾</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="overflow-x-auto rounded-lg border border-slate-200">
          <table class="w-full text-left text-sm">
            <thead class="bg-slate-100 text-slate-700">
              <tr>
                <th class="p-4">技术维度</th>
                <th class="p-4">转型前</th>
                <th class="p-4">转型后</th>
                <th class="p-4 text-green-600">升级效果</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="(item, idx) in m7TechComparisonData" :key="idx" class="hover:bg-slate-50">
                <td class="p-4 font-bold text-slate-700">{{ item.category }}</td>
                <td class="p-4 text-slate-500">{{ item.before }}</td>
                <td class="p-4 font-medium text-slate-800">{{ item.after }}</td>
                <td class="p-4 text-green-600 font-medium">{{ item.improvement }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <h2 class="text-2xl font-bold mb-6 border-b border-slate-200 pb-4">三、营销与智驾壁垒</h2>
        <div class="grid md:grid-cols-3 gap-6 mb-8">
           <div class="bg-blue-50 p-6 rounded-xl text-center">
             <Map class="w-10 h-10 text-blue-600 mx-auto mb-3" />
             <h4 class="font-bold text-blue-800 mb-2">无图智驾全国开</h4>
             <p class="text-sm text-slate-600">2023年底实现全国城区NCA覆盖，打破高精地图限制，遥遥领先竞品。</p>
           </div>
           <div class="bg-blue-50 p-6 rounded-xl text-center">
             <Video class="w-10 h-10 text-blue-600 mx-auto mb-3" />
             <h4 class="font-bold text-blue-800 mb-2">场景化传播</h4>
             <p class="text-sm text-slate-600">"重庆8D魔幻路况"、"AEB鬼探头刹停"等实测视频病毒式传播，建立安全认知。</p>
           </div>
           <div class="bg-blue-50 p-6 rounded-xl text-center">
             <Key class="w-10 h-10 text-blue-600 mx-auto mb-3" />
             <h4 class="font-bold text-blue-800 mb-2">手机流量互导</h4>
             <p class="text-sm text-slate-600">Mate60 Pro与新M7深度绑定，"买手机看车"，将数码圈巨大流量导入汽车。</p>
           </div>
        </div>

        <h3 class="text-lg font-bold mb-4">定价策略调整</h3>
        <div class="overflow-x-auto rounded-lg border border-slate-200">
          <table class="w-full text-left text-sm">
            <thead class="bg-indigo-50 text-indigo-900">
              <tr>
                <th class="p-4">车型</th>
                <th class="p-4">原价</th>
                <th class="p-4">新价</th>
                <th class="p-4">策略分析</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="(item, idx) in pricingData" :key="idx">
                <td class="p-4 font-bold">{{ item.model }}</td>
                <td class="p-4 text-slate-400 line-through">{{ item.beforePrice }}</td>
                <td class="p-4 text-red-600 font-bold">{{ item.afterPrice }}</td>
                <td class="p-4 text-slate-600">{{ item.strategy }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="bg-white rounded-2xl p-8 shadow-lg mb-12">
        <h2 class="text-2xl font-bold mb-8 border-b border-slate-200 pb-4">四、销量逆袭复盘</h2>
        <div class="flex items-end justify-between h-64 space-x-2 md:space-x-8 px-4">
          <div 
            v-for="(item, index) in salesTimelineData" 
            :key="index"
            class="flex flex-col items-center flex-1 group"
          >
            <div class="mb-2 text-xs md:text-sm font-bold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
              {{ item.sales }}辆
            </div>
            <div 
              class="w-full bg-orange-100 rounded-t-lg relative hover:bg-orange-200 transition-colors"
              :style="{ height: item.percent + '%' }"
            >
              <div 
                class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-lg transition-all duration-1000"
                :style="{ height: '100%' }"
              ></div>
            </div>
            <div class="mt-3 text-xs md:text-sm font-medium text-slate-600 text-center">{{ item.month }}</div>
            <div class="text-xs text-slate-400 scale-90">{{ item.label }}</div>
          </div>
        </div>
      </section>
      
      <section class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
         <h2 class="text-2xl font-bold mb-4 text-amber-800 flex items-center">
           <Award class="w-6 h-6 mr-2" /> 经验与启示
         </h2>
         <ul class="grid md:grid-cols-2 gap-4">
           <li class="flex bg-white p-4 rounded-lg shadow-sm">
             <span class="text-2xl font-bold text-amber-400 mr-4">01</span>
             <p class="text-slate-700"><strong>技术护城河：</strong>在同质化竞争中，必须建立不可替代的技术长板（如无图智驾）。</p>
           </li>
           <li class="flex bg-white p-4 rounded-lg shadow-sm">
             <span class="text-2xl font-bold text-amber-400 mr-4">02</span>
             <p class="text-slate-700"><strong>听劝式改款：</strong>产品升级不能自嗨，必须精准解决用户抱怨的每一个痛点。</p>
           </li>
           <li class="flex bg-white p-4 rounded-lg shadow-sm">
             <span class="text-2xl font-bold text-amber-400 mr-4">03</span>
             <p class="text-slate-700"><strong>定价即生死：</strong>脱离市场主流价格带的定价是致命的，必须有壮士断腕的降价勇气。</p>
           </li>
           <li class="flex bg-white p-4 rounded-lg shadow-sm">
             <span class="text-2xl font-bold text-amber-400 mr-4">04</span>
             <p class="text-slate-700"><strong>渠道与流量：</strong>借势大厂（华为）的渠道能力和流量池，实现降维打击。</p>
           </li>
         </ul>
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* 简单的进入动画 */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>