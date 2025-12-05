<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from "vue";

// --- Props 定义 ---
const props = defineProps({
  // 选中的 Tab ID (v-model)
  modelValue: {
    type: String,
    required: true,
  },
  // Tab 列表: [{ id: 'overview', label: '概览' }, ...]
  tabs: {
    type: Array,
    required: true,
  },
  // 底部元素的 ID，用于计算防遮挡
  footerId: {
    type: String,
    default: "page-footer",
  },
  // 是否固定位置（不与底部交互）
  fixedMode: {
    type: Boolean,
    default: false,
  },
  // 初始边距
  bottom: {
    type: Number,
    default: 24, // 24px = bottom-6
  },
  right: {
    type: Number,
    default: 24, // 24px = right-6
  },
});

const emit = defineEmits(["update:modelValue"]);

// --- 状态 ---
const tabsContainer = ref(null);
const tabRefs = ref({});
const indicatorStyle = ref({});
const currentBottom = ref(props.bottom);

// --- 1. 滑块动画逻辑 ---
const setTabRef = (el, id) => {
  if (el) tabRefs.value[id] = el;
};

const updateIndicator = () => {
  if (!tabsContainer.value) return;
  const activeTabEl = tabRefs.value[props.modelValue];
  if (!activeTabEl) return;

  const containerRect = tabsContainer.value.getBoundingClientRect();
  const tabRect = activeTabEl.getBoundingClientRect();

  indicatorStyle.value = {
    height: `${tabRect.height}px`,
    width: `${tabRect.width}px`,
    transform: `translate(${tabRect.left - containerRect.left}px, ${
        tabRect.top - containerRect.top
    }px)`,
  };
};

// --- 2. 底部防遮挡逻辑 ---
const handleScroll = () => {
  if (props.fixedMode) return; // 固定模式下不计算

  const footerEl = document.getElementById(props.footerId);
  if (!footerEl) return;

  const footerTop = footerEl.offsetTop;
  // 视口底部位置 = 滚动距离 + 视口高度
  const viewportBottom = window.scrollY + window.innerHeight;
  // 计算重叠部分：视口底部 超出 页脚顶部 的距离
  const overlap = viewportBottom - footerTop;

  // 如果发生了重叠（overlap > 0），则将组件向上推 overlap 的距离
  if (overlap > 0) {
    currentBottom.value = props.bottom + overlap;
  } else {
    // 恢复默认位置
    if (currentBottom.value !== props.bottom) {
      currentBottom.value = props.bottom;
    }
  }
};

// --- 3. 监听变化 ---
watch(
    () => props.modelValue,
    async () => {
      // 等待 DOM 更新（内容高度变化）
      await nextTick();
      // 1. 更新滑块位置
      updateIndicator();
      // 2. 核心修复：切换 Tab 后页面高度可能变化，立即重新计算底部位置
      handleScroll();
    }
);

// 窗口大小变化时更新
const onResize = () => {
  updateIndicator();
  handleScroll();
};

// --- 生命周期 ---
onMounted(() => {
  window.addEventListener("resize", onResize);
  window.addEventListener("scroll", handleScroll, { passive: true });

  // 初始计算
  setTimeout(() => {
    updateIndicator();
    handleScroll();
  }, 100);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
  window.removeEventListener("scroll", handleScroll);
});

// --- 样式计算 ---
const containerStyle = computed(() => ({
  bottom: `${currentBottom.value}px`,
  right: `${props.right}px`,
  // 使用 fixed 定位，移除 transition 避免滚动时的延迟感
  position: "fixed",
  zIndex: 30,
}));
</script>

<template>
  <div :style="containerStyle">
    <div ref="tabsContainer" class="floating-filter-container">
      <div class="active-tab-indicator" :style="indicatorStyle"></div>

      <button
          v-for="tab in tabs"
          :key="tab.id"
          :ref="(el) => setTabRef(el, tab.id)"
          @click="emit('update:modelValue', tab.id)"
          class="tab-link"
          :class="{ active: modelValue === tab.id }"
      >
        {{ tab.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* 容器样式：毛玻璃、圆角、阴影 */
.floating-filter-container {
  @apply relative overflow-hidden flex flex-col sm:flex-row sm:items-center bg-gray-100/80 backdrop-blur-md rounded-lg sm:rounded-full shadow-lg p-1.5 transition-all duration-300;
}

/* 滑块样式：白色背景、阴影、动画 */
.active-tab-indicator {
  @apply absolute top-0 left-0 bg-white rounded-lg sm:rounded-full shadow-md transition-transform duration-300 ease-in-out;
}

/* 按钮样式 */
.tab-link {
  @apply relative z-10 flex items-center justify-center sm:justify-start px-5 py-2 rounded-lg sm:rounded-full text-base font-semibold text-gray-700 transition-colors duration-300 whitespace-nowrap bg-transparent;
  cursor: pointer;
}

.tab-link.active {
  @apply text-blue-600;
}
</style>