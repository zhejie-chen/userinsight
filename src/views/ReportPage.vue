<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
// 1. 导入我们正确的、可复用的卡片组件
import ConferenceReportCard from '@/components/common/ConferenceReportCard.vue';

// 2. 定义从路由接收的 prop
const props = defineProps({
  category: {
    type: String,
    required: true,
    validator: (value) => ['domestic', 'overseas'].includes(value),
  },
});

// 3. 静态数据
const allArticles = ref([
  // --- 国内洞察文章 ---
  {
    id: 'd-001',
    title: '2025年国内新能源市场趋势分析',
    date: '2025-11-10',
    image: '/img/cover-img/file cover - 1.png',
    description: '深度解析国内市场竞争格局、消费者偏好以及未来技术发展方向。',
    category: 'domestic',
    replayUrl: null,
  },
  {
    id: 'd-002',
    title: '智能座舱技术国内应用报告',
    date: '2025-10-28',
    image: '/img/cover-press-conference/sepSales.png',
    description: '探讨国内主流车厂在智能座舱领域的最新进展与用户反馈。',
    category: 'domestic',
    replayUrl: null,
  },
  // --- 海外洞察文章 ---
  {
    id: 'o-001',
    title: '欧洲电动车市场准入壁垒研究',
    date: '2025-11-05',
    image: '/img/cover-img/World.png',
    description: '分析欧盟最新的法规政策、关税及对中国车企出海的影响。',
    category: 'overseas',
    replayUrl: null,
  },
  {
    id: 'o-002',
    title: '东南亚新能源汽车市场概览',
    date: '2025-10-22',
    image: '/img/cover-img/海外销量封面.png',
    description: '泰国、印尼、马来西亚三国市场潜力、本土品牌与竞争对手分析。',
    category: 'overseas',
    replayUrl: null,
  },
  {
    id: 'o-003',
    title: '巴西市场消费者调研报告',
    date: '2025-10-15',
    image: '/img/cover-img/卡片三-巴西.png',
    description: '针对巴西消费者的购车动机、品牌认知度及价格敏感度进行的专项调研。',
    category: 'overseas',
    replayUrl: null,
  },
]);

// 4. 响应式状态
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

onMounted(() => {
  nextTick(() => {
    updateSlider();
  });
});

watch(activeTab, () => {
  updateSlider();
});
// --- 滑块逻辑结束 ---


// 5. 监听路由 prop 的变化
watch(() => props.category, (newCategory) => {
  activeTab.value = newCategory;
});

// 6. 计算属性
// 动态过滤文章列表
const filteredArticles = computed(() => {
  return allArticles.value.filter(article => article.category === activeTab.value);
});

// 7. 定义卡片点击事件处理器
function handleCardClick(article) {
  console.log('Clicked article:', article.title);
  // router.push(`/reports/${article.id}`);
}

// --- JS 动画钩子 (高性能) ---
const STAGGER_DELAY = 60; // 每个卡片交错 60ms

// 动画：进入之前
function onBeforeEnter(el) {
  // 设置初始状态：透明、轻微下移
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'none'; // 确保初始状态不应用动画
}

// 动画：进入时
function onEnter(el, done) {
  // 读取 data-index 来计算延迟
  const index = parseInt(el.dataset.index) || 0;
  const delay = index * STAGGER_DELAY;

  // 使用 requestAnimationFrame 确保在下一帧应用动画
  requestAnimationFrame(() => {
    // 设置最终状态和带延迟的过渡
    el.style.opacity = 1;
    el.style.transform = 'translateY(0)';
    el.style.transition = `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;

    // 动画结束后，调用 done() 来清理
    el.addEventListener('transitionend', done, { once: true });
  });
}

// 动画：离开时
function onLeave(el, done) {
  // 离开动画：快速、统一淡出
  el.style.opacity = 0;
  el.style.transform = 'translateY(-10px) scale(0.95)'; // 轻微上移并缩小
  el.style.transition = 'all 0.2s cubic-bezier(0.55, 0, 0.1, 1)';

  // 动画结束后，调用 done()
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

      <TransitionGroup
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
  </div>
</template>

<style scoped>
/* 所有 .article-fade-* 样式已被移除,
  因为动画现在由 <script setup> 中的 JS 钩子驱动。
*/
</style>