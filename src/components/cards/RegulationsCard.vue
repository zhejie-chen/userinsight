<script setup>
import { ref, onMounted } from 'vue';

const interactiveCard = ref(null);
const card3d = ref(null);

onMounted(() => {
  if (interactiveCard.value && card3d.value) {
    const initialTransform = 'rotateX(20deg) rotateY(0deg)';
    card3d.value.style.transform = initialTransform;

    interactiveCard.value.addEventListener('mousemove', (e) => {
      const rect = interactiveCard.value.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      const rotateY = deltaX * -15;
      const rotateX = deltaY * 15;
      card3d.value.style.transition = 'transform 0.1s ease-out';
      card3d.value.style.transform = `rotateX(${20 + rotateX}deg) rotateY(${rotateY}deg)`;
    });

    interactiveCard.value.addEventListener('mouseleave', () => {
      card3d.value.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
      card3d.value.style.transform = initialTransform;
    });
  }
});
</script>

<template>
  <router-link to="/regulation" class="block">
    <div ref="interactiveCard" class="grid-item relative flex flex-col items-center pt-12 text-center overflow-hidden" style="background-color:#e0f2f7;">
      <svg class="background-wave" viewBox="0 0 1440 320">
        <path d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,208C840,203,960,155,1080,149.3C1200,144,1320,171,1380,184L1440,197L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <div class="relative z-20">
        <h2 class="text-4xl font-bold">海外法规</h2>
        <p class="text-xl mt-2">对标海外智能化法规项</p>
      </div>
      <div class="absolute inset-0 flex items-center justify-center layered-card-container z-10 translate-y-12">
        <div class="scene">
          <div ref="card3d" class="card3d">
            <div class="layer layer-bg"></div>
            <div class="layer layer-mid"></div>
            <div class="layer layer-top">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
            </div>
            <div class="layer-text">法规</div>
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
.grid-item {
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="%231d1d1f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>'), auto;
}
.layered-card-container { perspective: 1000px; }
.scene { width: 160px; height: 208px; position: relative; }
@media (min-width: 768px) { .scene { width: 220px; height: 280px; } }
.card3d {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(20deg) rotateY(0deg);
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.layer {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-sizing: border-box;
}
.layer-bg {
  background: rgba(255, 255, 255, 0.4);
  transform: translateZ(0px) translateX(15px) translateY(10px);
  backdrop-filter: blur(10px) saturate(180%);
}
.layer-mid {
  background: rgba(255, 255, 255, 0.35);
  transform: translateZ(30px) translateX(0px) translateY(-5px);
  backdrop-filter: blur(14px) saturate(180%);
}
.layer-top {
  background: rgba(255, 255, 255, 0.3);
  transform: translateZ(60px) translateX(-15px) translateY(-20px);
  backdrop-filter: blur(18px) saturate(180%);
}
.layer-text {
  position: absolute; top: 50%; left: 50%; color: #1d1d1f; font-size: 1.1rem; font-weight: 500; text-shadow: 0 1px 5px rgba(255,255,255,0.5);
  transform: translateY(-50%) translateX(-50%) translateX(-15px) translateY(40px) translateZ(100px);
}
.background-wave { position: absolute; bottom: 0; left: 0; width: 100%; height: auto; z-index: 0; opacity: 0.3; fill: #a7d9f7; }
</style>