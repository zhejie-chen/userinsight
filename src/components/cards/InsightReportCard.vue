<script setup>
/* <script setup> 部分与上一版完全相同。
  我们保留了 imagePool 和 getColumnImages 的所有逻辑。
*/
const imagePool = [
  'https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/insight_report/Automobile_industry_insight_report-1.webp',
  'https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/insight_report/german%20weekly%20report-2cover.webp',
  'https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/insight_report/german%20weekly%20report-3cover.webp',
  'https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/insight_report/german%20weekly%20report-4cover.webp',
  'https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/insight_report/german%20weekly%20report-5cover.webp',
  'https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/insight_report/overseas_sales_report_July.webp',
  'https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/insight_report/xiaomi_carlife-cover.webp',
  'https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/insight_report/thailand%20weekly%20report-2cover.webp',
  'https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/insight_report/thailand%20weekly%20report-3cover.webp',
  'https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/insight_report/thailand%20weekly%20report-4cover.webp',
  'https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/insight_report/thailand%20weekly%20report-5cover.webp',
  'https://advawhgwgzkydiubzzjb.supabase.co/storage/v1/object/public/insight_report/overseas_sales_report_Sep-cover.webp',

];

const getColumnImages = (count) => {
  const images = [];
  let lastIndex = -1; // 1. 记录上一张图片的索引

  // 2. 重新添加了 for 循环，以生成 'count' (8) 张图片
  for (let i = 0; i < count; i++) {
    let newIndex;

    if (imagePool.length > 1) {
      do {
        newIndex = Math.floor(Math.random() * imagePool.length);
      } while (newIndex === lastIndex);
    } else {
      newIndex = 0;
    }

    images.push(imagePool[newIndex]);
    lastIndex = newIndex; // 3. 更新 "上一张" 索引
  }

  // 4. 将 return 语句移到循环之后
  return images;
};

// columns 的生成逻辑保持不变
const columns = [
  getColumnImages(8), // 第 1 列
  getColumnImages(8), // 第 2 列
  getColumnImages(8), // 第 3 列
  getColumnImages(8), // 第 4 列
  getColumnImages(8), // 第 5 列
  getColumnImages(8), // 第 6 列
];
</script>

<template>
  <router-link to="/report/overseas" class="block">
    <div class="grid-item relative flex flex-col items-center pt-12 text-center" style="background-color:#ffffff; overflow: hidden;">

      <div class="background-container">
        <div class="image-columns-wrapper">

          <div
              v-for="(images, colIndex) in columns"
              :key="colIndex"
              class="image-column"
          >
            <img
                v-for="(src, imgIndex) in images"
                :key="imgIndex"
                :src="src"
                class="image-item"
                alt="Report Cover"
            />
          </div>

        </div>
      </div>

      <div class="relative z-10">
        <h2 class="text-4xl font-bold">洞察报告</h2>
        <p class="text-xl mt-2">用户洞察团队倾力打造</p>
      </div>

      <div class="card-hover-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
/* --- <style> (微调渐变) --- */

.grid-item::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 6; /* 位于背景(z-5)和文字(z-10)之间 */

  /* 【微调】
    让渐变在 45% 的位置就完全透明,
    让图片更早显示出来
  */
  background: linear-gradient(
      to bottom,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 50%
  );

  pointer-events: none;
}

.background-container {
  position: absolute;
  inset: 0;
  z-index: 5; /* 背景在 z-5 */
  overflow: hidden;
  transform: rotate(-deg) scale(1.3);
}

/* --- 布局 CSS (保持不变) --- */
.image-columns-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 1rem;
}

.image-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image-column:nth-child(even) {
  margin-top: 3rem;
}
/* --- 布局 CSS 结束 --- */


/* --- 交互 CSS (保持不变) --- */
.image-item {
  width: 100%;
  aspect-ratio: 1068 / 455;
  object-fit: cover;
  border-radius: 8px;

  /* 默认状态: "半清晰" (blur 1px, opacity 0.7) */
  opacity: 0.7;
  filter: blur(1px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transform: scale(1);

  /* 非线性动画 */
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
  filter 0.3s cubic-bezier(0.4, 0, 0.2, 1),
  opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
  box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 悬停图片状态: "全清晰" + "弹出" */
.image-item:hover {
  opacity: 1;
  filter: blur(0);
  transform: scale(1.1);
  z-index: 10;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
</style>