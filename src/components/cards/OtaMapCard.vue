<template>
  <a href="#" class="block">
    <div class="grid-item relative flex flex-col items-center pt-12 text-center overflow-hidden" style="background-color:#ffffff;">
      <div class="relative z-10">
        <h2 class="text-4xl font-bold">OTA地图</h2>
        <p class="text-xl mt-2">170+款车型，持续追踪系统更新</p>
      </div>
      <div class="ota-card-animation-wrapper absolute inset-0 flex items-center justify-center">
        <div class="ota-card-animation relative w-[60%] h-[60%]">
          <div class="ota-card-rect ota-card-rect-1"></div>
          <div class="ota-card-rect ota-card-rect-2"></div>
          <div class="ota-card-rect ota-card-rect-3"></div>
        </div>
      </div>
      <div class="card-hover-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </div>
    </div>
  </a>
</template>

<style scoped>
.ota-card-animation-wrapper {
  perspective: 1200px;
}
.ota-card-animation {
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: scale(0.8) rotateY(-25deg) rotateX(15deg);
}
.ota-card-rect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: top left;
}
.ota-card-rect-1 {
  background-color: #e5e7eb;
  transform: translateX(-30%) translateZ(-60px) rotateZ(10deg);
}
.ota-card-rect-2 {
  background-color: #fca5a5;
  transform: translateZ(0) rotateZ(5deg);
}
.ota-card-rect-3 {
  background-color: #ef4444;
  transform: translateX(30%) translateZ(60px);
}
a:hover .ota-card-animation {
  transform: scale(0.85) rotateY(-15deg) rotateX(10deg);
}
a:hover .ota-card-rect-1 {
  transform: translateX(-45%) translateZ(-80px) rotateY(5deg) rotateZ(10deg);
}
a:hover .ota-card-rect-2 {
  transform: translateZ(0) rotateZ(5deg);
}
a:hover .ota-card-rect-3 {
  transform: translateX(45%) translateZ(80px) rotateY(-5deg);
}
</style>