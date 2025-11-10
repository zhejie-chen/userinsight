<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import createGlobe from 'cobe';

const canvasRef = ref(null);
let globe = null;
let animationFrameId = null;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  // --- 修复 2 (尺寸/居中):
  // 使用固定的 16:9 高清分辨率。CSS 会自动缩放它。
  const globeWidth = 1600;
  const globeHeight = 900;

  let currentTheta = 0.1; // --- 修复 1 (动画): 使用本地变量
  let currentPhi = 0;
  let targetPhi = 0;
  let targetTheta = 0.1;

  globe = createGlobe(canvas, {
    devicePixelRatio: 1, // 使用 1x 像素比，因为我们手动设置了高分辨率
    width: globeWidth,
    height: globeHeight,
    phi: 0,
    theta: 0.1,

    // --- 修复 3 (颜色): 改为蓝色主题 ---
    dark: 1, // 1 = 深色主题
    diffuse: 1.2,
    mapSamples: 20000,
    mapBrightness: 2, // 调低亮度以适应深色背景
    baseColor: [0.1, 0.3, 0.6], // 深蓝色大陆
    markerColor: [0.5, 0.8, 1], // 亮蓝色标记
    glowColor: [0.2, 0.5, 1],   // 蓝色辉光

    markers: [
      ...Array(52).fill().map(() => ({
        location: [
          Math.random() * 180 - 90,
          Math.random() * 360 - 180
        ],
        size: 0.05
      }))
    ],
    // 鼠标拖拽交互 (虽然我们禁用了点击，但逻辑保留)
    onRender: (state) => {
      // 缓动效果
      targetTheta = currentTheta; // 自动旋转

      state.phi = currentPhi;
      state.theta = currentTheta;
    }
  });

  // --- 修复 1 (动画): 使用更健壮的循环 ---
  const autoRotate = () => {
    if (globe) {
      currentTheta += 0.003; // 持续增加角度
    }
    animationFrameId = requestAnimationFrame(autoRotate);
  };

  autoRotate();
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  if (globe) {
    globe.destroy();
  }
});
</script>

<template>
  <canvas
      ref="canvasRef"
      class="w-full h-full"
  ></canvas>
</template>