<script setup>
import { onMounted, onUnmounted } from 'vue';

let chart = null;
let dataTable = null;

onMounted(() => {
  if (typeof echarts === 'undefined' || typeof $ === 'undefined' || typeof $.fn.DataTable === 'undefined') {
    console.error('外部依赖库 (ECharts, jQuery, DataTable) 未能加载！请检查 index.html 文件。');
    return;
  }
  chart = echarts.init(document.getElementById('map'));
  let currentBrand = 'all';
  let selectedCountry = null;
  const mapConfig = { defaultZoom: 1.2, mobileZoom: 1, minZoom: 0.8, maxZoom: 8, breakpoint: 768 };
  let option = {
    tooltip: { trigger: 'item', confine: true },
    series: [{
      type: 'map', map: 'world', roam: true,
      zoom: window.innerWidth < mapConfig.breakpoint ? mapConfig.mobileZoom : mapConfig.defaultZoom,
      scaleLimit: { min: mapConfig.minZoom, max: mapConfig.maxZoom },
      itemStyle: { areaColor: '#e0e0e0', borderColor: '#999' },
      emphasis: { label: { show: true }, itemStyle: { areaColor: '#ffeb3b' } },
      data: []
    }]
  };
  function createBrandButtons() {
    const buttonsContainer = document.getElementById('brandButtons');
    if (typeof brandData === 'undefined') return;
    const brands = Object.keys(brandData).sort();
    brands.forEach(brand => {
      const button = document.createElement('button');
      button.className = 'brand-button';
      button.textContent = brand;
      button.dataset.value = brand;
      button.addEventListener('click', function() {
        document.querySelectorAll('.brand-button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        updateMap(this.dataset.value);
        if (document.getElementById('contentAbove').classList.contains('active')) {
          closePanel();
        }
      });
      buttonsContainer.appendChild(button);
    });
    document.getElementById('allBrandsButton').addEventListener('click', function() {
      document.querySelectorAll('.brand-button').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      updateMap('all');
      if (document.getElementById('contentAbove').classList.contains('active')) {
        closePanel();
      }
    });
  }
  function updateMap(brand) {
    currentBrand = brand;
    let countriesToShow = [];
    if (typeof brandData === 'undefined') return;
    if (brand === 'all') {
      const allCountries = new Set();
      Object.values(brandData).forEach(countries => {
        countries.forEach(country => allCountries.add(country));
      });
      countriesToShow = Array.from(allCountries);
    } else {
      countriesToShow = brandData[brand] || [];
    }
    const data = countriesToShow.map(country => ({
      name: country,
      value: 1,
      itemStyle: { areaColor: '#4caf50' }
    }));
    option.series[0].data = data;
    option.tooltip.formatter = function(params) {
      const country = params.name;
      if (typeof countryData === 'undefined' || !countryData[country]) return `${country}<br/>无数据`;
      const data = countryData[country];
      if (brand === 'all') {
        const brandsInCountry = Object.keys(data.brands);
        return `${country}<br/>入驻品牌：${brandsInCountry.join(', ')}`;
      } else {
        const models = data.brands[brand]?.models ? Object.keys(data.brands[brand].models).join('<br/>') : '无';
        return `${country}<br/>品牌：${brand}<br/>在售车型：<br/>${models}`;
      }
    };
    chart.setOption(option, true);
  }
  function showDataTable(country) {
    selectedCountry = country;
    if (typeof countryData === 'undefined') return;
    const data = countryData[country];
    if (dataTable) { dataTable.destroy(); dataTable = null; }
    const contentAbove = document.getElementById('contentAbove');
    const overlay = document.getElementById('overlay');
    contentAbove.classList.add('active');
    overlay.style.display = 'block';
    document.body.classList.add('no-scroll');
    let rows = [];
    if (data) {
      if (currentBrand === 'all') {
        for (let brand in data.brands) {
          for (let model in data.brands[brand].models) {
            const modelData = data.brands[brand].models[model];
            rows.push([ country, brand, model, modelData.sales, modelData.localPrice, modelData.rmbPrice, `<a href="${modelData.website}" target="_blank">🔗 车型直达</a>` ]);
          }
        }
      } else {
        const brandInfo = data.brands[currentBrand];
        if (brandInfo) {
          for (let model in brandInfo.models) {
            const modelData = brandInfo.models[model];
            rows.push([ country, currentBrand, model, modelData.sales, modelData.localPrice, modelData.rmbPrice, `<a href="${modelData.website}" target="_blank">🔗 车型直达</a>` ]);
          }
        }
      }
    }
    if (rows.length === 0) {
      rows.push(['暂无数据','','','','','','']);
    }
    dataTable = $('#dataTable').DataTable({
      data: rows,
      language: { url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/zh.json" },
      paging: false, searching: false, info: false,
      columns: [
        { title: "国家" }, { title: "品牌" }, { title: "车型" },
        { title: "24年销量 (辆)" }, { title: "当地售价" }, { title: "人民币售价" }, { title: "官网" }
      ],
    });
    $('#dataTable').show();
  }
  function closePanel() {
    document.getElementById('contentAbove').classList.remove('active');
    document.getElementById('overlay').style.display = 'none';
    document.body.classList.remove('no-scroll');
  }
  document.getElementById('overlay').addEventListener('click', closePanel);
  chart.on('click', function(params) {
    if (params.componentType === 'series' && params.name) {
      showDataTable(params.name);
    }
  });
  const handleResize = () => {
    if (chart) {
      option.series[0].zoom = window.innerWidth < mapConfig.breakpoint ? mapConfig.mobileZoom : mapConfig.defaultZoom;
      chart.setOption(option);
      chart.resize();
    }
  };
  window.addEventListener('resize', handleResize);
  createBrandButtons();
  updateMap('all');
  chart.setOption(option);
  onUnmounted(() => {
    if (chart) {
      chart.dispose();
      chart = null;
    }
    if (dataTable) {
      dataTable.destroy();
      dataTable = null;
    }
    window.removeEventListener('resize', handleResize);
  });
});
</script>

<template>
  <main id="main-content" class="pt-11">
    <div class="overlay" id="overlay"></div>
    <div id="map-container">
      <div id="map"></div>
      <div class="map-title">中国新能源品牌出海地图</div>
      <div class="map-controls" id="brandButtons">
        <button class="brand-button active" id="allBrandsButton" data-value="all">全部品牌</button>
      </div>
    </div>
    <div id="contentAbove">
      <table id="dataTable" class="display compact stripe" style="width:100%; display: none;"></table>
    </div>
  </main>
</template>

<style>
main#main-content {
  overflow: hidden;
}
#map-container {
  margin: 0;
  width: 100%;
  height: calc(100vh - 44px);
  border-radius: 0;
  box-shadow: none;
  position: relative;
  background: lightskyblue;
  overflow: hidden;
}
:root { --primary-color: #227fb7; --secondary-color: #4caf50; --text-dark: #2d3436; --text-light: #f8f9fa; }
html { scroll-behavior: smooth; overflow-x: hidden; }
#map { position: relative; top: 0; left: 0; width: 100% !important; height: 100% !important; }
.map-controls { position: absolute; bottom: 20px; left: 20px; z-index: 1; display: flex; flex-wrap: wrap; gap: 8px; max-width: 80%; background: rgba(255, 255, 255, 0.5); padding: 12px; border-radius: 12px; backdrop-filter: blur(5px); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); }
.map-title { position: absolute; top: 20px; left: 20px; z-index: 1; background: rgba(255, 255, 255, 0.5); backdrop-filter: blur(5px); padding: 12px 24px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); font-size: 18px; font-weight: 600; color: #227fb7; border: 1px solid rgba(34, 127, 183, 0.3); }
.brand-button { padding: 8px 16px; border: 1px solid rgba(34, 127, 183, 0.3); border-radius: 20px; background: rgba(255, 255, 255, 0.95); color: var(--text-dark); cursor: pointer; transition: all 0.2s; white-space: nowrap; font-size: 14px; }
.brand-button.active { background: var(--primary-color); color: white !important; border-color: transparent; }
.brand-button:hover { transform: translateY(-2px); box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15); }
#allBrandsButton { border-color: var(--secondary-color); color: var(--secondary-color); }
#dataTable_wrapper { border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background: rgba(255, 255, 255, 0.6); }
#dataTable thead th { background: rgba(34, 127, 183, 0.9); color: white; font-weight: 600; padding: 15px; }
#dataTable tbody td { padding: 12px 15px; }
#contentAbove { position: fixed; left: 20px; right: 20px; bottom: -100%; max-height: 70vh; margin: 0; padding: 20px; background: rgba(255, 255, 255, 0.65); backdrop-filter: blur(20px) saturate(180%); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 12px 12px 0 0; box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15); z-index: 2000; overflow-y: auto; transition: bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
#contentAbove.active { bottom: 0; }
.overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); z-index: 1500; display: none; }
body.no-scroll { overflow: hidden; }
</style>