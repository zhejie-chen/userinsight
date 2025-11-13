<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
// 1. 导入我们正确的、可复用的卡片组件
import ConferenceReportCard from '@/components/common/ConferenceReportCard.vue';
// 2. 导入可复用的弹窗组件
import DetailModal from '@/components/common/DetailModal.vue';
// 3. 导入新的 API
import { getInsightReports, getInsightReportImages } from '@/services/api/reports.js';

// 4. 定义从路由接收的 prop
const props = defineProps({
  category: {
    type: String,
    required: true,
    validator: (value) => ['domestic', 'overseas'].includes(value),
  },
});

// 5. 数据和加载状态
const allReports = ref([]);
const isLoadingReports = ref(true);

// 6. 弹窗状态 和 图片缓存
const isModalOpen = ref(false);
const selectedConference = ref(null);
const imageCache = new Map();


// 7. 响应式状态 (Tabs)
const activeTab = ref(props.category);

// (新增) 8. 二级筛选 (报告类型)
const ALL_TYPES = 'all'; // 用于"全部"筛选的常量
const activeTypeTab = ref(ALL_TYPES); // 当前选中的报告类型

// (新增) 9. 报告类型与显示文字的映射表
const typeDisplayMap = {
  '市场洞察': '市场',
  '销量洞察': '销量',
  '技术追踪': '技术',
};

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

// (修改) 10. onMounted - 加载数据
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

// (修改) 11. 监听一级Tab (品类) 变化
watch(activeTab, () => {
  updateSlider();
  activeTypeTab.value = ALL_TYPES; // (新增) 切换主Tab时，重置二级筛选
});
// --- 滑块逻辑结束 ---


// 12. 监听路由 prop 的变化
watch(() => props.category, (newCategory) => {
  activeTab.value = newCategory;
  // (新增) 路由变化时也重置二级筛选
  activeTypeTab.value = ALL_TYPES;
});

// (修改) 13. 计算属性 - 第一层过滤 (按国内/海外)
const articlesByCategory = computed(() => {
  return allReports.value.filter(article => article.category === activeTab.value);
});

// (新增) 14. 计算属性 - 动态生成二级筛选的选项
const availableTypes = computed(() => {
  // 从已按 "国内/海外" 过滤的报告中提取所有 "type"
  const types = articlesByCategory.value.map(report => report.type);

  // 1. 使用 Set 去重
  // 2. filter(Boolean) 过滤掉 null 或 undefined 的 type
  const uniqueTypes = [...new Set(types.filter(Boolean))];

  // 3. (推荐) 按你期望的顺序排序 ("市场" -> "销量" -> "技术")
  const sortOrder = ['市场洞察', '销量洞察', '技术追踪'];
  return uniqueTypes.sort((a, b) => {
    const indexA = sortOrder.indexOf(a);
    const indexB = sortOrder.indexOf(b);
    if (indexA === -1) return 1; // a 不在排序列表, 放后面
    if (indexB === -1) return -1; // b 不在排序列表, 放前面
    return indexA - indexB; // 都在列表, 按顺序排
  });
});

// (修改) 15. 计算属性 - 最终渲染列表 (第二层过滤, 按报告类型)
const filteredArticles = computed(() => {
  // 如果 "全部" 被选中，则返回第一层过滤的结果
  if (activeTypeTab.value === ALL_TYPES) {
    return articlesByCategory.value;
  }
  // 否则，在第一层的基础上，再按 "type" 过滤
  return articlesByCategory.value.filter(article => article.type === activeTypeTab.value);
});


// (新增) 骨架屏计算属性
const skeletonMonths = computed(() => {
  const today = new Date();
  return [`${today.getFullYear()}年 ${today.toLocaleString('zh-CN', { month: 'long' })}`];
});


// 16. 弹窗控制函数 (异步加载图片) - (逻辑不变)
async function openConferenceModal(article) {
  selectedConference.value = {
    ...article,
    details: {
      team: article.team || 'CAnswer 洞察团队',
      images: []
    }
  };
  isModalOpen.value = true;

  if (imageCache.has(article.id)) {
    selectedConference.value.details.images = imageCache.get(article.id);
    return;
  }

  try {
    const images = await getInsightReportImages(article.id);
    if (selectedConference.value && selectedConference.value.id === article.id) {
      selectedConference.value.details.images = images;
      imageCache.set(article.id, images);
    }
  } catch (error) {
    console.error(`Failed to fetch images for report ${article.id}:`, error);
  }
}

function closeConferenceModal() {
  isModalOpen.value = false;
  selectedConference.value = null;
}

// 17. 更新卡片点击处理器 (逻辑不变)
function handleCardClick(article) {
  if (article.action_type === 'EXTERNAL_LINK' && article.external_url) {
    window.open(article.external_url, '_blank');
  } else {
    openConferenceModal(article);
  }
}

// --- JS 动画钩子 (高性能) ---
// (全部保持不变)
const STAGGER_DELAY = 60;

function onBeforeEnter(el) {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'none';
}

function onEnter(el, done) {
  const index = parseInt(el.dataset.index) || 0;
  const delay = index * STAGGER_DELAY;

  const onAnimationEnd = () => {
    el.style.opacity = '';
    el.style.transform = '';
    el.style.transition = '';
    done();
  };

  requestAnimationFrame(() => {
    el.style.opacity = 1;
    el.style.transform = 'translateY(0)';
    el.style.transition = `opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;
    el.addEventListener('transitionend', onAnimationEnd, { once: true });
  });
}

function onLeave(el, done) {
  const onAnimationEnd = () => {
    done();
  };

  el.style.opacity = 0;
  el.style.transform = 'translateY(-10px) scale(0.95)';
  el.style.transition = 'opacity 0.2s cubic-bezier(0.55, 0, 0.1, 1), transform 0.2s cubic-bezier(0.55, 0, 0.1, 1)';
  el.addEventListener('transitionend', onAnimationEnd, { once: true });
}
// --- JS 动画钩子结束 ---

</script>

<template>
  <div id="main-content" class="pt-11 bg-gray-50 min-h-screen">
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

      <div
          v-if="!isLoadingReports && availableTypes.length > 0"
          class="flex items-center gap-2 mb-8"
      >
        <button
            @click="activeTypeTab = ALL_TYPES"
            :class="[
            'px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200',
            activeTypeTab === ALL_TYPES
              ? 'bg-gray-900 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          全部
        </button>

        <button
            v-for="type in availableTypes"
            :key="type"
            @click="activeTypeTab = type"
            :class="[
            'px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200',
            activeTypeTab === type
              ? 'bg-gray-900 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          {{ typeDisplayMap[type] || type }}
        </button>
      </div>

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