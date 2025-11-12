<template>
  <div id="main-content" class="font-inter bg-gray-50 pt-11">
    <header class="bg-gradient-to-r from-primary to-secondary text-white py-12">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">比亚迪天神之眼C功能演进树状图</h1>
        <p class="text-xl opacity-90">从初始版本到未来规划的完整功能演进历程</p>
      </div>
    </header>

    <nav class="bg-white border-b border-gray-200 sticky top-11 z-40"> <div class="container mx-auto px-6">
      <div class="flex space-x-8 overflow-x-auto py-4">
        <button @click="showPhase('initial', $event)" class="timeline-btn whitespace-nowrap px-4 py-2 border-b-2 border-primary text-primary font-medium">
          <i class="fa fa-rocket mr-2"></i>初始版本 (2025年2月)
        </button>
        <button @click="showPhase('ota1', $event)" class="timeline-btn whitespace-nowrap px-4 py-2 border-b-2 border-transparent text-gray-600 hover:text-primary">
          <i class="fa fa-bullseye mr-2"></i>第一次OTA (2025年7月)
        </button>
        <button @click="showPhase('ota2', $event)" class="timeline-btn whitespace-nowrap px-4 py-2 border-b-2 border-transparent text-gray-600 hover:text-primary">
          <i class="fa fa-bullseye mr-2"></i>第二次OTA (2025年8月)
        </button>
        <button @click="showPhase('ota3', $event)" class="timeline-btn whitespace-nowrap px-4 py-2 border-b-2 border-transparent text-gray-600 hover:text-primary">
          <i class="fa fa-bullseye mr-2"></i>第三次OTA (2025年10月)
        </button>
        <button @click="showPhase('future', $event)" class="timeline-btn whitespace-nowrap px-4 py-2 border-b-2 border-transparent text-gray-600 hover:text-primary">
          <i class="fa fa-bullseye mr-2"></i>未来规划 (2025年底-2026年)
        </button>
      </div>
    </div>
    </nav>

    <main class="container mx-auto px-6 py-12">

      <div id="initial-phase" class="phase-content">
        <div class="mb-8 text-center">
          <h2 class="text-3xl font-bold text-primary mb-4">初始版本功能 (2025年2月发布)</h2>
          <p class="text-gray-600">天神之眼C首次发布时的基础功能配置</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-6 tree-node">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <i class="fa fa-car text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-primary">智能驾驶核心</h3>
            </div>
            <ul class="space-y-3">
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>高快领航辅助 (HNOA)</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>车道巡航辅助 (LCC)</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>自适应巡航 (ACC)</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>自动紧急制动 (AEB)</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>车道保持辅助</span>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 tree-node">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <i class="fa fa-map-marker text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-secondary">智能泊车</h3>
            </div>
            <ul class="space-y-3">
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>自动泊车辅助</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>垂直泊车</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>平行泊车</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>斜列泊车</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>遥控泊车</span>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 tree-node">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <i class="fa fa-cogs text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-accent">硬件配置</h3>
            </div>
            <ul class="space-y-3">
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>前视三目摄像头</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>5个毫米波雷达</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>12个超声波雷达</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>地平线征程芯片</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>29枚传感器总计</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="ota1-phase" class="phase-content hidden">
        <div class="mb-8 text-center">
          <h2 class="text-3xl font-bold text-secondary mb-4">第一次OTA升级 (2025年7月)</h2>
          <p class="text-gray-600">首次大规模智驾功能升级，重点提升泊车和行车安全</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-6 tree-node">
            <div class="text-center mb-6">
              <div class="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa fa-map-marker text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-semibold text-secondary">智能泊车大幅升级</h3>
              <p class="text-gray-600 mt-2">新增三大核心泊车功能</p>
            </div>

            <div class="space-y-6">
              <div class="border-l-4 border-blue-500 pl-4">
                <h4 class="font-semibold text-blue-600 mb-2">偏置泊车功能</h4>
                <p class="text-sm text-gray-600">支持"偏左、居中、偏右"三种偏置选项，自动灵活泊入，方便上下车</p>
              </div>

              <div class="border-l-4 border-green-500 pl-4">
                <h4 class="font-semibold text-green-600 mb-2">车头泊入+车尾泊出</h4>
                <p class="text-sm text-gray-600">支持自由选择泊入方式，车头泊入后可车尾泊出，解决后备箱开启问题</p>
              </div>

              <div class="border-l-4 border-orange-500 pl-4">
                <h4 class="font-semibold text-orange-600 mb-2">窄车位自动收后视镜</h4>
                <p class="text-sm text-gray-600">窄车位泊入时后视镜自动折叠，有效避免剐蹭，提升泊车安全感</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 tree-node">
            <div class="text-center mb-6">
              <div class="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa fa-shield text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-semibold text-accent">行车安全增强</h3>
              <p class="text-gray-600 mt-2">新增主动安全提醒功能</p>
            </div>

            <div class="space-y-6">
              <div class="border-l-4 border-red-500 pl-4">
                <h4 class="font-semibold text-red-600 mb-2">危险加塞提醒</h4>
                <p class="text-sm text-gray-600">遇前车近距离危险变道时，通过闪远光灯+鸣笛进行主动提醒</p>
              </div>

              <div class="border-l-4 border-purple-500 pl-4">
                <h4 class="font-semibold text-purple-600 mb-2">通行效率优先</h4>
                <p class="text-sm text-gray-600">根据实时车流智能调节车速，避免断崖式限速，提升通行效率</p>
              </div>

              <div class="border-l-4 border-teal-500 pl-4">
                <h4 class="font-semibold text-teal-600 mb-2">AEB性能提升</h4>
                <p class="text-sm text-gray-600">AEB工作速度提升至100km/h稳定刹停，夜间80km/h可识别两轮车</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-yellow-500">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <i class="fa fa-gavel text-yellow-500 text-2xl"></i>
            </div>
            <div class="ml-4">
              <h3 class="text-xl font-semibold text-yellow-700 mb-2">重要里程碑：智能泊车安全兜底承诺</h3>
              <p class="text-gray-700">比亚迪郑重承诺：在中国市场，对所有天神之眼车辆在智能泊车场景下的安全及损失全面兜底，无论车辆是否在保，不问是否首任车主。</p>
            </div>
          </div>
        </div>
      </div>

      <div id="ota2-phase" class="phase-content hidden">
        <div class="mb-8 text-center">
          <h2 class="text-3xl font-bold text-purple-600 mb-4">第二次OTA升级 (2025年8月)</h2>
          <p class="text-gray-600">智能座舱功能升级，重点提升用户交互体验</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-6 tree-node">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i class="fa fa-mobile text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-purple-600">手车互联</h3>
            </div>
            <ul class="space-y-3">
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>华为、小米、OPPO、vivo手机互联</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>镜像模式（手机应用秒上车）</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>导航流转功能</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>音乐接续播放</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>隐私模式保护</span>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 tree-node">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i class="fa fa-microphone text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-pink-600">智能语音升级</h3>
            </div>
            <ul class="space-y-3">
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>成语接龙游戏</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>猜谜语互动</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>快捷指令增强</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>车辆状态条件指令</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>多轮对话优化</span>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 tree-node">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i class="fa fa-gamepad text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-indigo-600">娱乐体验</h3>
            </div>
            <ul class="space-y-3">
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>无麦K歌功能</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>游戏中心集成</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>触屏+手柄操作</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>沉浸式电竞体验</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-check text-green-500 mr-3"></i>
                <span>视频播放优化</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="ota3-phase" class="phase-content hidden">
        <div class="mb-8 text-center">
          <h2 class="text-3xl font-bold text-orange-600 mb-4">第三次OTA升级 (2025年10月)</h2>
          <p class="text-gray-600">全品牌情绪价值升级，重点提升个性化体验</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-6 tree-node">
            <div class="text-center mb-6">
              <div class="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa fa-heart text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-semibold text-orange-600">情绪价值升级</h3>
            </div>

            <div class="space-y-4">
              <div class="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
                <h4 class="font-semibold text-orange-700 mb-2">
                  <i class="fa fa-desktop mr-2"></i>全新动态主题
                </h4>
                <p class="text-sm text-gray-600">10套大师设计主题，4种情绪场景，桌面完全动起来</p>
              </div>

              <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-700 mb-2">
                  <i class="fa fa-map mr-2"></i>导航途经点编辑
                </h4>
                <p class="text-sm text-gray-600">途经点数量上限从3个增加至15个，支持排序和编辑</p>
              </div>

              <div class="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg">
                <h4 class="font-semibold text-green-700 mb-2">
                  <i class="fa fa-microphone mr-2"></i>AI全场景音色
                </h4>
                <p class="text-sm text-gray-600">新增9种智能语音播报音色，包括机甲先锋、高冷御姐等</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 tree-node">
            <div class="text-center mb-6">
              <div class="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa fa-video-camera text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-semibold text-red-600">安全记录增强</h3>
            </div>

            <div class="space-y-4">
              <div class="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg">
                <h4 class="font-semibold text-red-700 mb-2">
                  <i class="fa fa-shield mr-2"></i>泊车全向记录
                </h4>
                <p class="text-sm text-gray-600">泊车辅助时自动触发5个摄像头全程记录，前后左右全覆盖</p>
              </div>

              <div class="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg">
                <h4 class="font-semibold text-purple-700 mb-2">
                  <i class="fa fa-volume-up mr-2"></i>泊车语音提醒
                </h4>
                <p class="text-sm text-gray-600">下车泊入时车外语音播报提醒，遇到行人会提示"正在泊车，请让一下"</p>
              </div>

              <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg">
                <h4 class="font-semibold text-teal-700 mb-2">
                  <i class="fa fa-mobile mr-2"></i>荣耀车联支持
                </h4>
                <p class="text-sm text-gray-600">新增荣耀车联，适配Magic系列机型，支持导航和应用流转</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="future-phase" class="phase-content hidden">
        <div class="mb-8 text-center">
          <h2 class="text-3xl font-bold text-future mb-4">未来功能规划 (2025年底-2026年)</h2>
          <p class="text-gray-600">基于官方发布的技术路线图和发展规划</p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 class="text-2xl font-semibold text-center mb-8 text-future">技术发展时间线</h3>
          <canvas ref="chartCanvas" width="800" height="400"></canvas>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 tree-node border border-purple-200">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i class="fa fa-bullseye text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-purple-600">记忆领航 (2025年底)</h3>
              <p class="text-sm text-gray-600 mt-1">MNOA功能上线</p>
            </div>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>上下班通勤路线智驾</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>红绿灯启停控制</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>复杂路口通行</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>自动超车功能</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>博弈变道能力</span>
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 tree-node border border-blue-200">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i class="fa fa-building text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-blue-600">城市领航 (2026年中)</h3>
              <p class="text-sm text-gray-600 mt-1">城市NOA功能</p>
            </div>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>城市道路智驾</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>无保护左转</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>环岛通行能力</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>自动绕行障碍物</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>交通参与者识别</span>
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 tree-node border border-green-200">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i class="fa fa-cube text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-green-600">璇玑架构 (2026年)</h3>
              <p class="text-sm text-gray-600 mt-1">全新电子架构</p>
            </div>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>全域OTA能力</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>算力平台升级</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>多传感器融合</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>V2X车路协同</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-star text-yellow-500 mr-2 text-xs"></i>
                <span>端到端控制</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
          <h3 class="text-2xl font-semibold text-center mb-6 text-indigo-600">性能提升预期</h3>
          <div class="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div class="text-3xl font-bold text-indigo-600 mb-2">1000+</div>
              <div class="text-sm text-gray-600">智驾零接管公里数</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-indigo-600 mb-2">140km/h</div>
              <div class="text-sm text-gray-600">AEB最高工作速度</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-indigo-600 mb-2">99%</div>
              <div class="text-sm text-gray-600">泊车成功率</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-indigo-600 mb-2">500+</div>
              <div class="text-sm text-gray-600">覆盖泊车场景数</div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-gray-900 text-white py-8 mt-16">
      <div class="container mx-auto px-6 text-center">
        <p class="text-gray-400">
          数据来源：比亚迪官方发布、OTA更新日志及公开信息整理 | 制作时间：2025年10月
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const chartCanvas = ref(null);
let chartInstance = null;
let chartScript = null; // 引用脚本元素

// 动态加载 Chart.js CDN
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    // 检查脚本是否已加载
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    chartScript = document.createElement('script');
    chartScript.src = src;
    chartScript.onload = resolve;
    chartScript.onerror = reject;
    document.head.appendChild(chartScript);
  });
};

// 切换显示内容的函数
const showPhase = (phase, event) => {
  // 隐藏所有 .phase-content
  document.querySelectorAll('.phase-content').forEach(content => {
    content.classList.add('hidden');
  });

  // 显示选中的
  const phaseEl = document.getElementById(phase + '-phase');
  if (phaseEl) {
    phaseEl.classList.remove('hidden');
  }

  // 更新导航按钮的样式
  document.querySelectorAll('.timeline-btn').forEach(btn => {
    btn.classList.remove('border-primary', 'text-primary');
    btn.classList.add('border-transparent', 'text-gray-600');
  });

  // 高亮当前点击的按钮
  if (event) {
    event.currentTarget.classList.remove('border-transparent', 'text-gray-600');
    event.currentTarget.classList.add('border-primary', 'text-primary');
  }
};

onMounted(async () => {
  try {
    // 加载 Chart.js
    await loadScript('https://cdn.jsdelivr.net/npm/chart.js@4.4.8/dist/chart.umd.min.js');

    // Chart.js 加载完成后，window.Chart 应该可用了
    if (chartCanvas.value && window.Chart) {
      const timelineCtx = chartCanvas.value.getContext('2d');
      chartInstance = new window.Chart(timelineCtx, {
        type: 'line',
        data: {
          labels: ['2025年2月', '2025年7月', '2025年8月', '2025年10月', '2025年底', '2026年中', '2026年底'],
          datasets: [{
            label: '基础功能完善',
            data: [80, 85, 90, 95, 98, 100, 100],
            // 注意：这里使用硬编码的颜色，因为它们来自你的 tailwind.config.js
            borderColor: '#1E40AF',
            backgroundColor: 'rgba(30, 64, 175, 0.1)',
            tension: 0.4,
            fill: true
          }, {
            label: '高阶智驾功能',
            data: [20, 40, 60, 80, 85, 90, 95],
            borderColor: '#8B5CF6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            tension: 0.4,
            fill: true
          }, {
            label: '用户体验优化',
            data: [60, 70, 80, 90, 95, 98, 100],
            borderColor: '#059669',
            backgroundColor: 'rgba(5, 150, 105, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          interaction: {
            intersect: false,
            mode: 'index'
          },
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: {
                display: true,
                text: '功能完成度 (%)'
              }
            }
          }
        }
      });
    }

    // 初始化显示第一个 tab
    // 确保 DOM 已经渲染完毕
    const firstBtn = document.querySelector('.timeline-btn');
    if (firstBtn) {
      showPhase('initial', { currentTarget: firstBtn });
    } else {
      showPhase('initial'); // 降级处理
    }

  } catch (error) {
    console.error('Failed to load Chart.js:', error);
  }
});

onBeforeUnmount(() => {
  // 销毁图表实例
  if (chartInstance) {
    chartInstance.destroy();
  }
  // 移除动态添加的脚本
  if (chartScript && chartScript.parentNode) {
    chartScript.parentNode.removeChild(chartScript);
  }
});
</script>

<style>
/* 首先导入项目的主CSS文件 (src/assets/main.css)。
  这个文件必须包含 @tailwind base, @tailwind components, 和 @tailwind utilities。
*/
@import '@/assets/main.css';

/* 然后，导入页面所需的外部字体和图标。
*/
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css');

/* 现在，我们可以安全地将自定义样式添加到 'utilities' 层。
*/
@layer utilities {
  .tree-node {
    transition: all 0.3s ease;
  }
  .tree-node:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  .connector {
    position: absolute;
    background: #D1D5DB;
    z-index: 0;
  }
  .timeline-line {
    background: linear-gradient(180deg, #1E40AF 0%, #059669 50%, #8B5CF6 100%);
  }
}
</style>