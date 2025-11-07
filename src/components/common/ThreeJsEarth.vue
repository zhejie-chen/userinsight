<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const mountRef = ref(null);
let renderer, scene, camera, controls;
let animationFrameId = null;
let resizeObserver = null;

onMounted(() => {
  const mountElement = mountRef.value;
  if (!mountElement) return;

  // 1. 场景
  scene = new THREE.Scene();

  // 2. 相机
  camera = new THREE.PerspectiveCamera(75, mountElement.clientWidth / mountElement.clientHeight, 0.1, 1000);
  camera.position.z = 12; // 将相机拉远一点

  // 3. 渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true = 透明背景
  renderer.setSize(mountElement.clientWidth, mountElement.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  mountElement.appendChild(renderer.domElement);

  // 4. 地球几何体 + 材质
  const geometry = new THREE.SphereGeometry(5, 64, 32); // 5 = 半径

  // --- 使用您（用户）的 World.png 贴图！---
  const texture = new THREE.TextureLoader().load('/img/cover-img/World.png');
  texture.colorSpace = THREE.SRGBColorSpace; // 确保颜色正确

  // 使用 MeshPhongMaterial 可以接收光照
  const material = new THREE.MeshPhongMaterial({
    map: texture,
    shininess: 10, // 一点点高光
  });

  const earth = new THREE.Mesh(geometry, material);
  scene.add(earth);

  // 5. 光照 (让地球看起来是3D的)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 环境光
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 3); // 模拟太阳
  directionalLight.position.set(5, 3, 5); // 从侧面照射
  scene.add(directionalLight);

  // 6. 轨道控制器 (实现拖拽和自动旋转)
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // 平滑阻尼
  controls.dampingFactor = 0.05;
  controls.enablePan = false; // 禁止平移
  controls.minDistance = 8;  // 最近距离
  controls.maxDistance = 20; // 最远距离
  controls.autoRotate = true;  // <-- 开启自动旋转！
  controls.autoRotateSpeed = 0.8; // 旋转速度

  // 7. 动画循环 (高性能)
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    controls.update(); // 必须调用
    renderer.render(scene, camera);
  };
  animate();

  // 8. 响应式 (高性能)
  resizeObserver = new ResizeObserver(() => {
    const { clientWidth, clientHeight } = mountElement;
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(clientWidth, clientHeight);
  });
  resizeObserver.observe(mountElement);
});

onUnmounted(() => {
  // 清理所有资源，防止内存泄漏
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  if (resizeObserver) resizeObserver.disconnect();
  if (renderer) renderer.dispose();
  if (controls) controls.dispose();
  scene?.traverse((object) => {
    if (object.geometry) object.geometry.dispose();
    if (object.material) {
      if (Array.isArray(object.material)) {
        object.material.forEach(material => material.dispose());
      } else {
        object.material.dispose();
      }
    }
  });
});
</script>

<template>
  <div ref="mountRef" class="w-full h-full"></div>
</template>