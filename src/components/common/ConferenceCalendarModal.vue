<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/60" @click="closeModal" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
          >
            <DialogPanel
                class="w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col max-h-[calc(100vh-80px)] calendar-dialog-panel"
            >
              <div class="flex justify-between items-center mb-4 flex-shrink-0 calendar-header">
                <button
                    @click="changeMonth(-1)"
                    :disabled="!canGoBack"
                    class="p-2 rounded-full hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <DialogTitle as="h3" class="text-xl font-bold leading-6 text-gray-900 text-center">
                  {{ calendarHeader }}
                </DialogTitle>
                <button
                    @click="changeMonth(1)"
                    :disabled="!canGoForward"
                    class="p-2 rounded-full hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>

              <div class="overflow-y-auto">
                <div class="grid grid-cols-7 gap-px text-center text-sm font-semibold text-gray-500 mb-2 sticky top-0 bg-white z-10 py-2 weekday-header">
                  <div v-for="day in weekdays" :key="day">{{ day }}</div>
                </div>

                <div
                    class="calendar-grid grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div
                      v-for="(day, index) in calendarGrid"
                      :key="index"
                      class="day-cell bg-white p-2"
                      :class="{
                        'is-other-month': !day.isCurrentMonth,
                        'is-today': isToday(day.date)
                      }"
                  >
                    <span class="day-number">{{ day.date.getDate() }}</span>

                    <div class="day-content-wrapper">
                      <div class="event-list">
                        <template v-if="day.isCurrentMonth">
                          <template v-for="(event, eventIndex) in getEventsForDay(day)" :key="event.id">
                            <button
                                v-if="eventIndex < maxVisibleEvents"
                                class="event-item"
                                :class="{ 'has-report': event.reportId }"
                                @click="navigateToEvent(event)"
                            >
                              <p class="event-title">{{ event.title }}</p>
                              <a
                                  v-if="event.replayUrl"
                                  :href="event.replayUrl"
                                  target="_blank"
                                  @click.stop
                                  class="replay-button"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-3 h-3">
                                  <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM6.75 5.25A.75.75 0 0 0 6 6v4a.75.75 0 0 0 1.5 0v-1.559l2.22 1.332a.75.75 0 0 0 1.11-.668V6.895a.75.75 0 0 0-1.11-.668L7.5 7.559V6a.75.75 0 0 0-.75-.75Z" clip-rule="evenodd" />
                                </svg>
                                回放
                              </a>
                            </button>
                          </template>
                        </template>
                      </div>

                      <button
                          v-if="day.isCurrentMonth && getEventsForDay(day).length > maxVisibleEvents"
                          @click.stop="openDayModal(day)"
                          class="more-button"
                      >
                        更多...
                      </button>
                    </div>

                  </div>
                </div>
              </div>

              <TransitionRoot appear :show="isDayModalOpen" as="template">
                <Dialog as="div" @close="closeDayModal" class="relative z-[60]">
                  <TransitionChild
                      as="template"
                      enter="duration-200 ease-out"
                      enter-from="opacity-0"
                      enter-to="opacity-100"
                      leave="duration-100 ease-in"
                      leave-from="opacity-100"
                      leave-to="opacity-0"
                  >
                    <div class="fixed inset-0 bg-black/30" />
                  </TransitionChild>

                  <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                      <TransitionChild
                          as="template"
                          enter="duration-200 ease-out"
                          enter-from="opacity-0 scale-95"
                          enter-to="opacity-100 scale-100"
                          leave="duration-100 ease-in"
                          leave-from="opacity-100 scale-100"
                          leave-to="opacity-0 scale-95"
                      >
                        <DialogPanel class="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <DialogTitle as="h3" class="text-lg font-bold leading-6 text-gray-900 mb-4">
                            {{ selectedDayTitle }}
                          </DialogTitle>

                          <div class="day-event-list-scrollable max-h-96 overflow-y-auto space-y-3">
                            <button
                                v-for="event in selectedDayData.events"
                                :key="event.id"
                                class="day-event-item"
                                :class="{ 'has-report': event.reportId }"
                                @click="navigateToEvent(event)"
                            >
                              <p class="day-event-title">{{ event.title }}</p>
                              <a
                                  v-if="event.replayUrl"
                                  :href="event.replayUrl"
                                  target="_blank"
                                  @click.stop
                                  class="replay-button-detailed"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                                  <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM6.75 5.25A.75.75 0 0 0 6 6v4a.75.75 0 0 0 1.5 0v-1.559l2.22 1.332a.75.75 0 0 0 1.11-.668V6.895a.75.75 0 0 0-1.11-.668L7.5 7.559V6a.75.75 0 0 0-.75-.75Z" clip-rule="evenodd" />
                                </svg>
                                直播回放
                              </a>
                            </button>
                          </div>

                          <button
                              type="button"
                              @click="closeDayModal"
                              class="mt-6 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          >
                            关闭
                          </button>
                        </DialogPanel>
                      </TransitionChild>
                    </div>
                  </div>
                </Dialog>
              </TransitionRoot>

            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';

function parseLocalDate(dateStr) {
  if (!dateStr) return null;
  const parts = dateStr.split('-');
  return new Date(parts[0], parts[1] - 1, parts[2]);
}
function formatDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  events: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['close', 'navigateToEvent']);

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const header = document.querySelector('header');
    if (header) {
      header.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = 'hidden';
  } else {
    const header = document.querySelector('header');
    if (header) {
      header.style.paddingRight = '0';
    }
    document.body.style.overflow = 'auto';
  }
});


const weekdays = ['一', '二', '三', '四', '五', '六', '日'];
const maxVisibleEvents = 2;

const minDate = new Date(2025, 5, 1);
const maxDate = new Date(2025, 11, 1);

const getInitialDate = () => {
  const today = new Date();
  let initialDate = new Date(today.getFullYear(), today.getMonth(), 1);

  if (initialDate < minDate) return minDate;
  if (initialDate > maxDate) return minDate;
  return initialDate;
};

const currentDate = ref(getInitialDate());

const isDayModalOpen = ref(false);
const selectedDayData = ref({ date: null, events: [] });

function closeModal() {
  emit('close');
}

const eventsByDate = computed(() => {
  const map = new Map();
  props.events.forEach(event => {
    const dateKey = event.date;
    if (!map.has(dateKey)) {
      map.set(dateKey, []);
    }
    map.get(dateKey).push(event);
  });
  return map;
});

function isSameMonth(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth();
}

const canGoBack = computed(() => {
  return !isSameMonth(currentDate.value, minDate);
});
const canGoForward = computed(() => {
  return !isSameMonth(currentDate.value, maxDate);
});

function changeMonth(direction) {
  if (direction === -1 && !canGoBack.value) return;
  if (direction === 1 && !canGoForward.value) return;

  currentDate.value = new Date(
      currentDate.value.getFullYear(),
      currentDate.value.getMonth() + direction,
      1
  );
}

function isToday(date) {
  const today = new Date();
  return formatDateKey(date) === formatDateKey(today);
}

function isPast(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return parseLocalDate(dateStr) < today;
}

const calendarHeader = computed(() => {
  return currentDate.value.toLocaleString('zh-CN', {
    year: 'numeric',
    month: 'long',
  });
});

function getEventsForDay(day) {
  if (!day.isCurrentMonth) return [];
  const key = formatDateKey(day.date);
  return eventsByDate.value.get(key) || [];
}

const selectedDayTitle = computed(() => {
  if (!selectedDayData.value.date) return '';
  return selectedDayData.value.date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });
});

function openDayModal(day) {
  selectedDayData.value = {
    date: day.date,
    events: getEventsForDay(day)
  }
  isDayModalOpen.value = true;
}

function closeDayModal() {
  isDayModalOpen.value = false;
}

function navigateToEvent(event) {
  if (!event.reportId) return;
  if (isDayModalOpen.value) {
    closeDayModal();
  }
  emit('navigateToEvent', event);
}


const calendarGrid = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  let startDayOfWeek = firstDayOfMonth.getDay();
  if (startDayOfWeek === 0) startDayOfWeek = 7; // 1 (Mon) - 7 (Sun)

  const paddingDaysStart = startDayOfWeek - 1;
  const days = [];

  for (let i = 0; i < paddingDaysStart; i++) {
    const prevMonthDay = new Date(firstDayOfMonth);
    prevMonthDay.setDate(prevMonthDay.getDate() - (paddingDaysStart - i));
    days.push({ date: prevMonthDay, isCurrentMonth: false });
  }

  const daysInMonth = lastDayOfMonth.getDate();
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ date: new Date(year, month, i), isCurrentMonth: true });
  }

  const gridCells = 42;
  const paddingDaysEnd = gridCells - days.length;
  for (let i = 1; i <= paddingDaysEnd; i++) {
    const nextMonthDay = new Date(lastDayOfMonth);
    nextMonthDay.setDate(lastDayOfMonth.getDate() + i);
    days.push({ date: nextMonthDay, isCurrentMonth: false });
  }

  return days;
});

</script>

<style scoped>
.day-cell {
  height: 110px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.day-number {
  font-size: 0.8rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
  flex-shrink: 0;
}

.day-cell.is-other-month {
  background-color: #f9fafb;
}
.day-cell.is-other-month .day-number {
  color: #9ca3af;
}

.day-cell.is-today .day-number {
  color: #ffffff;
  background-color: #3b82f6;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.day-content-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 4px;
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
  flex-shrink: 1;
}

.event-item {
  background-color: #f3f4f6;
  border-left: 3px solid #9ca3af;
  padding: 4px 6px;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  width: 100%;
  text-align: left;
  cursor: default;
  min-height: 28px;
}
.event-item.has-report {
  background-color: #f0fdf4;
  border-left-color: #22c55e;
  cursor: pointer;
}
.event-item.has-report:hover {
  background-color: #dcfce7;
}


.event-title {
  font-size: 0.7rem;
  line-height: 0.9rem;
  font-weight: 500;
  color: #4b5563;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  min-width: 0;
}
.event-item.has-report .event-title {
  color: #15803d;
}

.replay-button {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 0.7rem;
  color: #2563eb;
  background-color: #dbeafe;
  padding: 2px 4px;
  border-radius: 4px;
  flex-shrink: 0;
  transition: background-color 0.2s;
  text-decoration: none;
}
.replay-button:hover {
  background-color: #bfdbfe;
}
.event-item.has-report .replay-button {
  color: #166534;
  background-color: #dcfce7;
}
.event-item.has-report .replay-button:hover {
  background-color: #bbf7d0;
}


.more-button {
  font-size: 0.7rem;
  font-weight: 500;
  color: #4b5563;
  background-color: #f3f4f6;
  border-radius: 4px;
  padding: 2px 4px;
  padding-top: 4px;
  flex-shrink: 0;
  text-align: center;
  width: 100%;
  transition: background-color 0.2s;
}
.more-button:hover {
  background-color: #e5e7eb;
}

.day-event-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 10px;
  background-color: #f3f4f6;
  border-radius: 6px;
  width: 100%;
  text-align: left;
  cursor: default;
  /* --- MODIFICATION (Alignment): Added min-height --- */
  min-height: 48px;
}
.day-event-item.has-report {
  cursor: pointer;
  background-color: #f0fdf4;
}
.day-event-item.has-report:hover {
  background-color: #dcfce7;
}


.day-event-title {
  font-size: 0.9rem;
  font-weight: 500;
  color: #4b5563;
  line-height: 1.4;
}
.day-event-item.has-report .day-event-title {
  color: #15803d;
}


.replay-button-detailed {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #2563eb;
  background-color: #dbeafe;
  padding: 6px 10px;
  border-radius: 6px;
  flex-shrink: 0;
  transition: background-color 0.2s;
  text-decoration: none;
}
.replay-button-detailed:hover {
  background-color: #bfdbfe;
}
.day-event-item.has-report .replay-button-detailed {
  color: #166534;
  background-color: #dcfce7;
}
.day-event-item.has-part .replay-button-detailed:hover {
  background-color: #bbf7d0;
}

@media (max-height: 750px) {
  .calendar-dialog-panel {
    padding: 0.75rem; /* p-3 */
  }

  .calendar-header {
    margin-bottom: 0.5rem; /* mb-2 */
  }

  .calendar-header .text-xl { /* DialogTitle */
    font-size: 1.125rem; /* text-lg */
  }

  .calendar-header .p-2 { /* Arrow buttons */
    padding: 0.25rem; /* p-1 */
  }

  .weekday-header {
    padding-top: 0.25rem;    /* py-1 */
    padding-bottom: 0.25rem; /* py-1 */
    font-size: 0.8rem;
    margin-bottom: 0.5rem; /* mb-1 */
  }

  .day-cell {
    height: 95px; /* 110px -> 95px */
  }
}
</style>