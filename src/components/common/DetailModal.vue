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
            <div class="modal-content">
              <header class="modal-header">
                <h1 class="modal-title">{{ conference?.title }}</h1>
                <div class="modal-meta">
                  <span>{{ conference?.date }}</span>
                  <span class="team-name">{{ conference?.details?.team }}</span>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;

  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  overflow-y: auto;
  padding: 5vh 0;
}

.modal-container {
  width: 90%;
  /* 修改点 1：缩小最大宽度 */
  max-width: 1152px; /* 对应 Tailwind 的 max-w-6xl */
  margin: 0 auto;
  background-color: white;
  /* 修改点 2：增大圆角 */
  border-radius: 28px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.modal-content {
  /* 修改点 3：增大内边距 */
  padding: 76px;
}

.modal-header {
  margin-bottom: 2.5rem;
  text-align: left;
}

.modal-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1d1d1f;
  margin-bottom: 1rem;
}

.modal-meta {
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.team-name {
  font-weight: 500;
}

.modal-body {
  font-size: 0;
}

.content-image {
  width: 100%;
  height: auto;
  display: block;
}

/* 新增：响应式调整，用于小屏幕下的内边距 */
@media (max-width: 768px) {
  .modal-content {
    padding: 32px;
  }
  .modal-title {
    font-size: 1.875rem; /* 30px */
  }
}
</style>