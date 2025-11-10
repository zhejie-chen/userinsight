<template>
  <div
      class="conference-card group bg-white rounded-lg"
      :class="{ 'is-active': isActive }"
      @click="handleClick"
  >
    <div class="relative" style="padding-bottom: 42.6%">
      <img
          :src="conference.image"
          :alt="conference.title"
          class="absolute h-full w-full object-cover"
          loading="lazy"
          decoding="async"
      />
    </div>
    <div class="p-5">
      <h3 class="text-lg font-bold text-gray-800 mb-2 truncate">{{ conference.title }}</h3>
      <p class="text-gray-600 text-sm h-14 overflow-hidden mb-4">{{ conference.description }}</p>
      <div class="card-meta flex justify-between items-center text-xs text-gray-500">
        <span>{{ conference.date }}</span>
        <div class="meta-action">
          <span class="default-text">用户洞察</span>
          <a
              v-if="conference.replayUrl"
              :href="conference.replayUrl"
              target="_blank"
              class="hover-link"
              @click.stop
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="link-icon">
              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.665l3-3z" />
              <path d="M8.603 14.397a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 005.656 5.656l3-3a4 4 0 00-.225-5.865.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.665l-3 3z" />
            </svg>
            直播回放
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  conference: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

function handleClick() {
  // 派发点击事件，父组件的 handleCardClick 会接收到 conference 对象
  emit('click', props.conference);
}
</script>

<style scoped>
/* 之前在 PressConferencePage.vue 中所有
   与 .conference-card 相关的样式都已移到这里 */

.conference-card .p-5 p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

/* Conference Card Effects */
.conference-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  cursor: pointer;
}
.conference-card:has(.hover-link:hover) { cursor: default; }

.conference-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
}
.conference-card.is-active {
  transform: scale(1.03) translateY(0) !important;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5), 0 12px 24px rgba(0, 0, 0, 0.1);
}
.conference-card img { transition: transform 0.3s ease; }
.conference-card:hover img { transform: scale(1.05); }
.conference-card.is-active img { transform: scale(1.05); }
.card-meta { border-top: 1px solid #f3f4f6; padding-top: 1rem; position: relative; }

.meta-action {
  position: relative;
  height: 16px;
  display: flex;
  align-items: center;
}
.default-text, .hover-link {
  display: flex;
  align-items: center;
  gap: 4px;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.hover-link {
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  transform: translateY(5px);
  color: #6b7280;
  text-decoration: none;
  white-space: nowrap;
}
.link-icon {
  width: 14px;
  height: 14px;
}
.group:has(.hover-link):hover .default-text {
  opacity: 0;
  transform: translateY(-5px);
}
.group:has(.hover-link):hover .hover-link {
  opacity: 1;
  transform: translateY(0);
  color: #3b82f6;
}
.hover-link:hover {
  transform: translateY(0) scale(1.1);
}
</style>