<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
// 1. 导入我们要复用的卡片组件 (PressConferenceCard)
import PressConferenceCard from '@/components/cards/PressConferenceCard.vue';

// 2. 定义从路由接收的 prop
// 我们将在 router/index.js 中配置路由，使其传递 'category' prop
const props = defineProps({
  category: {
    type: String,
    required: true,
    validator: (value) => ['domestic', 'overseas'].includes(value),
  },
});

// 3. 静态数据
// 我们用一个 'category' 字段来区分国内和海外的文章
const allArticles = ref([
  // --- 国内洞察文章 ---
  {
    id: 'd-001',
    title: '2025年国内新能源市场趋势分析',
    date: '2025-11-10',
    cover_image_url: '/img/cover-img/file cover - 1.png',
    summary: '深度解析国内市场竞争格局、消费者偏好以及未来技术发展方向。',
    category: 'domestic',
    // 确保 PressConferenceCard 需要的其他数据也存在
    brand_logo_url: '/logo.png',
    brand_name: 'CAnswer',
  },
  {
    id: 'd-002',
    title: '智能座舱技术国内应用报告',
    date: '2025-10-28',
    cover_image_url: '/img/cover-press-conference/sepSales.png',
    summary: '探讨国内主流车厂在智能座舱领域的最新进展与用户反馈。',
    category: 'domestic',
    brand_logo_url: '/logo.png',
    brand_name: 'CAnswer',
  },
  // --- 海外洞察文章 ---
  {
    id: 'o-001',
    title: '欧洲电动车市场准入壁垒研究',
    date: '2025-11-05',
    cover_image_url: '/img/cover-img/World.png',
    summary: '分析欧盟最新的法规政策、关税及对中国车企出海的影响。',
    category: 'overseas',
    brand_logo_url: '/logo.png',
    brand_name: 'CAnswer',
  },
  {
    id: 'o-002',
    title: '东南亚新能源汽车市场概览',
    date: '2025-10-22',
    cover_image_url: '/img/cover-img/海外销量封面.png',
    summary: '泰国、印尼、马来西亚三国市场潜力、本土品牌与竞争对手分析。',
    category: 'overseas',
    brand_logo_url: '/logo.png',
    brand_name: 'CAnswer',
  },
  {
    id: 'o-003',
    title: '巴西市场消费者调研报告',
    date: '2025-10-15',
    cover_image_url: '/img/cover-img/卡片三-巴西.png',
    summary: '针对巴西消费者的购车动机、品牌认知度及价格敏感度进行的专项调研。',
    category: 'overseas',
    brand_logo_url: '/logo.png',
    brand_name: 'CAnswer',
  },
]);

// 4. 响应式状态
// activeTab 的初始值由路由 prop 决定
const activeTab = ref(props.category);

// 5. 监听路由 prop 的变化
// (当用户在顶部导航栏从“国内”切换到“海外”时，此页面会保持加载，但 prop 会变化)
watch(() => props.category, (newCategory) => {
  activeTab.value = newCategory;
});

// 6. 计算属性
// 动态切换大标题
const computedTitle = computed(() => {
  return activeTab.value === 'domestic' ? '国内洞察报告' : '海外洞察报告';
});

// 动态过滤文章列表
const filteredArticles = computed(() => {
  return allArticles.value.filter(article => article.category === activeTab.value);
});

</script>

<template>
  <div class="pt-11 bg-gray-50 min-h-screen"> <!-- pt-11 为头部导航栏留出空间 -->
    <div class="container mx-auto px-4 py-8">

      <!-- 1. 切换器 (Tabs) -->
      <div class="flex justify-center mb-8">
        <div class="flex items-center p-1 bg-gray-200 rounded-full">
          <button
              @click="activeTab = 'domestic'"
              :class="[
              'px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300',
              activeTab === 'domestic' ? 'bg-white text-gray-900 shadow' : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            国内洞察
          </button>
          <button
              @click="activeTab = 'overseas'"
              :class="[
              'px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300',
              activeTab === 'overseas' ? 'bg-white text-gray-900 shadow' : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            海外洞察
          </button>
        </div>
      </div>

      <!-- 2. 大标题 -->
      <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">
        {{ computedTitle }}
      </h1>

      <!-- 3. 文章卡片列表 -->
      <!-- 
        我们使用 TransitionGroup 来为列表添加淡入动画。
        注意：我们复用 PressConferenceCard, 
        它期望的 prop 是 'conference'，所以我们传入 :conference="article" 
      -->
      <TransitionGroup
          tag="div"
          name="article-fade"
          class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        <PressConferenceCard
            v-for="article in filteredArticles"
            :key="article.id"
            :conference="article"
        />
      </TransitionGroup>

    </div>
  </div>
</template>

<style scoped>
/* 定义列表过渡动画 */
.article-fade-enter-active,
.article-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.article-fade-enter-from,
.article-fade-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}
</style>