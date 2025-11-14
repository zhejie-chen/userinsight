<script setup>
import { onMounted, ref } from 'vue';

const layeredCardContainer = ref(null);

onMounted(() => {
  // 为层叠卡片设置背景图片
  const imageItems = layeredCardContainer.value.querySelectorAll('.layered-item');
  imageItems.forEach(item => {
    const imageUrl = item.getAttribute('data-src');

    if (imageUrl) {
      item.style.backgroundImage = `url('${imageUrl}')`;
    }
  });

  // 为每个卡片独立添加悬停交互 (这部分保持不变)
  if (layeredCardContainer.value) {
    const layeredItems = layeredCardContainer.value.querySelectorAll('.layered-item');

    layeredItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.classList.add('is-hovered');
      });
      item.addEventListener('mouseleave', () => {
        item.classList.remove('is-hovered');
      });
    });
  }
});
</script>

<template>
  <router-link to="/sales-guide" class="block">
    <div class="grid-item relative flex flex-col items-center pt-12 text-center" style="background-color:#ffffff; overflow: hidden;">
      <div class="relative z-10">
        <h2 class="text-4xl font-bold">海外销量</h2>
        <p class="text-xl mt-2">借助强大的CAnswer，主要市场销量一屏洞察</p>
      </div>

      <div class="layered-column-perspective">
        <div ref="layeredCardContainer" class="layered-column-container">
          <div class="layered-item" data-src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/cover/3thcard-germany.webp"></div>
          <div class="layered-item" data-src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/cover/3thcard-thailand.webp"></div>
          <div class="layered-item" data-src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/cover/3thcard-brazil.webp"></div>
          <div class="layered-item" data-src="https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/cover/3thcard-cover.webp"></div>
        </div>
      </div>

      <div class="card-hover-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
/* <style> 部分保持不变
*/
.layered-column-perspective {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  z-index: 5;
  transform: rotateX(15deg) rotateY(15deg) translateZ(-50px);
}
.layered-column-container {
  position: relative;
  width: 280px;
  height: 180px;
  transform-style: preserve-3d;
  transform: translateX(-40px) translateY(90px);
}
@media (min-width: 768px) and (max-width: 1023px) {
  .layered-column-container { transform: translateX(-40px) translateY(90px) scale(0.85); }
}
@media (min-width: 1024px) and (max-width: 1280px) {
  .layered-column-container { transform: translateX(-40px) translateY(90px) scale(0.75); }
}
.layered-item {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  transform-origin: center center;
  backface-visibility: hidden;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  background-size: cover;
  background-position: center;
}

/* 初始状态 */
.layered-item:nth-child(1) {
  z-index: 4;
  top: 0;
  left: 0;
  transform: rotateX(-5deg) rotateY(-10deg) skewY(5deg) translateZ(0);
}
.layered-item:nth-child(2) {
  z-index: 3;
  transform: rotateX(-5deg) rotateY(-10deg) skewY(5deg) translateX(35px) translateY(-35px) translateZ(-20px);
}
.layered-item:nth-child(3) {
  z-index: 2;
  transform: rotateX(-5deg) rotateY(-10deg) skewY(5deg) translateX(70px) translateY(-70px) translateZ(-40px);
}
.layered-item:nth-child(4) {
  z-index: 1;
  transform: rotateX(-5deg) rotateY(-10deg) skewY(5deg) translateX(105px) translateY(-105px) translateZ(-60px);
}

/* 悬停状态 */
.layered-item:nth-child(1).is-hovered {
  transform: rotateX(-5deg) rotateY(-10deg) skewY(5deg) translateZ(0) translateY(-20px);
}
.layered-item:nth-child(2).is-hovered {
  transform: rotateX(-5deg) rotateY(-10deg) skewY(5deg) translateX(35px) translateY(-55px) translateZ(-20px);
}
.layered-item:nth-child(3).is-hovered {
  transform: rotateX(-5deg) rotateY(-10deg) skewY(5deg) translateX(70px) translateY(-90px) translateZ(-40px);
}
.layered-item:nth-child(4).is-hovered {
  transform: rotateX(-5deg) rotateY(-10deg) skewY(5deg) translateX(105px) translateY(-125px) translateZ(-60px);
}
</style>