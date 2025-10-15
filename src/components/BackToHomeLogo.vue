<template>
  <router-link to="/" class="logo-button" title="返回主页">
    <img src="/logo.png" alt="返回主页" class="logo-image">
  </router-link>
</template>

<style scoped>
.logo-button {
  /* 定位样式保持不变 */
  position: fixed;
  top: 35px; /* 稍微向下移动一点，视觉上更居中 */
  left: 35px; /* 稍微向右移动一点，视觉上更居中 */
  z-index: 101;

  /* 让点击区域比图片稍大，方便用户点击 */
  width: 40px;
  height: 40px;

  /* 居中图片 */
  display: flex;
  align-items: center;
  justify-content: center;

  /* 【修改一】移除所有背景、边框、阴影等样式 */
  /* background: none; */
  /* backdrop-filter: none; */
  /* border: none; */
  /* box-shadow: none; */

  /* 保留过渡效果，让放大动画更平滑 */
  transition: all 0.3s ease;
}

.logo-button:hover {
  /* 只保留鼠标放上去放大的效果 */
  transform: scale(1.2);
}

.logo-image {
  /* Logo 图片大小保持不变 */
  width: 32px;
  height: 32px;
}
</style>