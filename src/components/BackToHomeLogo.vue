<template>
  <router-link to="/" class="logo-button" title="返回主页">
    <img src="/logo.png" alt="返回主页" class="logo-image">
  </router-link>
</template>

<style scoped>
.logo-button {
  /* 【核心修改】移除 fixed 定位，改为相对定位，占据父容器 100% 空间 */
  position: relative;
  width: 100%;
  height: 100%;
  
  /* 移除 top, left, z-index，将控制权交还给父组件 */
  /* top: 35px; */
  /* left: 35px; */
  /* z-index: 101; */

  /* 居中图片 */
  display: flex;
  align-items: center;
  justify-content: center;

  /* 保持平滑过渡 */
  transition: all 0.3s ease;
  
  /* 确保无默认背景干扰 */
  background: transparent;
}

.logo-button:hover {
  /* 鼠标放上去稍微放大 */
  transform: scale(1.1);
}

.logo-image {
  /* 图片大小适配容器，保持比例 */
  width: 28px;
  height: 28px;
  object-fit: contain;
  display: block;
}
</style>