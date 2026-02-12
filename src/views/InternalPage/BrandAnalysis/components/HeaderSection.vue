<script setup>
import { onMounted, ref } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <header class="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 overflow-hidden">
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div 
        class="absolute w-64 h-64 rounded-full bg-white opacity-10 animate-blob-1"
        style="top: 20%; left: 10%;"
      ></div>
      <div 
        class="absolute w-96 h-96 rounded-full bg-white opacity-10 animate-blob-2"
        style="bottom: -10%; right: 5%;"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div 
        class="max-w-4xl mx-auto text-center transition-all duration-800 transform"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'"
      >
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-relaxed">
          问界、蔚来、小鹏、零跑、岚图<br />
          <span class="text-yellow-300">"逆袭"策略分析</span>
        </h1>
        <p class="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed" style="font-size: 18px;">
          五大品牌如何通过产品力提升与营销定价体系重构实现销量"起死回生"
        </p>
        
        <div class="inline-block transition-transform duration-300 hover:scale-105 active:scale-98">
          <a
            href="#brand-analysis"
            class="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
          >
            <span>查看案例研究</span>
            <i class="fas fa-arrow-down ml-2"></i> 
          </a>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" class="w-full">
        <path
          fill="#f8fafc" 
          fill-opacity="1"
          d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,42.7C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
        ></path>
      </svg>
    </div>
  </header>
</template>

<style scoped>
/* 复刻 Framer Motion 的循环动画 */
@keyframes blob1 {
  0% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
  100% { transform: translate(0, 0); }
}

@keyframes blob2 {
  0% { transform: translate(0, 0); }
  50% { transform: translate(-40px, 40px); }
  100% { transform: translate(0, 0); }
}

.animate-blob-1 {
  animation: blob1 15s infinite ease-in-out alternate;
}

.animate-blob-2 {
  animation: blob2 20s infinite ease-in-out alternate;
}
</style>