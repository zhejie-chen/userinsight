<script setup>
import { ref, onMounted } from 'vue';
import { brandData } from './data';
import HeaderSection from './components/HeaderSection.vue';
import BrandCard from './components/BrandCard.vue';
import StrategySummary from './components/StrategySummary.vue';
// 确保正确引用项目全局 Footer 组件
import Footer from '@/components/Footer.vue';

const showIntro = ref(false);
const visibleBrands = ref([]);

onMounted(() => {
  setTimeout(() => {
    showIntro.value = true;
  }, 300);

  brandData.forEach((brand, index) => {
    setTimeout(() => {
      visibleBrands.value.push(brand.id);
    }, 600 + index * 200);
  });
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800 font-sans pt-[44px]">
    <HeaderSection />

    <section class="container mx-auto px-4 py-16">
      
      <div 
        class="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-md transition-all duration-700 transform"
        :class="showIntro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <p class="text-lg text-slate-700 leading-relaxed mb-4">
          <span class="font-bold">编者按：</span>在新能源汽车市场的激烈竞争中，问界、蔚来、小鹏、零跑、岚图曾先后陷入销量危机与产品力挑战，面临市场份额下滑、用户信任流失的困境。这些品牌的危机并非个例，而是反映了新能源汽车市场从野蛮生长到理性竞争的转型阵痛。
        </p>
        <p class="text-lg text-slate-700 leading-relaxed">
          这些品牌的危机根源主要集中在：<span class="font-bold text-blue-800">产品定位脱离用户需求、产品力迭代滞后于市场、定价策略失衡、营销与渠道能力不足等方面</span>。而它们的"起死回生"之路，也为整个新能源汽车行业提供了宝贵的借鉴经验。
        </p>
      </div>

      <h2 
        id="brand-analysis"
        class="text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-700 delay-300 scroll-mt-24"
        :class="showIntro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        案例研究
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div 
          v-for="brand in brandData" 
          :key="brand.id"
          class="transition-all duration-500 transform"
          :class="visibleBrands.includes(brand.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        >
          <BrandCard :brand="brand" />
        </div>
      </div>

      <div class="transition-opacity duration-1000 delay-500" :class="showIntro ? 'opacity-100' : 'opacity-0'">
        <StrategySummary />
      </div>

    </section>

    <div class="bg-slate-800 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm opacity-75">© 2026 新能源汽车发展战略研究 | 数据更新至 2025年底</p>
      </div>
      <Footer />
    </div>
    
  </div>
</template>