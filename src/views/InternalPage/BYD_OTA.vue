file_path = 'zhejie-chen/userinsight/userinsight-2fe0921abbe24ef102679a7df2950e57e7197c31/src/views/InternalPage/BYD_OTA.vue'

content = """<script setup>
import { ref } from "vue";
import FloatingTabSelector from "@/components/common/FloatingTabSelector.vue";
import {
  Car,
  Cpu,
  Eye,
  Radio,
  Target,
  Shield,
  Award,
  Calendar,
  RefreshCw,
  Star,
  Zap,
  Check,
  Settings,
} from "lucide-vue-next";
import Footer from "@/components/Footer.vue";

// --- 状态定义 ---
const activeTab = ref("overview");
const selectedVersion = ref("initial");

// --- 选项卡数据 ---
const tabs = [
  { id: "overview", label: "配置全景" },
  { id: "evolution", label: "功能升级" },
  { id: "future", label: "未来趋势" },
];
</script>

<template>
  <div
      id="main-content"
      class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900 pt-11"
  >
    <div
        class="w-full bg-gradient-to-r from-blue-600 to-blue-400 py-12 px-4 text-center"
    >
      <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">
        比亚迪天神之眼C OTA升级解析
      </h1>
      <p class="text-xl md:text-2xl text-white/90">自研前视三目纯视觉平台</p>
    </div>

    <div class="container mx-auto px-4 py-8 relative">

      <div class="mt-6">
        <Transition name="fade" mode="out-in">

          <div v-if="activeTab === 'overview'" key="overview">
            <div
                class="p-8 rounded-2xl shadow-lg bg-white/95 border border-gray-100"
            >
              <div class="mb-12">
                <div class="flex items-center mb-6">
                  <div class="h-8 w-1 bg-blue-600 mr-3 rounded-full"></div>
                  <h2 class="text-2xl md:text-3xl font-bold">
                    "天神之眼"技术矩阵
                  </h2>
                </div>
                <p class="text-lg mb-6 leading-relaxed">
                  比亚迪于2025年2月10日正式发布"天神之眼"技术矩阵，通过A、B、C三个版本的差异化布局，实现了智能驾驶技术的全覆盖。其中，天神之眼C（DiPilot
                  100）作为面向大众市场的高阶智驾三目版，覆盖了比亚迪品牌中低价位车型，是比亚迪"全民智驾战略"的核心组成部分。
                </p>
                <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div
                      class="p-6 rounded-xl bg-blue-50 border border-blue-100 hover:-translate-y-1 transition-transform duration-300"
                      style="border-color: #93b4ff"
                  >
                    <div class="flex items-center mb-4">
                      <Car class="h-8 w-8 text-blue-600 mr-3" />
                      <h3 class="text-xl font-semibold">覆盖广泛</h3>
                    </div>
                    <p>
                      覆盖7万级到20万级价格区间车型，让高阶智驾技术惠及更多消费者。
                    </p>
                  </div>
                  <div
                      class="p-6 rounded-xl bg-blue-50 border border-blue-100 hover:-translate-y-1 transition-transform duration-300"
                      style="border-color: #93b4ff"
                  >
                    <div class="flex items-center mb-4">
                      <Eye class="h-8 w-8 text-blue-600 mr-3" />
                      <h3 class="text-xl font-semibold">纯视觉方案</h3>
                    </div>
                    <p>
                      采用先进的纯视觉感知方案，提供高精度的环境感知能力。
                    </p>
                  </div>
                  <div
                      class="p-6 rounded-xl bg-blue-50 border border-blue-100 hover:-translate-y-1 transition-transform duration-300"
                      style="border-color: #93b4ff"
                  >
                    <div class="flex items-center mb-4">
                      <RefreshCw class="h-8 w-8 text-blue-600 mr-3" />
                      <h3 class="text-xl font-semibold">持续升级</h3>
                    </div>
                    <p>
                      通过OTA升级不断完善功能，体现"软件定义汽车"的产品理念。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div class="flex items-center mb-6">
                  <div class="h-8 w-1 bg-blue-600 mr-3 rounded-full"></div>
                  <h2 class="text-2xl md:text-3xl font-bold">技术架构分析</h2>
                </div>

                <div class="mb-12">
                  <h3 class="text-2xl font-semibold mb-6">硬件配置</h3>
                  <p class="text-lg mb-8 leading-relaxed">
                    天神之眼C采用"前视三目
                    5R12V12U"感知硬件方案，配备5个毫米波雷达(5R)、12个摄像头(12V)和12个超声波雷达(12U)，总计29个智驾传感器。
                  </p>

                  <div
                      class="mb-10 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm"
                  >
                    <div
                        class="flex flex-wrap gap-6 justify-center items-center"
                    >
                      <div class="flex flex-col items-center">
                        <div
                            class="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-2"
                        >
                          <Eye class="h-8 w-8 text-blue-600" />
                        </div>
                        <p class="font-medium">12个摄像头</p>
                        <p class="text-sm text-gray-500">800万像素</p>
                      </div>
                      <div class="hidden md:block h-12 w-px bg-blue-200"></div>
                      <div class="flex flex-col items-center">
                        <div
                            class="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-2"
                        >
                          <Radio class="h-8 w-8 text-blue-600" />
                        </div>
                        <p class="font-medium">5个毫米波雷达</p>
                        <p class="text-sm text-gray-500">300米探测</p>
                      </div>
                      <div class="hidden md:block h-12 w-px bg-blue-200"></div>
                      <div class="flex flex-col items-center">
                        <div
                            class="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-2"
                        >
                          <Radio class="h-8 w-8 text-blue-600" />
                        </div>
                        <p class="font-medium">12个超声波雷达</p>
                        <p class="text-sm text-gray-500">1厘米精度</p>
                      </div>
                      <div class="hidden md:block h-12 w-px bg-blue-200"></div>
                      <div class="flex flex-col items-center">
                        <div
                            class="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-2"
                        >
                          <Cpu class="h-8 w-8 text-blue-600" />
                        </div>
                        <p class="font-medium">Orin N芯片</p>
                        <p class="text-sm text-gray-500">84 TOPS算力</p>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        class="p-6 rounded-xl bg-white border border-blue-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <div class="flex items-center mb-4">
                        <div class="p-3 rounded-lg bg-blue-100 mr-4">
                          <Eye class="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 class="text-xl font-medium">前视三目摄像头</h4>
                      </div>
                      <p class="text-gray-600 leading-relaxed">
                        由2颗120°的800万像素广角摄像头和1颗30°的800万像素长焦摄像头组成，最远探测距离可达350米，精度达1厘米；核心用于图像类信息识别，如车道线、交通灯/标志标线、行人/非机动车/车辆等目标的轮廓与类别区分。
                      </p>
                    </div>
                    <div
                        class="p-6 rounded-xl bg-white border border-blue-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <div class="flex items-center mb-4">
                        <div class="p-3 rounded-lg bg-blue-100 mr-4">
                          <Eye class="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 class="text-xl font-medium">360°感知网络</h4>
                      </div>
                      <p class="text-gray-600 leading-relaxed">
                        9颗摄像头分布于车身侧方、后方及车内关键位置，用于后方交通状况监测、倒车影像采集、后向车道线识别、近距离泊车辅助、补充后视盲区、360°全景影像合成、车位识别与定位、低速碰撞预警、驾驶员状态监测。
                      </p>
                    </div>
                    <div
                        class="p-6 rounded-xl bg-white border border-blue-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <div class="flex items-center mb-4">
                        <div class="p-3 rounded-lg bg-blue-100 mr-4">
                          <Radio class="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 class="text-xl font-medium">超声波雷达系统</h4>
                      </div>
                      <p class="text-gray-600 leading-relaxed">
                        配备12个超声波雷达，探测精度高达1厘米，主要用于短距离（约0.1-5米）高精度探测，如泊车时的近距离障碍物（路沿、护栏、行人）测距（APA自动泊车）、低速挪车时的碰撞预警。
                      </p>
                    </div>
                    <div
                        class="p-6 rounded-xl bg-white border border-blue-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <div class="flex items-center mb-4">
                        <div class="p-3 rounded-lg bg-blue-100 mr-4">
                          <Radio class="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 class="text-xl font-medium">毫米波雷达系统</h4>
                      </div>
                      <p class="text-gray-600 leading-relaxed">
                        5颗毫米波雷达，实现360度无死角感知。前毫米波雷达最远探测距离300米，角度精度达0.1度。用于中远距离（约150-200米）目标的距离、速度、方位角测量，如高速跟车时前车距离/速度监测、变道时侧后方来车探测。
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mb-12">
                  <h3 class="text-2xl font-semibold mb-6">软件架构</h3>
                  <p class="text-lg mb-8 leading-relaxed">
                    BAS 3.0+系统(BYD Assistant Driving
                    System)是天神之眼C的软件核心，采用端到端大模型架构，将感知与规划决策模块融合，显著提升复杂场景应对能力。
                  </p>

                  <div
                      class="mb-10 p-6 rounded-xl bg-blue-50 text-gray-800 shadow-lg"
                  >
                    <div class="flex flex-wrap items-center justify-center">
                      <div
                          class="text-center px-4 py-2 bg-blue-600 text-white rounded-lg m-2"
                      >
                        <span>传感器数据(5R12V12U)</span>
                      </div>
                      <div class="text-blue-600 font-bold mx-2">→</div>
                      <div
                          class="text-center px-4 py-2 bg-blue-600 text-white rounded-lg m-2"
                      >
                        <span>感知主干网(BEV)</span>
                      </div>
                      <div class="text-blue-600 font-bold mx-2">→</div>
                      <div
                          class="text-center px-4 py-2 bg-blue-600 text-white rounded-lg m-2"
                      >
                        <span>规控主干网</span>
                      </div>
                      <div class="text-blue-600 font-bold mx-2">→</div>
                      <div
                          class="text-center px-4 py-2 bg-blue-600 text-white rounded-lg m-2"
                      >
                        <span>执行控制</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 class="text-xl font-medium mb-4">核心算法技术</h4>
                    <div class="overflow-x-auto">
                      <table
                          class="min-w-full bg-white rounded-xl overflow-hidden border border-gray-200"
                      >
                        <thead class="bg-blue-600 text-white">
                        <tr>
                          <th class="py-4 px-6 text-left font-semibold">
                            算法模块
                          </th>
                          <th class="py-4 px-6 text-left font-semibold">
                            技术特点
                          </th>
                          <th class="py-4 px-6 text-left font-semibold">
                            功能优势
                          </th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                        <tr class="hover:bg-blue-50 transition-colors">
                          <td class="py-4 px-6 font-medium">
                            多模态BEV感知
                          </td>
                          <td class="py-4 px-6">
                            融合三目摄像头生成10倍稠密点云，感知效果接近激光雷达
                          </td>
                          <td class="py-4 px-6">
                            无图场景精准识别红绿灯、障碍物，探测距离达350米
                          </td>
                        </tr>
                        <tr class="hover:bg-blue-50 transition-colors">
                          <td class="py-4 px-6 font-medium">端到端决策</td>
                          <td class="py-4 px-6">
                            单一模型完成感知、决策、控制全流程，响应延迟10ms
                          </td>
                          <td class="py-4 px-6">
                            减少系统复杂度，提升反应速度，AEB刹停距离缩短20米
                          </td>
                        </tr>
                        <tr class="hover:bg-blue-50 transition-colors">
                          <td class="py-4 px-6 font-medium">拟人化规划</td>
                          <td class="py-4 px-6">
                            模拟老司机驾驶习惯，优化加减速平顺性
                          </td>
                          <td class="py-4 px-6">
                            提升舒适性，降低接管率，实现1000km+无接管高速领航
                          </td>
                        </tr>
                        <tr class="hover:bg-blue-50 transition-colors">
                          <td class="py-4 px-6 font-medium">
                            "黄金数据"技术
                          </td>
                          <td class="py-4 px-6">
                            基于 VLM(视觉学习模型) 挖掘高价值数据
                          </td>
                          <td class="py-4 px-6">
                            加速模型迭代，7天完成一次算法更新
                          </td>
                        </tr>
                        <tr class="hover:bg-blue-50 transition-colors">
                          <td class="py-4 px-6 font-medium">影子模式</td>
                          <td class="py-4 px-6">
                            后台收集用户驾驶数据，云端优化模型
                          </td>
                          <td class="py-4 px-6">
                            实现"越开越聪明"的个性化智驾体验
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'evolution'" key="evolution">
            <div
                class="p-8 rounded-2xl shadow-lg bg-white/95 border border-gray-100"
            >
              <div class="flex items-center mb-6">
                <div class="h-8 w-1 bg-blue-600 mr-3 rounded-full"></div>
                <h2 class="text-2xl md:text-3xl font-bold">功能升级历程</h2>
              </div>

              <div class="mb-8 flex flex-wrap gap-4 justify-center">
                <button
                    class="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                    :class="
                    selectedVersion === 'initial'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  "
                    @click="selectedVersion = 'initial'"
                >
                  初始版本
                </button>
                <button
                    class="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                    :class="
                    selectedVersion === 'first'
                      ? 'bg-green-600 text-white shadow-lg shadow-green-200'
                      : 'bg-green-50 text-green-600 hover:bg-green-100'
                  "
                    @click="selectedVersion = 'first'"
                >
                  第一次OTA
                </button>
                <button
                    class="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                    :class="
                    selectedVersion === 'third'
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-200'
                      : 'bg-orange-50 text-orange-600 hover:bg-orange-100'
                  "
                    @click="selectedVersion = 'third'"
                >
                  第二次OTA
                </button>
              </div>

              <Transition name="fade" mode="out-in">
                <div v-if="selectedVersion === 'initial'" key="v-initial">
                  <div
                      class="p-6 rounded-xl bg-white border border-gray-100 shadow-sm mb-6"
                  >
                    <h3 class="text-2xl font-semibold text-blue-600 mb-4">
                      初始功能 (2025年2月)
                    </h3>
                    <p class="text-gray-600 mb-8">
                      天神之眼C首次发布时的基础功能配置
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div
                          class="p-6 rounded-xl bg-blue-50 border border-blue-100 h-full"
                      >
                        <div class="flex items-center mb-4">
                          <div
                              class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-3"
                          >
                            <Car class="h-6 w-6 text-blue-600" />
                          </div>
                          <h4 class="text-xl font-semibold">高快领航</h4>
                        </div>
                        <p class="text-gray-600 mb-4">
                          针对高速及城市快速道路场景设计，实现全流程智能领航，官方实测可达成"1000公里以上0接管"。
                        </p>
                        <div class="space-y-3">
                          <div
                              class="p-3 rounded-lg bg-white border border-blue-200"
                          >
                            <h5 class="font-medium text-blue-700 mb-1">
                              全路径智能规划
                            </h5>
                            <p class="text-sm text-gray-600">
                              结合导航地图自动识别高速/快速路路段，规划最优行驶路径。
                            </p>
                          </div>
                          <div
                              class="p-3 rounded-lg bg-white border border-blue-200"
                          >
                            <h5 class="font-medium text-blue-700 mb-1">
                              车道级精准控制
                            </h5>
                            <p class="text-sm text-gray-600">
                              实现车道线精准识别，保持车辆居中行驶。
                            </p>
                          </div>
                          <div
                              class="p-3 rounded-lg bg-white border border-blue-200"
                          >
                            <h5 class="font-medium text-blue-700 mb-1">
                              自主换道与超车
                            </h5>
                            <p class="text-sm text-gray-600">
                              系统实时监测车况，自动完成超车动作，支持"拨杆变道"。
                            </p>
                          </div>
                          <div
                              class="p-3 rounded-lg bg-white border border-blue-200"
                          >
                            <h5 class="font-medium text-blue-700 mb-1">
                              障碍物智能规避
                            </h5>
                            <p class="text-sm text-gray-600">
                              针对施工路段、散落障碍物等场景，提前识别并选择绕行或减速刹停方案。
                            </p>
                          </div>
                          <div
                              class="p-3 rounded-lg bg-white border border-blue-200"
                          >
                            <h5 class="font-medium text-blue-700 mb-1">
                              大车智慧礼让
                            </h5>
                            <p class="text-sm text-gray-600">
                              识别相邻车道大型车辆时，自动在车道内偏移15-20cm，增大安全距离。
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                          class="p-6 rounded-xl bg-green-50 border border-green-100 h-full"
                      >
                        <div class="flex items-center mb-4">
                          <div
                              class="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-3"
                          >
                            <Target class="h-6 w-6 text-green-600" />
                          </div>
                          <h4 class="text-xl font-semibold">代客泊车</h4>
                        </div>
                        <p class="text-gray-600 mb-4">
                          搭载高阶代客泊车功能，实现"下车即走、锁车泊入"的便捷体验，官方公布泊车成功率达99%。
                        </p>
                        <div class="space-y-3">
                          <div
                              class="p-3 rounded-lg bg-white border border-green-200"
                          >
                            <h5 class="font-medium text-green-700 mb-1">
                              全场景车位识别
                            </h5>
                            <p class="text-sm text-gray-600">
                              支持垂直、平行、斜列等标准车位及无画线车位等非标准场景。
                            </p>
                          </div>
                          <div
                              class="p-3 rounded-lg bg-white border border-green-200"
                          >
                            <h5 class="font-medium text-green-700 mb-1">
                              无人值守泊入/泊出
                            </h5>
                            <p class="text-sm text-gray-600">
                              用户可远程控制车辆自动泊入/泊出至指定位置。
                            </p>
                          </div>
                          <div
                              class="p-3 rounded-lg bg-white border border-green-200"
                          >
                            <h5 class="font-medium text-green-700 mb-1">
                              泊车安全兜底
                            </h5>
                            <p class="text-sm text-gray-600">
                              因系统异常导致的泊车碰撞损失由比亚迪承担。
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                          class="p-6 rounded-xl bg-red-50 border border-red-100 h-full"
                      >
                        <div class="flex items-center mb-4">
                          <div
                              class="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mr-3"
                          >
                            <Shield class="h-6 w-6 text-red-600" />
                          </div>
                          <h4 class="text-xl font-semibold">主动安全</h4>
                        </div>
                        <p class="text-gray-600 mb-4">
                          构建起覆盖行车、泊车全场景的主动安全体系，核心功能聚焦"防碰撞、防失误"两大目标。
                        </p>
                        <div class="space-y-3">
                          <div
                              class="p-3 rounded-lg bg-white border border-red-200"
                          >
                            <h5 class="font-medium text-red-700 mb-1">
                              AEB自动紧急制动
                            </h5>
                            <p class="text-sm text-gray-600">
                              支持100km/h时速下对静止前车的稳定刹停，可识别"儿童鬼探头"场景。
                            </p>
                          </div>
                          <div
                              class="p-3 rounded-lg bg-white border border-red-200"
                          >
                            <h5 class="font-medium text-red-700 mb-1">
                              全方位盲区监测
                            </h5>
                            <p class="text-sm text-gray-600">
                              实现侧后方50米范围内来车监测，变道时存在风险即触发预警。
                            </p>
                          </div>
                          <div
                              class="p-3 rounded-lg bg-white border border-red-200"
                          >
                            <h5 class="font-medium text-red-700 mb-1">
                              驾驶员状态监测
                            </h5>
                            <p class="text-sm text-gray-600">
                              实时识别驾驶员疲劳、分心状态，触发预警提醒。
                            </p>
                          </div>
                          <div
                              class="p-3 rounded-lg bg-white border border-red-200"
                          >
                            <h5 class="font-medium text-red-700 mb-1">
                              低速碰撞预警
                            </h5>
                            <p class="text-sm text-gray-600">
                              泊车或低速行驶时，监测近距离障碍物，提前触发预警并辅助制动。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-12">
                      <div class="flex items-center mb-6">
                        <h4 class="text-2xl font-bold text-blue-800">
                          搭载车型范围
                        </h4>
                      </div>
                      <p
                          class="text-lg text-gray-700 mb-8 leading-relaxed"
                          style="font-size: 16px"
                      >
                        天神之眼C首批上市21款车型，覆盖7万级到20万级比亚迪车型：
                      </p>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="p-6 rounded-xl bg-blue-50 shadow-sm">
                          <h5
                              class="text-lg font-semibold text-blue-700 mb-4 pb-2 border-b border-blue-100"
                          >
                            价格区间分布
                          </h5>
                          <div class="space-y-6">
                            <div>
                              <p
                                  class="text-base font-medium text-blue-900 mb-3"
                              >
                                10 万以上车型（全系标配）：
                              </p>
                              <div
                                  class="bg-white rounded-lg p-4 border border-blue-100"
                              >
                                <p class="text-gray-700 leading-relaxed">
                                  夏、汉 EV/DM-i、唐 DM-i、宋 L EV、海狮
                                  07EV、海豹 EV、宋 L DM-i、宋 PLUS
                                  EV/DM-i、海豹 06GT、海豹 07DM-i、秦 L
                                  DM-i、宋 Pro DM-i、第二代秦 PLUS
                                  EV、元 UP、海豹 06DM-i、海狮 05DM-i、海豚等...
                                </p>
                              </div>
                            </div>
                            <div>
                              <p
                                  class="text-base font-medium text-blue-900 mb-3"
                              >
                                10 万以下车型（部分搭载）：
                              </p>
                              <div
                                  class="bg-white rounded-lg p-4 border border-blue-100"
                              >
                                <p class="text-gray-700 leading-relaxed">
                                  第二代秦 PLUS DM-i、海豹 05DM-i、海鸥等...
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="p-6 rounded-xl bg-indigo-50 shadow-sm">
                          <h5
                              class="text-lg font-semibold text-indigo-700 mb-4 pb-2 border-b border-indigo-100"
                          >
                            品牌与系列分布
                          </h5>
                          <div class="space-y-6">
                            <div
                                class="p-5 rounded-lg bg-blue-50 border border-blue-100 hover:scale-[1.02] transition-transform duration-300"
                            >
                              <p class="text-base font-medium text-blue-800 mb-2">
                                王朝网：
                              </p>
                              <p class="text-gray-700">
                                门槛车型为第二代秦 PLUS
                                DM-i 智驾版，涵盖秦、汉、唐、宋、元、夏等系列
                              </p>
                            </div>
                            <div
                                class="p-5 rounded-lg bg-green-50 border border-green-100 hover:scale-[1.02] transition-transform duration-300"
                            >
                              <p
                                  class="text-base font-medium text-green-800 mb-2"
                              >
                                海洋网：
                              </p>
                              <p class="text-gray-700">
                                门槛车型为海鸥智驾版，涵盖海豹、海狮、海豚、海鸥等系列
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-else-if="selectedVersion === 'first'" key="v-first">
                  <div
                      class="p-6 rounded-xl bg-white border border-gray-100 shadow-sm mb-6"
                  >
                    <h3 class="text-2xl font-semibold text-green-600 mb-4">
                      第一次OTA (2025年7-8月)
                    </h3>
                    <p class="text-gray-600 mb-8">
                      首次大规模智驾功能升级，重点提升泊车和行车安全
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div
                          class="p-6 rounded-xl bg-green-50 border border-green-100"
                      >
                        <div class="flex items-center mb-4">
                          <div
                              class="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-3"
                          >
                            <Target class="h-6 w-6 text-green-600" />
                          </div>
                          <h4 class="text-xl font-semibold">智能泊车升级</h4>
                        </div>
                        <p class="text-gray-600 mb-4">新增三大核心泊车功能</p>
                        <div class="space-y-4">
                          <div
                              class="p-4 rounded-lg bg-white border border-green-200"
                          >
                            <h5 class="font-medium text-blue-700 mb-2">
                              偏置泊车功能
                            </h5>
                            <p class="text-sm text-gray-600">
                              支持"偏左、居中、偏右"三种偏置选项，自动灵活泊入，方便上下车
                            </p>
                          </div>
                          <div
                              class="p-4 rounded-lg bg-white border border-green-200"
                          >
                            <h5 class="font-medium text-green-700 mb-2">
                              车头泊入+车尾泊出
                            </h5>
                            <p class="text-sm text-gray-600">
                              支持自由选择泊入方式，车头泊入后可车尾泊出，解决后备箱开启问题
                            </p>
                          </div>
                          <div
                              class="p-4 rounded-lg bg-white border border-green-200"
                          >
                            <h5 class="font-medium text-orange-700 mb-2">
                              窄车位自动收后视镜
                            </h5>
                            <p class="text-sm text-gray-600">
                              窄车位泊入时后视镜自动折叠，有效避免剐蹭，提升泊车安全感
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                          class="p-6 rounded-xl bg-red-50 border border-red-100"
                      >
                        <div class="flex items-center mb-4">
                          <div
                              class="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mr-3"
                          >
                            <Shield class="h-6 w-6 text-red-600" />
                          </div>
                          <h4 class="text-xl font-semibold">行车安全增强</h4>
                        </div>
                        <p class="text-gray-600 mb-4">新增主动安全提醒功能</p>
                        <div class="space-y-4">
                          <div
                              class="p-4 rounded-lg bg-white border border-red-200"
                          >
                            <h5 class="font-medium text-red-700 mb-2">
                              危险加塞提醒
                            </h5>
                            <p class="text-sm text-gray-600">
                              遇前车近距离危险变道时，通过闪烁灯光+鸣笛进行主动提醒
                            </p>
                          </div>
                          <div
                              class="p-4 rounded-lg bg-white border border-red-200"
                          >
                            <h5 class="font-medium text-purple-700 mb-2">
                              通行效率优先
                            </h5>
                            <p class="text-sm text-gray-600">
                              根据实时车流智能调节车速，避免断崖式限速，提升通行效率
                            </p>
                          </div>
                          <div
                              class="p-4 rounded-lg bg-white border border-red-200"
                          >
                            <h5 class="font-medium text-green-700 mb-2">
                              AEB性能提升
                            </h5>
                            <p class="text-sm text-gray-600">
                              AEB工作速度提升至100km/h稳定刹停，夜间80km/h可识别两轮车
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                        class="p-6 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200"
                    >
                      <div class="flex items-center mb-4">
                        <div
                            class="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mr-3"
                        >
                          <Award class="h-5 w-5 text-amber-600" />
                        </div>
                        <h4 class="text-xl font-semibold text-amber-800">
                          里程碑：泊车安全兜底承诺
                        </h4>
                      </div>
                      <p class="text-gray-700">
                        比亚迪承诺：在中国市场，对所有天神之眼车辆在智能泊车场景下的安全及损失全面兜底，无论车辆是否在保，不问是否首任车主。
                      </p>
                    </div>

                    <div
                        class="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm"
                    >
                      <div class="flex items-center mb-6">
                        <div class="p-3 rounded-lg bg-blue-100 mr-4">
                          <Settings class="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 class="text-xl font-bold text-gray-800">
                          升级策略分析
                        </h4>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                            class="p-5 rounded-xl bg-white border border-blue-200 shadow-sm hover:scale-[1.02] transition-transform duration-300"
                        >
                          <h5 class="text-lg font-semibold text-blue-700 mb-4">
                            1. 按品牌/系列分批次
                          </h5>
                          <ul class="space-y-3">
                            <li class="flex items-start">
                              <div
                                  class="mt-1 mr-3 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                              >
                                <span class="text-xs font-bold text-blue-600"
                                >1</span
                                >
                              </div>
                              <p class="text-gray-700">
                                首先升级王朝网车型（<span
                                  class="text-blue-600 font-medium"
                              >7月9日启动</span
                              >）
                              </p>
                            </li>
                            <li class="flex items-start">
                              <div
                                  class="mt-1 mr-3 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                              >
                                <span class="text-xs font-bold text-blue-600"
                                >2</span
                                >
                              </div>
                              <p class="text-gray-700">
                                随后升级海洋网车型（<span
                                  class="text-blue-600 font-medium"
                              >7月14日启动</span
                              >）
                              </p>
                            </li>
                            <li class="flex items-start">
                              <div
                                  class="mt-1 mr-3 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                              >
                                <span class="text-xs font-bold text-blue-600"
                                >3</span
                                >
                              </div>
                              <p class="text-gray-700">
                                最后针对热门车型（如宋系列）进行专项升级（<span
                                  class="text-blue-600 font-medium"
                              >8月16日</span
                              >）
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div
                            class="p-5 rounded-xl bg-white border border-blue-200 shadow-sm hover:scale-[1.02] transition-transform duration-300"
                        >
                          <h5 class="text-lg font-semibold text-blue-700 mb-4">
                            2. 按车型销量优先级
                          </h5>
                          <ul class="space-y-3">
                            <li class="flex items-start">
                              <div
                                  class="mt-1 mr-3 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                              >
                                <span class="text-xs font-bold text-blue-600"
                                >★</span
                                >
                              </div>
                              <p class="text-gray-700">
                                销量较高的宋系列、秦系列优先获得升级
                              </p>
                            </li>
                            <li class="flex items-start">
                              <div
                                  class="mt-1 mr-3 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                              >
                                <span class="text-xs font-bold text-blue-600"
                                >★</span
                                >
                              </div>
                              <p class="text-gray-700">
                                新上市车型（如夏）也获得优先升级待遇
                              </p>
                            </li>
                            <li class="flex items-start">
                              <div
                                  class="mt-1 mr-3 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                              >
                                <span class="text-xs font-bold text-blue-600"
                                >★</span
                                >
                              </div>
                              <p class="text-gray-700">
                                入门级车型（如海鸥）虽然价格较低，但同样在首批升级范围内
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                        class="mt-8 p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-md"
                    >
                      <div class="flex items-center mb-8">
                        <div
                            class="p-3 rounded-full bg-blue-600 shadow-md shadow-blue-200 mr-4"
                        >
                          <Calendar class="h-6 w-6 text-white" />
                        </div>
                        <h4 class="text-xl font-bold text-gray-800">
                          OTA时间节点
                        </h4>
                      </div>
                      <div class="relative pl-12 pb-4">
                        <div
                            class="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 ml-[9px]"
                        ></div>
                        <div
                            class="relative mb-8 transition-all hover:-translate-y-1"
                        >
                          <div
                              class="absolute -left-[48px] flex items-center justify-center"
                          >
                            <div
                                class="h-5 w-5 rounded-full bg-blue-600 border-4 border-white shadow-md"
                            ></div>
                          </div>
                          <div
                              class="bg-white p-5 rounded-xl shadow-lg border border-blue-100"
                          >
                            <div class="flex items-center mb-2">
                              <span
                                  class="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
                              >7月9日</span
                              >
                              <span class="ml-3 text-sm text-gray-500"
                              >里程碑事件</span
                              >
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                              比亚迪王朝网秦宋元汉唐夏6大车系共17款车型开启OTA升级，天神之眼开启最大规模升级
                            </p>
                          </div>
                        </div>
                        <div
                            class="relative mb-8 transition-all hover:-translate-y-1"
                        >
                          <div
                              class="absolute -left-[48px] flex items-center justify-center"
                          >
                            <div
                                class="h-5 w-5 rounded-full bg-blue-500 border-4 border-white shadow-md"
                            ></div>
                          </div>
                          <div
                              class="bg-white p-5 rounded-xl shadow-md border border-blue-100"
                          >
                            <div class="flex items-center mb-2">
                              <span
                                  class="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
                              >7月14日</span
                              >
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                              比亚迪海洋网宣布13款车型将迎来全面OTA升级
                            </p>
                          </div>
                        </div>
                        <div
                            class="relative mb-8 transition-all hover:-translate-y-1"
                        >
                          <div
                              class="absolute -left-[48px] flex items-center justify-center"
                          >
                            <div
                                class="h-5 w-5 rounded-full bg-blue-400 border-4 border-white shadow-md"
                            ></div>
                          </div>
                          <div
                              class="bg-white p-5 rounded-xl shadow-md border border-blue-100"
                          >
                            <div class="flex items-center mb-2">
                              <span
                                  class="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
                              >7月16日</span
                              >
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                              比亚迪海洋网正式推送OTA升级，覆盖泊车、行车、安全三大版块10余项功能
                            </p>
                          </div>
                        </div>
                        <div
                            class="relative mb-8 transition-all hover:-translate-y-1"
                        >
                          <div
                              class="absolute -left-[48px] flex items-center justify-center"
                          >
                            <div
                                class="h-5 w-5 rounded-full bg-blue-400 border-4 border-white shadow-md"
                            ></div>
                          </div>
                          <div
                              class="bg-white p-5 rounded-xl shadow-md border border-blue-100"
                          >
                            <div class="flex items-center mb-2">
                              <span
                                  class="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
                              >7月16日</span
                              >
                              <span class="ml-3 text-sm text-gray-500"
                              >重大突破</span
                              >
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                              比亚迪宣布"天神之眼"用户突破百万里程碑
                            </p>
                          </div>
                        </div>
                        <div
                            class="relative mb-8 transition-all hover:-translate-y-1"
                        >
                          <div
                              class="absolute -left-[48px] flex items-center justify-center"
                          >
                            <div
                                class="h-5 w-5 rounded-full bg-blue-500 border-4 border-white shadow-md"
                            ></div>
                          </div>
                          <div
                              class="bg-white p-5 rounded-xl shadow-md border border-blue-100"
                          >
                            <div class="flex items-center mb-2">
                              <span
                                  class="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
                              >8月8日</span
                              >
                              <span class="ml-3 text-sm text-gray-500"
                              >项目完成</span
                              >
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                              比亚迪宣布全部车型OTA推送完毕，首次大规模OTA推送结束
                            </p>
                          </div>
                        </div>
                        <div
                            class="relative transition-all hover:-translate-y-1"
                        >
                          <div
                              class="absolute -left-[48px] flex items-center justify-center"
                          >
                            <div
                                class="h-5 w-5 rounded-full bg-blue-400 border-4 border-white shadow-md"
                            ></div>
                          </div>
                          <div
                              class="bg-white p-5 rounded-xl shadow-md border border-blue-100"
                          >
                            <div class="flex items-center mb-2">
                              <span
                                  class="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
                              >8月16日</span
                              >
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                              比亚迪针对宋L DM-i和宋Pro
                              DM-i搭载天神之眼的车型补充推送OTA升级
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-else-if="selectedVersion === 'third'" key="v-third">
                  <div
                      class="p-6 rounded-xl bg-white border border-gray-100 shadow-sm mb-6"
                  >
                    <h3 class="text-2xl font-semibold text-orange-600 mb-4">
                      第二次OTA (2025年10月)
                    </h3>
                    <p class="text-gray-600 mb-8">
                      围绕智驾周边生态，开启情绪价值升级，重点提升用户交互体验
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div
                          class="p-6 rounded-xl bg-red-50 border border-red-100"
                      >
                        <div class="flex items-center mb-4">
                          <div
                              class="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mr-3"
                          >
                            <Eye class="h-6 w-6 text-red-600" />
                          </div>
                          <h4 class="text-xl font-semibold">安全记录增强</h4>
                        </div>
                        <div class="space-y-4">
                          <div
                              class="p-4 rounded-lg bg-white border border-red-200"
                          >
                            <h5 class="font-medium text-red-700 mb-2">
                              泊车全向记录
                            </h5>
                            <p class="text-sm text-gray-600">
                              泊车辅助时自动触发5个摄像头全程记录，前后左右全覆盖
                            </p>
                          </div>
                          <div
                              class="p-4 rounded-lg bg-white border border-red-200"
                          >
                            <h5 class="font-medium text-purple-700 mb-2">
                              泊车语音提醒
                            </h5>
                            <p class="text-sm text-gray-600">
                              下车泊车时车外语音播报提醒，遇到行人会提示"正在泊车，请让一下"
                            </p>
                          </div>
                          <div
                              class="p-4 rounded-lg bg-white border border-red-200"
                          >
                            <h5 class="font-medium text-green-700 mb-2">
                              荣耀车联支持
                            </h5>
                            <p class="text-sm text-gray-600">
                              新增荣耀车联，适配Magic系列机型，支持导航和应用流转
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                          class="p-6 rounded-xl bg-orange-50 border border-orange-100"
                      >
                        <div class="flex items-center mb-4">
                          <div
                              class="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mr-3"
                          >
                            <Star class="h-6 w-6 text-orange-600" />
                          </div>
                          <h4 class="text-xl font-semibold">情绪价值升级</h4>
                        </div>
                        <div class="space-y-4">
                          <div
                              class="p-4 rounded-lg bg-white border border-orange-200"
                          >
                            <h5 class="font-medium text-gray-800 mb-2">
                              全新动态主题
                            </h5>
                            <p class="text-sm text-gray-600">
                              10套大师设计主题，4种情绪场景，桌面完全动起来
                            </p>
                          </div>
                          <div
                              class="p-4 rounded-lg bg-white border border-orange-200"
                          >
                            <h5 class="font-medium text-blue-700 mb-2">
                              导航途经点编辑
                            </h5>
                            <p class="text-sm text-gray-600">
                              途经点数量上限从3个增加至15个，支持排序和编辑
                            </p>
                          </div>
                          <div
                              class="p-4 rounded-lg bg-white border border-orange-200"
                          >
                            <h5 class="font-medium text-green-700 mb-2">
                              AI全场景音色
                            </h5>
                            <p class="text-sm text-gray-600">
                              新增9种智能语音播报音色，包括机甲先锋、高冷御姐等
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>

          <div v-else-if="activeTab === 'future'" key="future">
            <div
                class="p-8 rounded-2xl shadow-lg bg-white/95 border border-gray-100"
            >
              <div class="flex items-center mb-6">
                <div class="h-8 w-1 bg-blue-600 mr-3 rounded-full"></div>
                <h2 class="text-2xl md:text-3xl font-bold">技术发展时间线</h2>
              </div>
              <div class="mb-12">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div
                      class="p-6 rounded-xl bg-purple-50 border border-purple-100 h-full flex flex-col items-center hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div
                        class="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4"
                    >
                      <Target class="h-8 w-8 text-purple-600" />
                    </div>
                    <h4
                        class="text-xl font-semibold text-purple-700 text-center mb-2"
                    >
                      记忆领航
                      <span class="text-sm font-normal text-purple-500"
                      >(2025年底)</span
                      >
                    </h4>
                    <p class="text-purple-800 font-medium mb-4 text-center">
                      MNOA功能上线
                    </p>
                    <ul class="space-y-3 w-full">
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">上下班通勤路线智驾</span>
                      </li>
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">红绿灯启停控制</span>
                      </li>
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">复杂路口通行</span>
                      </li>
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">自动超车功能</span>
                      </li>
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">博弈变道能力</span>
                      </li>
                    </ul>
                  </div>
                  <div
                      class="p-6 rounded-xl bg-blue-50 border border-blue-100 h-full flex flex-col items-center hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div
                        class="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4"
                    >
                      <Car class="h-8 w-8 text-blue-600" />
                    </div>
                    <h4
                        class="text-xl font-semibold text-blue-700 text-center mb-2"
                    >
                      城市领航
                      <span class="text-sm font-normal text-blue-500"
                      >(2026年中)</span
                      >
                    </h4>
                    <p class="text-blue-800 font-medium mb-4 text-center">
                      城市NOA功能
                    </p>
                    <ul class="space-y-3 w-full">
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">城市道路智驾</span>
                      </li>
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">无保护左转</span>
                      </li>
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">环岛通行能力</span>
                      </li>
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">自动绕行障碍物</span>
                      </li>
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">交通参与者识别</span>
                      </li>
                    </ul>
                  </div>
                  <div
                      class="p-6 rounded-xl bg-green-50 border border-green-100 h-full flex flex-col items-center hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div
                        class="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4"
                    >
                      <Cpu class="h-8 w-8 text-green-600" />
                    </div>
                    <h4
                        class="text-xl font-semibold text-green-700 text-center mb-2"
                    >
                      璇玑架构
                      <span class="text-sm font-normal text-green-500"
                      >(2026年)</span
                      >
                    </h4>
                    <p class="text-green-800 font-medium mb-4 text-center">
                      全新电子架构
                    </p>
                    <ul class="space-y-3 w-full">
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">全域OTA能力</span>
                      </li>
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">算力平台升级</span>
                      </li>
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">多传感器融合</span>
                      </li>
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">V2X车路协同</span>
                      </li>
                      <li class="flex items-start">
                        <Star class="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                        <span class="text-gray-700">端到端控制</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="mb-12">
                <div class="flex items-center mb-6">
                  <div class="h-8 w-1 bg-blue-600 mr-3 rounded-full"></div>
                  <h3 class="text-2xl md:text-3xl font-bold">即将推出的功能</h3>
                </div>
                <p class="text-lg mb-8 leading-relaxed text-gray-700">
                  根据比亚迪官方规划，天神之眼C将在2025年底前通过OTA推送城区记忆领航功能。
                </p>
                <div
                    class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 border border-blue-200 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                      class="flex flex-col md:flex-row md:items-center gap-6 mb-6"
                  >
                    <h4
                        class="text-2xl font-bold text-blue-800 mb-2"
                        style="font-size: 22px"
                    >
                      记忆领航 MNOA
                    </h4>
                  </div>
                  <div class="space-y-4 text-gray-700">
                    <p class="leading-relaxed">
                      比亚迪为天神之眼C预埋的重要功能，有望缩小与天神之眼B的功能差距。适用于上下班通勤等高频出行路线场景。该功能可让车辆在城市固定线路实现自动加减速、避障、红绿灯识别等类似城市NOA的功能，完成红绿灯启停、复杂路口通行、自动超车、全场景绕行礼让、博弈变道等操作。
                    </p>
                    <p class="leading-relaxed mt-4">
                      用户可通过创建路线功能，将上下班的路程保存到车机系统中，在后续使用时一键开启领航。系统会按照预设路线进行智能驾驶，包括自动通过红绿灯、进入相应车道、自主变道、提前减速通过坑洼路段等。
                    </p>
                  </div>
                  <div class="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div
                        class="p-3 rounded-lg bg-white/80 border border-blue-100 text-center shadow-sm"
                    >
                      <p class="text-blue-700 font-medium text-sm">
                        红绿灯启停
                      </p>
                    </div>
                    <div
                        class="p-3 rounded-lg bg-white/80 border border-blue-100 text-center shadow-sm"
                    >
                      <p class="text-blue-700 font-medium text-sm">
                        复杂路口通行
                      </p>
                    </div>
                    <div
                        class="p-3 rounded-lg bg-white/80 border border-blue-100 text-center shadow-sm"
                    >
                      <p class="text-blue-700 font-medium text-sm">
                        自动超车
                      </p>
                    </div>
                    <div
                        class="p-3 rounded-lg bg-white/80 border border-blue-100 text-center shadow-sm"
                    >
                      <p class="text-blue-700 font-medium text-sm">
                        绕行礼让
                      </p>
                    </div>
                    <div
                        class="p-3 rounded-lg bg-white/80 border border-blue-100 text-center shadow-sm"
                    >
                      <p class="text-blue-700 font-medium text-sm">
                        博弈变道
                      </p>
                    </div>
                  </div>
                  <div class="mt-8 flex items-center justify-between">
                    <div class="flex items-center">
                      <div
                          class="h-2 w-2 rounded-full bg-blue-600 mr-2"
                      ></div>
                      <p class="text-sm text-blue-600">
                        预计推送时间：2025年12月
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-12">
                <div class="flex items-center mb-6">
                  <div class="h-8 w-1 bg-blue-600 mr-3 rounded-full"></div>
                  <h3 class="text-2xl md:text-3xl font-bold">
                    中长期发展方向
                  </h3>
                </div>
                <p class="text-lg mb-8 leading-relaxed text-gray-700">
                  基于比亚迪天神之眼智能驾驶平台的发展轨迹，可以推测未来的功能下放趋势与技术演进方向：
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div
                      class="p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-md h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div class="flex items-center mb-5">
                      <div class="p-3 rounded-lg bg-blue-100 mr-4">
                        <Eye class="h-7 w-7 text-blue-600" />
                      </div>
                      <h4 class="text-xl font-semibold text-blue-800">
                        感知能力提升
                      </h4>
                    </div>
                    <ul class="space-y-4">
                      <li class="flex items-start">
                        <div
                            class="mt-1 mr-3 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                        >
                          <Check class="h-3 w-3 text-blue-600" />
                        </div>
                        <p class="text-gray-700">
                          多传感器融合优化：进一步优化摄像头、毫米波雷达和超声波雷达的融合算法
                        </p>
                      </li>
                      <li class="flex items-start">
                        <div
                            class="mt-1 mr-3 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                        >
                          <Check class="h-3 w-3 text-blue-600" />
                        </div>
                        <p class="text-gray-700">
                          激光雷达技术下放：随着激光雷达成本的下降，激光雷达技术逐步下放至天神之眼C平台
                        </p>
                      </li>
                      <li class="flex items-start">
                        <div
                            class="mt-1 mr-3 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                        >
                          <Check class="h-3 w-3 text-blue-600" />
                        </div>
                        <p class="text-gray-700">
                          天神之眼B和C的功能差异将进一步缩小，主要差异可能集中在硬件冗余和算力上
                        </p>
                      </li>
                    </ul>
                    <div class="mt-6 pt-4 border-t border-blue-100"></div>
                  </div>
                  <div
                      class="p-6 rounded-2xl bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 shadow-md h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div class="flex items-center mb-5">
                      <div class="p-3 rounded-lg bg-indigo-100 mr-4">
                        <Cpu class="h-7 w-7 text-indigo-600" />
                      </div>
                      <h4 class="text-xl font-semibold text-indigo-800">
                        算法与AI能力进化
                      </h4>
                    </div>
                    <ul class="space-y-4">
                      <li class="flex items-start">
                        <div
                            class="mt-1 mr-3 h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0"
                        >
                          <Check class="h-3 w-3 text-indigo-600" />
                        </div>
                        <p class="text-gray-700">
                          大模型能力增强：持续提升端到端大模型的能力，使其能够处理更复杂的驾驶场景和边缘案例
                        </p>
                      </li>
                      <li class="flex items-start">
                        <div
                            class="mt-1 mr-3 h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0"
                        >
                          <Check class="h-3 w-3 text-indigo-600" />
                        </div>
                        <p class="text-gray-700">
                          个性化学习：引入更多个性化学习机制，使系统能够根据不同驾驶员的习惯和偏好调整驾驶风格
                        </p>
                      </li>
                      <li class="flex items-start">
                        <div
                            class="mt-1 mr-3 h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0"
                        >
                          <Check class="h-3 w-3 text-indigo-600" />
                        </div>
                        <p class="text-gray-700">
                          V2X技术融合：基于V2X技术的协同驾驶功能将成为新的差异化方向
                        </p>
                      </li>
                    </ul>
                    <div class="mt-6 pt-4 border-t border-indigo-100"></div>
                  </div>
                  <div
                      class="p-6 rounded-2xl bg-gradient-to-br from-white to-green-50 border border-green-100 shadow-md h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div class="flex items-center mb-5">
                      <div class="p-3 rounded-lg bg-green-100 mr-4">
                        <Zap class="h-7 w-7 text-green-600" />
                      </div>
                      <h4 class="text-xl font-semibold text-green-800">
                        生态系统扩展
                      </h4>
                    </div>
                    <ul class="space-y-4">
                      <li class="flex items-start">
                        <div
                            class="mt-1 mr-3 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"
                        >
                          <Check class="h-3 w-3 text-green-600" />
                        </div>
                        <p class="text-gray-700">
                          跨平台互联：与更多智能家居、智能交通系统实现无缝对接
                        </p>
                      </li>
                      <li class="flex items-start">
                        <div
                            class="mt-1 mr-3 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"
                        >
                          <Check class="h-3 w-3 text-green-600" />
                        </div>
                        <p class="text-gray-700">
                          开发者平台开放：开放部分API接口，允许第三方开发者开发相关应用和功能
                        </p>
                      </li>
                      <li class="flex items-start">
                        <div
                            class="mt-1 mr-3 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"
                        >
                          <Check class="h-3 w-3 text-green-600" />
                        </div>
                        <p class="text-gray-700">
                          安全体系升级：引入更高级的安全防护机制，确保智能驾驶系统的安全性和可靠性
                        </p>
                      </li>
                    </ul>
                    <div class="mt-6 pt-4 border-t border-green-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <FloatingTabSelector
        v-model="activeTab"
        :tabs="tabs"
        footer-id="page-footer"
    />
    <Footer />
    <footer
        id="page-footer"
        class="mt-20 py-10 bg-gray-100 border-t border-gray-200"
    >
      <div class="container mx-auto px-4 text-center">
        <div class="flex justify-center items-center mb-6">
          <Eye class="h-8 w-8 text-blue-600 mr-2" />
          <h3
              class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
          >
            比亚迪天神之眼C功能OTA解析
          </h3>
        </div>
        <p class="text-sm text-gray-600">数据更新时间: 2025-11-20</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
"""

fs.write(file_path, content)