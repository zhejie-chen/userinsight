<template>
  <Teleport to="body">
    <div class="modal-overlay" @click.self="closeModal">
      <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
      >
        <div v-if="isVisible" class="modal-content-card">
          <button @click="closeModal" class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="modal-header">
            <h1 class="modal-title">{{ conference.title }}</h1>
            <div class="modal-meta">
              <span>{{ conference.date }}</span>
              <span class="meta-divider">|</span>
              <span>主讲人: {{ conference.personnel }}</span>
            </div>
          </div>

          <div class="modal-image-gallery">
            <img
                v-for="(image, index) in conference.detailImages"
                :key="index"
                :src="image"
                alt="Conference detail image"
                class="gallery-image"
            />
          </div>
        </div>
      </transition>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  conference: {
    type: Object,
    required: true,
  },
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['close']);

// isVisible 控制 transition 动画的播放
const isVisible = ref(false);

// 监听父组件传入的 show prop
watch(() => props.show, (newVal) => {
  // 当 show 变为 true 时，延迟一小段时间再让 isVisible 变为 true，
  // 这样可以确保 DOM 元素已经挂载，动画可以正常播放。
  if (newVal) {
    setTimeout(() => {
      isVisible.value = true;
    }, 20); // 20ms 的延迟
  } else {
    isVisible.value = false;
  }
});

function closeModal() {
  // 当关闭时，先触发动画，然后延迟一小会再通知父组件关闭
  isVisible.value = false;
  setTimeout(() => {
    emit('close');
  }, 200); // 延迟时间应与 leave-active-class 的 duration 匹配
}

// 添加键盘 Esc 键关闭弹窗的功能
const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.show) {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50; /* 确保在最顶层 */
  overflow-y: auto; /* 允许整个遮罩层滚动 */
  padding: 4rem 0; /* 顶部和底部的滚动边距 */
  display: flex;
  justify-content: center;
}

.modal-content-card {
  position: relative;
  width: 100%;
  max-width: 56rem; /* 896px，控制弹窗最大宽度 */
  background-color: white;
  border-radius: 0.75rem; /* 12px */
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  margin: auto 1rem; /* 确保在小屏幕上也有边距 */
  align-self: flex-start; /* 关键：让卡片从容器顶部开始 */
}

.close-button {
  position: absolute;
  top: 1.5rem; /* 24px */
  right: 1.5rem;
  z-index: 60;
  color: #9ca3af; /* gray-400 */
  transition: color 0.2s ease;
}
.close-button:hover {
  color: #1f2937; /* gray-800 */
}

.modal-header {
  padding: 2.5rem 3rem 2rem; /* 48px 48px 32px */
}

.modal-title {
  font-size: 2.25rem; /* 36px */
  font-weight: 700;
  line-height: 1.2;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

.modal-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem; /* 12px */
  font-size: 0.875rem; /* 14px */
  color: #6b7280; /* gray-500 */
}
.meta-divider {
  color: #e5e7eb; /* gray-200 */
}

.modal-image-gallery {
  padding: 0 3rem 3rem;
}

.gallery-image {
  display: block;
  width: 100%;
  height: auto;
}
</style>