<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <RouterView />
</template>

<style>
/* 全局样式，定义Header脚本所需要的模糊效果。
  这样一来，任何页面的 #main-content 元素都能响应模糊指令。
*/
#main-content.blurred {
  filter: blur(4px);
}

/* 添加过渡效果，让模糊动画更平滑 */
#main-content {
  transition: filter 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>