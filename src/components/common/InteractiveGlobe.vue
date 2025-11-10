<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import createGlobe from 'cobe';

const canvasRef = ref(null);
let globe = null;
let animationFrameId = null;

// --- 步骤 1 (亮点):
// 更新后的 54 个国家/地区坐标
const locations = [
  // 原始13国 (部分已在下面列表中)
  [39.9, 116.4], // 中国 (北京)
  [13.8, 100.5], // 泰国 (曼谷)
  [-15.8, -47.9], // 巴西 (巴西利亚)
  [52.5, 13.4], // 德国 (柏林)
  [19.4, -99.2], // 墨西哥 (墨西哥城)
  [24.7, 46.7], // 沙特阿拉伯 (利雅得)
  [-25.7, 28.2], // 南非 (比勒陀利亚)
  [30.0, 31.2], // 埃及 (开罗)
  [23.6, 58.3], // 阿曼 (马斯喀特)
  [29.4, 48.0], // 科威特 (科威特城)
  [1.4, 103.8], // 新加坡
  [3.1, 101.7], // 马来西亚 (吉隆坡)
  [40.4, -3.7], // 西班牙 (马德里)

  // 新增 - Southeast Asia
  [-6.17, 106.82], // 印度尼西亚 (雅加达)
  [14.59, 120.98], // 菲律宾 (马尼拉)
  [21.03, 105.83], // 越南 (河内)
  [19.75, 96.11], // 缅甸 (内比都)
  [-35.29, 149.13], // 澳大利亚 (堪培拉)
  [-41.30, 174.78], // 新西兰 (惠灵顿)
  [33.74, 73.15], // 巴基斯坦 (伊斯兰堡)

  // 新增 - Latin America
  [-34.60, -58.38], // 阿根廷 (布宜诺斯艾利斯)
  [-33.43, -70.67], // 智利 (圣地亚哥)
  [4.71, -74.07], // 哥伦比亚 (波哥大)
  [-34.88, -56.17], // 乌拉圭 (蒙得维的亚)

  // 新增 - Europe
  [48.86, 2.35], // 法国 (巴黎)
  [41.90, 12.48], // 意大利 (罗马)
  [38.77, -9.15], // 葡萄牙 (里斯本)
  [51.51, -0.13], // 英国 (伦敦)
  [53.35, -6.26], // 爱尔兰 (都柏林)
  [50.85, 4.35], // 比利时 (布鲁塞尔)
  [52.37, 4.88], // 荷兰 (阿姆斯特丹)
  [48.21, 16.37], // 奥地利 (维也纳)
  [46.95, 7.45], // 瑞士 (伯尔尼)
  [49.61, 6.13], // 卢森堡
  [59.35, 18.07], // 瑞典 (斯德哥尔摩)
  [59.91, 10.74], // 挪威 (奥斯陆)
  [60.17, 24.94], // 芬兰 (赫尔辛基)
  [55.68, 12.57], // 丹麦 (哥本哈根)
  [37.97, 23.72], // 希腊 (雅典)
  [52.22, 21.03], // 波兰 (华沙)
  [39.92, 32.85], // 土耳其 (安卡拉)

  // 新增 - CIS
  [55.75, 37.62], // 俄罗斯 (莫斯科)
  [50.09, 14.42], // 捷克 (布拉格)
  [48.14, 17.11], // 斯洛伐克 (布拉迪斯拉发)
  [47.50, 19.05], // 匈牙利 (布达佩斯)
  [44.42, 26.10], // 罗马尼亚 (布加勒斯特)
  [45.81, 15.98], // 克罗地亚 (萨格勒布)
  [46.05, 14.51], // 斯洛文尼亚 (卢布尔雅那)
  [42.70, 23.33], // 保加利亚 (索非亚)
  [51.13, 71.43], // 哈萨克斯坦 (阿斯塔纳)
  [50.45, 30.52], // 乌克兰 (基辅)
  [59.42, 24.75], // 爱沙尼亚 (塔林)

  // 新增 - Middle East Africa
  [31.78, 35.22], // 以色列 (耶路撒冷)
  [24.47, 54.37]  // 阿联酋 (阿布扎比)
];


onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  let currentTheta = 0.1; // 保持一个固定的 "自转" 角度
  let currentPhi = 0;   // 我们将动画这个值 (用于"横着转")

  globe = createGlobe(canvas, {
    phi: 0,
    theta: 0.1,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 20000,
    mapBrightness: 2,
    baseColor: [0.1, 0.3, 0.6],
    markerColor: [0.5, 0.8, 1],
    glowColor: [0.2, 0.5, 1],
    scale: 2.5, // 保持缩放

    // --- 步骤 1 (亮点):
    // 映射所有 54 个坐标
    markers: locations.map(loc => ({
      location: loc,
      size: 0.05 // 保持大小不变
    })),

    onRender: (state) => {
      // 动态尺寸调整 (保持不变)
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const width = Math.round(rect.width * dpr);
      const height = Math.round(rect.height * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      state.width = width;
      state.height = height;
      state.devicePixelRatio = dpr;

      // 更新动画状态 (保持不变)
      state.phi = currentPhi;
      state.theta = currentTheta;

      // 定位到左下角 (保持不变)
      state.offset = [-width * 0.25, height * 0.25];
    }
  });

  // "横着旋转" (保持不变)
  const autoRotate = () => {
    if (globe) {
      currentPhi += 0.003;
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
      style="display: block;"
  ></canvas>
</template>