<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  brandName: String,
  beforeSales: Number,
  afterSales: Number,
  color: String
});

const hoveredIndex = ref(null);

// 计算最大值以确定高度比例
const maxSales = computed(() => Math.max(props.beforeSales, props.afterSales) * 1.2);

const bars = computed(() => [
  { label: '危机期', value: props.beforeSales },
  { label: '逆袭后', value: props.afterSales }
]);

const getBarHeight = (val) => `${(val / maxSales.value) * 100}%`;

const getBarColor = (index) => {
  if (props.brandName === '蔚来') {
    return index === 0 ? '#f3e8ff' : '#e9d5ff'; 
  }
  return index === 0 ? `${props.color}80` : props.color; 
};
</script>

<template>
  <div class="w-full h-full relative">
    
    <div class="flex justify-around h-full items-end px-2">
      <div 
        v-for="(bar, index) in bars" 
        :key="index"
        class="relative flex flex-col justify-end items-center group w-1/3 h-full cursor-pointer rounded-lg transition-colors duration-200 pb-6"
        :class="hoveredIndex === index ? 'bg-slate-100' : ''"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        <div 
          v-if="hoveredIndex === index"
          class="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-xl border border-slate-200 z-20 w-32 text-center pointer-events-none"
        >
          <p class="text-xs font-bold text-slate-800">{{ props.brandName }}</p>
          <p class="text-xs text-slate-500">销量: {{ bar.value.toLocaleString() }}</p>
          <div class="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-b border-r border-slate-200"></div>
        </div>

        <div 
          class="w-full max-w-[60%] rounded-t-lg transition-all duration-500 ease-out relative z-10"
          :style="{ 
            height: getBarHeight(bar.value), 
            backgroundColor: getBarColor(index) 
          }"
        ></div>
        
        <span class="absolute bottom-1 text-xs text-gray-500 font-medium">{{ bar.label }}</span>
      </div>
    </div>
    
    <div class="w-full h-px bg-slate-200 absolute bottom-6 left-0 pointer-events-none"></div>
  </div>
</template>