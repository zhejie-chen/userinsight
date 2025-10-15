<script setup>
import { onMounted, onUnmounted } from 'vue';
import { fetchCarDataForTimeline } from '../services/supabaseClient.js';
import html2canvas from 'html2canvas'; // 导入 html2canvas 库
import BackToHomeLogo from '../components/BackToHomeLogo.vue';

/**
 * 核心截图函数
 */
async function saveAsImage() {
  const timelineContainer = document.querySelector('.timeline-container');
  const brandSidebar = document.querySelector('.brand-sidebar');
  const mainContent = document.querySelector('.main-content');
  const filterContainer = document.querySelector('.filter-container');
  const saveBtn = document.getElementById('saveAsImageBtn');
  const loadingOverlay = document.getElementById('loadingOverlay');

  // 保存原始样式，以便截图后恢复
  const originalSidebarStyle = brandSidebar.style.cssText;
  const originalFilterStyle = filterContainer.style.cssText;
  const originalContainerStyle = timelineContainer.style.cssText;

  try {
    // --- 1. 截图前的准备工作 ---
    loadingOverlay.style.display = 'flex';
    saveBtn.style.display = 'none'; // 隐藏截图按钮

    const contentGridHeight = mainContent.scrollHeight;

    // a. 临时修改整体容器高度以容纳所有内容
    timelineContainer.style.height = 'auto';

    // b. 将侧边栏从 fixed 改为 absolute，并拉长高度以匹配内容区
    brandSidebar.style.position = 'absolute';
    brandSidebar.style.height = `${contentGridHeight + 110}px`; // 110px 是 main-content 的 margin-top

    // c. 重新计算并定位侧边栏的所有 Logo，按未滚动的状态对齐
    syncBrandHeights();
    positionBrandLogos(0);

    // d. 将底部的筛选器从 fixed 改为 absolute，移动到内容底部
    filterContainer.style.position = 'absolute';
    filterContainer.style.top = `${contentGridHeight + 120}px`; // 移动到内容区下方
    filterContainer.style.bottom = 'auto';
    filterContainer.style.right = '30px';

    // 等待 DOM 更新
    await new Promise(resolve => setTimeout(resolve, 300));

    // --- 2. 执行截图 ---
    const canvas = await html2canvas(timelineContainer, {
      useCORS: true,
      allowTaint: true,
      scrollY: -window.scrollY,
      windowWidth: timelineContainer.scrollWidth,
      windowHeight: timelineContainer.scrollHeight
    });

    // --- 3. 下载图片 ---
    const link = document.createElement('a');
    link.download = '海外上新时间线.png';
    link.href = canvas.toDataURL('image/png');
    link.click();

  } catch (error) {
    console.error('保存图片失败:', error);
    alert('图片生成失败，请稍后重试。');
  } finally {
    // --- 4. 恢复原始布局和样式 ---
    timelineContainer.style.cssText = originalContainerStyle;
    brandSidebar.style.cssText = originalSidebarStyle;
    filterContainer.style.cssText = originalFilterStyle;
    saveBtn.style.display = 'flex';

    // 恢复侧边栏 Logo 的滚动位置
    handleScroll();

    loadingOverlay.style.display = 'none';
  }
}

// --- 页面原有 JavaScript 逻辑 ---
let resizeObserver;

onMounted(() => {
  const saveAsImageBtn = document.getElementById('saveAsImageBtn');
  if (saveAsImageBtn) {
    saveAsImageBtn.addEventListener('click', saveAsImage);
  }

  createCarCards().then(() => {
    setupFilter();
  });

  window.addEventListener('scroll', handleScroll);

  resizeObserver = new ResizeObserver(() => {
    syncBrandHeights();
    positionBrandLogos(window.pageYOffset || document.documentElement.scrollTop);
  });
  const gridEl = document.getElementById('contentGrid');
  if (gridEl) {
    resizeObserver.observe(gridEl);
  }
});

onUnmounted(() => {
  const saveAsImageBtn = document.getElementById('saveAsImageBtn');
  if (saveAsImageBtn) {
    saveAsImageBtn.removeEventListener('click', saveAsImage);
  }
  window.removeEventListener('scroll', handleScroll);
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});


// --- 所有功能函数 ---
const brandMap = {
  '比亚迪': { displayName: '比亚迪', logoStyle: 'background: linear-gradient(135deg, #e74c3c, #c0392b);' },
  '吉利': { displayName: '吉利', logoStyle: 'background: linear-gradient(135deg, #3498db, #2980b9);' },
  '小鹏': { displayName: '小鹏汽车', logoStyle: 'background: linear-gradient(135deg, #2ecc71, #27ae60);' },
  '蔚来': { displayName: '蔚来汽车', logoStyle: 'background: linear-gradient(135deg, #f39c12, #d35400);' },
  '广汽': { displayName: '广汽', logoStyle: 'background: linear-gradient(135deg, #9b59b6, #8e44ad);' },
  '零跑': { displayName: '零跑', logoStyle: 'background: linear-gradient(135deg, #34495e, #2c3e50);' },
  '赛力斯': { displayName: '赛力斯', logoStyle: 'background: linear-gradient(135deg, #1abc9c, #16a085);' },
  '上汽': { displayName: '上汽', logoStyle: 'background: linear-gradient(135deg, #e67e22, #d35400);' }
};
const carTypeMap = { '皮卡': 'pickup', '轿车': 'sedan', 'SUV': 'suv', 'MPV': 'mpv' };
const currentDate = new Date(2025, 8, 9);
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

async function loadCarData() {
  try {
    document.getElementById('loadingOverlay').style.display = 'flex';
    const data = await fetchCarDataForTimeline();
    return processCarData(data);
  } catch (error) {
    console.error('加载汽车数据失败:', error);
    return [];
  } finally {
    document.getElementById('loadingOverlay').style.display = 'none';
  }
}

function processCarData(data) {
  const processedData = [];
  data.forEach(item => {
    const releaseDate = parseReleaseDate(item['上市时间']);
    if (!releaseDate || releaseDate.getFullYear() !== 2025) return;
    const month = releaseDate.getMonth();
    let isNew = false;
    let isExpected = false;
    if (releaseDate.getFullYear() === currentYear) {
      if (releaseDate.getMonth() === currentMonth) isNew = true;
      else if (releaseDate.getMonth() > currentMonth) isExpected = true;
    }
    const brandInfo = brandMap[item['公司']];
    if (!brandInfo) return;
    const carType = carTypeMap[item['厢型']] || 'suv';
    processedData.push({
      brand: brandInfo.displayName, month, name: item['车型'],
      price: formatPrice(item['售价-人民币']),
      localPrice: formatLocalPrice(item['售价'], item['国家/地区']),
      type: carType, country: item['国家/地区'], isNew, isExpected
    });
  });
  return processedData;
}

function parseReleaseDate(dateString) {
  if (!dateString) return null;
  const match1 = dateString.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (match1) return new Date(parseInt(match1[1]), parseInt(match1[2]) - 1, parseInt(match1[3]));
  const match2 = dateString.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (match2) return new Date(parseInt(match2[1]), parseInt(match2[2]) - 1, parseInt(match2[3]));
  return null;
}

function formatPrice(price) { return !price ? '价格未公布' : (price.startsWith('¥') ? price : `¥${price}`); }
function formatLocalPrice(price, country) {
  if (!price) return '价格未公布';
  const currencySymbols = { '德国': '€', '挪威': 'kr', '荷兰': '€', '英国': '£', '墨西哥': '$', '巴西': 'R$', '泰国': '฿', '印尼': 'Rp', '澳大利亚': 'A$', '马来西亚': 'RM' };
  return `${currencySymbols[country] || ''}${price}`;
}

async function createCarCards() {
  const carData = await loadCarData();
  const grid = document.getElementById('contentGrid');
  const brandList = document.getElementById('brandList');
  if(!grid || !brandList) return;
  grid.innerHTML = '';
  brandList.innerHTML = '';
  const brands = {};
  carData.forEach(car => {
    if (!brands[car.brand]) brands[car.brand] = [];
    brands[car.brand].push(car);
  });
  const brandOrder = ['比亚迪', '吉利', '小鹏汽车', '蔚来汽车', '赛力斯', '上汽', '广汽', '零跑'];
  const sortedBrands = Object.entries(brands).sort((a, b) => brandOrder.indexOf(a[0]) - brandOrder.indexOf(b[0]));
  sortedBrands.forEach(([brandName, cars], brandIndex) => {
    const brandRow = document.createElement('div');
    brandRow.className = 'brand-row';
    brandRow.id = `brand-row-${brandIndex}`;
    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
      const monthCell = document.createElement('div');
      monthCell.className = 'month-cell';
      const monthCars = cars.filter(car => car.month === monthIndex);
      monthCars.forEach(car => {
        const card = document.createElement('div');
        card.className = `car-card ${car.type}`;
        card.dataset.type = car.type;
        card.dataset.country = car.country;
        card.innerHTML = `
            <div class="car-name">${car.name}</div><div class="car-price">${car.price}</div>
            <div class="car-local-price">${car.localPrice}</div><div class="car-country">${car.country}</div>
            ${car.isNew ? '<div class="new-badge">new</div>' : ''}${car.isExpected ? '<div class="expected-badge">预计</div>' : ''}`;
        const imageName = car.name.toLowerCase().replace(/\s+/g, '_') + '.png';
        const carImage = document.createElement('div');
        carImage.className = 'car-image';
        carImage.style.backgroundImage = `url(/img/${imageName})`;
        card.appendChild(carImage);
        card.title = `${car.name}\n人民币售价: ${car.price}\n当地售价: ${car.localPrice}\n国家: ${car.country}`;
        monthCell.appendChild(card);
      });
      brandRow.appendChild(monthCell);
    }
    grid.appendChild(brandRow);
  });
  sortedBrands.forEach(([brandName], brandIndex) => {
    const brandItem = document.createElement('div');
    brandItem.className = 'brand-item';
    brandItem.id = `brand-item-${brandIndex}`;
    brandItem.dataset.brand = brandName;
    const brandKey = Object.keys(brandMap).find(key => brandMap[key].displayName === brandName);
    if (brandKey) {
      brandItem.innerHTML = `<div class="brand-logo" style="${brandMap[brandKey].logoStyle}">${brandKey}</div><div class="brand-name">${brandMap[brandKey].displayName}</div>`;
      brandList.appendChild(brandItem);
    }
  });
  setTimeout(() => {
    syncBrandHeights();
    positionBrandLogos(window.pageYOffset || document.documentElement.scrollTop);
  }, 100);
}

function syncBrandHeights() {
  const brandItems = document.querySelectorAll('.brand-item');
  let accumulatedHeight = 20;
  for (let i = 0; i < brandItems.length; i++) {
    const brandRow = document.getElementById(`brand-row-${i}`);
    const brandItem = brandItems[i];
    if (brandRow && brandItem) {
      if (brandRow.style.display === 'none') {
        brandItem.style.display = 'none';
        continue;
      } else {
        brandItem.style.display = 'flex';
      }
      const rowHeight = brandRow.offsetHeight;
      brandItem.style.height = `${rowHeight}px`;
      brandItem.style.visibility = 'visible';
      brandItem.style.position = 'absolute';
      brandItem.style.top = `${accumulatedHeight}px`;
      brandItem.style.left = '0';
      brandItem.style.width = '70px';
      accumulatedHeight += rowHeight;
    }
  }
}

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  positionBrandLogos(scrollTop);
}

function positionBrandLogos(scrollTop) {
  const brandItems = document.querySelectorAll('.brand-item');
  const sidebar = document.querySelector('.brand-sidebar');
  if(!sidebar) return;
  const sidebarHeight = sidebar.offsetHeight;
  let accumulatedHeight = 20;

  for (let i = 0; i < brandItems.length; i++) {
    const brandRow = document.getElementById(`brand-row-${i}`);
    const brandItem = brandItems[i];
    if (brandRow && brandItem) {
      if (brandRow.style.display === 'none') {
        brandItem.style.display = 'none';
        continue;
      } else {
        brandItem.style.display = 'flex';
      }
      const rowHeight = brandRow.offsetHeight;
      const rowTopInSidebar = accumulatedHeight - scrollTop;

      brandItem.style.position = 'absolute';
      brandItem.style.top = `${rowTopInSidebar}px`;
      brandItem.style.left = '0';
      brandItem.style.width = '70px';
      brandItem.style.height = `${rowHeight}px`;

      if (rowTopInSidebar + rowHeight < 0 || rowTopInSidebar > sidebarHeight) {
        brandItem.style.visibility = 'hidden';
      } else {
        brandItem.style.visibility = 'visible';
      }

      accumulatedHeight += rowHeight;
    }
  }
}

function setupFilter() {
  const carTypeAll = document.getElementById('carTypeAll');
  const countryAll = document.getElementById('countryAll');
  const carTypeItems = document.querySelectorAll('.legend-item');
  const countryItems = document.querySelectorAll('.country-item');
  let selectedCarTypes = [];
  let selectedCountries = [];
  function applyFilters() {
    const cards = document.querySelectorAll('.car-card');
    const brandRows = document.querySelectorAll('.brand-row');
    brandRows.forEach(row => row.style.display = 'none');
    cards.forEach(card => {
      const typeMatch = selectedCarTypes.length === 0 || selectedCarTypes.includes(card.dataset.type);
      const countryMatch = selectedCountries.length === 0 || selectedCountries.includes(card.dataset.country);
      if (typeMatch && countryMatch) {
        card.style.display = 'flex';
        const brandRow = card.closest('.brand-row');
        if (brandRow) brandRow.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
    setTimeout(() => {
      syncBrandHeights();
      positionBrandLogos(window.pageYOffset || document.documentElement.scrollTop);
    }, 10);
  }
  function handleCarTypeFilter(type, element) {
    if (type === 'all') {
      selectedCarTypes = [];
      carTypeItems.forEach(item => item.classList.remove('active'));
      carTypeAll.classList.add('active');
    } else {
      const index = selectedCarTypes.indexOf(type);
      if (index === -1) { selectedCarTypes.push(type); element.classList.add('active'); }
      else { selectedCarTypes.splice(index, 1); element.classList.remove('active'); }
      if (selectedCarTypes.length === 0) carTypeAll.classList.add('active');
      else carTypeAll.classList.remove('active');
    }
    applyFilters();
  }
  function handleCountryFilter(country, element) {
    if (country === 'all') {
      selectedCountries = [];
      countryItems.forEach(item => item.classList.remove('active'));
      countryAll.classList.add('active');
    } else {
      const index = selectedCountries.indexOf(country);
      if (index === -1) { selectedCountries.push(country); element.classList.add('active'); }
      else { selectedCountries.splice(index, 1); element.classList.remove('active'); }
      if (selectedCountries.length === 0) countryAll.classList.add('active');
      else countryAll.classList.remove('active');
    }
    applyFilters();
  }
  carTypeAll.addEventListener('click', () => handleCarTypeFilter('all', null));
  carTypeItems.forEach(item => item.addEventListener('click', () => handleCarTypeFilter(item.dataset.type, item)));
  countryAll.addEventListener('click', () => handleCountryFilter('all', null));
  countryItems.forEach(item => item.addEventListener('click', () => handleCountryFilter(item.dataset.country, item)));
}
</script>

<template>
  <div class="timeline-container">
    <BackToHomeLogo />

    <div class="month-header">
      <div class="month-item">1月</div><div class="month-item">2月</div><div class="month-item">3月</div>
      <div class="month-item">4月</div><div class="month-item">5月</div><div class="month-item">6月</div>
      <div class="month-item">7月</div><div class="month-item">8月</div><div class="month-item">9月</div>
      <div class="month-item">10月</div><div class="month-item">11月</div><div class="month-item">12月</div>
    </div>
    <div class="brand-sidebar"><div class="brand-list" id="brandList"></div></div>
    <div class="main-content"><div class="content-grid" id="contentGrid"></div></div>

    <div class="filter-container">
      <div id="saveAsImageBtn" class="save-button">
        保存为图片
      </div>
      <div class="legend">
        <div class="legend-grid">
          <div class="legend-all active" id="carTypeAll">全部</div>
          <div class="legend-item" data-type="sedan"><div class="legend-color" style="background: linear-gradient(135deg, #2196F3, #42A5F5);"></div><div class="legend-text">轿车</div></div>
          <div class="legend-item" data-type="suv"><div class="legend-color" style="background: linear-gradient(135deg, #FF9800, #FFA726);"></div><div class="legend-text">SUV</div></div>
          <div class="legend-item" data-type="mpv"><div class="legend-color" style="background: linear-gradient(135deg, #9C27B0, #AB47BC);"></div><div class="legend-text">MPV</div></div>
          <div class="legend-item" data-type="pickup"><div class="legend-color" style="background: linear-gradient(135deg, #795548, #5D4037);"></div><div class="legend-text">皮卡</div></div>
        </div>
      </div>
      <div class="country-filter">
        <div class="country-grid">
          <div class="country-all active" id="countryAll">全部</div>
          <div class="country-item" data-country="德国"><div class="country-flag" style="background-image:url('/img/flags/DE.png');"></div><div class="country-name">德国</div></div>
          <div class="country-item" data-country="挪威"><div class="country-flag" style="background-image:url('/img/flags/NO.png');"></div><div class="country-name">挪威</div></div>
          <div class="country-item" data-country="荷兰"><div class="country-flag" style="background-image:url('/img/flags/NL.png');"></div><div class="country-name">荷兰</div></div>
          <div class="country-item" data-country="英国"><div class="country-flag" style="background-image:url('/img/flags/GB.png');"></div><div class="country-name">英国</div></div>
          <div class="country-item" data-country="墨西哥"><div class="country-flag" style="background-image:url('/img/flags/MX.png');"></div><div class="country-name">墨西哥</div></div>
          <div class="country-item" data-country="巴西"><div class="country-flag" style="background-image:url('/img/flags/BR.png');"></div><div class="country-name">巴西</div></div>
          <div class="country-item" data-country="泰国"><div class="country-flag" style="background-image:url('/img/flags/TH.png');"></div><div class="country-name">泰国</div></div>
          <div class="country-item" data-country="印尼"><div class="country-flag" style="background-image:url('/img/flags/ID.png');"></div><div class="country-name">印尼</div></div>
          <div class="country-item" data-country="澳大利亚"><div class="country-flag" style="background-image:url('/img/flags/AU.png');"></div><div class="country-name">澳大利亚</div></div>
          <div class="country-item" data-country="马来西亚"><div class="country-flag" style="background-image:url('/img/flags/MY.png');"></div><div class="country-name">马来西亚</div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="loading-overlay" id="loadingOverlay" style="display: flex;">
    <div class="spinner"></div>
  </div>
</template>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
.timeline-container { position: relative; width: 100%; min-height: 100vh; background: #f8f9fa; color: #333; padding: 20px; overflow-x: hidden; }
.month-header { position: fixed; top: 20px; left: 90px; height: 70px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); border-radius: 35px; display: flex; z-index: 100; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.3); overflow: hidden; }
.month-item { width: calc((100vw - 110px) / 12); min-width: calc((100vw - 110px) / 12); max-width: calc((100vw - 110px) / 12); flex: none; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 17px; color: #444; position: relative; transition: all 0.3s ease; }
.month-item:not(:last-child)::after { content: ''; position: absolute; right: 0; top: 50%; transform: translateY(-50%); height: 40%; width: 1px; background: rgba(234, 234, 234, 0.6); }
.brand-sidebar { position: fixed; left: 20px; top: 110px; width: 70px; height: calc(100vh - 140px); background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-radius: 35px; overflow: hidden; z-index: 99; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.3); padding: 0; display: flex; justify-content: center; }
.brand-list { position: relative; height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; padding: 20px 0; }
.brand-item { width: 70px; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; padding: 10px 0; transition: all 0.3s ease; border-radius: 20px; height: 70px; }
.brand-logo { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; color: white; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
.brand-name { font-size: 10px; color: #555; text-align: center; line-height: 1.2; font-weight: 500; margin-top: 5px; }
.main-content { margin-left: 70px; margin-top: 110px; padding: 0; min-height: calc(100vh - 130px); }
.content-grid { display: flex; flex-direction: column; width: calc(100vw - 110px); }
.brand-row { display: flex; min-height: 130px; border-bottom: 1px solid #eaeaea; position: relative; }
.month-cell { width: calc((100vw - 110px) / 12); min-width: calc((100vw - 110px) / 12); max-width: calc((100vw - 110px) / 12); flex: none; border-right: 1px solid #eaeaea; padding: 12px; display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
.month-cell:last-child { border-right: none; }
.car-card { width: 100%; padding: 15px 10px 10px; border-radius: 8px; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08); cursor: pointer; transition: all 0.3s ease; min-height: 80px; display: flex; flex-direction: column; justify-content: center; position: relative; margin-bottom: 8px; border: 1px solid #eaeaea; background: white; overflow: hidden; }
.car-card:last-child { margin-bottom: 0; }
.car-card:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15); z-index: 10; }
.car-card.pickup { background: linear-gradient(135deg, #795548, #5D4037); color: white; border: none; }
.car-card.sedan { background: linear-gradient(135deg, #2196F3, #42A5F5); color: white; border: none; }
.car-card.suv { background: linear-gradient(135deg, #FF9800, #FFA726); color: white; border: none; }
.car-card.mpv { background: linear-gradient(135deg, #9C27B0, #AB47BC); color: white; border: none; }
.car-name { font-weight: bold; font-size: 13px; margin-bottom: 4px; line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.car-price, .car-local-price, .car-country { font-size: 11px; opacity: 0.9; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.car-image { position: absolute; bottom: 0; right: 0; width: 90px; height: 60px; transform: scale(1.2); background-size: contain; background-repeat: no-repeat; background-position: right center; z-index: 0; pointer-events: none; opacity: 0.7; }
.new-badge { position: absolute; top: 5px; right: 5px; background: #4CAF50; color: white; padding: 3px 10px; border-radius: 15px; font-size: 10px; font-weight: bold; z-index: 20; }
.expected-badge { position: absolute; top: 5px; right: 5px; background: #2196F3; color: white; padding: 3px 10px; border-radius: 15px; font-size: 10px; font-weight: bold; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); z-index: 20; }
.filter-container { position: fixed; bottom: 30px; right: 30px; display: flex; flex-direction: column; gap: 15px; z-index: 1000; align-items: flex-end; }
.save-button { background: rgba(76, 175, 80, 0.8); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); color: white; padding: 0 20px; border-radius: 35px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.3); display: flex; align-items: center; justify-content: center; height: 50px; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.3s ease; }
.save-button:hover { background: rgba(76, 175, 80, 1); transform: scale(1.05); }
.legend { background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(6px); padding: 10px 20px; border-radius: 35px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.3); display: flex; align-items: center; gap: 15px; height: 50px; }
.legend-item { display: flex; align-items: center; cursor: pointer; padding: 5px 8px; border-radius: 15px; transition: all 0.3s ease; }
.legend-item.active { background: rgba(76, 175, 80, 0.2); box-shadow: 0 0 0 2px #4CAF50; }
.legend-color { width: 20px; height: 20px; border-radius: 4px; margin-right: 8px; }
.legend-text { font-size: 12px; color: #555; font-weight: 500; }
.country-filter { background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(6px); padding: 0 16px; border-radius: 35px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.3); display: flex; align-items: center; height: 50px; transition: all 0.3s ease; overflow: hidden; max-width: 100%; }
.country-grid { display: flex; gap: 12px; padding: 0 4px; }
.country-item { display: flex; align-items: center; cursor: pointer; padding: 5px 6px; border-radius: 999px; transition: all 0.3s ease; position: relative; overflow: hidden; background: rgba(255, 255, 255, 0); }
.country-item.active { background: rgba(76, 175, 80, 0.2); box-shadow: 0 0 0 2px #4CAF50; }
.country-flag { width: 32px; height: 24px; border-radius: 3px; background-size: cover; background-position: center; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
.country-name { font-size: 12px; color: #555; font-weight: 500; margin-left: 0; opacity: 0; max-width: 0; overflow: hidden; transition: all 0.3s ease; white-space: nowrap; transform: translateX(-10px); }
.country-filter:hover .country-name { opacity: 1; max-width: 60px; margin-left: 8px; transform: translateX(0); }
.country-filter:hover .country-item { padding: 5px 10px; }
.loading-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255, 255, 255, 0.9); display: flex; justify-content: center; align-items: center; z-index: 2000; }
.spinner { width: 50px; height: 50px; border: 5px solid rgba(0, 0, 0, 0.1); border-radius: 50%; border-top: 5px solid #3498db; animation: spin 1s linear infinite; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
.legend-all, .country-all { background: rgba(255, 255, 255, 0.8); border: 1px solid #ddd; border-radius: 15px; padding: 5px 12px; margin-right: 10px; cursor: pointer; font-size: 12px; font-weight: 500; transition: all 0.3s ease; }
.legend-all.active, .country-all.active { background: rgba(76, 175, 80, 0.2); box-shadow: 0 0 0 2px #4CAF50; }
.legend-grid, .country-grid { display: flex; align-items: center; }
</style>