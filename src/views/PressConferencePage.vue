<template>
  <main id="main-content" class="pt-11 bg-gray-100 min-h-screen">
    <div class="main-layout">
      <div class="left-panel">
        <div class="fixed-image-wrapper">
          <img
              src="/img/cover-press-conference/乐道L90上市发布会-头图.png"
              alt="Upcoming Conference Teaser"
              class="teaser-image"
          />
        </div>
      </div>

      <div class="right-panel">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="page-header mb-12">
            <h1 class="text-4xl font-bold text-gray-800">新车发布会</h1>
          </div>

          <div class="timeline-container space-y-16">
            <div
                v-for="(group, month) in groupedConferences"
                :key="month"
                class="month-group"
            >
              <div class="month-divider">
                <span class="month-text">{{ month }}</span>
              </div>

              <div
                  class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                <div
                    v-for="conference in group"
                    :key="conference.id"
                    class="conference-card bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div class="relative" style="padding-bottom: 42.6%">
                    <img
                        :src="conference.image"
                        :alt="conference.title"
                        class="absolute h-full w-full object-cover"
                    />
                  </div>
                  <div class="p-5">
                    <h3 class="text-lg font-bold text-gray-800 mb-2">
                      {{ conference.title }}
                    </h3>
                    <p class="text-gray-600 text-sm h-14 overflow-hidden mb-4">
                      {{ conference.description }}
                    </p>
                    <div
                        class="card-meta flex justify-between items-center text-xs text-gray-500"
                    >
                      <span>{{ conference.date }}</span>
                      <span>主讲人: {{ conference.personnel }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const conferences = ref([
  {
    id: 1,
    title: '乐道L90上市发布会',
    description:
        '全新乐道L90，智能电动新标杆，开启未来出行新篇章。创新科技，卓越性能，邀您共同见证。',
    image: '/img/cover-press-conference/乐道L90上市发布会-头图.png',
    date: '2025-05-15',
    personnel: '艾铁成'
  },
  {
    id: 2,
    title: '全新小鹏P7上市发布会',
    description:
        '见证全新小鹏P7的非凡魅力，智能轿跑新定义。集优雅设计与前沿科技于一身，带来极致驾驶体验。',
    image: '/img/cover-press-conference/全新小鹏P7上市发布会-头图.png',
    date: '2025-05-20',
    personnel: '何小鹏'
  },
  {
    id: 3,
    title: '极氪9X技术发布会',
    description:
        '极氪9X，颠覆性技术震撼发布。探索未来出行新可能，体验前所未有的智能与性能，开启新纪元。',
    image: '/img/cover-press-conference/极氪9X技术发布会.png',
    date: '2025-04-22',
    personnel: '安聪慧'
  },
  {
    id: 4,
    title: '深蓝L07P7亮相发布会',
    description:
        '深蓝L07P7，双子星闪耀登场。设计美学与智能科技的完美融合， redefine 您的驾驶想象。',
    image: '/img/cover-press-conference/深蓝L07P7亮相发布会-头图.png',
    date: '2025-04-18',
    personnel: '邓承浩'
  },
  {
    id: 5,
    title: '理想i8上市发布会',
    description:
        '理想i8，为家庭打造的智能旗舰SUV。更大空间，更强智能，更舒适的驾乘体验，幸福出行再升级。',
    image: '/img/cover-press-conference/理想i8上市发布会-头图.png',
    date: '2025-03-11',
    personnel: '李想'
  },
  {
    id: 6,
    title: '零跑B01上市发布会',
    description:
        '零跑B01，开启智能纯电新纪元。越级配置，亲民价格，让豪华体验触手可及，期待您的莅临。',
    image: '/img/cover-press-conference/零跑B01上市发布会-头图.png',
    date: '2025-03-25',
    personnel: '朱江明'
  }
])

const groupedConferences = computed(() => {
  const sorted = [...conferences.value].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
  )
  return sorted.reduce((acc, conference) => {
    const date = new Date(conference.date)
    const year = date.getFullYear()
    const month = date.toLocaleString('zh-CN', { month: 'long' })
    const key = `${year}年 ${month}`

    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(conference)
    return acc
  }, {})
})
</script>

<style scoped>
/* Main Layout */
.main-layout {
  display: flex;
}

/* Left Fixed Panel */
.left-panel {
  flex: 0 0 30%; /* Left panel takes up 30% of the width */
  max-width: 400px; /* But not more than 400px */
  position: relative;
}
.fixed-image-wrapper {
  position: fixed;
  top: 80px; /* Adjust based on header height */
  left: 40px; /* A fixed gap from the left edge */
  width: calc(30% - 60px); /* Adjust width considering gaps */
  max-width: 380px;
  height: calc(100vh - 120px); /* Adjust height to fit screen */
  border-radius: 0.75rem; /* 12px */
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
}
.teaser-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Right Scrollable Content */
.right-panel {
  flex: 1;
  min-width: 0; /* Important for flexbox to prevent overflow */
  padding-left: 2rem; /* Add some space next to the fixed panel */
}

.page-header h1 {
  letter-spacing: 1px;
}

/* Month Divider */
.month-divider {
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: 2.5rem; /* 40px */
}
.month-divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #e5e7eb; /* gray-200 */
  margin-left: 1.5em;
}
.month-text {
  font-size: 1.25rem; /* 20px */
  font-weight: 600;
  color: #4b5563; /* gray-600 */
  padding-right: 1.5rem;
}

/* Card Styles */
.conference-card {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border: 1px solid #e5e7eb;
}
.conference-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
}
.card-meta {
  border-top: 1px solid #f3f4f6;
  padding-top: 1rem;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .left-panel {
    display: none; /* Hide left panel on smaller screens */
  }
  .right-panel {
    padding-left: 0;
  }
}
</style>