<template>
  <main id="main-content" class="pt-11 bg-gray-50 min-h-screen">
    <div class="main-layout" ref="mainLayoutRef">
      <div class="left-panel-spacer"></div>

      <Teleport to="body">
        <div
            v-if="isDesktop"
            class="timeline-card-container"
            :class="{ 'is-blurred': isMainContentBlurred }"
            :style="{ left: timelineLeftPos }"
        >
          <div class="timeline-card">
            <h2 class="timeline-title">发布会日程</h2>
            <div class="timeline-scroll-area">
              <div
                  v-for="(group, monthKey) in upcomingEventGroups"
                  :key="monthKey"
                  class="month-group-timeline"
              >
                <div class="month-header">{{ monthKey }}</div>
                <div class="timeline">
                  <div
                      v-for="item in group"
                      :key="item.id"
                      class="timeline-item"
                      :class="{ 'has-report': item.hasReport }"
                      @click="item.hasReport && scrollToConference(item.reportId)"
                      :tabindex="item.hasReport ? 0 : -1"
                  >
                    <div class="date-marker">
                      <span class="day">{{ item.day }}</span>
                      <span class="weekday">{{ item.weekday }}</span>
                    </div>
                    <div class="event-details">
                      <p class="event-title">{{ item.title }}</p>
                      <div class="badges-container">
                        <span class="report-badge report-badge-upcoming">预计</span>
                        <span v-if="item.hasReport" class="report-badge hover-badge">查看报告</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="Object.keys(pastEventGroups).length > 0" class="past-events-section">
                <h3 class="past-events-title">过往发布会</h3>
                <div
                    v-for="(group, monthKey) in pastEventGroups"
                    :key="monthKey"
                    class="month-group-timeline"
                >
                  <div class="month-header">{{ monthKey }}</div>
                  <div class="timeline">
                    <div
                        v-for="item in group"
                        :key="item.id"
                        class="timeline-item is-past"
                        :class="{ 'has-report': item.hasReport }"
                        @click="item.hasReport && scrollToConference(item.reportId)"
                        :tabindex="item.hasReport ? 0 : -1"
                    >
                      <div class="date-marker">
                        <span class="day">{{ item.day }}</span>
                        <span class="weekday">{{ item.weekday }}</span>
                      </div>
                      <div class="event-details">
                        <p class="event-title">{{ item.title }}</p>
                        <div class="badges-container">
                          <span v-if="item.hasReport" class="report-badge report-badge-archived">报告</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Teleport>

      <div class="right-panel">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="page-header mb-12">
            <h1 class="text-4xl font-bold text-gray-800">新车发布会</h1>
          </div>
          <div class="space-y-16">
            <div
                v-for="(group, month) in groupedConferences"
                :key="month"
                class="month-group-reports"
            >
              <div class="month-divider">
                <span class="month-text">{{ month }}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                <div
                    v-for="conference in group"
                    :key="conference.id"
                    :ref="el => { if (el) conferenceCardRefs[conference.id] = el }"
                    class="conference-card bg-white rounded-lg shadow-md"
                >
                  <div class="relative" style="padding-bottom: 42.6%">
                    <img :src="conference.image" :alt="conference.title" class="absolute h-full w-full object-cover"/>
                  </div>
                  <div class="p-5">
                    <h3 class="text-lg font-bold text-gray-800 mb-2">{{ conference.title }}</h3>
                    <p class="text-gray-600 text-sm h-14 overflow-hidden mb-4">{{ conference.description }}</p>
                    <div class="card-meta flex justify-between items-center text-xs text-gray-500">
                      <span>{{ conference.date }}</span>
                      <span>用户洞察</span>
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
import { ref, computed, onBeforeUpdate, reactive, onMounted, onUnmounted } from 'vue';

// --- Layout & Blur Sync Logic ---
const isDesktop = ref(window.innerWidth > 1024);
const mainLayoutRef = ref(null);
const timelineLeftPos = ref('2rem');
const isMainContentBlurred = ref(false);
let observer = null;

const updateTimelinePosition = () => {
  if (mainLayoutRef.value && isDesktop.value) {
    const rect = mainLayoutRef.value.getBoundingClientRect();
    timelineLeftPos.value = `${rect.left + 32}px`; // 32px is 2rem
  }
};

onMounted(() => {
  const handleResize = () => {
    isDesktop.value = window.innerWidth > 1024;
    updateTimelinePosition();
  };
  window.addEventListener('resize', handleResize);
  updateTimelinePosition();

  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    isMainContentBlurred.value = mainContent.classList.contains('blurred');
    observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          isMainContentBlurred.value = mainContent.classList.contains('blurred');
        }
      }
    });
    observer.observe(mainContent, { attributes: true });
  }
});

onUnmounted(() => {
  const handleResize = () => {
    isDesktop.value = window.innerWidth > 1024;
    updateTimelinePosition();
  };
  window.removeEventListener('resize', handleResize);
  if (observer) observer.disconnect();
});

// --- DATA SOURCES ---
const timelineEvents = ref([
  { id: 'evt-009', date: '2025-12-10', title: '蔚来 ET9 行政版发布', reportId: null }, { id: 'evt-010', date: '2025-11-20', title: '极氪 007 性能版发布', reportId: null }, { id: 'evt-011', date: '2025-11-05', title: '理想 L8 Pro 升级款发布', reportId: null }, { id: 'evt-012', date: '2025-10-30', title: '小米 SU7 Pro 答谢会', reportId: null }, { id: 'evt-001', date: '2025-05-20', title: '全新小鹏P7上市发布会', reportId: 2 }, { id: 'evt-002', date: '2025-05-15', title: '乐道L90上市发布会', reportId: 1 }, { id: 'evt-003', date: '2025-04-22', title: '极氪9X技术发布会', reportId: 3 }, { id: 'evt-004', date: '2025-04-18', title: '深蓝L07P7亮相发布会', reportId: 4 }, { id: 'evt-005', date: '2025-04-10', title: '比亚迪汉新车型技术分享会', reportId: null }, { id: 'evt-006', date: '2025-03-25', title: '零跑B01上市发布会', reportId: 6 }, { id: 'evt-007', date: '2025-03-11', title: '理想i8上市发布会', reportId: 5 }, { id: 'evt-008', date: '2025-02-28', title: '蔚来资本日', reportId: null },
]);
const conferences = ref([
  { id: 1, title: '乐道L90上市发布会', description: '全新乐道L90，智能电动新标杆。', image: '/img/cover-press-conference/乐道L90上市发布会-头图.png', date: '2025-09-15' }, { id: 2, title: '全新小鹏P7上市发布会', description: '见证全新小鹏P7的非凡魅力。', image: '/img/cover-press-conference/全新小鹏P7上市发布会-头图.png', date: '2025-05-20' }, { id: 3, title: '极氪9X技术发布会', description: '极氪9X，颠覆性技术震撼发布。', image: '/img/cover-press-conference/极氪9X技术发布会.png', date: '2025-04-22' }, { id: 4, title: '深蓝L07P7亮相发布会', description: '深蓝L07P7，双子星闪耀登场。', image: '/img/cover-press-conference/深蓝L07P7亮相发布会-头图.png', date: '2025-04-18' }, { id: 5, title: '理想i8上市发布会', description: '理想i8，为家庭打造的智能旗舰SUV。', image: '/img/cover-press-conference/理想i8上市发布会-头图.png', date: '2025-03-11' }, { id: 6, title: '零跑B01上市发布会', description: '零跑B01，开启智能纯电新纪元。', image: '/img/cover-press-conference/零跑B01上市发布会-头图.png', date: '2025-03-25' },
]);

// --- SCROLLING LOGIC ---
const conferenceCardRefs = reactive({});
onBeforeUpdate(() => { Object.keys(conferenceCardRefs).forEach(key => delete conferenceCardRefs[key]); });
const scrollToConference = (reportId) => { const cardElement = conferenceCardRefs[reportId]; if (cardElement) cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); };

// --- COMPUTED PROPERTIES ---
const processAndGroupEvents = (events, isPastFilter) => {
  const today = new Date('2025-10-27T00:00:00');
  const conferenceIdsWithReports = new Set(conferences.value.map(c => c.id));
  const filtered = events.filter(event => { const eventDate = new Date(event.date); return isPastFilter ? eventDate < today : eventDate >= today; });
  const processed = [...filtered] .sort((a, b) => new Date(b.date) - new Date(a.date)) .map(event => { const eventDate = new Date(event.date); return { ...event, day: eventDate.getDate(), weekday: eventDate.toLocaleString('zh-CN', { weekday: 'short' }), hasReport: event.reportId !== null && conferenceIdsWithReports.has(event.reportId), }; });
  return processed.reduce((acc, event) => { const date = new Date(event.date); const key = `${date.getFullYear()}年 ${date.toLocaleString('zh-CN', { month: 'long' })}`; if (!acc[key]) acc[key] = []; acc[key].push(event); return acc; }, {});
};
const upcomingEventGroups = computed(() => processAndGroupEvents(timelineEvents.value, false));
const pastEventGroups = computed(() => processAndGroupEvents(timelineEvents.value, true));
const groupedConferences = computed(() => { return [...conferences.value] .sort((a, b) => new Date(b.date) - new Date(a.date)) .reduce((acc, conference) => { const date = new Date(conference.date); const key = `${date.getFullYear()}年 ${date.toLocaleString('zh-CN', { month: 'long' })}`; if (!acc[key]) acc[key] = []; acc[key].push(conference); return acc; }, {}); });
</script>

<style scoped>
/* Main Layout */
.main-layout { display: flex; max-width: 1600px; margin: 0 auto; padding: 0 2rem; }

/* Left Panel & Timeline Card */
.left-panel-spacer { flex: 0 0 300px; }
.timeline-card-container {
  position: fixed; top: 88px; width: 300px; height: calc(100vh - 112px); z-index: 10;
  transition: filter 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.timeline-card-container.is-blurred { filter: blur(8px); }
.timeline-card {
  width: 100%; height: 100%; background-color: #ffffff; border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e5e7eb;
  display: flex; flex-direction: column;
}

.timeline-title { font-size: 1.25rem; font-weight: 700; color: #1f2937; padding: 1.5rem 1.5rem 1rem; flex-shrink: 0; }
.timeline-scroll-area { flex-grow: 1; overflow-y: auto; padding: 0 0.5rem 1.5rem 1.5rem; scrollbar-width: none; -ms-overflow-style: none; }
.timeline-scroll-area::-webkit-scrollbar { display: none; }

/* Timeline Design */
.month-group-timeline { margin-bottom: 1.5rem; }
.month-header { font-size: 0.8rem; font-weight: 600; color: #9ca3af; text-transform: uppercase; padding-bottom: 0.75rem; border-bottom: 1px solid #f3f4f6; margin-bottom: 0.75rem; }

/* --- "过往发布会" 标题样式更新 --- */
.past-events-section { margin-top: 2.5rem; }
.past-events-title {
  font-size: 1.25rem; /* 增大字号 */
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
  padding-left: 0; /* 修改点：与月份标题左对齐 */
}

.timeline-item { display: flex; align-items: center; padding: 0.75rem; border-radius: 0.5rem; transition: all 0.2s ease; }
.timeline-item.has-report { cursor: pointer; }
.timeline-item.has-report:not(.is-past):hover { background-color: #f9fafb; }

/* Date Marker */
.date-marker {
  display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0;
  width: 48px; height: 48px; border-radius: 0.5rem; background-color: #f3f4f6; color: #4b5563;
  margin-right: 1rem; transition: all 0.3s ease;
}
.date-marker .day { font-size: 1.25rem; font-weight: 600; line-height: 1.2; }
.date-marker .weekday { font-size: 0.75rem; color: #6b7280; }
.timeline-item.has-report:not(.is-past):hover .date-marker { background-color: #3b82f6; color: white; }
.timeline-item.has-report:not(.is-past):hover .date-marker .weekday { color: rgba(255,255,255,0.8); }

/* Event Details */
.event-details { display: flex; flex-direction: column; align-items: flex-start; min-width: 0; }
.event-title { font-weight: 600; color: #374151; font-size: 0.9rem; line-height: 1.4; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%; transition: color 0.3s ease; }
.badges-container { margin-top: 0.25rem; display: flex; gap: 0.5rem; }

/* Badge Styles */
.report-badge { font-size: 0.75rem; font-weight: 500; padding: 2px 8px; border-radius: 999px; line-height: 1.2; }
.report-badge-archived { background-color: #dcfce7; color: #166534; }
.report-badge-upcoming { background-color: #fef3c7; color: #b45309; }
.hover-badge { background-color: #eff6ff; color: #3b82f6; opacity: 0; transition: opacity 0.3s ease; position: absolute; }
.timeline-item.has-report:not(.is-past):hover .hover-badge { opacity: 1; }
.timeline-item.has-report:not(.is-past):hover .report-badge-upcoming { opacity: 0; }

/* --- Past Event Styling & Enhanced Hover Effect --- */
.timeline-item.is-past { opacity: 0.6; }
.timeline-item.is-past .date-marker { background-color: #e5e7eb; }

.timeline-item.is-past:hover {
  opacity: 1;
  background-color: #eff6ff; /* 修改点：浅蓝色 hover 背景 */
}
.timeline-item.is-past:hover .date-marker {
  background-color: #6b7280;
  color: white;
}
.timeline-item.is-past:hover .date-marker .weekday { color: rgba(255,255,255,0.8); }
.timeline-item.is-past:hover .event-title { color: #1f2937; }

/* Right Panel */
.right-panel { flex: 1; min-width: 0; padding-left: 2rem; }
.page-header h1 { letter-spacing: 1px; }
.month-divider { display: flex; align-items: center; margin-bottom: 2.5rem; }
.month-divider::after { content: ''; flex: 1; border-bottom: 1px solid #e5e7eb; margin-left: 1.5em; }
.month-text { font-size: 1.25rem; font-weight: 600; color: #4b5563; padding-right: 1.5rem; }

.conference-card { transition: box-shadow 0.3s ease, transform 0.3s ease; border: 1px solid #e5e7eb; overflow: hidden; }
.conference-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07); }
.conference-card img { transition: transform 0.3s ease; }
.conference-card:hover img { transform: scale(1.05); }
.card-meta { border-top: 1px solid #f3f4f6; padding-top: 1rem; }

@media (max-width: 1024px) {
  .left-panel-spacer { display: none; }
  .right-panel { padding-left: 0; }
  .main-layout { padding: 0 1rem; }
}
</style>