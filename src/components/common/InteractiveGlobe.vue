<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import createGlobe from 'cobe';

const canvasRef = ref(null);
let globe = null;

// 54 个国家/地区坐标 (保持不变)
const locations = [
  [39.9, 116.4], [13.8, 100.5], [-15.8, -47.9], [52.5, 13.4], [19.4, -99.2],
  [24.7, 46.7], [-25.7, 28.2], [30.0, 31.2], [23.6, 58.3], [29.4, 48.0],
  [1.4, 103.8], [3.1, 101.7], [40.4, -3.7], [-6.17, 106.82], [14.59, 120.98],
  [21.03, 105.83], [19.75, 96.11], [-35.29, 149.13], [-41.30, 174.78], [33.74, 73.15],
  [-34.60, -58.38], [-33.43, -70.67], [4.71, -74.07], [-34.88, -56.17], [48.86, 2.35],
  [41.90, 12.48], [38.77, -9.15], [51.51, -0.13], [53.35, -6.26], [50.85, 4.35],
  [52.37, 4.88], [48.21, 16.37], [46.95, 7.45], [49.61, 6.13], [59.35, 18.07],
  [59.91, 10.74], [60.17, 24.94], [55.68, 12.57], [37.97, 23.72], [52.22, 21.03],
  [39.92, 32.85], [55.75, 37.62], [50.09, 14.42], [48.14, 17.11], [47.50, 19.05],
  [44.42, 26.10], [45.81, 15.98], [46.05, 14.51], [42.70, 23.33], [51.13, 71.43],
  [50.45, 30.52], [59.42, 24.75], [31.78, 35.22], [24.47, 54.37]
];

const isHovering = ref(false);

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  // 动画状态
  let currentPhi = 0;
  let currentTheta = 0.15;
  let currentSpeed = 0.003;
  let currentBrightness = 2;

  // 悬停交互配置
  const autoRotateSpeed = 0.003;
  const hoverBrightness = 5;

  globe = createGlobe(canvas, {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0.15,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 2,
    baseColor: [0.1, 0.3, 0.6],
    markerColor: [0.5, 0.8, 1],
    glowColor: [0.2, 0.5, 1],
    scale: 2.2,
    markers: locations.map(loc => ({ location: loc, size: 0.05 })),

    onRender: (state) => {
      // 1. 响应式尺寸
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width * dpr;
      const height = rect.height * dpr;

      if (Math.abs(state.width - width) > 1 || Math.abs(state.height - height) > 1) {
        state.width = width;
        state.height = height;
      }

      // 2. 定位算法微调
      // Offset X: 保持靠左 (0.35)
      // Offset Y: 显著下移 (0.4)。数值越大，地球仪中心越靠下，露出的部分越少。
      // 0.2 -> 0.4 的变化会让它看起来明显"沉"下去。
      state.offset = [(height * 0.35) - (width / 2), height * 0.4];

      // 3. 缓动交互
      const targetSpeed = isHovering.value ? 0 : autoRotateSpeed;
      const targetBrightnessVal = isHovering.value ? hoverBrightness : 2;
      const easing = 0.05;

      currentSpeed += (targetSpeed - currentSpeed) * easing;
      currentBrightness += (targetBrightnessVal - currentBrightness) * easing;

      state.mapBrightness = currentBrightness;

      // 4. 旋转
      currentPhi += currentSpeed;
      state.phi = currentPhi;
      state.theta = currentTheta;
    }
  });
});

onUnmounted(() => {
  if (globe) {
    globe.destroy();
    globe = null;
  }
});

const handleMouseEnter = () => {
  isHovering.value = true;
};

const handleMouseLeave = () => {
  isHovering.value = false;
};
</script>

<template>
  <canvas
      ref="canvasRef"
      class="w-full h-full cursor-pointer transition-opacity duration-700 ease-in"
      style="display: block; opacity: 0; animation: fadeIn 1s forwards;"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
  ></canvas>
</template>

<style>
@keyframes fadeIn {
  to { opacity: 1; }
}
</style>