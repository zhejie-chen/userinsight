<script setup>
import { onMounted, onUnmounted, ref, nextTick, watch } from 'vue';

// --- Refs ---
const pdfContainer = ref(null);
const countrySelector = ref(null);
const loadingIndicator = ref(null);
const sidebarContent = ref(null);
const comparisonBtn = ref(null);
const comparisonModal = ref(null);
const closeBtn = ref(null);
const tableBody = ref(null);
const thead = ref(null);
const comparisonBtnContainer = ref(null);
const isMobile = ref(window.innerWidth < 900);
const isModalActive = ref(false);

// --- State ---
let pdfDoc = null;
let renderedPages = new Set();
let pageHeightCache = {};
let resizeTimeout = null;
let currentCountry = null;
let activeFilter = 'all';
let comparisonData = null;
const isInitialized = ref(false);

const countryNames = {
  usa: { sample: "中国", reference: "美国" },
  europe: { sample: "中国", reference: "欧盟" }
};

function initializeDesktopView() {
  if (isInitialized.value || isMobile.value) {
    return;
  }
  nextTick(() => {
    if (typeof pdfjsLib === 'undefined') {
      console.error('PDF.js library is not loaded. Please check index.html.');
      return;
    }
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@2.16.105/build/pdf.worker.min.js`;

    initPDFViewer();
    loadComparisonData().then(data => { comparisonData = data; });

    countrySelector.value?.addEventListener('change', handleCountryChange);
    comparisonBtn.value?.addEventListener('click', openComparisonModal);
    pdfContainer.value?.addEventListener('scroll', renderVisiblePages);

    isInitialized.value = true;
  });
}

// --- Lifecycle Hooks ---
onMounted(() => {
  window.addEventListener('resize', handleResize);
  initializeDesktopView();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  if (pdfContainer.value) {
    pdfContainer.value.removeEventListener('scroll', renderVisiblePages);
  }
  if (pdfDoc) {
    pdfDoc.destroy();
    pdfDoc = null;
  }
  clearTimeout(resizeTimeout);
  renderedPages.clear();
});

watch(isMobile, (isNowMobile) => {
  if (!isNowMobile) {
    initializeDesktopView();
  }
});

// --- Event Handlers ---
const handleResize = () => {
  isMobile.value = window.innerWidth < 900;
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (pdfDoc && !isMobile.value) {
      renderedPages.clear();
      renderPDF();
    }
  }, 250);
};

function handleModalOverlayClick(e) {
  if (e.target === comparisonModal.value) {
    closeComparisonModal();
  }
}

function handleCountryChange(event) {
  const country = event.target.value;
  if (country === 'default') {
    initPDFViewer();
    return;
  }

  // [目录修复] 当切换国家时，重置父容器的flex居中样式，以保证目录能垂直排列
  if (pdfContainer.value) {
    pdfContainer.value.style.display = 'block'; // 改回 block
    pdfContainer.value.style.alignItems = '';
    pdfContainer.value.style.justifyContent = '';
  }
  if (sidebarContent.value) {
    sidebarContent.value.style.display = 'block'; // 改回 block
    sidebarContent.value.style.alignItems = '';
    sidebarContent.value.style.justifyContent = '';
  }

  showLoading();
  currentCountry = country;
  if (comparisonBtnContainer.value) comparisonBtnContainer.value.style.display = 'block';

  Promise.all([loadTOC(country), getPDFUrl(country)])
      .then(([toc, pdfUrl]) => {
        renderTOC(toc);
        if (pdfUrl) {
          loadPDF(pdfUrl).finally(hideLoading);
        } else {
          if (pdfContainer.value) pdfContainer.value.innerHTML = `<div class="page-placeholder"><div class="placeholder-icon"><i class="fas fa-exclamation-triangle"></i></div><h3 class="text-xl font-medium mb-2">未找到PDF文件</h3></div>`;
          hideLoading();
        }
      });
}

async function openComparisonModal() {
  if (!currentCountry) {
    alert('请先选择国家');
    return;
  }
  isModalActive.value = true;

  await nextTick();

  renderComparisonTable(currentCountry);

  document.querySelectorAll('#comparison-modal .filter-btn').forEach(button => {
    button.addEventListener('click', handleFilterClick);
  });
  closeBtn.value?.addEventListener('click', closeComparisonModal);
}

function closeComparisonModal() {
  document.querySelectorAll('#comparison-modal .filter-btn').forEach(button => {
    button.removeEventListener('click', handleFilterClick);
  });
  closeBtn.value?.removeEventListener('click', closeComparisonModal);

  isModalActive.value = false;
}

function handleFilterClick(event) {
  const filterButtons = document.querySelectorAll('#comparison-modal .filter-btn');
  const button = event.currentTarget;
  activeFilter = button.dataset.filter;
  filterButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  if (currentCountry) {
    renderComparisonTable(currentCountry);
  }
}

// --- Core Functions ---
function initPDFViewer() {
  if (pdfDoc) { pdfDoc.destroy(); pdfDoc = null; }
  if (countrySelector.value) countrySelector.value.value = 'default';

  if (pdfContainer.value) {
    pdfContainer.value.innerHTML = `<div class="page-placeholder"><div class="placeholder-icon"><i class="fas fa-file-pdf"></i></div><h3 class="text-xl font-medium mb-2">请在左侧下拉栏中选择对标国家</h3><p class="text-gray-500 mb-4">选择后将加载对应国家的PDF对比文档</p></div>`;
    // [目录修复] 当显示placeholder时，恢复flex居中
    pdfContainer.value.style.display = 'flex';
    pdfContainer.value.style.alignItems = 'center';
    pdfContainer.value.style.justifyContent = 'center';
  }

  if (sidebarContent.value) {
    sidebarContent.value.innerHTML = `<div class="page-placeholder"><div class="placeholder-icon"><i class="fas fa-book"></i></div><h3 class="text-lg font-medium mb-2">请先选择国家</h3><p class="text-gray-500">选择后将显示对应目录</p></div>`;
    // [目录修复] 当显示placeholder时，恢复flex居中
    sidebarContent.value.style.display = 'flex';
    sidebarContent.value.style.alignItems = 'center';
    sidebarContent.value.style.justifyContent = 'center';
  }

  if (comparisonBtnContainer.value) comparisonBtnContainer.value.style.display = 'none';
}

async function loadTOC(country) {
  try {
    const response = await fetch('/CoR-toc.json');
    const tocData = await response.json();
    return tocData[country] || [];
  } catch (error) {
    console.error('加载目录失败:', error); return [];
  }
}
async function loadComparisonData() {
  try {
    const response = await fetch('/CoR-data.json');
    return await response.json();
  } catch (error) {
    console.error('加载对比数据失败:', error); return null;
  }
}

function renderTOC(toc) {
  if (!sidebarContent.value) return;
  sidebarContent.value.innerHTML = '';
  if (toc.length === 0) {
    sidebarContent.value.innerHTML = `<div class="page-placeholder"><div class="placeholder-icon"><i class="fas fa-folder-open"></i></div><h3 class="text-lg font-medium mb-2">暂无目录数据</h3></div>`;
    // 如果没有目录数据，也要保持居中
    sidebarContent.value.style.display = 'flex';
    sidebarContent.value.style.alignItems = 'center';
    sidebarContent.value.style.justifyContent = 'center';
    return;
  }

  toc.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'toc-section';
    const headerDiv = document.createElement('div');
    headerDiv.className = 'toc-header collapsed';
    headerDiv.innerHTML = `<span>${section.title}</span><i class="fas fa-chevron-down"></i>`;
    const childrenDiv = document.createElement('div');
    childrenDiv.className = 'toc-children collapsed';
    section.children.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'toc-item';
      itemDiv.dataset.page = item.page;
      itemDiv.textContent = item.title;
      childrenDiv.appendChild(itemDiv);
    });
    sectionDiv.appendChild(headerDiv);
    sectionDiv.appendChild(childrenDiv);
    sidebarContent.value.appendChild(sectionDiv);
    headerDiv.addEventListener('click', () => {
      childrenDiv.classList.toggle('collapsed');
      headerDiv.classList.toggle('collapsed');
    });
  });

  sidebarContent.value.querySelectorAll('.toc-item').forEach(item => {
    item.addEventListener('click', function () { scrollToPage(parseInt(this.dataset.page)); });
  });
}

async function cachePageHeights() {
  if (!pdfDoc || !pdfContainer.value) return;
  pageHeightCache = {};
  const containerWidth = pdfContainer.value.clientWidth - 40;
  const pageContainerWidth = (containerWidth - 20) / 2;

  if (pageContainerWidth <= 0) return;

  for (let i = 1; i <= pdfDoc.numPages; i++) {
    const page = await pdfDoc.getPage(i);
    const viewport = page.getViewport({ scale: 1 });
    const scale = pageContainerWidth / viewport.width;
    pageHeightCache[i] = viewport.height * scale;
  }
}

async function renderPDF() {
  if (!pdfDoc || !pdfContainer.value) return;
  pdfContainer.value.innerHTML = '';
  renderedPages.clear();

  await cachePageHeights();

  for (let i = 1; i <= pdfDoc.numPages; i += 2) {
    const pageGroup = document.createElement('div');
    pageGroup.className = 'page-group';
    pageGroup.id = `group-${Math.ceil(i / 2)}`;
    pageGroup.dataset.startPage = i;

    let groupHeight = Math.max(pageHeightCache[i] || 0, pageHeightCache[i + 1] || 0);
    pageGroup.style.height = `${groupHeight}px`;

    const leftPage = document.createElement('div');
    leftPage.className = 'single-page';
    leftPage.id = `page-${i}`;
    leftPage.dataset.page = i;
    pageGroup.appendChild(leftPage);

    if (i + 1 <= pdfDoc.numPages) {
      const rightPage = document.createElement('div');
      rightPage.className = 'single-page';
      rightPage.id = `page-${i + 1}`;
      rightPage.dataset.page = i + 1;
      pageGroup.appendChild(rightPage);
    }
    pdfContainer.value.appendChild(pageGroup);
  }
  renderVisiblePages();
}

async function renderVisiblePages() {
  if (!pdfDoc || !pdfContainer.value) return;
  const viewportHeight = pdfContainer.value.clientHeight;
  const scrollTop = pdfContainer.value.scrollTop;

  for (const group of pdfContainer.value.children) {
    if (group.offsetTop + group.offsetHeight > scrollTop && group.offsetTop < scrollTop + viewportHeight) {
      const startPage = parseInt(group.dataset.startPage);
      const pagesToRender = [startPage];
      if (startPage + 1 <= pdfDoc.numPages) { pagesToRender.push(startPage + 1); }

      for (const pageNum of pagesToRender) {
        if (!renderedPages.has(pageNum)) {
          renderedPages.add(pageNum);
          const pageContainer = document.getElementById(`page-${pageNum}`);
          if (pageContainer) renderSinglePage(pageNum, pageContainer);
        }
      }
    }
  }
}

async function renderSinglePage(pageNum, container) {
  if(!pdfDoc) return;
  try {
    const page = await pdfDoc.getPage(pageNum);
    const canvas = document.createElement('canvas');
    container.innerHTML = '';
    container.appendChild(canvas);
    const context = canvas.getContext('2d');

    await new Promise(requestAnimationFrame);
    const containerWidth = container.clientWidth;
    if (containerWidth <= 0) return;

    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;
    const scaledViewport = page.getViewport({ scale });

    const outputScale = window.devicePixelRatio || 1;
    canvas.width = Math.floor(scaledViewport.width * outputScale);
    canvas.height = Math.floor(scaledViewport.height * outputScale);
    canvas.style.width = Math.floor(scaledViewport.width) + "px";
    canvas.style.height =  Math.floor(scaledViewport.height) + "px";

    const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

    await page.render({ canvasContext: context, viewport: scaledViewport, transform }).promise;
  } catch (error) {
    if (error.name !== 'RenderingCancelledException') console.error(`渲染页面 ${pageNum} 失败:`, error);
  }
}

async function loadPDF(url) {
  try {
    if (pdfDoc) { await pdfDoc.destroy(); pdfDoc = null; }
    if (pdfContainer.value) pdfContainer.value.innerHTML = `<div class="page-placeholder"><div class="placeholder-icon"><i class="fas fa-spinner fa-spin"></i></div><h3 class="text-xl font-medium mb-2">加载文档中...</h3></div>`;
    const loadingTask = pdfjsLib.getDocument(url);
    pdfDoc = await loadingTask.promise;
    await renderPDF();
  } catch (error) {
    console.error('PDF加载失败:', error);
    if(pdfContainer.value) pdfContainer.value.innerHTML = `<div class="page-placeholder"><div class="placeholder-icon"><i class="fas fa-exclamation-triangle"></i></div><h3 class="text-xl font-medium mb-2">PDF加载失败</h3></div>`;
  }
}

function scrollToPage(pageNum) {
  if (!pdfDoc || !pdfContainer.value) return;
  showLoading();
  const groupIndex = Math.ceil(Number(pageNum) / 2);
  const groupElement = document.getElementById(`group-${groupIndex}`);
  if (groupElement) {
    pdfContainer.value.scrollTo({ top: groupElement.offsetTop, behavior: 'smooth' });
  }
  setTimeout(() => {
    renderVisiblePages();
    hideLoading();
  }, 300);
}


function showLoading() { if(loadingIndicator.value) loadingIndicator.value.style.display = 'flex'; }
function hideLoading() { if(loadingIndicator.value) loadingIndicator.value.style.display = 'none'; }
async function getPDFUrl(country) {
  try {
    const response = await fetch('/pdf-versions.json');
    const versions = await response.json();
    return versions[country]?.file || null;
  } catch (error) {
    console.error('获取PDF URL失败:', error); return null;
  }
}
function renderComparisonTable(country) {
  const currentTableBody = tableBody.value;
  const currentThead = thead.value;

  if (!comparisonData || !comparisonData[country] || !currentTableBody || !currentThead) {
    if(currentTableBody) currentTableBody.innerHTML = `<tr><td colspan="9" class="text-center py-8">暂无对比数据</td></tr>`;
    return;
  }
  const data = comparisonData[country];
  const names = countryNames[country];
  currentThead.innerHTML = `<tr><th>页数</th><th>${names.sample}字段</th><th>${names.reference}字段</th><th>${names.sample}法规</th><th>${names.reference}法规</th><th>法规解读</th><th>法规</th><th>智能化</th><th>操作</th></tr>`;
  const filteredData = data.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'regulation') return item.regulation;
    if (activeFilter === 'intelligent') return item.intelligent;
    if (activeFilter === 'other') return !item.regulation && !item.intelligent;
    return false;
  });

  currentTableBody.innerHTML = filteredData.map(item => `
        <tr>
            <td><a class="page-link" data-page="${item.page}">${item.page}</a></td>
            <td>${item.sampleField || ''}</td>
            <td>${item.referenceField || ''}</td>
            <td>${item.sampleRegulation || ''}</td>
            <td>${item.referenceRegulation || ''}</td>
            <td>${item.interpretation || ''}</td>
            <td><span class="checkmark">${item.regulation ? '✓' : ''}</span></td>
            <td><span class="checkmark">${item.intelligent ? '✓' : ''}</span></td>
            <td><button class="action-btn view-details" data-page="${item.page}">查看</button></td>
        </tr>
    `).join('');

  currentTableBody.querySelectorAll('.page-link, .view-details').forEach(el => {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      const page = parseInt(this.dataset.page);
      closeComparisonModal();
      scrollToPage(page);
    });
  });

  if (filteredData.length === 0) {
    currentTableBody.innerHTML = `<tr><td colspan="9" class="text-center py-8">没有找到匹配的数据</td></tr>`;
  }
}
</script>


<template>
  <main id="main-content" class="regulation-page">

    <div class="mobile-alert" v-if="isMobile">
      <div class="mobile-alert-content">
        <i class="fas fa-desktop" style="font-size: 48px; color: #3b82f6; margin-bottom: 20px;"></i>
        <h3 style="font-size: 24px; margin-bottom: 16px; color: #1e293b;">请使用大屏幕设备访问</h3>
        <p style="font-size: 16px; color: #64748b; line-height: 1.5;">为保证最佳的阅读和对比体验，建议您在电脑或笔记本等大屏幕设备上查看此页面。</p>
      </div>
    </div>

    <div class="main-container" v-show="!isMobile">
      <div id="sidebar">
        <div class="sidebar-header">
          <h2 class="text-xl font-semibold">文档目录</h2>
          <div class="country-selector-container">
            <div class="country-selector">
              <select id="country-selector" ref="countrySelector">
                <option value="default" disabled selected>选择国家</option>
                <option value="usa">中美</option>
                <option value="europe">中欧</option>
              </select>
            </div>
          </div>
        </div>
        <div class="comparison-btn-top-container" ref="comparisonBtnContainer">
          <button class="comparison-btn" ref="comparisonBtn">
            <i class="fas fa-table mr-2"></i><span>直接查看对比</span>
          </button>
        </div>
        <div class="sidebar-content" ref="sidebarContent"></div>
      </div>
      <div class="pdf-viewer-container">
        <div id="pdf-container" ref="pdfContainer"></div>
        <div class="loading-indicator" ref="loadingIndicator" style="display: none;">
          <i class="fas fa-spinner fa-spin"></i>
          <span>正在加载页面...</span>
        </div>
      </div>
    </div>

    <div id="comparison-modal" class="modal-overlay" v-if="isModalActive" @click="handleModalOverlayClick" ref="comparisonModal">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">法规对比详情</h3>
          <button class="close-btn" ref="closeBtn">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-filters">
          <div class="filters-row">
            <div class="filters-title">筛选类型：</div>
            <div class="filter-container">
              <button class="filter-btn active" data-filter="all" @click="handleFilterClick">全部</button>
              <button class="filter-btn" data-filter="regulation" @click="handleFilterClick">法规</button>
              <button class="filter-btn" data-filter="intelligent" @click="handleFilterClick">智能化</button>
              <button class="filter-btn" data-filter="other" @click="handleFilterClick">其他</button>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="table-container">
            <table class="comparison-table">
              <thead id="comparison-thead" ref="thead"></thead>
              <tbody id="comparison-table-body" ref="tableBody"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.regulation-page {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100vh - 44px);
  overflow: hidden;

  --primary: #2563eb; --primary-dark: #1d4ed8; --light-bg: #f8fafc; --dark-text: #1e293b;
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  color: var(--dark-text);
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
}
.main-container {
  height: 100%;
  display: flex;
  padding: 20px;
  gap: 20px;
  box-sizing: border-box;
}
#sidebar, .pdf-viewer-container {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

/* [目录修复] 移除CSS中的display:flex，交由JS动态控制 */
#pdf-container, .sidebar-content {
  flex: 1 1 auto;
  overflow-y: auto;
}

#sidebar {
  flex: 0 0 280px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.pdf-viewer-container {
  flex: 1 1 0;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.sidebar-header { padding: 20px; border-bottom: 1px solid #e2e8f0; }
.country-selector-container { margin-top: 16px; }
.country-selector select {
  width: 100%; padding: 10px 16px; border: 1px solid #cbd5e1; border-radius: 10px;
  background: white; font-size: 16px; appearance: none; cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center; background-repeat: no-repeat; background-size: 1.5em 1.5em; padding-right: 2.5rem;
}
.country-selector select:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2); }
.comparison-btn-top-container{ padding: 10px 20px; display: none; }
.comparison-btn {
  background: var(--primary); color: white; padding: 10px 12px; border-radius: 8px;
  border: none; font-weight: 500; cursor: pointer; transition: background 0.2s ease;
  font-size: 14px; display: flex; align-items: center; justify-content: center; width: 100%;
}
.comparison-btn:hover { background: var(--primary-dark); }
.sidebar-content { padding: 5px 16px 16px; }
#pdf-container { background: #f1f5f9; padding: 20px; }

/* 移除绝对定位相关样式 */
.page-placeholder {
  width: 90%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #64748b;
}

/* 使用 :deep() 穿透 Scoped CSS，确保样式能应用到图标上 */
:deep(.placeholder-icon i) {
  font-size: 64px;
}

.placeholder-icon {
  margin-bottom: 16px;
  color: #cbd5e1;
}

:deep(.toc-section) { margin-bottom: 16px; }
:deep(.toc-header) { font-weight: 600; padding: 10px 12px; background: #f1f5f9; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; margin-bottom: 8px; }
:deep(.toc-header:hover) { background: #e2e8f0; }
:deep(.toc-header .fa-chevron-down) { transition: transform 0.3s ease; }
:deep(.toc-header.collapsed .fa-chevron-down) { transform: rotate(-90deg); }
:deep(.toc-children) { padding-left: 24px; max-height: 1000px; overflow: hidden; transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out; opacity: 1; }
:deep(.toc-children.collapsed) { max-height: 0; opacity: 0; }
:deep(.toc-item) { padding: 8px 12px; border-radius: 6px; cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; gap: 8px; }
:deep(.toc-item:before) { content: "•"; color: var(--primary); font-size: 20px; }
:deep(.toc-item:hover) { background: #eff6ff; color: var(--primary); }

:deep(.page-group) { margin-bottom: 24px; display: flex; gap: 20px; }
:deep(.single-page) { flex: 1; background: white; min-width: 0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); border-radius: 8px; overflow: hidden; }
:deep(.single-page canvas) { width: 100%; height: auto; display: block; }

.loading-indicator { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); background: var(--primary); color: white; padding: 8px 20px; border-radius: 50px; display: flex; align-items: center; gap: 10px; font-size: 14px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); z-index: 10; }
.modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.6); display: flex; align-items: center; justify-content: center; z-index: 2000; }
.modal-content { background: white; border-radius: 16px; width: 95%; max-width: 1400px; height: 85vh; display: flex; flex-direction: column; overflow: hidden; }
.modal-header { padding: 16px 24px; background: var(--primary); color: white; display: flex; justify-content: space-between; align-items: center; }
.modal-title { font-size: 1.25rem; font-weight: 600; }
.close-btn { background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }
.modal-body { flex: 1; overflow: hidden; display: flex; flex-direction: column; }
.modal-filters { padding: 12px 16px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; }
.filters-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
.filters-title { font-weight: 600; }
.filter-container { display: flex; gap: 8px; flex-wrap: wrap; }
.filter-btn { background: white; color: var(--dark-text); padding: 6px 12px; border: 1px solid #cbd5e1; border-radius: 20px; font-size: 13px; cursor: pointer; transition: all 0.2s; }
.filter-btn.active { background: var(--primary); color: white; border-color: var(--primary); }
.table-container { flex: 1; overflow: auto; }
:deep(.comparison-table) { width: 100%; border-collapse: collapse; font-size: 14px; table-layout: fixed; }
:deep(.comparison-table th) { background: #f1f5f9; padding: 12px 16px; text-align: left; font-weight: 600; position: sticky; top: 0; z-index: 1; }
:deep(.comparison-table td) { padding: 12px 16px; border-bottom: 1px solid #e2e8f0; vertical-align: top; word-break: break-word; }
:deep(.comparison-table tr:hover td) { background: #f8fafc; }
:deep(.page-link) { color: var(--primary); cursor: pointer; text-decoration: underline; }
:deep(.checkmark) { color: #10b981; text-align: center; }
:deep(.action-btn) { background: var(--primary); color: white; border: none; border-radius: 6px; padding: 4px 8px; cursor: pointer; }

.mobile-alert {
  display: flex; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(249, 250, 251, 0.95); backdrop-filter: blur(8px);
  z-index: 3000; justify-content: center; align-items: center; text-align: center;
  flex-direction: column; padding: 20px;
}
.mobile-alert-content {
  max-width: 500px; padding: 40px; background: white;
  border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
</style>