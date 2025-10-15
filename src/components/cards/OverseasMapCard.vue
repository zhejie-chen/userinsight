<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const dotMapCardEl = ref(null); // 这个 ref 现在指向 router-link 组件实例
const container = ref(null);
const svgContainer = ref(null);

let dots = [];
let dotsWithPositions = [];

const handleMouseMove = (e) => {
  // 【已修复】通过 .value.$el 来获取真实的 DOM 元素
  if (!dotMapCardEl.value || !dotMapCardEl.value.$el) return;
  const rect = dotMapCardEl.value.$el.getBoundingClientRect(); // 使用 .$el

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const maxEffectDistance = rect.width * 0.35;

  dotsWithPositions.forEach(dotInfo => {
    if (dotInfo.element.classList.contains('is-land')) {
      const distance = Math.sqrt(Math.pow(mouseX - dotInfo.x, 2) + Math.pow(mouseY - dotInfo.y, 2));
      const scale = Math.max(0, 1 - distance / maxEffectDistance);
      dotInfo.element.style.transform = `scale(${1 + scale * 2.5})`;
      if (dotInfo.element.classList.contains('is-poi')) {
        const r = 245 + Math.round(scale * 10), g = 158 + Math.round(scale * 33), b = 11 + Math.round(scale * 25);
        dotInfo.element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      } else {
        const r=0, g=113 + Math.round(scale*50), b=227 + Math.round(scale*28);
        dotInfo.element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
    }
  });
};

const handleMouseLeave = () => {
  dots.forEach(dot => {
    if (dot.classList.contains('is-land')) {
      dot.style.transform = 'scale(1)';
      dot.style.backgroundColor = '';
    }
  });
};


onMounted(() => {
  if (dotMapCardEl.value.$el && container.value && svgContainer.value) { // 使用 .$el
    const COLUMNS = 34;
    const ROWS = 19;
    const mapData = [
      [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1],[0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,0,1,0],[0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0],[0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,2,1,1,0,1,1,1,1,3,1,1,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],[1,0,0,0,0,0,2,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,2,0,1,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0],[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];

    for (let i = 0; i < COLUMNS * ROWS; i++) {
      const row = Math.floor(i / COLUMNS);
      const col = i % COLUMNS;
      const dot = document.createElement('div');
      dot.classList.add('dot');
      const mapValue = mapData[row][col];
      if (mapValue === 1) { dot.classList.add('is-land'); }
      else if (mapValue === 2 || mapValue === 3) {
        dot.classList.add('is-land', 'is-poi');
        if (mapValue === 3) { dot.classList.add('is-origin'); }
      }
      container.value.appendChild(dot);
      dots.push(dot);
    }

    function calculateAndDraw() {
      if (!dotMapCardEl.value || !dotMapCardEl.value.$el) return;
      const cardRect = dotMapCardEl.value.$el.getBoundingClientRect(); // 使用 .$el
      dotsWithPositions = dots.map(dot => {
        const dotRect = dot.getBoundingClientRect();
        return { element: dot, x: dotRect.left - cardRect.left + dotRect.width / 2, y: dotRect.top - cardRect.top + dotRect.height / 2 };
      });
      drawFlightPaths();
    }
    function drawFlightPaths() {
      if (!svgContainer.value) return;
      svgContainer.value.innerHTML = '';
      const origin = dotsWithPositions.find(d => d.element.classList.contains('is-origin'));
      const destinations = dotsWithPositions.filter(d => d.element.classList.contains('is-poi') && !d.element.classList.contains('is-origin'));
      if (!origin || destinations.length === 0) return;
      destinations.forEach((dest, index) => {
        const x1 = origin.x, y1 = origin.y;
        const x2 = dest.x, y2 = dest.y;
        const midX = (x1 + x2) / 2, midY = (y1 + y2) / 2;
        const dx = x2 - x1, dy = y2 - y1;
        const distance = Math.sqrt(dx*dx + dy*dy);
        const controlPointOffset = distance * 0.25;
        const controlX = midX - dy / distance * controlPointOffset;
        const controlY = midY + dx / distance * controlPointOffset;
        const pathD = `M${x1},${y1} Q${controlX},${controlY} ${x2},${y2}`;
        const ns = 'http://www.w3.org/2000/svg';
        const arc = document.createElementNS(ns, 'path');
        arc.setAttribute('d', pathD);
        arc.classList.add('flight-arc');
        svgContainer.value.appendChild(arc);
        const airplane = document.createElementNS(ns, 'circle');
        airplane.setAttribute('r', '2.5');
        airplane.classList.add('airplane');
        airplane.style.offsetPath = `path('${pathD}')`;
        airplane.style.animation = `fly 4s linear infinite`;
        airplane.style.animationDelay = `${index * 0.5}s`;
        svgContainer.value.appendChild(airplane);
      });
    }

    calculateAndDraw();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(calculateAndDraw, 250);
    };

    window.addEventListener('resize', handleResize);
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });
  }
});
</script>

<template>
  <router-link
      to="/osmap"
      ref="dotMapCardEl"
      class="block dot-map-card"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
  >
    <div class="grid-item flex flex-col pt-12" style="background-color:#f5f5f7;">
      <div ref="container" class="dot-map-container"></div>
      <svg ref="svgContainer" id="flight-paths-svg"></svg>
      <div class="relative z-10 pointer-events-none">
        <h2 class="text-4xl font-bold">出海地图</h2>
        <p class="text-xl mt-2">海外竞争态势洞察</p>
      </div>
      <div class="card-hover-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </div>
    </div>
  </router-link>
</template>

<style>
.dot-map-card .grid-item { justify-content: flex-start; align-items: center; text-align: center; overflow: hidden; }
.dot-map-container { position: absolute; top: 58%; left: 50%; transform: translate(-50%, -50%); width: 95%; aspect-ratio: 34 / 19; display: grid; grid-template-columns: repeat(34, 1fr); grid-template-rows: repeat(19, 1fr); place-items: center; z-index: 0; }
.dot { width: 4px; height: 4px; background-color: #d1d5db; border-radius: 50%; opacity: 0; transition: transform 0.2s ease-out, background-color 0.2s ease-out, opacity 0.2s ease-out; }
.dot.is-land { opacity: 1; background-color: #0071e3; }
.dot.is-poi { background-color: #f59e0b; width: 6px; height: 6px; }
#flight-paths-svg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; overflow: visible; }
.flight-arc { fill: none; stroke: #f59e0b; stroke-width: 1; stroke-dasharray: 3 5; stroke-linecap: round; }
.airplane { fill: white; stroke: #f59e0b; stroke-width: 1.5; }
@keyframes fly { from { offset-distance: 0%; } to { offset-distance: 100%; } }
</style>