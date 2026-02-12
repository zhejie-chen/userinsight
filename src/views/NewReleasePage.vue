<script setup>
import { onMounted, onUnmounted, ref, computed, watch } from 'vue';
import { getAllCarsForTimeline } from '@/services/api/cars.js';
import html2canvas from 'html2canvas';
import BackToHomeLogo from '../components/BackToHomeLogo.vue';

let resizeObserver;

// --- 状态管理 ---
const selectedYear = ref(2026);
const selectedCarTypes = ref([]); 
const selectedRegion = ref('all');
const selectedCountry = ref('all');
const selectedBrand = ref('all');

const globalCarData = ref([]);
const yearCounts = ref({ y2025: 0, y2026: 0 });

// --- 大区映射 ---
const regionMap = {
  '东南亚': ['泰国', '马来西亚', '印度尼西亚', '菲律宾', '越南', '新加坡', '缅甸', '澳大利亚', '新西兰', '巴基斯坦'],
  '中南美': ['墨西哥', '巴西', '阿根廷', '智利', '哥伦比亚', '乌拉圭', '秘鲁'],
  '欧洲': ['德国', '法国', '西班牙', '意大利', '葡萄牙', '英国', '爱尔兰', '比利时', '荷兰', '奥地利', '瑞士', '卢森堡', '瑞典', '挪威', '芬兰', '丹麦', '希腊', '波兰', '土耳其'],
  '欧亚': ['俄罗斯', '捷克', '斯洛伐克', '匈牙利', '罗马尼亚', '克罗地亚', '斯洛文尼亚', '保加利亚', '哈萨克斯坦', '乌克兰', '爱沙尼亚'],
  '中东非': ['以色列', '沙特阿拉伯', '阿联酋', '科威特', '阿曼', '埃及', '南非'],
  '其他': ['中国', '中国台湾', '日本', '韩国', '印度', '波多黎各', '美国', '加拿大']
};

function getRegion(country) {
  for (const [region, countries] of Object.entries(regionMap)) {
    if (countries.includes(country)) return region;
  }
  return '其他';
}

// 数据筛选
const currentYearCars = computed(() => {
  return globalCarData.value.filter(c => c.year === selectedYear.value);
});

// --- 数量统计 (用于悬浮显示) ---
const typeCounts = computed(() => {
  const cars = currentYearCars.value;
  return {
    total: cars.length,
    sedan: cars.filter(c => c.type === 'sedan').length,
    suv: cars.filter(c => c.type === 'suv').length,
    mpv: cars.filter(c => c.type === 'mpv').length,
    pickup: cars.filter(c => c.type === 'pickup').length
  };
});

const regionOptions = computed(() => {
  const map = {};
  currentYearCars.value.forEach(c => map[c.region] = (map[c.region] || 0) + 1);
  const predefinedOrder = ['东南亚', '欧洲', '中南美', '中东非', '欧亚', '其他'];
  return Object.entries(map)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => predefinedOrder.indexOf(a.name) - predefinedOrder.indexOf(b.name));
});

const countryOptions = computed(() => {
  const map = {};
  const baseCars = selectedRegion.value === 'all' 
    ? currentYearCars.value 
    : currentYearCars.value.filter(c => c.region === selectedRegion.value);
  
  baseCars.forEach(c => map[c.country] = (map[c.country] || 0) + 1);
  return Object.entries(map).map(([name, count]) => ({ name, count })).sort((a,b) => a.name.localeCompare(b.name, 'zh-CN'));
});

const countryTotalCount = computed(() => {
  if (selectedRegion.value === 'all') return typeCounts.value.total;
  return currentYearCars.value.filter(c => c.region === selectedRegion.value).length;
});

const brandOptions = computed(() => {
  const map = {};
  currentYearCars.value.forEach(c => map[c.brand] = (map[c.brand] || 0) + 1);
  return Object.entries(map).map(([name, count]) => ({ name, count })).sort((a,b) => a.name.localeCompare(b.name, 'zh-CN'));
});

// 获取选中项的提示文字
const getBrandTitle = computed(() => {
  if(selectedBrand.value === 'all') return `${typeCounts.value.total}款`;
  const target = brandOptions.value.find(b => b.name === selectedBrand.value);
  return target ? `${target.count}款` : '';
});

const getRegionTitle = computed(() => {
  if(selectedRegion.value === 'all') return `${typeCounts.value.total}款`;
  const target = regionOptions.value.find(r => r.name === selectedRegion.value);
  return target ? `${target.count}款` : '';
});

const getCountryTitle = computed(() => {
  if(selectedCountry.value === 'all') return `${countryTotalCount.value}款`;
  const target = countryOptions.value.find(c => c.name === selectedCountry.value);
  return target ? `${target.count}款` : '';
});

function toggleCarType(type) {
  if (type === 'all') {
    selectedCarTypes.value = [];
  } else {
    const index = selectedCarTypes.value.indexOf(type);
    if (index === -1) selectedCarTypes.value.push(type);
    else selectedCarTypes.value.splice(index, 1);
  }
}

watch([selectedCarTypes, selectedRegion, selectedCountry, selectedBrand], () => {
  applyFiltersGlobal();
}, { deep: true });

watch(selectedRegion, () => {
  selectedCountry.value = 'all'; 
});

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

function getBrandConfig(name) {
  if (brandMap[name]) return brandMap[name];
  return { displayName: name, logoStyle: 'background: linear-gradient(135deg, #7f8c8d, #95a5a6);' };
}

const carTypeMap = { '皮卡': 'pickup', '轿车': 'sedan', 'SUV': 'suv', 'MPV': 'mpv' };
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const todayTime = new Date(currentYear, currentMonth, currentDate.getDate()).getTime();

function parseReleaseDate(dateString) {
  if (!dateString) return null;
  const match1 = dateString.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (match1) return new Date(parseInt(match1[1]), parseInt(match1[2]) - 1, parseInt(match1[3]));
  const match2 = dateString.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (match2) return new Date(parseInt(match2[1]), parseInt(match2[2]) - 1, parseInt(match2[3]));
  return null;
}

function formatPrice(priceRaw) { 
  if (!priceRaw) return '价格未公布';
  return `¥ ${Number(priceRaw).toLocaleString('en-US')}`; 
}

function formatLocalPrice(priceRaw, currencyCode) {
  if (!priceRaw) return '价格未公布';
  return `${currencyCode || ''} ${Number(priceRaw).toLocaleString('en-US')}`.trim();
}

async function fetchAndProcessAllData() {
  const loadingOverlay = document.getElementById('loadingOverlay');
  try {
    if(loadingOverlay) loadingOverlay.style.display = 'flex';
    const rawData = await getAllCarsForTimeline();
    
    const processed = [];
    rawData.forEach(item => {
      const releaseDate = parseReleaseDate(item['上市时间']);
      if (!releaseDate) return;
      
      const year = releaseDate.getFullYear();
      let brandInfo = (year === 2026) ? getBrandConfig(item['公司']) : brandMap[item['公司']];
      if (!brandInfo) return;

      const month = releaseDate.getMonth();
      const releaseTime = new Date(year, month, releaseDate.getDate()).getTime();
      let isNew = false;
      let isExpected = false;

      if (releaseTime > todayTime) isExpected = true;
      else if (year === currentYear && month === currentMonth) isNew = true;

      processed.push({
        year,
        brand: brandInfo.displayName, 
        month, 
        name: item['车型'],
        price: formatPrice(item['售价-人民币']),
        localPrice: formatLocalPrice(item['售价'], item['汇率']),
        type: carTypeMap[item['厢型']] || 'suv', 
        country: item['国家'], 
        region: getRegion(item['国家']),
        isNew, 
        isExpected
      });
    });

    globalCarData.value = processed;
    yearCounts.value.y2025 = processed.filter(c => c.year === 2025).length;
    yearCounts.value.y2026 = processed.filter(c => c.year === 2026).length;

  } catch (error) {
    console.error('加载汽车数据失败:', error);
  } finally {
    if(loadingOverlay) loadingOverlay.style.display = 'none';
  }
}

function renderGrid() {
  const grid = document.getElementById('contentGrid');
  const brandList = document.getElementById('brandList');
  if(!grid || !brandList) return;
  
  grid.innerHTML = '';
  brandList.innerHTML = '';
  
  const brands = {};
  currentYearCars.value.forEach(car => {
    if (!brands[car.brand]) brands[car.brand] = [];
    brands[car.brand].push(car);
  });
  
  const brandOrder = ['比亚迪', '吉利', '小鹏汽车', '蔚来汽车', '赛力斯', '上汽', '广汽', '零跑'];
  const sortedBrands = Object.entries(brands).sort((a, b) => {
    const indexA = brandOrder.indexOf(a[0]);
    const indexB = brandOrder.indexOf(b[0]);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return a[0].localeCompare(b[0], 'zh-CN');
  });

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
        card.dataset.region = car.region;
        card.dataset.brand = car.brand;
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
    let brandKey = Object.keys(brandMap).find(key => brandMap[key].displayName === brandName);
    let style = 'background: linear-gradient(135deg, #7f8c8d, #95a5a6);'; 
    if (brandKey) style = brandMap[brandKey].logoStyle;
    else brandKey = brandName.substring(0, 2); 
    brandItem.innerHTML = `<div class="brand-logo" style="${style}">${brandKey}</div><div class="brand-name">${brandName}</div>`;
    brandList.appendChild(brandItem);
  });

  applyFiltersGlobal();

  setTimeout(() => {
    syncBrandHeights();
    positionBrandLogos(window.pageYOffset || document.documentElement.scrollTop);
  }, 100);
}

function syncBrandHeights() {
  const brandItems = document.querySelectorAll('#new-release-page-wrapper .brand-item');
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
      brandItem.style.width = '56px';
      accumulatedHeight += rowHeight;
    }
  }
}

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  positionBrandLogos(scrollTop);
}

function positionBrandLogos(scrollTop) {
  const brandItems = document.querySelectorAll('#new-release-page-wrapper .brand-item');
  const sidebar = document.querySelector('#new-release-page-wrapper .brand-sidebar');
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
      brandItem.style.width = '56px';
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

function applyFiltersGlobal() {
    const cards = document.querySelectorAll('#new-release-page-wrapper .car-card');
    const brandRows = document.querySelectorAll('#new-release-page-wrapper .brand-row');
    if (cards.length === 0) return;

    brandRows.forEach(row => row.style.display = 'none');
    
    cards.forEach(card => {
      const typeMatch = selectedCarTypes.value.length === 0 || selectedCarTypes.value.includes(card.dataset.type);
      const regionMatch = selectedRegion.value === 'all' || card.dataset.region === selectedRegion.value;
      const countryMatch = selectedCountry.value === 'all' || card.dataset.country === selectedCountry.value;
      const brandMatch = selectedBrand.value === 'all' || card.dataset.brand === selectedBrand.value;

      if (typeMatch && regionMatch && countryMatch && brandMatch) {
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

function switchYear(year) {
  if (selectedYear.value === year) return;
  selectedYear.value = year;
  renderGrid(); 
}

async function saveAsImage() {
  const timelineContainer = document.querySelector('#new-release-page-wrapper .timeline-container');
  const brandSidebar = document.querySelector('#new-release-page-wrapper .brand-sidebar');
  const mainContent = document.querySelector('#new-release-page-wrapper .main-content');
  const filterContainer = document.querySelector('#new-release-page-wrapper .filter-container');
  const saveBtn = document.getElementById('saveAsImageBtn');
  const loadingOverlay = document.getElementById('loadingOverlay');

  const originalSidebarStyle = brandSidebar.style.cssText;
  const originalFilterStyle = filterContainer.style.cssText;
  const originalContainerStyle = timelineContainer.style.cssText;

  try {
    if(loadingOverlay) loadingOverlay.style.display = 'flex';
    if(saveBtn) saveBtn.style.display = 'none';

    const contentGridHeight = mainContent.scrollHeight;
    timelineContainer.style.height = 'auto';
    brandSidebar.style.position = 'absolute';
    brandSidebar.style.height = `${contentGridHeight + 80}px`;
    syncBrandHeights();
    positionBrandLogos(0); 

    filterContainer.style.position = 'absolute';
    filterContainer.style.top = `${contentGridHeight + 90}px`;
    filterContainer.style.bottom = 'auto';
    filterContainer.style.justifyContent = 'flex-end';
    filterContainer.style.right = '30px';

    await new Promise(resolve => setTimeout(resolve, 300));

    const canvas = await html2canvas(timelineContainer, {
      useCORS: true,
      allowTaint: true,
      scrollY: -window.scrollY,
      windowWidth: timelineContainer.scrollWidth,
      windowHeight: timelineContainer.scrollHeight
    });

    const link = document.createElement('a');
    link.download = `海外上新时间线_${selectedYear.value}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (error) {
    console.error('保存图片失败:', error);
    alert('图片生成失败，请稍后重试。');
  } finally {
    timelineContainer.style.cssText = originalContainerStyle;
    brandSidebar.style.cssText = originalSidebarStyle;
    filterContainer.style.cssText = originalFilterStyle;
    if(saveBtn) saveBtn.style.display = 'flex';
    handleScroll(); 
    if(loadingOverlay) loadingOverlay.style.display = 'none';
  }
}

onMounted(async () => {
  await fetchAndProcessAllData();
  renderGrid();
  window.addEventListener('scroll', handleScroll);

  resizeObserver = new ResizeObserver(() => {
    syncBrandHeights();
    positionBrandLogos(window.pageYOffset || document.documentElement.scrollTop);
  });
  const gridEl = document.getElementById('contentGrid');
  if (gridEl) resizeObserver.observe(gridEl);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (resizeObserver) resizeObserver.disconnect();
});
</script>

<template>
  <div id="new-release-page-wrapper">
    <div class="timeline-container">
      
      <div class="logo-wrapper">
        <BackToHomeLogo />
      </div>

      <div class="month-header">
        <div class="month-item">1月</div><div class="month-item">2月</div><div class="month-item">3月</div>
        <div class="month-item">4月</div><div class="month-item">5月</div><div class="month-item">6月</div>
        <div class="month-item">7月</div><div class="month-item">8月</div><div class="month-item">9月</div>
        <div class="month-item">10月</div><div class="month-item">11月</div><div class="month-item">12月</div>
      </div>
      
      <div class="brand-sidebar"><div class="brand-list" id="brandList"></div></div>
      <div class="main-content"><div class="content-grid" id="contentGrid"></div></div>

      <div class="filter-container">
        <div class="filter-bar">
          
          <div class="filter-group year-group">
            <div class="year-item" @click="switchYear(2026)">
              <div class="year-pill" :class="{ active: selectedYear === 2026 }">2026</div>
              <div class="hover-tip">共{{ yearCounts.y2026 }}款</div>
            </div>
            <div class="year-item" @click="switchYear(2025)">
              <div class="year-pill" :class="{ active: selectedYear === 2025 }">2025</div>
              <div class="hover-tip">共{{ yearCounts.y2025 }}款</div>
            </div>
          </div>

          <div class="divider"></div>

          <div class="filter-group type-group">
            <div class="legend-item" @click="toggleCarType('all')">
              <div class="legend-pill" :class="{ active: selectedCarTypes.length === 0 }">
                <div class="legend-text" style="margin-left:0">全部</div>
              </div>
              <div class="hover-tip">共{{ typeCounts.total }}款</div>
            </div>
            <div class="legend-item" @click="toggleCarType('sedan')">
              <div class="legend-pill" :class="{ active: selectedCarTypes.includes('sedan') }">
                <div class="legend-color" style="background: linear-gradient(135deg, #2196F3, #42A5F5);"></div><div class="legend-text">轿车</div>
              </div>
              <div class="hover-tip">{{ typeCounts.sedan }}款</div>
            </div>
            <div class="legend-item" @click="toggleCarType('suv')">
              <div class="legend-pill" :class="{ active: selectedCarTypes.includes('suv') }">
                <div class="legend-color" style="background: linear-gradient(135deg, #FF9800, #FFA726);"></div><div class="legend-text">SUV</div>
              </div>
              <div class="hover-tip">{{ typeCounts.suv }}款</div>
            </div>
            <div class="legend-item" @click="toggleCarType('mpv')">
              <div class="legend-pill" :class="{ active: selectedCarTypes.includes('mpv') }">
                <div class="legend-color" style="background: linear-gradient(135deg, #9C27B0, #AB47BC);"></div><div class="legend-text">MPV</div>
              </div>
              <div class="hover-tip">{{ typeCounts.mpv }}款</div>
            </div>
            <div class="legend-item" @click="toggleCarType('pickup')">
              <div class="legend-pill" :class="{ active: selectedCarTypes.includes('pickup') }">
                <div class="legend-color" style="background: linear-gradient(135deg, #795548, #5D4037);"></div><div class="legend-text">皮卡</div>
              </div>
              <div class="hover-tip">{{ typeCounts.pickup }}款</div>
            </div>
          </div>

          <div class="divider"></div>

          <div class="filter-group brand-group">
            <div class="select-wrapper">
              <select v-model="selectedBrand" class="custom-select">
                <option value="all">所有品牌</option>
                <option v-for="b in brandOptions" :key="b.name" :value="b.name">
                  {{ b.name }}
                </option>
              </select>
              <div class="hover-tip">{{ getBrandTitle }}</div>
            </div>
          </div>

          <div class="filter-group location-group">
            <div class="select-wrapper">
              <select v-model="selectedRegion" class="custom-select">
                <option value="all">所有大区</option>
                <option v-for="r in regionOptions" :key="r.name" :value="r.name">
                  {{ r.name }}
                </option>
              </select>
              <div class="hover-tip">{{ getRegionTitle }}</div>
            </div>

            <div class="select-wrapper">
              <select v-model="selectedCountry" class="custom-select">
                <option value="all">所有国家</option>
                <option v-for="c in countryOptions" :key="c.name" :value="c.name">
                  {{ c.name }}
                </option>
              </select>
              <div class="hover-tip">{{ getCountryTitle }}</div>
            </div>
          </div>

          <div class="divider"></div>

          <div id="saveAsImageBtn" class="save-button" @click="saveAsImage">
            保存图片
          </div>

        </div>
      </div>
    </div>
    
    <div class="loading-overlay" id="loadingOverlay" style="display: flex;">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<style>
#new-release-page-wrapper * { margin: 0; padding: 0; box-sizing: border-box; }
#new-release-page-wrapper .timeline-container { position: relative; width: 100%; min-height: 100vh; background: #f8f9fa; color: #333; padding: 20px; overflow-x: hidden; }

/* ======== Logo Wrapper: 完美居中对齐 ======== */
/* 通过 top: 20px, left: 20px 定位，与 header 和 sidebar 的起点重合 */
#new-release-page-wrapper .logo-wrapper {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 56px; 
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
  background: transparent;
  border: none;
  box-shadow: none;
  backdrop-filter: none;
}
/* 限制图片大小，避免撑破 */
#new-release-page-wrapper .logo-wrapper :deep(img),
#new-release-page-wrapper .logo-wrapper :deep(svg) {
  max-width: 28px;
  max-height: 28px;
  object-fit: contain;
  display: block; 
}

#new-release-page-wrapper .month-header { position: fixed; top: 20px; left: 90px; height: 46px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); border-radius: 23px; display: flex; z-index: 100; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.3); overflow: hidden; }
#new-release-page-wrapper .month-item { width: calc((100vw - 110px) / 12); min-width: calc((100vw - 110px) / 12); max-width: calc((100vw - 110px) / 12); flex: none; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px; color: #444; position: relative; transition: all 0.3s ease; }
#new-release-page-wrapper .month-item:not(:last-child)::after { content: ''; position: absolute; right: 0; top: 50%; transform: translateY(-50%); height: 40%; width: 1px; background: rgba(234, 234, 234, 0.6); }

#new-release-page-wrapper .brand-sidebar { position: fixed; left: 20px; top: 80px; width: 56px; height: calc(100vh - 100px); background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-radius: 28px; overflow: hidden; z-index: 99; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.3); padding: 0; display: flex; justify-content: center; }
#new-release-page-wrapper .brand-list { position: relative; height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; padding: 20px 0; }
#new-release-page-wrapper .brand-item { width: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; padding: 10px 0; transition: all 0.3s ease; border-radius: 20px; height: 70px; }
#new-release-page-wrapper .brand-logo { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 11px; color: white; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
#new-release-page-wrapper .brand-name { font-size: 10px; color: #555; text-align: center; line-height: 1.2; font-weight: 500; margin-top: 3px; }

#new-release-page-wrapper .main-content { margin-left: 70px; margin-top: 60px; padding: 0; min-height: calc(100vh - 80px); }
#new-release-page-wrapper .content-grid { display: flex; flex-direction: column; width: calc(100vw - 110px); }
#new-release-page-wrapper .brand-row { display: flex; min-height: 130px; border-bottom: 1px solid #eaeaea; position: relative; }
#new-release-page-wrapper .month-cell { width: calc((100vw - 110px) / 12); min-width: calc((100vw - 110px) / 12); max-width: calc((100vw - 110px) / 12); flex: none; border-right: 1px solid #eaeaea; padding: 12px; display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
#new-release-page-wrapper .month-cell:last-child { border-right: none; }
/* ============================== */

#new-release-page-wrapper .car-card { width: 100%; padding: 15px 10px 10px; border-radius: 8px; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08); cursor: pointer; transition: all 0.3s ease; min-height: 80px; display: flex; flex-direction: column; justify-content: center; position: relative; margin-bottom: 8px; border: 1px solid #eaeaea; background: white; overflow: hidden; }
#new-release-page-wrapper .car-card:last-child { margin-bottom: 0; }
#new-release-page-wrapper .car-card:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15); z-index: 10; }
#new-release-page-wrapper .car-card.pickup { background: linear-gradient(135deg, #795548, #5D4037); color: white; border: none; }
#new-release-page-wrapper .car-card.sedan { background: linear-gradient(135deg, #2196F3, #42A5F5); color: white; border: none; }
#new-release-page-wrapper .car-card.suv { background: linear-gradient(135deg, #FF9800, #FFA726); color: white; border: none; }
#new-release-page-wrapper .car-card.mpv { background: linear-gradient(135deg, #9C27B0, #AB47BC); color: white; border: none; }
#new-release-page-wrapper .car-name { font-weight: bold; font-size: 13px; margin-bottom: 4px; line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
#new-release-page-wrapper .car-price { font-size: 14px; font-weight: 800; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; letter-spacing: 0.5px; }
#new-release-page-wrapper .car-local-price { font-size: 10px; opacity: 0.7; font-weight: 400; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 4px; }
#new-release-page-wrapper .car-country { font-size: 11px; opacity: 0.9; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
#new-release-page-wrapper .car-image { position: absolute; bottom: 0; right: 0; width: 90px; height: 60px; transform: scale(1.2); background-size: contain; background-repeat: no-repeat; background-position: right center; z-index: 0; pointer-events: none; opacity: 0.7; }
#new-release-page-wrapper .new-badge { position: absolute; top: 5px; right: 5px; background: #4CAF50; color: white; padding: 3px 10px; border-radius: 15px; font-size: 10px; font-weight: bold; z-index: 20; }
#new-release-page-wrapper .expected-badge { position: absolute; top: 5px; right: 5px; background: #2196F3; color: white; padding: 3px 10px; border-radius: 15px; font-size: 10px; font-weight: bold; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); z-index: 20; }

/* ---------------- 底部操作栏: 极简悬浮模式 ---------------- */
#new-release-page-wrapper .filter-container {
  position: fixed;
  bottom: 30px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none; 
}

#new-release-page-wrapper .filter-bar {
  pointer-events: auto; 
  /* 透明度 0.7 与 Sidebar 一致，消除“假白” */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  
  /* 四边Padding 统一 8px，保持细长 */
  display: flex;
  align-items: center; 
  padding: 8px 12px;
  
  border-radius: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  gap: 12px;
}

#new-release-page-wrapper .filter-group {
  display: flex;
  align-items: center; 
  gap: 6px;
}

#new-release-page-wrapper .divider {
  width: 1px;
  height: 20px;
  background: rgba(0, 0, 0, 0.15);
  margin: 0 2px;
}

/* 按钮容器 */
#new-release-page-wrapper .year-item,
#new-release-page-wrapper .legend-item,
#new-release-page-wrapper .select-wrapper {
  position: relative; /* 为悬浮提示框定位 */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* 悬浮提示框 (Tooltip) */
#new-release-page-wrapper .hover-tip {
  position: absolute;
  bottom: 120%; /* 位于按钮上方 */
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 10px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;
  z-index: 2000;
}
#new-release-page-wrapper .year-item:hover .hover-tip,
#new-release-page-wrapper .legend-item:hover .hover-tip,
#new-release-page-wrapper .select-wrapper:hover .hover-tip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* 胶囊按钮 */
#new-release-page-wrapper .year-pill,
#new-release-page-wrapper .legend-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px; /* 细长高度 */
  padding: 0 12px;
  border-radius: 14px;
  transition: all 0.3s ease;
  background: transparent;
}

#new-release-page-wrapper .year-pill.active,
#new-release-page-wrapper .legend-pill.active {
  background: rgba(76, 175, 80, 0.2);
  box-shadow: 0 0 0 2px #4CAF50;
  color: #2e7d32;
}

#new-release-page-wrapper .year-pill:not(.active):hover,
#new-release-page-wrapper .legend-pill:not(.active):hover {
  background: rgba(255, 255, 255, 0.5);
}

#new-release-page-wrapper .year-text { font-size: 13px; font-weight: 600; color: #555; }
#new-release-page-wrapper .legend-text { font-size: 12px; font-weight: 500; color: #555; }
#new-release-page-wrapper .legend-color { width: 12px; height: 12px; border-radius: 3px; margin-right: 6px; }

/* 下拉框 */
#new-release-page-wrapper .custom-select {
  appearance: none;
  background: rgba(255, 255, 255, 0.7) url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E") no-repeat right 10px top 50%;
  background-size: 9px auto;
  border: 1px solid rgba(0,0,0,0.1);
  height: 28px;
  padding: 0 24px 0 12px;
  border-radius: 14px;
  font-size: 12px;
  font-weight: 500;
  color: #444;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  line-height: 26px; 
}

#new-release-page-wrapper .custom-select:hover {
  background-color: rgba(255, 255, 255, 1);
  border-color: #4CAF50;
}

#new-release-page-wrapper .save-button {
  background: rgba(76, 175, 80, 0.9);
  color: white;
  height: 28px; 
  padding: 0 16px;
  border-radius: 14px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

#new-release-page-wrapper .save-button:hover {
  background: rgba(76, 175, 80, 1);
  transform: scale(1.05);
}

#new-release-page-wrapper .loading-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255, 255, 255, 0.9); display: flex; justify-content: center; align-items: center; z-index: 2000; }
#new-release-page-wrapper .spinner { width: 50px; height: 50px; border: 5px solid rgba(0, 0, 0, 0.1); border-radius: 50%; border-top: 5px solid #3498db; animation: spin 1s linear infinite; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
</style>