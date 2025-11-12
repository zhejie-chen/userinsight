<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
// --- 1. 导入导航数据 ---
import { navigationData } from '@/data/navigation.js';

const route = useRoute();
const header = ref(null);
const dropdownBackground = ref(null);
let activeDropdownContent = null;
let hideTimeoutId = null;

const isMobileMenuOpen = ref(false);
const mobileNavView = ref('main');

// --- 2. 将数据放入 ref ---
const navItems = ref(navigationData);

// --- 3. 切换移动端菜单 (逻辑不变) ---
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMobileMenuOpen.value) {
    hideDropdowns();
  } else {
    setTimeout(() => {
      mobileNavView.value = 'main';
    }, 500);
  }
  const mainEl = document.getElementById('main-content');
  if (mainEl) {
    mainEl.classList.toggle('blurred', isMobileMenuOpen.value);
  }
};

// --- 4. 桌面端显示/隐藏 (逻辑不变) ---
const showDropdown = (targetId) => {
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
    const mainEl = document.getElementById('main-content');
    if (mainEl) mainEl.classList.remove('blurred');
    mobileNavView.value = 'main';
  }
  clearTimeout(hideTimeoutId);
  if (dropdownBackground.value) {
    dropdownBackground.value.removeEventListener('transitionend', cleanupAfterHide);
  }
  const targetContent = document.getElementById(`dropdown-${targetId}`); // 确保 ID 匹配
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
// --- 5. 辅助函数，用于动态渲染链接 ---

// 根据类型返回 'router-link' 或 'a'
const getLinkComponent = (type) => {
  return type === 'internal' ? 'router-link' : 'a';
};

// 根据类型返回正确的属性 (to 或 href)
const getLinkProps = (linkItem) => {
  if (linkItem.type === 'internal') {
    return { to: linkItem.link };
  }
  // 外部链接在新窗口打开
  return {
    href: linkItem.link,
    target: linkItem.link === '#' ? '_self' : '_blank',
    rel: 'noopener noreferrer'
  };
};

// 辅助函数：根据 ID 查找一级菜单项（用于移动端）
const findNavItem = (id) => {
  return navItems.value.find(item => item.id === id);
};

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

          <a v-for="item in navItems"
             :key="item.id"
             href="#"
             class="hover:text-black transition-colors"
             :data-target="item.id"
             @mouseenter="showDropdown(item.id)">
            {{ item.label }}
          </a>
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
            <a v-for="item in navItems"
               :key="item.id"
               href="#"
               @click.prevent="mobileNavView = item.id"
               class="text-xl font-semibold text-gray-800 hover:text-blue-600 flex justify-between items-center">
              <span>{{ item.label }}</span>
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </nav>
        </div>

        <div v-for="item in navItems"
             :key="item.id"
             :id="`mobile-nav-${item.id}`"
             class="absolute top-0 left-0 w-full h-full p-8 bg-white transition-transform duration-500 ease-in-out overflow-y-auto"
             :class="mobileNavView === item.id ? 'translate-x-0' : 'translate-x-full'">

          <nav class="flex flex-col space-y-3">
            <template v-for="group in item.children" :key="group.id">
              <component v-for="link in group.children"
                         :key="link.id"
                         :is="getLinkComponent(link.type)"
                         v-bind="getLinkProps(link)"
                         class="text-xl font-semibold flex items-center"
                         :class="link.status === 'active' ? 'text-gray-800 hover:text-blue-600' : 'coming-soon-link'"
                         @click="toggleMobileMenu"> <span>{{ link.label }}</span>
                <span v-if="link.status === 'coming-soon'" class="coming-soon-tag">即将上线</span>
              </component>
            </template>
          </nav>
        </div>

      </div>
    </div>
    <div id="dropdown-background" ref="dropdownBackground">
      <div id="dropdown-content-wrapper" class="relative">

        <div v-for="item in navItems"
             :key="item.id"
             :id="`dropdown-${item.id}`"
             class="dropdown-content py-8">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-3 gap-8">

              <div v-for="group in item.children" :key="group.id">
                <h3 class="text-xs text-gray-500 font-semibold uppercase mb-4">{{ group.label }}</h3>

                <component v-for="link in group.children"
                           :key="link.id"
                           :is="getLinkComponent(link.type)"
                           v-bind="getLinkProps(link)"
                           class="text-2xl font-semibold mb-2 block flex items-center"
                           :class="link.status === 'active' ? 'text-gray-800 hover:text-blue-600' : 'coming-soon-link'"
                           @click="hideDropdowns"> <span>{{ link.label }}</span>
                  <span v-if="link.status === 'coming-soon'" class="coming-soon-tag">即将上线</span>
                </component>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<style scoped>
/* 样式表 (CSS) 无需修改，保持原样即可 */
#dropdown-background { position: absolute; top: 44px; left: 0; right: 0; background-color: white; transform-origin: top; transform: scaleY(0); visibility: hidden; pointer-events: none; transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.35s cubic-bezier(0.4, 0, 0.2, 1); overflow: hidden; }
#dropdown-background.is-visible { transform: scaleY(1); visibility: visible; pointer-events: auto; }
.dropdown-content { position: absolute; width: 100%; opacity: 0; transition: opacity 0.15s ease-in-out; pointer-events: none; }
.dropdown-content.is-active { opacity: 1; pointer-events: auto; }
.dropdown-content .grid > div { opacity: 0; transform: translateY(-15px); transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); transition-delay: 0.1s; }
#dropdown-background.is-visible .dropdown-content.is-active .grid > div { opacity: 1; transform: translateY(0); }
.dropdown-content.is-hiding .grid > div { opacity: 0; transform: translateY(-15px); transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); transition-delay: 0s !important; }
.apple-nav.nav-active { background-color: rgb(255, 255, 255); backdrop-filter: none; }

.coming-soon-link {
  color: #9ca3af;
  cursor: default;
}
.coming-soon-link:hover {
  color: #9ca3af;
  text-decoration: none;
  cursor: default;
}
.coming-soon-tag {
  display: inline-block;
  background-color: #e5e7eb;
  color: #6b7280;
  font-weight: 600;
  border-radius: 4px;
  margin-left: 10px;
  vertical-align: middle;
}
#dropdown-background .coming-soon-tag {
  font-size: 0.8rem;
  line-height: 1.1rem;
  padding: 2px 8px;
}
#mobile-menu .coming-soon-tag {
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 2px 6px;
}
</style>