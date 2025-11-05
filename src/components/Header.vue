<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'; // 1. 导入 useRoute

const route = useRoute(); // 2. 获取当前路由对象

const header = ref(null);
const dropdownBackground = ref(null);
let activeDropdownContent = null;
let hideTimeoutId = null;

// --- 移动端菜单状态 ---
const isMobileMenuOpen = ref(false);
// --- 移动端导航视图状态 (main, domestic, overseas, tools) ---
const mobileNavView = ref('main');

// --- 切换移动端菜单 ---
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;

  // 如果打开移动菜单，则关闭桌面下拉菜单
  if (isMobileMenuOpen.value) {
    hideDropdowns();
  } else {
    // --- 修改：关闭菜单时，重置视图到主菜单 ---
    // 延迟重置，匹配动画时间
    setTimeout(() => {
      mobileNavView.value = 'main';
    }, 500); // 匹配动画时间 500ms
  }

  // 切换背景模糊效果
  const mainEl = document.getElementById('main-content');
  if (mainEl) {
    mainEl.classList.toggle('blurred', isMobileMenuOpen.value);
  }
};

const showDropdown = (targetId) => {
  // --- 如果移动菜单是打开的，先关闭它 ---
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
    const mainEl = document.getElementById('main-content');
    if (mainEl) mainEl.classList.remove('blurred');
    // 立即重置视图
    mobileNavView.value = 'main';
  }

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

        <div class="md:hidden z-50 h-8 w-8 flex items-center justify-center">
          <button v-if="isMobileMenuOpen && mobileNavView !== 'main'" @click="mobileNavView = 'main'" class="text-black">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          <router-link v-else to="/" id="nav-logo-mobile"
                       class="transition-all duration-500 ease-in-out"
                       :class="isMobileMenuOpen ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'">
            <img src="/logo.png" alt="Logo" class="h-8 w-8">
          </router-link>
        </div>

        <div class="hidden md:flex justify-center items-center space-x-6 w-full text-gray-800">
          <router-link to="/" id="nav-logo" class="hover:text-black transition-colors">
            <img src="/logo.png" alt="Logo" class="h-8 w-8">
          </router-link>

          <a href="#" class="hover:text-black transition-colors" data-target="dropdown-domestic" @mouseenter="showDropdown('dropdown-domestic')">国内洞察</a>
          <a href="#" class="hover:text-black transition-colors" data-target="dropdown-overseas" @mouseenter="showDropdown('dropdown-overseas')">海外洞察</a>
          <a href="#" class="hover:text-black transition-colors" data-target="dropdown-tools" @mouseenter="showDropdown('dropdown-tools')">工具</a>
        </div>

        <button id="mobile-menu-btn" class="md:hidden text-black z-50 h-8 w-8 flex items-center justify-center" @click="toggleMobileMenu">
          <svg v-if="!isMobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

      </div>
    </nav>

    <div id="mobile-menu"
         class="md:hidden fixed top-11 left-0 right-0 h-[calc(100vh-44px)] bg-white overflow-hidden transition-transform duration-500 ease-in-out z-40"
         :class="isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'">

      <div class="relative w-full h-full">

        <div id="mobile-nav-main"
             class="absolute top-0 left-0 w-full h-full p-8 transition-transform duration-500 ease-in-out overflow-y-auto"
             :class="mobileNavView === 'main' ? 'translate-x-0' : '-translate-x-full'">
          <nav class="flex flex-col space-y-3">
            <a href="#" @click.prevent="mobileNavView = 'domestic'" class="text-xl font-semibold text-gray-800 hover:text-blue-600 flex justify-between items-center">
              <span>国内洞察</span>
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
            <a href="#" @click.prevent="mobileNavView = 'overseas'" class="text-xl font-semibold text-gray-800 hover:text-blue-600 flex justify-between items-center">
              <span>海外洞察</span>
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
            <a href="#" @click.prevent="mobileNavView = 'tools'" class="text-xl font-semibold text-gray-800 hover:text-blue-600 flex justify-between items-center">
              <span>工具</span>
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </nav>
        </div>

        <div id="mobile-nav-domestic"
             class="absolute top-0 left-0 w-full h-full p-8 bg-white transition-transform duration-500 ease-in-out overflow-y-auto"
             :class="mobileNavView === 'domestic' ? 'translate-x-0' : 'translate-x-full'">
          <nav class="flex flex-col space-y-3">
            <a href="#" class="text-xl font-semibold text-gray-800 hover:text-blue-600">调研报告</a>
            <a href="#" class="text-xl font-semibold text-gray-800 hover:text-blue-600">友商发布会</a>
            <a href="#" class="text-xl font-semibold text-gray-800 hover:text-blue-600">洞察报告</a>
            <a href="#" class="text-xl font-semibold text-gray-800 hover:text-blue-600">OTA 地图</a>
            <a href="#" class="text-xl font-semibold flex items-center coming-soon-link">
              <span>AI技术</span>
              <span class="coming-soon-tag">即将上线</span>
            </a>
          </nav>
        </div>

        <div id="mobile-nav-overseas"
             class="absolute top-0 left-0 w-full h-full p-8 bg-white transition-transform duration-500 ease-in-out overflow-y-auto"
             :class="mobileNavView === 'overseas' ? 'translate-x-0' : 'translate-x-full'">
          <nav class="flex flex-col space-y-3">
            <a href="#" class="text-xl font-semibold text-gray-800 hover:text-blue-600">海外销量</a>
            <router-link to="/osmap" class="text-xl font-semibold text-gray-800 hover:text-blue-600">出海地图</router-link>
            <router-link to="/new-release" class="text-xl font-semibold text-gray-800 hover:text-blue-600">海外上新</router-link>
            <a href="#" class="text-xl font-semibold text-gray-800 hover:text-blue-600">海外洞察</a>
            <router-link to="/regulation" class="text-xl font-semibold text-gray-800 hover:text-blue-600">法规对比</router-link>
          </nav>
        </div>

        <div id="mobile-nav-tools"
             class="absolute top-0 left-0 w-full h-full p-8 bg-white transition-transform duration-500 ease-in-out overflow-y-auto"
             :class="mobileNavView === 'tools' ? 'translate-x-0' : 'translate-x-full'">
          <nav class="flex flex-col space-y-3">
            <a href="#" class="text-xl font-semibold flex items-center coming-soon-link">
              <span>长图工具</span>
              <span class="coming-soon-tag">即将上线</span>
            </a>
            <a href="#" class="text-xl font-semibold text-gray-800 hover:text-blue-600">发布会海报</a>
          </nav>
        </div>

      </div>
    </div>
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
                <a href="#" class="text-2xl font-semibold mb-2 block flex items-center coming-soon-link">
                  <span>AI技术</span>
                  <span class="coming-soon-tag">即将上线</span>
                </a>
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
                <router-link to="/regulation" class="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-2 block">法规对比</router-link>
              </div>
            </div>
          </div>
        </div>
        <div id="dropdown-tools" class="dropdown-content py-8">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-4 gap-8">
              <div>
                <h3 class="text-xs text-gray-500 font-semibold uppercase mb-4">数据工具</h3>
                <a href="#" class="text-2xl font-semibold mb-2 block flex items-center coming-soon-link">
                  <span>长图工具</span>
                  <span class="coming-soon-tag">即将上线</span>
                </a>
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


/* --- "即将上线" 样式 (已修正) --- */
.coming-soon-link {
  color: #9ca3af; /* Tailwind text-gray-400 */
  cursor: default; /* 改为普通鼠标 */
}

/* 确保 hover 状态也不变色 */
.coming-soon-link:hover {
  color: #9ca3af;
  text-decoration: none;
  cursor: default; /* 改为普通鼠标 */
}

.coming-soon-tag {
  display: inline-block;
  background-color: #e5e7eb; /* Tailwind gray-200 */
  color: #6b7280; /* Tailwind gray-500 */
  font-weight: 600; /* semibold */
  border-radius: 4px;
  margin-left: 10px; /* 标签和文字的间距 */
  vertical-align: middle;
}

/* 桌面端下拉菜单中 (text-2xl) 的标签样式 */
#dropdown-background .coming-soon-tag {
  font-size: 0.8rem; /* 12.8px */
  line-height: 1.1rem;
  padding: 2px 8px;
}

/* 移动端菜单中 (text-xl) 的标签样式 */
#mobile-menu .coming-soon-tag {
  font-size: 0.75rem; /* 12px */
  line-height: 1rem;
  padding: 2px 6px;
}
/* --- 结束样式 --- */

</style>