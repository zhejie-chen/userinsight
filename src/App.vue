<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <Header />

  <router-view :key="$route.fullPath" />

</template>

<style>
/* 全局过渡效果（可选，但能提升体验） */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>