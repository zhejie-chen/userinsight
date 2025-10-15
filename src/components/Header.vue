<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'; // 1. 导入 useRoute

const route = useRoute(); // 2. 获取当前路由对象

const mainContent = ref(null);
const header = ref(null);
const dropdownBackground = ref(null);
let activeDropdownContent = null;
let hideTimeoutId = null;

const showDropdown = (targetId) => {
  clearTimeout(hideTimeoutId);
  if (dropdownBackground.value) {
    dropdownBackground.value.removeEventListener('transitionend', cleanupAfterHide);
  }

  const targetContent = document.getElementById(targetId);
  if (!targetContent) return;
  if (activeDropdownContent === targetContent) return;

  const isOpeningFromScratch = !dropdownBackground.value.classList.contains('is-visible');
  const targetHeight = targetContent.scrollHeight;
  dropdownBackground.value.style.height = `${targetHeight}px`;

  if (activeDropdownContent) {
    activeDropdownContent.classList.remove('is-active');
  }
  targetContent.classList.add('is-active');
  activeDropdownContent = targetContent;

  if (isOpeningFromScratch) {
    header.value.classList.add('nav-active');
    dropdownBackground.value.classList.add('is-visible');
    setTimeout(() => {
      const mainEl = document.getElementById('main-content');
      if (mainEl) mainEl.classList.add('blurred');
    }, 150);
  }
}

const cleanupAfterHide = () => {
  if (dropdownBackground.value) {
    dropdownBackground.value.style.height = '0px';
  }
  if (activeDropdownContent) {
    activeDropdownContent.classList.remove('is-active', 'is-hiding');
    activeDropdownContent = null;
  }
  if (header.value) {
    header.value.classList.remove('nav-active');
  }
  if (dropdownBackground.value) {
    dropdownBackground.value.removeEventListener('transitionend', cleanupAfterHide);
  }
}

const hideDropdowns = () => {
  if (!activeDropdownContent) return;
  activeDropdownContent.classList.add('is-hiding');

  const mainEl = document.getElementById('main-content');
  if (mainEl) mainEl.classList.remove('blurred');

  if (dropdownBackground.value) {
    dropdownBackground.value.classList.remove('is-visible');
    dropdownBackground.value.addEventListener('transitionend', cleanupAfterHide, { once: true });
  }
}

const handleHeaderMouseLeave = () => {
  hideTimeoutId = setTimeout(hideDropdowns, 200);
}

const handleHeaderMouseEnter = () => {
  clearTimeout(hideTimeoutId);
}
</script>

<template>
  <header v-if="!route.meta.hideHeader" id="global-nav" ref="header" class="apple-nav fixed top-0 left-0 right-0 z-50" @mouseenter="handleHeaderMouseEnter" @mouseleave="handleHeaderMouseLeave">
    <nav class="container mx-auto px-4">
      <div class="flex justify-between items-center h-11 text-xs">
        <button id="mobile-menu-btn" class="md:hidden text-black">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
        <div class="hidden md:flex justify-center items-center space-x-6 w-full text-gray-800">

          <router-link to="/" id="nav-logo" class="hover:text-black transition-colors">
            <img src="/logo.png" alt="Logo" class="h-8 w-8">
          </router-link>

          <a href="#" class="hover:text-black transition-colors" data-target="dropdown-domestic" @mouseenter="showDropdown('dropdown-domestic')">国内洞察</a>
          <a href="#" class="hover:text-black transition-colors" data-target="dropdown-overseas" @mouseenter="showDropdown('dropdown-overseas')">海外洞察</a>
          <a href="#" class="hover:text-black transition-colors" data-target="dropdown-tools" @mouseenter="showDropdown('dropdown-tools')">工具</a>
        </div>
      </div>
    </nav>

    <div id="dropdown-background" ref="dropdownBackground">
      <div id="dropdown-content-wrapper" class="relative">
        <div id="dropdown-domestic" class="dropdown-content py-8">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-4 gap-8">
              <div>
                <h3 class="text-xs text-gray-500 font-semibold uppercase mb-4">市场分析</h3>
                <a href="#" class="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-2 block">调研报告</a>
                <a href="#" class="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-2 block">友商发布会</a>
                <a href="#" class="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-2 block">洞察报告</a>
              </div>
              <div>
                <h3 class="text-xs text-gray-500 font-semibold uppercase mb-4">技术追踪</h3>
                <a href="#" class="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-2 block">OTA 地图</a>
              </div>
            </div>
          </div>
        </div>
        <div id="dropdown-overseas" class="dropdown-content py-8">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-4 gap-8">
              <div>
                <h3 class="text-xs text-gray-500 font-semibold uppercase mb-4">全球市场</h3>
                <a href="#" class="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-2 block">海外销量</a>
                <router-link to="/osmap" class="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-2 block">出海地图</router-link>
                <router-link to="/new-release" class="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-2 block">海外上新</router-link>
                <a href="#" class="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-2 block">海外洞察</a>
              </div>
              <div>
                <h3 class="text-xs text-gray-500 font-semibold uppercase mb-4">法规与政策</h3>
                <a href="#" class="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-2 block">智能化法规</a>
              </div>
            </div>
          </div>
        </div>
        <div id="dropdown-tools" class="dropdown-content py-8">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-4 gap-8">
              <div>
                <h3 class="text-xs text-gray-500 font-semibold uppercase mb-4">数据工具</h3>
                <a href="#" class="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-2 block">长图工具</a>
                <a href="#" class="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-2 block">发布会海报</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
#dropdown-background { position: absolute; top: 44px; left: 0; right: 0; background-color: white; transform-origin: top; transform: scaleY(0); visibility: hidden; pointer-events: none; transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.35s cubic-bezier(0.4, 0, 0.2, 1); overflow: hidden; }
#dropdown-background.is-visible { transform: scaleY(1); visibility: visible; pointer-events: auto; }
.dropdown-content { position: absolute; width: 100%; opacity: 0; transition: opacity 0.15s ease-in-out; pointer-events: none; }
.dropdown-content.is-active { opacity: 1; pointer-events: auto; }
.dropdown-content .grid > div { opacity: 0; transform: translateY(-15px); transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); transition-delay: 0.1s; }
#dropdown-background.is-visible .dropdown-content.is-active .grid > div { opacity: 1; transform: translateY(0); }
.dropdown-content.is-hiding .grid > div { opacity: 0; transform: translateY(-15px); transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); transition-delay: 0s !important; }
.apple-nav.nav-active { background-color: rgb(255, 255, 255); backdrop-filter: none; }
</style>