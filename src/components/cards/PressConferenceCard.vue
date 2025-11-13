<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const SCROLL_SPEED = 40;
  function setupDynamicScroll(selector, speed, direction) {
    const row = document.querySelector(selector);
    if (!row) return;

    // 克隆节点以实现无缝滚动
    const children = Array.from(row.children);
    children.forEach(child => {
      row.appendChild(child.cloneNode(true));
    });

    let position = 0;
    let lastTimestamp = 0;
    let isPaused = false;
    let animationFrameId = null;

    function animate(timestamp) {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      if (!isPaused) {
        if (direction === 'left') {
          position -= speed * deltaTime;
          if (Math.abs(position) >= row.scrollWidth / 2) {
            position = 0;
          }
        } else {
          position += speed * deltaTime;
          if (position >= 0) {
            position = -row.scrollWidth / 2;
          }
        }
        row.style.transform = `translateX(${position}px) translateZ(0)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    if (direction === 'right') {
      position = -row.scrollWidth / 2;
      row.style.transform = `translateX(${position}px) translateZ(0)`;
    }

    animationFrameId = requestAnimationFrame(animate);
    row.addEventListener('mouseenter', () => { isPaused = true; });
    row.addEventListener('mouseleave', () => { isPaused = false; });
  }

  setupDynamicScroll('.row-1', SCROLL_SPEED, 'left');
  setupDynamicScroll('.row-2', SCROLL_SPEED, 'right');
});
</script>

<template>
  <router-link to="/press-conference" href="#" class="block">
    <div class="grid-item flex flex-col" style="background-color:#f5f5f7; overflow: hidden;">
      <div class="card-text-overlay">
        <h2 class="text-4xl font-bold">友商发布会</h2>
        <p class="text-xl mt-2">天枢驱动，发布会高效解读</p>
      </div>

      <div style="flex-grow: 1; min-height: 0; display: flex; flex-direction: column; justify-content: center;">
        <div class="scrolling-gallery">
          <div class="gallery-row row-1">
            <img src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/Press_conference/08.25-LUXEED&AITO-cover.webp" alt="placeholder image 1">
            <img src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/Press_conference/08.06-XpengP7-cover.webp" alt="placeholder image 2">
            <img src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/Press_conference/09.08-Deepal-cover.webp" alt="placeholder image 3">
            <img src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/Press_conference/09.26-LiAutoi6-cover.webp" alt="placeholder image 4">
            <img src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/Press_conference/07.24-LeamportB01-cover.webp" alt="placeholder image 5">
          </div>
          <div class="gallery-row row-2">
            <img src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/Press_conference/09.17-DENZAN9-cover.webp" alt="placeholder image A">
            <img src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/Press_conference/09.29-Zeekr9x-cover.webp" alt="placeholder image B">
            <img src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/Press_conference/07.10-LeamportC11-cover.webp" alt="placeholder image C">
            <img src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/Press_conference/09.09-FCBTi7-cover.webp" alt="placeholder image D">
            <img src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/Press_conference/09.16-STELATOS9T-cover.webp" alt="placeholder image E">
          </div>
        </div>
      </div>
      <div class="card-hover-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.scrolling-gallery {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}
.gallery-row {
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  will-change: transform;
}
.gallery-row.row-2 {
  top: 50%;
}
.gallery-row img {
  flex-shrink: 0;
  height: 100%;
  width: auto;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 16px;
}
.card-text-overlay {
  position: relative;
  padding-top: 3rem;
  text-align: center;
  pointer-events: none;
  color: #1d1d1f;
  text-shadow: 0 1px 10px rgba(255, 255, 255, 0.7);
}
</style>