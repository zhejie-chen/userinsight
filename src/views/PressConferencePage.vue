<template>
  <main id="main-content" class="pt-11 bg-gray-50 min-h-screen">
    <div class="main-layout" ref="mainLayoutRef">
      <div class="left-panel-spacer"></div>

      <Teleport to="body">
        <div
            v-if="isDesktop"
            class="timeline-card-container"
            :class="{
              'is-blurred': isMainContentBlurred,
              'is-ready': isTimelineReady
            }"
            :style="{ left: timelineLeftPos }"
        >
          <div class="timeline-card">
            <div class="timeline-header">
              <h2 class="timeline-title">发布会预告</h2>
              <button
                  v-if="isDesktop"
                  @click="openCalendarModal"
                  class="calendar-button"
                  aria-label="打开日历视图"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5v-.008ZM7.5 18h.008v.008H7.5v-.008ZM9.75 18h.008v.008H9.75v-.008ZM12 18h.008v.008H12v-.008ZM14.25 15h.008v.008H14.25v-.008ZM14.25 18h.008v.008H14.25v-.008ZM16.5 15h.008v.008H16.5v-.008Z" />
                </svg>
                <span>日历视图</span>
              </button>
            </div>

            <div class="timeline-scroll-area">
              <div v-if="isLoadingEvents">
                <div v-for="n in 5" :key="`skel-tl-${n}`" class="timeline-skeleton">
                  <div class="avatar skeleton-loader"></div>
                  <div class="text-group">
                    <div class="line-1 skeleton-loader"></div>
                    <div class="line-2 skeleton-loader"></div>
                  </div>
                </div>
              </div>

              <div v-else>
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
                        :class="{
                        'has-report': item.hasReport,
                        'is-active': item.id === activeTimelineEventId
                      }"
                        @click="handleTimelineClick(item)"
                        :tabindex="item.hasReport ? 0 : -1"
                    >
                      <div class="date-marker">
                        <span class="day">{{ item.day }}</span>
                        <span class="weekday">{{ item.weekday }}</span>
                      </div>
                      <div class="event-details">
                        <p class="event-title">{{ item.title }}</p>
                        <div class="badges-container">
                          <span class="report-badge report-badge-upcoming">预告</span>
                          <span v-if="item.hasReport" class="report-badge hover-badge">查看报告</span>
                          <span v-if="item.replayUrl" class="report-badge report-badge-replay">回放</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="Object.keys(pastEventGroups).length > 0" class="past-events-section">
                  <h3 class="past-events-title">过往报告</h3>
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
                          :class="{
                          'has-report': item.hasReport,
                          'is-active': item.id === activeTimelineEventId
                        }"
                          @click="handleTimelineClick(item)"
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
                            <span v-if="item.replayUrl" class="report-badge report-badge-replay">回放</span>
                          </div>
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
        <div class="right-panel-content-area">
          <div class="page-header mb-12">
            <h1 class="text-4xl font-bold text-gray-800">新车发布会</h1>
          </div>
          <div class="space-y-16">
            <div v-if="isLoadingReports">
              <div
                  v-for="month in skeletonMonths"
                  :key="month"
                  class="month-group-reports"
              >
                <div class="month-divider">
                  <span class="month-text">{{ month }}</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                  <div v-for="n in 4" :key="`skel-card-${month}-${n}`" class="report-card-skeleton">
                    <div class="image-placeholder skeleton-loader"></div>
                    <div class="content">
                      <div class="line-1 skeleton-loader"></div>
                      <div class="line-2 skeleton-loader"></div>
                      <div class="line-3 skeleton-loader"></div>
                      <div class="line-4 skeleton-loader"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
                v-else
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
                    class="conference-card group bg-white rounded-lg"
                    :class="{ 'is-active': conference.id === activeConferenceId }"
                    @click="handleCardClick(conference)"
                >
                  <div class="relative" style="padding-bottom: 42.6%">
                    <img
                        :src="conference.image"
                        :alt="conference.title"
                        class="absolute h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                  </div>
                  <div class="p-5">
                    <h3 class="text-lg font-bold text-gray-800 mb-2 truncate">{{ conference.title }}</h3>
                    <p class="text-gray-600 text-sm h-14 overflow-hidden mb-4">{{ conference.description }}</p>
                    <div class="card-meta flex justify-between items-center text-xs text-gray-500">
                      <span>{{ conference.date }}</span>
                      <div class="meta-action">
                        <span class="default-text">用户洞察</span>
                        <a
                            v-if="conference.replayUrl"
                            :href="conference.replayUrl"
                            target="_blank"
                            class="hover-link"
                            @click.stop
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="link-icon">
                            <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.665l3-3z" />
                            <path d="M8.603 14.397a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 005.656 5.656l3-3a4 4 0 00-.225-5.865.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.665l-3 3z" />
                          </svg>
                          直播回放
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DetailModal :isOpen="isModalOpen" :conference="selectedConference" @close="closeConferenceModal" />

    <ConferenceCalendarModal
        :isOpen="isCalendarModalOpen"
        :events="timelineEvents"
        @close="closeCalendarModal"
        @navigateToEvent="onCalendarNavigate"
    />

  </main>
</template>

<script setup>
import { ref, computed, onBeforeUpdate, reactive, onMounted, onUnmounted, nextTick } from 'vue';
import DetailModal from '@/components/common/DetailModal.vue';
import ConferenceCalendarModal from '@/components/common/ConferenceCalendarModal.vue';
import { getTimelineEvents, getConferenceReports, getReportImages } from '@/services/api/conferences.js';

function parseLocalDate(dateStr) {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return null;
  }
  const parts = dateStr.split('-');
  const date = new Date(parts[0], parts[1] - 1, parts[2]);
  if (isNaN(date.getTime())) {
    return null;
  }
  return date;
}

// --- Data & Loading State ---
const timelineEvents = ref([]);
const conferences = ref([]);
const isLoadingEvents = ref(true);
const isLoadingReports = ref(true);

// --- Image Prefetching Cache ---
const imageCache = new Map();

// --- Modal State Management ---
const isModalOpen = ref(false);
const selectedConference = ref(null);

const isCalendarModalOpen = ref(false);

async function openConferenceModal(conference) {
  selectedConference.value = {
    ...conference,
    details: {
      team: conference.team || '未知团队',
      images: []
    }
  };
  isModalOpen.value = true;

  if (imageCache.has(conference.id)) {
    selectedConference.value.details.images = imageCache.get(conference.id);
    return;
  }

  try {
    const images = await getReportImages(conference.id);
    if (selectedConference.value && selectedConference.value.id === conference.id) {
      selectedConference.value.details.images = images;
      imageCache.set(conference.id, images);
    }
  } catch (error) {
    console.error(`Failed to fetch images for conference ${conference.id}:`, error);
  }
}

function closeConferenceModal() {
  isModalOpen.value = false;
  selectedConference.value = null;
}

function openCalendarModal() {
  isCalendarModalOpen.value = true;
}
function closeCalendarModal() {
  isCalendarModalOpen.value = false;
}

function onCalendarNavigate(event) {
  closeCalendarModal();
  nextTick(() => {
    scrollToConference(event.reportId, event.id);
  });
}

// --- Unified Card Click Handler ---
function handleCardClick(conference) {
  if (conference.action_type === 'EXTERNAL_LINK' && conference.external_url) {
    window.open(conference.external_url, '_blank');
  } else {
    openConferenceModal(conference);
  }
}

// --- Timeline Click Handler for Scrolling & Prefetching ---
function handleTimelineClick(item) {
  if (!item.hasReport) return;

  scrollToConference(item.reportId, item.id);

  const relatedConference = conferences.value.find(c => c.id === item.reportId);
  if (relatedConference && relatedConference.action_type !== 'EXTERNAL_LINK' && !imageCache.has(item.reportId)) {
    getReportImages(item.reportId)
        .then(images => {
          imageCache.set(item.reportId, images);
        })
        .catch(err => {
          console.error(`Prefetching failed for ${item.reportId}:`, err);
        });
  }
}

// --- Highlighting Logic ---
const activeConferenceId = ref(null);
const activeTimelineEventId = ref(null);
let highlightTimer = null;

// --- Layout & Blur Sync Logic ---
const isDesktop = ref(window.innerWidth > 1024);
const isSufficientHeight = ref(window.innerHeight > 750); // Min height for calendar
const mainLayoutRef = ref(null);
const timelineLeftPos = ref('0px');
const isTimelineReady = ref(false);
const isMainContentBlurred = ref(false);
let observer = null;

const updateTimelinePosition = async () => {
  if (mainLayoutRef.value && isDesktop.value) {
    await nextTick();
    const rect = mainLayoutRef.value.getBoundingClientRect();
    const leftPosition = rect.left > 0 ? rect.left : 32;
    timelineLeftPos.value = `${leftPosition}px`;
    isTimelineReady.value = true;
  } else {
    isTimelineReady.value = false;
  }
};

const handleResize = () => {
  isDesktop.value = window.innerWidth > 1024;
  isSufficientHeight.value = window.innerHeight > 750; // Update height

  if (isDesktop.value) {
    updateTimelinePosition();
  } else {
    isTimelineReady.value = false;
  }

  // Auto-close modal ONLY if not desktop
  if (!isDesktop.value && isCalendarModalOpen.value) {
    closeCalendarModal();
  }
};

onMounted(async () => {
  isLoadingEvents.value = true;
  isLoadingReports.value = true;

  handleResize(); // Initial call
  window.addEventListener('resize', handleResize); // Register shared handler

  try {
    const [eventsData, reportsData] = await Promise.all([
      getTimelineEvents(),
      getConferenceReports()
    ]);

    const reportIdMap = new Map(reportsData.map(r => [r.event_id, r.id]));

    const eventInfoMap = new Map(eventsData.map(e => {
      const originalEventId = e.id.replace('evt-', '');
      return [originalEventId, { date: e.date, replayUrl: e.replayUrl }];
    }));

    timelineEvents.value = eventsData.map(event => {
      const originalEventId = event.id.replace('evt-', '');
      return {
        ...event,
        reportId: reportIdMap.get(originalEventId) || null,
      };
    });

    conferences.value = reportsData.map(report => {
      const eventInfo = eventInfoMap.get(report.event_id);
      return {
        ...report,
        date: eventInfo?.date || 'Unknown Date',
        replayUrl: eventInfo?.replayUrl || null,
      };
    });

    isLoadingEvents.value = false;
    isLoadingReports.value = false;

  } catch (error) {
    console.error("Failed to load data:", error);
    isLoadingEvents.value = false;
    isLoadingReports.value = false;
  }

  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    isMainContentBlurred.value = mainContent.classList.contains('blurred');
    observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          isMainContentBlurred.value = mainContent.classList.contains('blurred');
        }
      });
    });
    observer.observe(mainContent, { attributes: true });
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize); // Remove shared handler
  if (observer) observer.disconnect();
  if (highlightTimer) clearTimeout(highlightTimer);
});

// --- Scrolling & Highlighting Logic ---
const conferenceCardRefs = reactive({});
onBeforeUpdate(() => { Object.keys(conferenceCardRefs).forEach(key => delete conferenceCardRefs[key]); });

const scrollToConference = (reportId, eventId) => {
  const cardElement = conferenceCardRefs[reportId];
  if (cardElement) {
    cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    activeConferenceId.value = reportId;
    activeTimelineEventId.value = eventId;
    if (highlightTimer) clearTimeout(highlightTimer);
    highlightTimer = setTimeout(() => {
      activeConferenceId.value = null;
      activeTimelineEventId.value = null;
    }, 2500);
  }
};

// --- COMPUTED PROPERTIES ---

const skeletonMonths = computed(() => {
  const today = new Date();
  return [`${today.getFullYear()}年 ${today.toLocaleString('zh-CN', { month: 'long' })}`];
});

const processAndGroupEvents = (events, isPastFilter) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const conferenceIdsWithReports = new Set(conferences.value.map(c => c.id));

  const filtered = events.filter(event => {
    const eventDate = parseLocalDate(event.date);
    if (!eventDate) return false;

    const hasReportCheck = event.reportId !== null && conferenceIdsWithReports.has(event.reportId);
    if (isPastFilter && !hasReportCheck) {
      return false;
    }

    return isPastFilter ? eventDate < today : eventDate >= today;
  });

  const processed = [...filtered]
      .sort((a, b) => {
        const dateA = parseLocalDate(a.date);
        const dateB = parseLocalDate(b.date);
        if (!dateA && !dateB) return 0;
        if (!dateA) return 1;
        if (!dateB) return -1;
        return dateB - dateA;
      })
      .map(event => {
        const eventDate = parseLocalDate(event.date);
        return {
          ...event,
          day: eventDate.getDate(),
          weekday: eventDate.toLocaleString('zh-CN', { weekday: 'short' }),
          hasReport: event.reportId !== null && conferenceIdsWithReports.has(event.reportId),
        };
      });

  return processed.reduce((acc, event) => {
    const date = parseLocalDate(event.date);
    if (!date) return acc;
    const key = `${date.getFullYear()}年 ${date.toLocaleString('zh-CN', { month: 'long' })}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(event);
    return acc;
  }, {});
};

const groupedConferences = computed(() => {
  return [...conferences.value]
      .sort((a, b) => {
        const dateA = parseLocalDate(a.date);
        const dateB = parseLocalDate(b.date);
        if (!dateA && !dateB) return 0;
        if (!dateA) return 1;
        if (!dateB) return -1;
        return dateB - dateA;
      })
      .reduce((acc, conference) => {
        const date = parseLocalDate(conference.date);
        if (!date) {
          return acc;
        }
        const key = `${date.getFullYear()}年 ${date.toLocaleString('zh-CN', { month: 'long' })}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(conference);
        return acc;
      }, {});
});

const upcomingEventGroups = computed(() => processAndGroupEvents(timelineEvents.value, false));
const pastEventGroups = computed(() => processAndGroupEvents(timelineEvents.value, true));

</script>

<style scoped>
.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 1rem; flex-shrink: 0; border-bottom: 1px solid #f3f4f6;
}
.calendar-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #4b5563;
  padding: 6px 10px;
  border-radius: 8px;
  transition: all 0.2s ease;
}
.calendar-button:hover {
  background-color: #f3f4f6;
  color: #3b82f6;
}

/* Main Layout */
.main-layout { display: flex; max-width: 1600px; margin: 0 auto; padding: 0 2rem; }

/* Left Panel & Timeline Card */
.left-panel-spacer { flex: 0 0 300px; }
.timeline-card-container {
  position: fixed; top: 88px; width: 300px; height: calc(100vh - 112px); z-index: 10;
  opacity: 0;
  transition: opacity 0.4s ease-out, filter 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.timeline-card-container.is-ready {
  opacity: 1;
}
.timeline-card-container.is-blurred { filter: blur(8px); }
.timeline-card {
  width: 100%; height: 100%; background-color: #ffffff; border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e5e7eb;
  display: flex; flex-direction: column;
}

.timeline-title {
  font-size: 1.25rem; font-weight: 700; color: #1f2937;
}
.timeline-scroll-area {
  flex-grow: 1; overflow-y: auto; padding: 1.5rem 0.5rem 1.5rem 1.5rem;
  scrollbar-width: none; -ms-overflow-style: none;
}
.timeline-scroll-area::-webkit-scrollbar { display: none; }

/* Timeline Design */
.month-group-timeline { margin-bottom: 1.5rem; }
.month-header { font-size: 0.8rem; font-weight: 600; color: #9ca3af; text-transform: uppercase; padding-bottom: 0.75rem; border-bottom: 1px solid #f3f4f6; margin-bottom: 0.75rem; }

.past-events-section { margin-top: 2.5rem; }
.past-events-title {
  font-size: 1.25rem; font-weight: 700; color: #1f2937;
  margin-bottom: 1.5rem; padding-left: 0;
}

.timeline-item { display: flex; align-items: center; padding: 0.75rem; border-radius: 0.5rem; transition: all 0.2s ease; }
.timeline-item.has-report { cursor: pointer; }
.timeline-item:not(.has-report) { cursor: default; }
.timeline-item.has-report:not(.is-past):hover { background-color: #f9fafb; }
.timeline-item:not(.has-report):not(.is-past):hover {
  background-color: #f9fafb;
}
.timeline-item.is-active { background-color: #eff6ff; }

/* Date Marker */
.date-marker {
  display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0;
  width: 48px; height: 48px; border-radius: 0.5rem; background-color: #f3f4f6; color: #4b5563;
  margin-right: 1rem; transition: all 0.3s ease;
}
.date-marker .day { font-size: 1.25rem; font-weight: 600; line-height: 1.2; }
.date-marker .weekday { font-size: 0.75rem; color: #6b7280; }
.timeline-item.has-report:not(.is-past):hover .date-marker,
.timeline-item.is-active:not(.is-past) .date-marker {
  background-color: #3b82f6; color: white;
}
.timeline-item.has-report:not(.is-past):hover .date-marker .weekday,
.timeline-item.is-active:not(.is-past) .date-marker .weekday {
  color: rgba(255,255,255,0.8);
}
.timeline-item:not(.has-report):not(.is-past):hover .date-marker {
  background-color: #e5e7eb;
}

/* Event Details */
.event-details { display: flex; flex-direction: column; align-items: flex-start; min-width: 0; }
.event-title { font-weight: 600; color: #374151; font-size: 0.9rem; line-height: 1.4; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%; transition: color 0.3s ease; }
.badges-container { margin-top: 0.25rem; display: flex; gap: 0.5rem; }

/* Badge Styles */
.report-badge { font-size: 0.75rem; font-weight: 500; padding: 2px 8px; border-radius: 999px; line-height: 1.2; }
.report-badge-archived { background-color: #dcfce7; color: #166534; }
.report-badge-upcoming { background-color: #fef3c7; color: #b45309; }
.report-badge-replay { background-color: #dbeafe; color: #2563eb; }

.hover-badge { background-color: #eff6ff; color: #3b82f6; opacity: 0; transition: opacity 0.3s ease; position: absolute; }
.timeline-item.has-report:not(.is-past):hover .hover-badge { opacity: 1; }
.timeline-item.has-report:not(.is-past):hover .report-badge-upcoming { opacity: 0; }

/* Past Event Styling */
.timeline-item.is-past {
  opacity: 0.8;
}
.timeline-item.is-past:not(.has-report) {
  opacity: 0.4;
}
.timeline-item.is-past:not(.has-report):hover {
  background-color: transparent;
}
.timeline-item.is-past .date-marker { background-color: #e5e7eb; }
.timeline-item.is-past.has-report:hover {
  opacity: 1; background-color: #eff6ff;
}
.timeline-item.is-past.has-report:hover .date-marker,
.timeline-item.is-past.is-active .date-marker {
  background-color: #6b7280; color: white;
}
.timeline-item.is-past.has-report:hover .date-marker .weekday,
.timeline-item.is-past.is-active .date-marker .weekday {
  color: rgba(255,255,255,0.8);
}
.timeline-item.is-past.has-report:hover .event-title,
.timeline-item.is-past.is-active .event-title {
  color: #1f2937;
}

/* Right Panel */
.right-panel { flex: 1; min-width: 0; padding-left: 2rem; }
.right-panel-content-area {
  padding-top: 3rem;
  padding-bottom: 24px;
}
.container { padding-top: 0 !important; padding-bottom: 0 !important; }
.page-header h1 { letter-spacing: 1px; }
.month-divider { display: flex; align-items: center; margin-bottom: 2.5rem; }
.month-divider::after { content: ''; flex: 1; border-bottom: 1px solid #e5e7eb; margin-left: 1.5em; }
.month-text { font-size: 1.25rem; font-weight: 600; color: #4b5563; padding-right: 1.5rem; }

.conference-card .p-5 p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

/* Conference Card Effects */
.conference-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  cursor: pointer;
}
.conference-card:has(.hover-link:hover) { cursor: default; }

.conference-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
}
.conference-card.is-active {
  transform: scale(1.03) translateY(0) !important;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5), 0 12px 24px rgba(0, 0, 0, 0.1);
}
.conference-card img { transition: transform 0.3s ease; }
.conference-card:hover img { transform: scale(1.05); }
.conference-card.is-active img { transform: scale(1.05); }
.card-meta { border-top: 1px solid #f3f4f6; padding-top: 1rem; position: relative; }

.meta-action {
  position: relative;
  height: 16px;
  display: flex;
  align-items: center;
}
.default-text, .hover-link {
  display: flex;
  align-items: center;
  gap: 4px;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.hover-link {
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  transform: translateY(5px);
  color: #6b7280;
  text-decoration: none;
  white-space: nowrap;
}
.link-icon {
  width: 14px;
  height: 14px;
}
.group:has(.hover-link):hover .default-text {
  opacity: 0;
  transform: translateY(-5px);
}
.group:has(.hover-link):hover .hover-link {
  opacity: 1;
  transform: translateY(0);
  color: #3b82f6;
}
.hover-link:hover {
  transform: translateY(0) scale(1.1);
}

@media (max-width: 1024px) {
  .left-panel-spacer { display: none; }
  .right-panel { padding-left: 0; }
  .right-panel-content-area { padding-bottom: 3rem; }
  .main-layout { padding: 0 1rem; }
}
</style>