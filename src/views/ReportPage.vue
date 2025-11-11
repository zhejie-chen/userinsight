<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
// 1. 导入我们正确的、可复用的卡片组件
import ConferenceReportCard from '@/components/common/ConferenceReportCard.vue';
// 2. 导入可复用的弹窗组件
import DetailModal from '@/components/common/DetailModal.vue';
// (新增) 3. 导入新的 API
import { getInsightReports, getInsightReportImages } from '@/services/api/reports.js';

// 4. 定义从路由接收的 prop
const props = defineProps({
  category: {
    type: String,
    required: true,
    validator: (value) => ['domestic', 'overseas'].includes(value),
  },
});

// (新增) 5. 数据和加载状态
const allReports = ref([]); // 替换 allArticles
const isLoadingReports = ref(true);

// (新增) 6. 弹窗状态 和 图片缓存
const isModalOpen = ref(false);
const selectedConference = ref(null);
const imageCache = new Map(); // 用于缓存弹窗图片


// 7. 响应式状态 (Tabs)
const activeTab = ref(props.category);

// --- 滑块动画逻辑 ---
const domesticTabRef = ref(null);
const overseasTabRef = ref(null);
const sliderStyle = ref({
  width: '0px',
  height: '0px',
  transform: 'translateX(0px) translateY(0px)',
});

function updateSlider() {
  let activeEl = activeTab.value === 'domestic'
      ? domesticTabRef.value
      : overseasTabRef.value;

  if (activeEl) {
    sliderStyle.value = {
      width: `${activeEl.offsetWidth}px`,
      height: `${activeEl.offsetHeight}px`,
      transform: `translateX(${activeEl.offsetLeft}px) translateY(${activeEl.offsetTop}px)`,
    };
  }
}

// (修改) 8. onMounted - 加载数据
onMounted(async () => {
  isLoadingReports.value = true;
  try {
    allReports.value = await getInsightReports();
  } catch (error) {
    console.error("Failed to load reports:", error);
  } finally {
    isLoadingReports.value = false;
    nextTick(() => {
      updateSlider();
    });
  }
});

watch(activeTab, () => {
  updateSlider();
});
// --- 滑块逻辑结束 ---


// 9. 监听路由 prop 的变化
watch(() => props.category, (newCategory) => {
  activeTab.value = newCategory;
});

// (修改) 10. 计算属性 - 过滤动态数据
const filteredArticles = computed(() => {
  return allReports.value.filter(article => article.category === activeTab.value);
});

// (新增) 骨架屏计算属性
const skeletonMonths = computed(() => {
  const today = new Date();
  return [`${today.getFullYear()}年 ${today.toLocaleString('zh-CN', { month: 'long' })}`];
});


// (修改) 11. 弹窗控制函数 (异步加载图片)
async function openConferenceModal(article) {
  // 适配数据：将 'article' 包装成 'DetailModal' 期望的 'conference' 对象
  selectedConference.value = {
    ...article, // 包含 id, title, description, date, image 等
    details: {
      team: article.team || 'CAnswer 洞察团队', // 使用动态团队名称
      images: [] // 初始为空
    }
  };
  isModalOpen.value = true;

  // 检查缓存
  if (imageCache.has(article.id)) {
    selectedConference.value.details.images = imageCache.get(article.id);
    return;
  }

  // 异步获取图片
  try {
    const images = await getInsightReportImages(article.id);
    // 确保弹窗仍然是同一个
    if (selectedConference.value && selectedConference.value.id === article.id) {
      selectedConference.value.details.images = images;
      imageCache.set(article.id, images); // 存入缓存
    }
  } catch (error) {
    console.error(`Failed to fetch images for report ${article.id}:`, error);
  }
}

function closeConferenceModal() {
  isModalOpen.value = false;
  selectedConference.value = null;
}

// 12. 更新卡片点击处理器 (逻辑不变)
function handleCardClick(article) {
  if (article.action_type === 'EXTERNAL_LINK' && article.external_url) {
    window.open(article.external_url, '_blank');
  } else {
    openConferenceModal(article);
  }
}

// --- JS 动画钩子 (高性能) ---
const STAGGER_DELAY = 60; // 每个卡片交错 60ms

function onBeforeEnter(el) {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'none';
}

function onEnter(el, done) {
  const index = parseInt(el.dataset.index) || 0;
  const delay = index * STAGGER_DELAY;

  requestAnimationFrame(() => {
    el.style.opacity = 1;
    el.style.transform = 'translateY(0)';
    el.style.transition = `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;
    el.addEventListener('transitionend', done, { once: true });
  });
}

function onLeave(el, done) {
  el.style.opacity = 0;
  el.style.transform = 'translateY(-10px) scale(0.95)';
  el.style.transition = 'all 0.2s cubic-bezier(0.55, 0, 0.1, 1)';
  el.addEventListener('transitionend', done, { once: true });
}
// --- JS 动画钩子结束 ---

</script>

<template>
  <div class="pt-11 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 py-8">

      <div class="flex mb-8">
        <div class="relative flex items-center p-1 bg-gray-200 rounded-full">
          <div
              class="absolute bg-white rounded-full shadow left-0 top-0"
              style="transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);"
              :style="sliderStyle"
          ></div>
          <button
              ref="domesticTabRef"
              @click="activeTab = 'domestic'"
              :class="[
              'relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300',
              activeTab === 'domestic' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            国内
          </button>
          <button
              ref="overseasTabRef"
              @click="activeTab = 'overseas'"
              :class="[
              'relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300',
              activeTab === 'overseas' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            海外
          </button>
        </div>
      </div>

      <h1 class="text-4xl font-bold text-gray-900 mb-8">
        洞察报告
      </h1>

      <div v-if="isLoadingReports">
        <div
            v-for="month in skeletonMonths"
            :key="month"
            class="month-group-reports"
        >
          <div class="grid gap-6 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
            <div v-for="n in 4" :key="`skel-card-${month}-${n}`" class="report-card-skeleton">
              <div class="image-placeholder skeleton-loader"></div>
              <div class="content">
                <div class="line-1 skeleton-loader"></div>
                <div class="line-2 skeleton-loader"></div>
                <div class="line-3 skeleton-loader"></div>
                <div class="line-4 skeleton-loader"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TransitionGroup
          v-else
          tag="div"
          class="grid gap-6 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]"
          :css="false"
          @before-enter="onBeforeEnter"
          @enter="onEnter"
          @leave="onLeave"
      >
        <ConferenceReportCard
            v-for="(article, index) in filteredArticles"
            :key="article.id"
            :data-index="index"
            :conference="article"
            @click="handleCardClick"
        />
      </TransitionGroup>

    </div>

    <DetailModal
        :isOpen="isModalOpen"
        :conference="selectedConference"
        @close="closeConferenceModal"
    />

  </div>
</template>

<style scoped>
/* 动画样式已由 JS 钩子处理。
  骨架屏样式 (.report-card-skeleton)
  假定已在全局 (如 loading-animations.css) 中定义。
*/
</style>