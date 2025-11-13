<script setup>
import InteractiveGlobe from '@/components/common/InteractiveGlobe.vue';
</script>

<template>
  <main id="main-content" class="pt-16 pb-12 min-h-dvh flex items-center">
    <div class="container mx-auto px-4 max-w-7xl">

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

        <section class="lg:col-span-3 text-center">

          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            CAnswer海外销量
          </h2>

          <p class="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            已更新52国，每月20日更新上月数据，数据源于Marklines
          </p>

          <a href="https://gaia.changan.com.cn/ai/canswer/#/home"
             target="_blank"
             rel="noopener noreferrer"
             class="inline-block bg-blue-600 text-white font-bold py-3 px-12 rounded-full text-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg mb-8">
            立即访问
          </a>

          <div class="globe-container rounded-2xl overflow-hidden shadow-lg aspect-video max-h-[400px] mx-auto bg-gray-900 hidden sm:block">
            <InteractiveGlobe />
          </div>

        </section>

        <section class="lg:col-span-2 bg-gray-50 rounded-2xl p-6 shadow-md">

          <h2 class="text-2xl font-bold text-gray-900 text-center mb-6">
            首次访问指南
          </h2>

          <div class="grid grid-cols-2 gap-4">

            <div class="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center">
              <span class="text-5xl font-bold text-blue-500 mb-2">1</span>
              <p class="text-gray-800 font-semibold mb-3 min-h-[2.5rem] flex justify-center items-center text-sm leading-tight">
                <span>
                  确保登录过
                  <a href="https://gaia.changan.com.cn/ai/canswer/#/home" target="_blank" rel="noopener noreferrer" class="inline-flex items-baseline text-blue-600 font-bold hover:opacity-80 transition-all ml-1">
                    <span class="hover:underline">CAnswer</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5 ml-0.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </span>
              </p>
              <div class="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/cover/sales_guide.webp" alt="步骤1" class="w-full h-full object-contain p-1">
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center">
              <span class="text-5xl font-bold text-blue-500 mb-2">2</span>
              <p class="text-gray-800 font-semibold mb-3 min-h-[2.5rem] flex justify-center items-center text-sm leading-tight">
                <span>
                  <span>扫码或点击</span>
                  <a href="https://doc.weixin.qq.com/forms/ACYAOwdwAAYAVcAuAaWAJwCNo7dPRGdef?page=1" target="_blank" rel="noopener noreferrer" class="inline-flex items-baseline text-blue-600 font-bold hover:opacity-80 transition-all ml-1">
                    <span class="hover:underline">填写问卷</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5 ml-0.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </span>
              </p>
              <div class="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/cover/Canswer_oversea_sales_QRcode.png" alt="步骤2" class="w-full h-full object-contain p-1">
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center">
              <span class="text-5xl font-bold text-blue-500 mb-2">3</span>
              <p class="text-gray-800 font-semibold mb-3 min-h-[2.5rem] flex justify-center items-center text-sm leading-tight">
                <span>切换“海外销量”分区</span>
              </p>
              <div class="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/cover/introduce1.webp" alt="步骤3" class="w-full h-full object-contain p-1">
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center">
              <span class="text-5xl font-bold text-blue-500 mb-2">4</span>
              <p class="text-gray-800 font-semibold mb-3 min-h-[2.5rem] flex justify-center items-center text-sm leading-tight">
                <span>选择共享报告</span>
              </p>
              <div class="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/cover/introduce2.webp" alt="步骤4" class="w-full h-full object-contain p-1">
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  </main>
</template>

<style scoped>
/* 智能换行样式 (保持不变) */
.inline-flex.items-baseline {
  white-space: normal;
  display: inline-flex;
  align-items: baseline;
}
p.min-h-\[2\.5rem\] {
  min-height: 40px;
}

/* --- 步骤 2 (交互):
  移除 pointer-events: none; 以允许悬停
--- */
.globe-container {
  /* pointer-events: none;  <-- 已移除此行 */
}
</style>