<script setup>
import { ref, computed, provide, watch, onMounted, onUnmounted, nextTick } from "vue";

// --- 1. 依赖库 ---
// 1a. ECharts (图表)
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, RadarChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  PolarComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

// 1b. Lucide (图标)
import {
  Map,
  Clock,
  TrendingUp,
  CheckCircle,
  Shield,
  Zap,
  Award,
} from "lucide-vue-next";

// --- 2. ECharts 初始化 ---
use([
  CanvasRenderer,
  BarChart,
  RadarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  PolarComponent,
]);

// 为 ECharts 提供主题 (light/dark)，这里默认为 'light'
provide(THEME_KEY, "light");

// --- 3. 数据迁移 (与之前相同) ---
const architectureData = [
  {
    id: "H1",
    name: "基础安全与高速辅助",
    priceRange: "10万级",
    hardware: "10V5R, ≥100TOPS",
    features: "基础高速NOA+自动泊车",
    models: "银河E8、星耀8(非EM-i版)",
    color: "bg-blue-500",
    colorHex: "#3b82f6",
    textColor: "text-white",
  },
  {
    id: "H3",
    name: "城市通勤进阶",
    priceRange: "15万级",
    hardware: "11V3R",
    features: "城市通勤NOA+记忆泊车",
    models: "银河A7、M7",
    color: "bg-blue-600",
    colorHex: "#2563eb",
    textColor: "text-white",
  },
  {
    id: "H5",
    name: "无图城区领航",
    priceRange: "20万级",
    hardware: "11V3R1L(+1激光雷达)",
    features: "无图城市NOA+D2D领航",
    models: "银河M9、星耀8 EM版",
    color: "bg-blue-700",
    colorHex: "#1d4ed8",
    textColor: "text-white",
  },
  {
    id: "H7",
    name: "全场景旗舰",
    priceRange: "35万级",
    hardware: "双Orin-X(508TOPS×2), 1-2激光雷达",
    features: "VLM大模型+全场景D2D",
    models: "极氪001/007/7X、领克900",
    color: "bg-indigo-700",
    colorHex: "#4338ca",
    textColor: "text-white",
  },
  {
    id: "H9",
    name: "L3级巅峰",
    priceRange: "50万级",
    hardware: "双Thor-U(1400+TOPS), 5激光雷达",
    features: "L3级全冗余架构",
    models: "极氪9X光辉(规划中)",
    color: "bg-purple-800",
    colorHex: "#5b21b6",
    textColor: "text-white",
  },
];

const otaFrequencyData = [
  { name: "H1", 季度小更新: 4, 半年大更新: 2, 代表车型: "银河E8、星耀8" },
  { name: "H3", 月度小更新: 12, 季度大更新: 4, 代表车型: "银河A7" },
  { name: "H5", 双月大更新: 6, 代表车型: "银河M9" },
  { name: "H7", 月更新: 12, 季更新: 4, 代表车型: "极氪001/007/7X" },
  { name: "H9", 季度大更新: 4, L3特更: 2, 代表车型: "极氪9X光辉(规划)" },
];

const architectureRadarData = [
  { subject: "高速NOA", H1: 70, H3: 80, H5: 90, H7: 100, H9: 100 },
  { subject: "城市NOA", H1: 0, H3: 60, H5: 90, H7: 100, H9: 100 },
  { subject: "自动泊车", H1: 60, H3: 80, H5: 90, H7: 100, H9: 100 },
  { subject: "大模型能力", H1: 0, H3: 0, H5: 70, H7: 90, H9: 100 },
  { subject: "安全冗余", H1: 50, H3: 60, H5: 70, H7: 90, H9: 100 },
  { subject: "AEB速度", H1: 70, H3: 80, H5: 90, H7: 90, H9: 100 },
];

const aebSpeedData = [
  { name: "H1", speed: 110, color: "#3b82f6" },
  { name: "H3", speed: 120, color: "#2563eb" },
  { name: "H5", speed: 130, color: "#1d4ed8" },
  { name: "H7", speed: 130, color: "#4338ca" },
  { name: "H9", speed: 140, color: "#5b21b6" },
];

const otaHistoryData = {
  H1: [
    {
      date: "2025年3月",
      title: "初始发布",
      description: '随"千里浩瀚"整体方案发布',
      features: [
        "高速NOA(110km/h内稳定工作)",
        "APA自动泊车(支持垂直/侧方位车位)",
        "LCC+车道居中辅助",
        "FCW前碰撞预警+AEB(110km/h内刹停)",
      ],
    },
    { date: "2025年Q2", title: "首次OTA", description: "优化高速NOA变道成功率至95%", features: ["新增TSI交通标志识别"] },
    {
      date: "2025年10月",
      title: "星耀8首次大版本OTA",
      description: "Flyme Auto S1.9.0",
      features: [
        "APA泊车优化(支持27.5cm极限距离，适配300+车位场景)",
        "RPA遥控泊车(手机APP远程操控)",
        "HPA记忆泊车(最远500米路径记忆)",
      ],
    },
  ],
  H3: [
    {
      date: "2025年3月",
      title: "初始发布",
      description: "与H1同步发布",
      features: ["H1全部功能", "城市通勤NOA(固定路线智能跟车)", "HPA记忆泊车(家庭/公司路线自动泊车)"],
    },
    {
      date: "2025年11月11日",
      title: "银河A7首次OTA",
      description: "Flyme Auto 1.10.0，13项更新",
      features: [
        "AES自动紧急避让：检测无法避免的碰撞时自动转向避让",
        "MAI误加速抑制：防止因误踩油门引发事故",
        "TSI交通标志识别",
        "ICC智能巡航(拥堵跟车优化)",
        "NOA高速辅助(优化变道逻辑)",
        "断头路车位泊车",
        "指尖泊车(无划线车位自定义)",
        "可视泊车辅助",
        "泊车语音控制",
        "泊车速度优化",
      ],
    },
  ],
  H5: [
    {
      date: "2025年3月",
      title: "初始发布",
      description: '随"千里浩瀚"发布',
      features: ["H3全部功能", "E2E端到端大模型决策", "无图城市NOA(试点城市)", "D2D车位到车位领航(基础版)"],
    },
    { date: "2025年3月", title: "D2D功能推送", description: "大规模推送D2D功能", features: ["支持通过闸机、ETC等复杂环节"] },
    {
      date: "2025年Q2-Q3",
      title: "无图城市NOA全国推广",
      description: "已完成10城试点",
      features: ['实现"真无图、真全国、有路就能开"'],
    },
    {
      date: "2025年8月",
      title: "极氪推送OTA 6.5",
      description: "功能增强",
      features: ["全能泊车(支持车宽+10cm机械车位)", "G-AES通用障碍物避让(130km/h高速连续避让)"],
    },
  ],
  H7: [
    {
      date: "2025年3月",
      title: "初始发布",
      description: "与H5同步发布",
      features: ["H5全部功能", "VLM视觉语言模型(环境理解能力提升40%)", "满血版D2D车位领航(0接管率)", "跨层记忆泊车", "自动充电规划"],
    },
    {
      date: "2025年3月18日",
      title: "极氪发布三大核心功能",
      description: "技术突破",
      features: [
        "G-AES：全球首创通用障碍物连续避让(130km/h高速识别40cm以上障碍物)",
        "满血D2D：全国范围车位到车位无缝导航",
        "L3级技术架构(硬件预埋)",
      ],
    },
    { date: "2025年6-7月", title: "分批推送G-AES功能", description: "功能落地", features: ["实现130km/h高速障碍物避让"] },
    {
      date: "2025年8月24日",
      title: "极氪OS 6.5震撼上线",
      description: "40+项更新",
      features: [
        "D2D车位领航全国范围支持，适应闸机、障碍物、路口等复杂场景",
        "跨楼层记忆泊车(地下停车场自动定位)",
        "AEB：新增锥桶、水马等障碍物识别，刹停速度提升至120km/h",
        "PEB：新增低速侧向防碰撞，减少低速刮蹭风险",
        'NZP全域领航：新增掉头和"一路畅行"模式，复杂路况通过率>95%',
      ],
    },
  ],
  H9: [
    {
      date: "2025年3月",
      title: "发布计划",
      description: "计划2025年Q4量产",
      features: [
        "双Thor-U芯片(1400+TOPS×2)",
        "5激光雷达(1长距+4补盲)",
        "13摄像头+5毫米波雷达",
        "ZEEA 3.0中央集中式架构+千兆以太环网(响应速度提升50%)",
        "L3级自动驾驶(条件允许时高速脱手)",
        "全链路8大安全冗余(芯片/感知/执行等全部双备份)",
        "城市L3自动驾驶(硬件预埋，法规允许后OTA解锁)",
      ],
    },
  ],
};

const futurePlans = [
  {
    period: "2025年Q4",
    plans: [
      { title: "H9架构L3级自动驾驶", desc: "首个量产L3方案，支持高速脱手驾驶(条件允许)" },
      { title: "H7/H9泊车代驾VPD", desc: "车辆自主寻找车位并充电(需停车场支持)" },
      { title: "H5/H7无图NOA增强", desc: "新增窄路通行、施工路段自适应能力" },
    ],
  },
  {
    period: "2026年全年",
    plans: [
      { title: "全场景代客泊车", desc: "领克900等车型推出，停车场全自动泊车+充电" },
      { title: "Robotaxi定制方案", desc: "推出L4级自动驾驶出租车，布局出行服务" },
      { title: "VLA架构升级", desc: "H7向H9的L3级架构演进(硬件预埋，软件解锁)" },
      { title: '"千里计划"生态', desc: "一个AI大脑+一个操作系统+一个智能助手，输出多场景智能化能力" },
    ],
  },
];

const evolutionTrends = [
  {
    title: "安全能力持续升级",
    description: "AEB刹停速度：H1(110km/h)→H3(120km/h)→H5/H7(130km/h)→H9(140km/h)；障碍物识别：从固定目标到通用障碍物(锥桶、水马等)全覆盖",
    icon: Shield,
  },
  {
    title: '从"可用"到"好用"的进阶',
    description: "在保障基础智驾功能全车型覆盖的基础上，H1→H3：高快、安全能力优先；H5→H7：无图城市和全场景D2D领先；H9：L3级自动驾驶，行业天花板",
    icon: TrendingUp,
  },
  {
    title: "硬件预埋，软件迭代",
    description: "成体系规划各品牌硬件搭载解决方案，形成价格和等级梯度；各价位段硬件一步到位，通过OTA持续解锁新功能，延长产品生命周期",
    icon: Zap,
  },
  {
    title: "大模型驱动的能力跃迁",
    description: "H5：E2E端到端模型(感知→决策一体化)；H7：VLM视觉语言模型(环境理解更精准)；未来：VLA视觉-语言-行动模型(类人类驾驶决策)",
    icon: Award,
  },
];

// --- 4. 状态逻辑 ---
const activeTab = ref("overview");
const expandedArchitecture = ref("H1");
const selectedArchitecture = ref([]);

// --- 标签页数据 ---
const analysisTabs = [
  { id: 'overview', label: '架构全景' },
  { id: 'ota-history', label: 'OTA升级历史' },
  { id: 'comparison', label: '升级节奏对比' },
  { id: 'future', label: 'OTA规划' },
  { id: 'trends', label: '升级趋势' }
];

// --- 5. 方法 (与之前相同) ---
function toggleArchitecture(id) {
  if (expandedArchitecture.value === id) {
    expandedArchitecture.value = null;
  } else {
    expandedArchitecture.value = id;
  }
}

function toggleSelectedArchitecture(id) {
  const index = selectedArchitecture.value.indexOf(id);
  if (index > -1) {
    selectedArchitecture.value.splice(index, 1);
  } else {
    selectedArchitecture.value.push(id);
  }
}

function clearSelectedArchitecture() {
  selectedArchitecture.value = [];
}

// 辅助函数
function getRadarOpacity(id) {
  if (selectedArchitecture.value.length === 0) return 0.1;
  return selectedArchitecture.value.includes(id) ? 0.5 : 0.1;
}

function getRadarStrokeWidth(id) {
  if (selectedArchitecture.value.length === 0) return 1;
  return selectedArchitecture.value.includes(id) ? 2 : 1;
}

// --- 6. (改动) 动画滑块逻辑 ---
const tabsContainer = ref(null);
const tabRefs = ref({});
const indicatorStyle = ref({});
const setTabRef = (el, id) => {
  if (el) {
    tabRefs.value[id] = el;
  }
};

// (改动) 更新滑块函数，使其尺寸与按钮一致
const updateIndicator = () => {
  if (!tabsContainer.value) return;
  const activeTabEl = tabRefs.value[activeTab.value];
  if (!activeTabEl) return;

  const containerRect = tabsContainer.value.getBoundingClientRect();
  const tabRect = activeTabEl.getBoundingClientRect();

  // (Fix) 计算相对于容器的偏移
  const offsetTop = tabRect.top - containerRect.top;
  const offsetLeft = tabRect.left - containerRect.left;

  indicatorStyle.value = {
    // (Fix) 设置显式的 宽/高
    height: `${tabRect.height}px`,
    width: `${tabRect.width}px`,
    // (Fix) 使用 2D translate
    transform: `translate(${offsetLeft}px, ${offsetTop}px)`,
  };
};

// 侦听 activeTab 变化来移动滑块
watch(activeTab, async () => {
  await nextTick(); // 等待 DOM 更新
  updateIndicator();
});

// --- 7. (改动) 筛选器与页脚交互逻辑 ---
const footerRef = ref(null);
const filterBottom = ref(24); // 对应 bottom-6 (1.5rem = 24px)
const filterRight = ref(24); // 对应 right-6 (1.5rem = 24px)

// (改动) 动态计算筛选器样式
const filterStyle = computed(() => ({
  bottom: `${filterBottom.value}px`,
  right: `${filterRight.value}px`,
  // (改动) 移除 CSS transition，使其瞬时响应
}));

// (改动) 滚动处理函数
const handleScroll = () => {
  if (!footerRef.value) return;

  const margin = 24; // 24px (1.5rem)
  const footerTop = footerRef.value.offsetTop;
  const viewportBottom = window.scrollY + window.innerHeight;

  // 计算视口底部 超出 页脚顶部的距离
  const overlap = viewportBottom - footerTop;

  if (overlap > 0) {
    // 如果重叠，将筛选器向上推
    filterBottom.value = overlap + margin;
  } else {
    // 否则，保持默认边距
    filterBottom.value = margin;
  }
};

// 在挂载和窗口大小改变时更新滑块
onMounted(() => {
  window.addEventListener('resize', updateIndicator);
  window.addEventListener('scroll', handleScroll, { passive: true }); // (新增) 添加滚动监听
  // 初始加载时设置滑块
  setTimeout(() => {
    updateIndicator();
    handleScroll(); // (新增) 初始检查一次位置
  }, 100); // 确保 DOM 已经渲染
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIndicator);
  window.removeEventListener('scroll', handleScroll); // (新增) 移除滚动监听
});


// --- 8. (改动) ECharts 图表选项 ---

// 8a. 雷达图选项
const radarOption = computed(() => {
  const indicators = architectureRadarData.map((item) => ({
    name: item.subject,
    max: 100,
  }));

  const seriesData = architectureData.map((arch) => ({
    value: architectureRadarData.map((item) => item[arch.id]),
    name: arch.id,
    // (改动) 默认不显示点
    showSymbol: false,
    symbol: 'circle',
    symbolSize: 8,
    // (改动) itemStyle 不再设置 opacity: 0
    itemStyle: {
      color: arch.colorHex,
    },
    lineStyle: {
      width: getRadarStrokeWidth(arch.id),
      color: arch.colorHex,
    },
    areaStyle: {
      opacity: getRadarOpacity(arch.id),
      color: arch.colorHex,
    },
    emphasis: {
      // (改动) 悬浮时显示点
      showSymbol: true,
      itemStyle: {
        opacity: 1
      },
      lineStyle: {
        width: 3
      }
    }
  }));

  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      // (改动) 显式设置图例颜色
      data: architectureData.map(arch => ({
        name: arch.id,
        icon: 'rect', // (改动) 确保显示为色块
        itemStyle: {
          color: arch.colorHex
        }
      })),
      bottom: 0,
    },
    radar: {
      indicator: indicators,
    },
    series: [
      {
        type: 'radar',
        // (改动) 反转数组，让 H1 (面积最小) 在最上层被渲染，解决 H9 遮挡问题
        data: [...seriesData].reverse(),
      },
    ],
  };
});

// 8b. 柱状图选项
const barOption = computed(() => {
  const legendData = [
    "季度小更新", "半年大更新", "月度小更新", "季度大更新",
    "双月大更新", "月更新", "季更新", "L3特更",
  ];

  const colors = {
    "季度小更新": "#3b82f6",
    "半年大更新": "#1d4ed8",
    "月度小更新": "#60a5fa",
    "季度大更新": "#2563eb",
    "双月大更新": "#4f46e5",
    "月更新": "#818cf8",
    "季更新": "#6366f1",
    "L3特更": "#7c3aed",
  };

  const series = legendData.map(key => ({
    name: key,
    type: 'bar',
    stack: 'total',
    emphasis: {
      focus: 'series'
    },
    data: otaFrequencyData.map(item => item[key] || 0),
    color: colors[key],
  }));

  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: legendData,
      bottom: 0,
      type: 'scroll'
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: otaFrequencyData.map((item) => item.name),
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: '{value}次'
        }
      },
    ],
    series: series,
  };
});
</script>

<template>
  <div id="main-content" class="pt-11 light">

    <header class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div class="container mx-auto px-4 py-8 md:py-12">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">吉利千里浩瀚智驾解决方案</h1>
          <p class="text-xl md:text-2xl font-light mb-4">OTA升级解析</p>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8 md:py-12">
      <Transition name="fade" mode="out-in">
        <section v-if="activeTab === 'overview'">
          <h2 class="text-3xl md:text-4xl font-bold mb-8 flex items-center">
            <Map class="mr-3 text-blue-600" />
            千里浩瀚架构全景
          </h2>
          <p class="text-lg mb-8">
            "千里浩瀚"是吉利在2025年3月3日发布的统一智驾解决方案，采用<span
              class="font-bold text-blue-600"
          >五级阶梯式架构</span
          >(H1-H9)，覆盖从10万到百万级车型。
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div
                v-for="(arch, index) in architectureData"
                :key="arch.id"
                class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div :class="[arch.color, 'p-6 text-white']">
                <div class="flex items-center justify-between mb-1">
                  <h3 class="text-2xl font-bold">{{ arch.id }}</h3>
                  <span class="px-3 py-1 bg-white text-gray-800 rounded-full text-xs font-bold shadow-md">
                    {{ arch.priceRange }}
                  </span>
                </div>
                <p class="text-lg opacity-90">{{ arch.name }}</p>
              </div>
              <div class="p-6">
                <div class="mb-4">
                  <h4 class="text-sm uppercase tracking-wider text-gray-500 mb-2">硬件配置</h4>
                  <p class="font-medium">{{ arch.hardware }}</p>
                </div>
                <div class="mb-4">
                  <h4 class="text-sm uppercase tracking-wider text-gray-500 mb-2">核心特点</h4>
                  <p class="font-medium">{{ arch.features }}</p>
                </div>
                <div>
                  <h4 class="text-sm uppercase tracking-wider text-gray-500 mb-2">代表车型</h4>
                  <p class="font-medium">{{ arch.models }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 mb-12">
            <h3 class="text-2xl font-bold mb-6">智驾搭载逻辑</h3>
            <p class="text-gray-700 mb-8">
              吉利旗下品牌矩阵（银河、极氪、领克等）定位差异显著，浩瀚智驾架构的搭载遵循<span
                class="font-bold text-blue-600"
            >"品牌高端化程度→架构技术等级"</span
            >的逻辑，并通过规模化降本逐步实现高阶智驾功能的下放：
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border-l-4 border-indigo-600">
                <h4 class="text-xl font-bold mb-2 flex items-center">
                  <i class="fa-solid fa-car-side text-indigo-600 mr-2"></i>极氪<span class="text-base font-normal">（高端智能电动品牌）</span>
                </h4>
                <div class="ml-6 space-y-2">
                  <p class="font-medium">主要搭载：H7、H9架构</p>
                  <p class="text-gray-600">
                    作为吉利高端电动化先锋，承担"技术旗舰"角色，优先搭载最高阶架构，通过最领先的硬件配置，强化"智能天花板"的品牌认知。
                  </p>
                </div>
              </div>
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border-l-4 border-blue-600">
                <h4 class="text-xl font-bold mb-2 flex items-center">
                  <i class="fa-solid fa-car text-blue-600 mr-2"></i>领克<span class="text-base font-normal">（中高端运动品牌）</span></h4>
                <div class="ml-6 space-y-2">
                  <p class="font-medium">主要搭载：H5、H7架构</p>
                  <p class="text-gray-600">主打"运动前卫"，聚焦年轻高端用户，搭载"VLM视觉语言模型+全场景NOA"满足对智能化的高阶需求，平衡成本与体验。</p>
                </div>
              </div>
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border-l-4 border-blue-500">
                <h4 class="text-xl font-bold mb-2 flex items-center">
                  <i class="fa-solid fa-rocket text-blue-500 mr-2"></i>银河<span class="text-base font-normal">（主流新能源品牌）</span></h4>
                <div class="ml-6 space-y-2">
                  <p class="font-medium">主要搭载：H1、H3、H5架构</p>
                  <p class="text-gray-600">作为走量品牌，H1覆盖入门级安全需求，H3满足城市通勤进阶需求，H5提供无图NOA核心功能，以"够用且先进"的配置覆盖最大多数用户。</p>
                </div>
              </div>
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border-l-4 border-blue-400">
                <h4 class="text-xl font-bold mb-2 flex items-center">
                  <i class="fa-solid fa-gas-pump text-blue-400 mr-2"></i>吉利<span class="text-base font-normal">（燃油车主品牌）</span></h4>
                <div class="ml-6 space-y-2">
                  <p class="font-medium">主要搭载：H1、H3架构</p>
                  <p class="text-gray-600">燃油车聚焦"安全辅助"刚需，以H1的"高速NOA+AEB"满足用户对基础智驾的需求， 避免过度配置导致成本上升。</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 mb-12">
            <h3 class="text-2xl font-bold mb-6">功能对比分析</h3>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                <tr class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                  <th class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">功能类别</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">H1</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">H3</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">H5</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">H7</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">H9</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 text-sm font-medium">高速NOA</td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 text-sm font-medium">城市通勤NOA</td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 text-sm font-medium">无图城市NOA</td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 text-sm font-medium">记忆泊车HPA</td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 text-sm font-medium">全场景D2D</td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 text-sm font-medium">泊车代驾VPD</td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 text-sm font-medium">L3级自动驾驶</td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 text-sm font-medium">G-AES障碍物避让</td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-times text-red-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 text-sm font-medium">AEB主动刹车</td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                  <td class="px-6 py-4 text-center"><i class="fa-solid fa-check text-green-500"></i></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 mb-12">
            <h3 class="text-2xl font-bold mb-6">各架构能力对比</h3>
            <div class="flex flex-wrap gap-2 mb-6">
              <button
                  @click="clearSelectedArchitecture"
                  :class="[
                  'px-4 py-2 rounded-full text-sm transition-all',
                  selectedArchitecture.length === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                ]"
              >
                全部显示
              </button>
              <button
                  v-for="arch in architectureData"
                  :key="arch.id"
                  @click="toggleSelectedArchitecture(arch.id)"
                  :class="[
                  'px-4 py-2 rounded-full text-sm transition-all',
                  selectedArchitecture.includes(arch.id)
                    ? `${arch.color} text-white shadow-md`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                ]"
              >
                {{ arch.id }}
              </button>
            </div>
            <div class="h-[400px]">
              <v-chart
                  class="w-full h-full"
                  :option="radarOption"
                  autoresize
              />
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-2xl font-bold mb-6">AEB刹停速度对比(km/h)</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div
                  v-for="(entry, index) in aebSpeedData"
                  :key="entry.name"
                  class="relative overflow-hidden rounded-xl border border-gray-200 shadow-md group"
                  :style="{ backgroundColor: entry.color + '15' }"
              >
                <div class="relative z-10 p-6 flex flex-col items-center justify-center text-center h-[180px]">
                  <h4 class="text-3xl font-bold mb-2" :style="{ color: entry.color }">{{ entry.name }}</h4>
                  <div class="flex items-end gap-1">
                    <span class="text-4xl font-bold" :style="{ color: entry.color }">{{ entry.speed }}</span>
                    <span class="text-lg text-gray-600">km/h</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
              <p class="text-gray-600 text-sm">
                根据吉利发布的信息，从H1到H9架构，AEB刹停速度呈现持续提升趋势，从110km/h逐步提升至140km/h。
              </p>
            </div>
          </div>
        </section>

        <section v-else-if="activeTab === 'ota-history'">
          <h2 class="text-3xl md:text-4xl font-bold mb-8 flex items-center">
            <Clock class="mr-3 text-blue-600" />
            各架构OTA升级历史
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            <button
                v-for="arch in architectureData"
                :key="arch.id"
                :class="[
                'py-3 px-4 rounded-lg text-center font-medium text-sm transition-all',
                expandedArchitecture === arch.id
                  ? `${arch.color} text-white shadow-md`
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300',
              ]"
                @click="toggleArchitecture(arch.id)"
            >
              {{ arch.id }}
            </button>
          </div>

          <div class="space-y-12">
            <template v-for="arch in architectureData" :key="arch.id">
              <div v-show="expandedArchitecture === arch.id" class="overflow-hidden">
                <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
                  <h3 class="text-2xl font-bold mb-6 flex items-center">
                    <span
                        :class="[
                        'inline-flex items-center justify-center w-10 h-10 rounded-full mr-3 text-white',
                        arch.color,
                      ]"
                    >
                      {{ arch.id }}
                    </span>
                    {{ arch.name }}
                  </h3>
                  <div class="relative">
                    <div
                        class="absolute left-0 md:left-1/2 h-full w-0.5 bg-blue-700 transform md:translate-x-[-0.5px]"
                    ></div>

                    <div
                        v-for="(event, index) in otaHistoryData[arch.id]"
                        :key="index"
                        :class="[
                        'relative flex flex-col md:flex-row mb-10 last:mb-0',
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                      ]"
                    >
                      <div :class="[
                        'md:w-1/2 md:py-2 mb-6 md:mb-0',
                        index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'
                      ]">
                        <div
                            :class="[
                            'p-5 rounded-xl',
                            index % 2 === 0 ? 'bg-blue-50' : 'bg-indigo-50',
                          ]"
                        >
                          <span class="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full mb-3">{{
                              event.date
                            }}</span>
                          <h4 class="text-xl font-bold mb-2">{{ event.title }}</h4>
                          <p class="text-gray-600 mb-4">{{ event.description }}</p>
                          <div class="space-y-2">
                            <div v-for="(feature, fidx) in event.features" :key="fidx" class="flex items-start">
                              <CheckCircle :size="18" class="text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <p class="text-sm">{{ feature }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                          class="absolute left-0 md:left-1/2 transform md:translate-x-[-8px] w-4 h-4 rounded-full bg-blue-700 shadow-md"
                      ></div>
                      <div :class="[
                        'md:w-1/2',
                         index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'
                      ]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <div v-if="!expandedArchitecture" class="text-center py-12 text-gray-500">
              <p class="text-lg">请选择上方的架构查看详细OTA升级历史</p>
            </div>
          </div>
        </section>

        <section v-else-if="activeTab === 'comparison'">
          <h2 class="text-3xl md:text-4xl font-bold mb-8 flex items-center">
            <TrendingUp class="mr-3 text-blue-600" />
            OTA升级节奏对比
          </h2>

          <div class="mb-12">
            <h3 class="text-xl font-bold mb-8 text-gray-800">重要OTA事件</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-red-500">
                <div class="flex justify-between items-center mb-3">
                  <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">重大更新</span>
                  <span class="text-gray-500 text-sm">2025-03-03</span>
                </div>
                <h4 class="text-lg font-bold mb-2">千里浩瀚方案发布</h4>
                <p class="text-gray-600 text-sm mb-4">吉利正式发布千里浩瀚智驾解决方案，H1-H9五级架构首次亮相</p>
                <div class="flex gap-2">
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">全架构</span>
                  <span class="px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs">新方案</span>
                </div>
              </div>
              <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500">
                <div class="flex justify-between items-center mb-3">
                  <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">功能更新</span>
                  <span class="text-gray-500 text-sm">2025-03-15</span>
                </div>
                <h4 class="text-lg font-bold mb-2">D2D功能大规模推送</h4>
                <p class="text-gray-600 text-sm mb-4">车位到车位领航功能开始向H5/H7/H9车型推送</p>
                <div class="flex gap-2">
                  <span class="px-2 py-1 bg-blue-200 text-blue-800 rounded-md text-xs">H5</span>
                  <span class="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-md text-xs">H7</span>
                  <span class="px-2 py-1 bg-purple-200 text-purple-800 rounded-md text-xs">H9</span>
                </div>
              </div>
              <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-red-500">
                <div class="flex justify-between items-center mb-3">
                  <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">重大更新</span>
                  <span class="text-gray-500 text-sm">2025-03-18</span>
                </div>
                <h4 class="text-lg font-bold mb-2">极氪发布三大核心功能</h4>
                <p class="text-gray-600 text-sm mb-4">G-AES、满血D2D、L3级技术架构三大核心功能发布</p>
                <div class="flex gap-2">
                  <span class="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-md text-xs">H7</span>
                  <span class="px-2 py-1 bg-purple-200 text-purple-800 rounded-md text-xs">H9</span>
                </div>
              </div>
              <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500">
                <div class="flex justify-between items-center mb-3">
                  <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">功能更新</span>
                  <span class="text-gray-500 text-sm">2025-04-10</span>
                </div>
                <h4 class="text-lg font-bold mb-2">H7车型D2D功能OTA</h4>
                <p class="text-gray-600 text-sm mb-4">H7车型D2D功能升级，实现全场景覆盖</p>
                <div class="flex gap-2">
                  <span class="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-md text-xs">H7</span>
                </div>
              </div>
              <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500">
                <div class="flex justify-between items-center mb-3">
                  <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">功能更新</span>
                  <span class="text-gray-500 text-sm">2025-06-01</span>
                </div>
                <h4 class="text-lg font-bold mb-2">极氪G-AES功能推送开始</h4>
                <p class="text-gray-600 text-sm mb-4">G-AES通用障碍物连续避让功能开始分批推送</p>
                <div class="flex gap-2">
                  <span class="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-md text-xs">H7</span>
                  <span class="px-2 py-1 bg-purple-200 text-purple-800 rounded-md text-xs">H9</span>
                </div>
              </div>
              <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500">
                <div class="flex justify-between items-center mb-3">
                  <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">功能更新</span>
                  <span class="text-gray-500 text-sm">2025-07-15</span>
                </div>
                <h4 class="text-lg font-bold mb-2">G-AES功能分批推送完成</h4>
                <p class="text-gray-600 text-sm mb-4">G-AES功能向H7/H9车型推送完成</p>
                <div class="flex gap-2">
                  <span class="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-md text-xs">H7</span>
                  <span class="px-2 py-1 bg-purple-200 text-purple-800 rounded-md text-xs">H9</span>
                </div>
              </div>
              <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-red-500">
                <div class="flex justify-between items-center mb-3">
                  <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">重大更新</span>
                  <span class="text-gray-500 text-sm">2025-08-24</span>
                </div>
                <h4 class="text-lg font-bold mb-2">极氪OS 6.5发布</h4>
                <p class="text-gray-600 text-sm mb-4">40+项功能更新，包括D2D车位领航、安全升级等</p>
                <div class="flex gap-2">
                  <span class="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-md text-xs">H7</span>
                  <span class="px-2 py-1 bg-purple-200 text-purple-800 rounded-md text-xs">H9</span>
                </div>
              </div>
              <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500">
                <div class="flex justify-between items-center mb-3">
                  <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">功能更新</span>
                  <span class="text-gray-500 text-sm">2025-10-20</span>
                </div>
                <h4 class="text-lg font-bold mb-2">星耀8首次大版本OTA</h4>
                <p class="text-gray-600 text-sm mb-4">Flyme Auto S1.9.0版本，APA泊车优化，新增RPA/HPA</p>
                <div class="flex gap-2">
                  <span class="px-2 py-1 bg-blue-500 text-white rounded-md text-xs">H3</span>
                  <span class="px-2 py-1 bg-blue-200 text-blue-800 rounded-md text-xs">H5</span>
                </div>
              </div>
              <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500">
                <div class="flex justify-between items-center mb-3">
                  <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">功能更新</span>
                  <span class="text-gray-500 text-sm">2025-11-11</span>
                </div>
                <h4 class="text-lg font-bold mb-2">银河A7首次OTA</h4>
                <p class="text-gray-600 text-sm mb-4">Flyme Auto 1.10.0版本，13项更新，新增AES和MAI</p>
                <div class="flex gap-2">
                  <span class="px-2 py-1 bg-blue-500 text-white rounded-md text-xs">H3</span>
                </div>
              </div>
              <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-green-500">
                <div class="flex justify-between items-center mb-3">
                  <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">规划中</span>
                  <span class="text-gray-500 text-sm">2026-01-20</span>
                </div>
                <h4 class="text-lg font-bold mb-2">H5/H7无图NOA增强版</h4>
                <p class="text-gray-600 text-sm mb-4">新增窄路通行、施工路段自适应能力</p>
                <div class="flex gap-2">
                  <span class="px-2 py-1 bg-blue-200 text-blue-800 rounded-md text-xs">H5</span>
                  <span class="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-md text-xs">H7</span>
                </div>
              </div>
              <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-green-500">
                <div class="flex justify-between items-center mb-3">
                  <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">规划中</span>
                  <span class="text-gray-500 text-sm">2026-03-30</span>
                </div>
                <h4 class="text-lg font-bold mb-2">全场景代客泊车功能</h4>
                <p class="text-gray-600 text-sm mb-4">车辆自主寻找车位并充电的完整解决方案</p>
                <div class="flex gap-2">
                  <span class="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-md text-xs">H7</span>
                  <span class="px-2 py-1 bg-purple-200 text-purple-800 rounded-md text-xs">H9</span>
                </div>
              </div>
              <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-green-500">
                <div class="flex justify-between items-center mb-3">
                  <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">规划中</span>
                  <span class="text-gray-500 text-sm">2026-10-01</span>
                </div>
                <h4 class="text-lg font-bold mb-2">H9架构L3级自动驾驶</h4>
                <p class="text-gray-600 text-sm mb-4">行业首个量产L3方案，支持高速脱手驾驶</p>
                <div class="flex gap-2">
                  <span class="px-2 py-1 bg-purple-200 text-purple-800 rounded-md text-xs">H9</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div class="px-6 md:px-8 py-4 border-b border-gray-100">
              <h3 class="text-xl font-bold text-gray-800">各架构OTA更新频率对比</h3>
              <p class="text-gray-500 text-sm mt-1">展示不同架构的年度更新次数分布</p>
            </div>
            <div class="p-6 md:p-8">
              <div class="h-[400px] relative">
                <v-chart
                    class="w-full h-full"
                    :option="barOption"
                    autoresize
                />
                <div class="mt-4 text-xs text-gray-500 italic">
                  数据来源：吉利官方公布的OTA更新计划及历史数据整理
                </div>
              </div>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full bg-white rounded-xl shadow-lg">
              <thead>
              <tr class="bg-gray-50">
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">架构</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">OTA频率</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">代表车型</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">典型升级内容</th>
              </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
              <tr v-for="item in otaFrequencyData" :key="item.name">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">{{ item.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">
                  <span v-if="item.name === 'H1'">季度小更新+半年大更新</span>
                  <span v-else-if="item.name === 'H3'">月度小更新+季度大更新</span>
                  <span v-else-if="item.name === 'H5'">双月大更新</span>
                  <span v-else-if="item.name === 'H7'">极氪:月更+季更<br />领克:年更4次</span>
                  <span v-else-if="item.name === 'H9'">季度大更新+L3特更</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">{{ item.代表车型 }}</td>
                <td class="px-6 py-4 text-sm">
                  <span v-if="item.name === 'H1'">安全优化、高速NOA增强</span>
                  <span v-else-if="item.name === 'H3'">主动安全(AES/MAI)、泊车增强</span>
                  <span v-else-if="item.name === 'H5'">无图NOA全国覆盖、D2D优化</span>
                  <span v-else-if="item.name === 'H7'">D2D、G-AES、无图NOA全场景</span>
                  <span v-else-if="item.name === 'H9'">L3功能解锁(法规获批后)</span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section v-else-if="activeTab === 'future'">
          <h2 class="text-3xl md:text-4xl font-bold mb-8 flex items-center">
            <Map class="mr-3 text-blue-600" />
            未来功能规划(2025-2026)
          </h2>

          <div class="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div class="flex items-start">
              <i class="fa-solid fa-circle-info text-blue-500 mr-3 mt-1 flex-shrink-0"></i>
              <div>
                <h4 class="font-semibold text-lg mb-2">内容注意</h4>
                <p class="text-gray-600">
                  本页面展示的未来规划内容总结自吉利品牌规划宣传资料。部分功能受限于技术验证、法规审批等条件，实际上线时间和功能表现可能与规划存在差异。具体功能以官方最终推送的实际开发进度为准。
                </p>
              </div>
            </div>
          </div>

          <div class="space-y-8">
            <div
                v-for="(periodData, index) in futurePlans"
                :key="index"
                class="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div class="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
                <h3 class="text-xl font-bold text-white">{{ periodData.period }}</h3>
              </div>
              <div class="p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                      v-for="(plan, planIndex) in periodData.plans"
                      :key="planIndex"
                      class="bg-gray-50 p-5 rounded-lg"
                  >
                    <h4 class="text-lg font-semibold mb-2">{{ plan.title }}</h4>
                    <p class="text-gray-600">{{ plan.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section v-else-if="activeTab === 'trends'">
          <h2 class="text-3xl md:text-4xl font-bold mb-8 flex items-center">
            <TrendingUp class="mr-3 text-blue-600" />
            OTA升级趋势总结
          </h2>

          <div class="space-y-8 mb-12">
            <div class="bg-blue-50 rounded-xl shadow-lg p-8">
              <h3 class="text-2xl font-bold mb-4 text-blue-700">特点和优势</h3>
              <p class="text-lg mb-6 text-gray-800">
                吉利千里浩瀚智驾解决方案通过H1-H9五级架构体系向用户传达了明确的技术品牌发展路径；通过"品牌-车型-技术"的匹配，在各价位段实现了有竞争力的全面覆盖；以"硬件预埋+OTA解锁"的模式缩短开发周期，加深了用户对智驾可用功能的心智。
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div
                v-for="(trend, index) in evolutionTrends"
                :key="index"
                class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600"
            >
              <div class="flex items-center mb-4">
                <div
                    class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4"
                >
                  <component :is="trend.icon" :size="24" />
                </div>
                <h3 class="text-xl font-bold">{{ trend.title }}</h3>
              </div>
              <p class="text-gray-600">{{ trend.description }}</p>
            </div>
          </div>

          <div class="bg-orange-50 rounded-xl shadow-lg p-8 mb-12">
            <h3 class="text-2xl font-bold mb-4 text-blue-700">可能的挑战</h3>
            <p class="text-lg mb-6 text-gray-800">
              基于"多传感器融合（视觉+雷达+激光雷达）+VLA 大模型"的路线架构虽能在短期内建立技术、品牌领先，但如果纯视觉方案突破、WA世界模型成为主流，前期投入的芯片采购、传感器布局、算法开发将部分失效，形成高额沉没成本；技术路线调整导致部分预埋硬件无法通过OTA激活高阶功能，早期购买用户会产生"背刺"的负面舆论，损害品牌信任。
            </p>
          </div>

          <p class="text-sm opacity-80">注：功能上线时间因技术验证和法规审批可能调整，实际体验以官方推送为准。</p>
        </section>
      </Transition>
    </main>

    <div
        class="fixed z-30"
        :style="filterStyle"
    >
      <div
          ref="tabsContainer"
          class="floating-filter-container"
      >
        <div class="active-tab-indicator" :style="indicatorStyle"></div>

        <button
            v-for="tab in analysisTabs"
            :key="tab.id"
            :ref="el => setTabRef(el, tab.id)"
            @click="activeTab = tab.id"
            class="tab-link"
            :class="{ 'active': activeTab === tab.id }"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <footer ref="footerRef" class="bg-gray-900 text-white py-12 mt-16">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-4">吉利千里浩瀚智驾解决方案</h2>
          <p class="text-gray-400 mb-6">数据更新时间：2025年11月12日</p>
          <p class="mt-8 text-gray-500 text-sm">数据来源：吉利官方发布、OTA更新日志及公开信息整理</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* 字体和 'no-scrollbar' 样式保持不变
*/
:root {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji";
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* v-if 切换的淡入淡出动画
*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* =========== (改动) 悬浮筛选器容器 ===========
*/
.floating-filter-container {
  @apply relative overflow-hidden flex flex-col sm:flex-row sm:items-center bg-gray-100/80 backdrop-blur-md rounded-lg sm:rounded-full shadow-lg p-1.5 transition-all duration-300;
}

/* =========== (新增) 动画滑块样式 ===========
*/
.active-tab-indicator {
  @apply absolute top-0 left-0 bg-white rounded-lg sm:rounded-full shadow-md transition-transform duration-300 ease-in-out;
}

/* =========== (改动) 筛选器按钮样式 ===========
*/
.tab-link {
  /* (改动) 添加 relative, z-10, bg-transparent */
  @apply relative z-10 flex items-center justify-center sm:justify-start px-5 py-2 rounded-lg sm:rounded-full text-base font-semibold text-gray-700 transition-colors duration-300 whitespace-nowrap bg-transparent;
}

.tab-link.active {
  /* (改动) 只改变字体颜色，背景由滑块提供 */
  @apply text-blue-600;
}
</style>