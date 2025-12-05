<script setup>
import InteractiveGlobe from '@/components/common/InteractiveGlobe.vue';
import { Search } from 'lucide-vue-next';
</script>

<template>
  <main id="main-content" class="pt-16 pb-12 min-h-dvh flex items-center bg-white">
    <div class="container mx-auto px-4 max-w-7xl">

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

        <section class="lg:col-span-3 text-center relative z-10">

          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            海外销量看板
          </h2>

          <p class="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            已更新52国，每月20日更新上月数据，数据源于Marklines
          </p>

          <div class="flex justify-center mb-12">
            <div class="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 px-6 py-3.5 rounded-full shadow-sm hover:border-blue-300 transition-colors duration-300 group">
              <div class="flex-shrink-0 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <Search class="w-5 h-5" />
              </div>

              <div class="text-sm md:text-base text-slate-700 font-medium">
                请在 <span class="text-blue-700 font-bold mx-0.5">企业微信</span> 搜索
                <span class="text-gray-900 font-bold mx-0.5">“行业与竞品情报”</span>，点击
                <span class="text-blue-600 font-bold mx-0.5 border-b-2 border-blue-100">底部菜单</span> 访问
              </div>
            </div>
          </div>

          <div class="globe-container rounded-2xl overflow-hidden shadow-2xl aspect-video max-h-[400px] mx-auto bg-[#111827] hidden sm:block relative">
            <InteractiveGlobe />
            <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111827] to-transparent pointer-events-none"></div>
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
                <span>确保登录过系统</span>
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
.inline-flex.items-baseline {
  white-space: normal;
  display: inline-flex;
  align-items: baseline;
}
p.min-h-\[2\.5rem\] {
  min-height: 40px;
}
</style>