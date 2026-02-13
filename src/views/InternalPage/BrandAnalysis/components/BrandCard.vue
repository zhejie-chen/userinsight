<script setup>
import { computed } from 'vue';
import ChartComponent from './ChartComponent.vue';
import { ArrowRight, Star } from 'lucide-vue-next';

const props = defineProps({
  brand: Object
});

const showStarBrands = ['xpeng', 'leapmotor', 'voyah'];
const hasStar = computed(() => showStarBrands.includes(props.brand.id));
const isSpecialBg = computed(() => ['wenjie', 'nio', 'voyah', 'xpeng', 'leapmotor'].includes(props.brand.id));

// --- 核心修改：计算跳转路径 ---
const linkPath = computed(() => {
  // 定义拥有独立详情页的品牌ID列表
  const brandsWithDetailPages = ['wenjie', 'nio', 'voyah', 'xpeng', 'leapmotor'];
  
  if (brandsWithDetailPages.includes(props.brand.id)) {
    return `/brand-analysis/${props.brand.id}`;
  }
  // 其他品牌跳转到通用报告页
  return `/report/${props.brand.id}`;
});
</script>

<template>
  <div 
    class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col group cursor-pointer"
  >
    <router-link :to="linkPath" class="block h-full flex flex-col">
      <div class="relative p-6 flex-1 flex flex-col">
        
        <div v-if="hasStar" class="absolute top-3 right-3 z-10">
          <Star class="w-5 h-5 text-yellow-400 fill-yellow-400" />
        </div>

        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-4">
            <div 
              class="w-16 h-16 flex items-center justify-center transition-colors"
              :class="isSpecialBg ? 'bg-transparent' : 'rounded-full bg-blue-50'"
              :style="{ backgroundColor: !isSpecialBg ? `${brand.color}20` : 'transparent' }"
            >
              <img 
                :src="brand.logo" 
                :alt="brand.name"
                class="object-contain"
                :class="{
                  'w-16 h-16': ['wenjie', 'xpeng', 'leapmotor'].includes(brand.id),
                  'w-14 h-14': ['nio', 'voyah'].includes(brand.id),
                  'w-12 h-12': !['wenjie', 'xpeng', 'leapmotor', 'nio', 'voyah'].includes(brand.id)
                }"
              />
            </div>
            
            <div>
              <h3 class="text-2xl font-bold text-slate-800">{{ brand.name }}</h3>
              <p class="text-sm text-slate-500">
                销量从 {{ brand.salesData.before }} 到 {{ brand.salesData.after }}+
              </p>
            </div>
          </div>

          <div class="animate-bounce-right">
            <ArrowRight class="w-5 h-5 text-slate-400" />
          </div>
        </div>

        <div class="h-40 mb-6 w-full">
          <ChartComponent 
            :brandName="brand.name"
            :beforeSales="brand.salesData.before"
            :afterSales="brand.salesData.after"
            :color="brand.color"
          />
        </div>

        <div class="flex flex-wrap gap-2 mt-auto">
          <span 
            v-for="(strategy, index) in brand.keyStrategies" 
            :key="index"
            class="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800"
          >
            {{ strategy }}
          </span>
        </div>

        <div class="mt-4 text-sm text-blue-600 font-medium transition-colors group-hover:text-blue-700">
          点击查看详细分析 →
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
@keyframes bounceRight {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}
.animate-bounce-right {
  animation: bounceRight 1.5s infinite ease-in-out;
}
</style>