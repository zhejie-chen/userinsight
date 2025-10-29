<script setup>
import { defineProps, defineEmits, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  conference: Object
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

// 最可靠的背景滚动锁定逻辑，增加了对导航条的防抖动处理
watch(() => props.isOpen, (newVal) => {
  const htmlEl = document.documentElement;
  const headerEl = document.querySelector('header.apple-nav');

  if (newVal) {
    const scrollbarWidth = window.innerWidth - htmlEl.clientWidth;
    htmlEl.style.paddingRight = `${scrollbarWidth}px`;
    if (headerEl) {
      headerEl.style.paddingRight = `${scrollbarWidth}px`;
    }
    htmlEl.style.overflow = 'hidden';
  } else {
    htmlEl.style.paddingRight = '';
    htmlEl.style.overflow = '';
    if (headerEl) {
      headerEl.style.paddingRight = '';
    }
  }
});

// 监听 Esc 键关闭弹窗
const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  const htmlEl = document.documentElement;
  const headerEl = document.querySelector('header.apple-nav');
  htmlEl.style.paddingRight = '';
  htmlEl.style.overflow = '';
  if (headerEl) {
    headerEl.style.paddingRight = '';
  }
});
</script>

<template>
  <Teleport to="body">
    <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
        <transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:scale-95"
        >
          <div class="modal-container" v-if="isOpen">
            <button @click="closeModal" class="close-button" aria-label="Close modal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="modal-content">
              <header class="modal-header">
                <h1 class="modal-title">{{ conference?.title }}</h1>
                <div class="modal-meta">
                  <span>{{ conference?.date }}</span>
                  <span class="team-name">{{ conference?.details?.team }}</span>

                  <a
                      v-if="conference?.replayUrl"
                      :href="conference.replayUrl"
                      target="_blank"
                      class="replay-link"
                      @click.stop
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="link-icon">
                      <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.665l3-3z" />
                      <path d="M8.603 14.397a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 005.656 5.656l3-3a4 4 0 00-.225-5.865.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.665l-3 3z" />
                    </svg>
                    直播回放
                  </a>
                </div>
              </header>
              <div class="modal-body">
                <img
                    v-for="(image, index) in conference?.details?.images"
                    :key="index"
                    :src="image"
                    alt="Conference detail image"
                    class="content-image"
                />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  overflow-y: auto; padding: 5vh 0;
}
.modal-container {
  position: relative; width: 90%; max-width: 1152px;
  margin: 0 auto; background-color: white; border-radius: 28px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.modal-content { padding: 76px; }
.modal-header { margin-bottom: 2.5rem; text-align: left; }
.modal-title {
  font-size: 2.5rem; font-weight: 700; line-height: 1.2;
  color: #1d1d1f; margin-bottom: 1rem;
}
.modal-meta {
  display: flex; align-items: center; /* 垂直居中对齐 */
  flex-wrap: wrap; /* 允许换行 */
  gap: 1.5rem; font-size: 0.875rem; color: #6b7280;
}
.team-name { font-weight: 500; }
.modal-body { font-size: 0; }
.content-image { width: 100%; height: auto; display: block; }

.close-button {
  position: absolute; top: 32px; right: 32px;
  --button-size: 36px;
  width: var(--button-size); height: var(--button-size);
  border-radius: 50%; background-color: #1d1d1f; color: white;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; border: none; z-index: 10;
  transition: transform 0.3s ease-in-out;
}
.close-button .icon { width: 16px; height: 16px; }
.close-button:hover { transform: scale(1.1); }

/* --- 新增：直播回放链接样式 --- */
.replay-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem; /* 6px */
  color: inherit; /* 继承父元素的灰色 */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease, transform 0.2s ease;
}
.replay-link:hover {
  color: #1d1d1f; /* 悬停时变为黑色 */
  transform: scale(1.05); /* 轻微放大 */
}
.replay-link .link-icon {
  width: 1rem; /* 16px */
  height: 1rem;
}

@media (max-width: 768px) {
  .modal-content { padding: 32px; }
  .modal-title { font-size: 1.875rem; }
  .close-button { top: 20px; right: 20px; }
}
</style>