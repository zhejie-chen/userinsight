<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import createGlobe from 'cobe';

const canvasRef = ref(null);
let globe = null;
let animationFrameId = null;

// --- 步骤 1 (修复):
// 只保留悬停状态，移除拖拽(isDragging)和光标(cursorStyle)
const isPaused = ref(false); // 鼠标是否悬停

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

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  // 旋转和视觉的当前值与目标值
  let currentPhi = 0;
  let currentTheta = 0.1; // 保持固定的Y轴角度

  let currentSpeed = 0.003;
  let targetSpeed = 0.003;

  let currentBrightness = 2;
  let targetBrightness = 2;

  let currentDiffuse = 1.2;
  let targetDiffuse = 1.2;

  const autoRotateSpeed = 0.003; // 基础自动旋转速度
  const easingFactor = 0.05; // 缓动因子

  globe = createGlobe(canvas, {
    // 基础设置 (保持不变)
    phi: 0,
    theta: 0.1,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 20000,
    mapBrightness: 2,
    baseColor: [0.1, 0.3, 0.6],
    markerColor: [0.5, 0.8, 1],
    glowColor: [0.2, 0.5, 1],
    scale: 2.5,
    markers: locations.map(loc => ({ location: loc, size: 0.05 })),

    onRender: (state) => {
      // 动态尺寸调整 (保持不变, 确保地球仪始终可见)
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const width = Math.round(rect.width * dpr);
      const height = Math.round(rect.height * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width; canvas.height = height;
      }
      state.width = width; state.height = height; state.devicePixelRatio = dpr;

      // "醒目交互" (保持不变)
      // A. 设置缓动目标
      if (isPaused.value) { // 鼠标悬停时
        targetSpeed = 0;
        targetBrightness = 10; // 变亮
        targetDiffuse = 2.0;   // 增加光泽
      } else { // 鼠标离开时
        targetSpeed = autoRotateSpeed;
        targetBrightness = 2; // 恢复
        targetDiffuse = 1.2;  // 恢复
      }

      // B. 平滑地应用缓动 (保持不变)
      currentSpeed += (targetSpeed - currentSpeed) * (easingFactor * 2);
      currentBrightness += (targetBrightness - currentBrightness) * easingFactor;
      currentDiffuse += (targetDiffuse - currentDiffuse) * easingFactor;

      // C. 将缓动值应用到地球仪 (保持不变)
      state.mapBrightness = currentBrightness;
      state.diffuse = currentDiffuse;

      // --- 步骤 1 (修复):
      // 移除 isDragging 逻辑，始终应用自动旋转
      currentPhi += currentSpeed;
      state.phi = currentPhi;
      state.theta = currentTheta;

      // 定位到左下角 (保持不变)
      state.offset = [-width * 0.25, height * 0.25];
    }
  });
});

onUnmounted(() => {
  if (globe) {
    globe.destroy();
    globe = null;
  }
});

// --- 步骤 1 (修复):
// 简化事件处理函数
const handleMouseEnter = () => {
  isPaused.value = true;
};

const handleMouseLeave = () => {
  isPaused.value = false;
};

// (移除了 handleMouseDown 和 handleMouseUp)
</script>

<template>
  <canvas
      ref="canvasRef"
      class="w-full h-full"
      style="display: block;"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
  ></canvas>
</template>