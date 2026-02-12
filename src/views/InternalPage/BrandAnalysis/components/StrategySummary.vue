<script setup>
import { 
  Tag, Car, UserCheck, GitBranch, Loader2, Megaphone, 
  CheckCircle2
} from 'lucide-vue-next';

// ... commonStrategies 和 brandStrategies 保持不变 ...
// (为了节省篇幅，这里不重复 commonStrategies 和 brandStrategies 的代码，请保留原有的)
// 重点是下方的 template 部分的列表

const commonStrategies = [
  {
    title: "精准定价策略",
    description: "通过调整定价策略，使产品进入主流价格带；定价必须与产品力相匹配，通过降价增配、灵活购车方案等方式，降低用户购车门槛。",
    icon: Tag
  },
  {
    title: "产品力升级要精准",
    description: "针对用户最关注的核心体验进行结构性升级，而非简单的配置堆砌，投入资源解决真正影响用户决策的痛点，如智驾、空间、补能等。",
    icon: Car
  },
  {
    title: "以用户需求为核心",
    description: "产品定义必须基于用户真实需求，而非内部判断，通过用户共创、市场调研等方式，精准把握用户痛点，避免“闭门造车”。",
    icon: UserCheck
  },
  {
    title: "差异化定位避免同质化竞争",
    description: "各品牌找到自己的差异化优势（智驾、换电、科技、性价比、增程），避免陷入无序价格战。",
    icon: GitBranch
  },
  {
    title: "快速迭代是生存法则",
    description: "当前市场产品力落后6个月就可能被淘汰；通过全域自研、供应链整合等方式，实现成本控制与技术迭代。",
    icon: Loader2
  },
  {
    title: "营销要聚焦核心卖点",
    description: "营销聚焦产品核心卖点，避免噱头式营销，传播方式必须有利于受众，提升品牌可信度与用户转化率。",
    icon: Megaphone
  }
];

const brandStrategies = [
  {
    brand: "问界",
    color: "#ff6b00",
    desc: "华为智驾、华为渠道、华为品牌",
    recommendations: [
      { title: "避免'夹心层'困境", content: "产品定位要清晰，要么高端要么主流，'高不成低不就'的定位最危险" },
      { title: "建立技术护城河", content: "在智驾、座舱、三电等领域找到自己的差异化优势，避免陷入同质化竞争" },
      { title: "产品力升级要精准", content: "不要盲目堆配置，要精准命中用户核心痛点" },
      { title: "定价要回归市场主流", content: "15-30万价格带是新能源汽车的主流市场，脱离这个市场会面临巨大风险" },
      { title: "善用生态协同", content: "如果能与大厂合作，借助其生态资源快速建立品牌信任和技术优势" }
    ]
  },
  {
    brand: "蔚来",
    color: "#333333",
    desc: "换电模式、BaaS低价、组织降本",
    recommendations: [
      { title: "探索创新商业模式", content: "学习BaaS模式，通过金融创新降低购车门槛，提升可及性" },
      { title: "重视用户运营", content: "构建用户社群文化，提升用户粘性和复购率" },
      { title: "建立差异化优势", content: "找到自己的核心竞争力（如换电、服务、技术等），构建护城河" },
      { title: "平台化技术升级", content: "通过平台化换代实现产品力的全面升级，而非局部优化" },
      { title: "多品牌战略", content: "通过主品牌+子品牌覆盖不同细分市场，避免过度聚焦高端" }
    ]
  },
  {
    brand: "小鹏",
    color: "#00b42a",
    desc: "全栈自研AI技术、智能驾驶平权",
    recommendations: [
      { title: "保持产品力持续领先", content: "技术迭代速度要快于市场，保持6-12个月的技术领先优势" },
      { title: "建立技术护城河", content: "在智驾、座舱、三电等领域找到差异化优势，并通过全系标配放大优势" },
      { title: "精准定价策略", content: "对标主流竞品（燃油车或竞品电动车），形成价格竞争力" },
      { title: "简化产品线", content: "避免版本过多、配置复杂，降低用户决策成本" },
      { title: "定位要与时俱进", content: "从小众定位转向主流定位，满足更广泛的市场需求" }
    ]
  },
  {
      brand: "零跑",
      color: "#666666",
      desc: "全域自研降本、入门即满配策略",
      recommendations: [
          { title: "考虑增程技术路径", content: "在纯电基础设施尚不完善的阶段，增程是快速打开市场的有效路径" },
          { title: "精准定价策略", content: "精准卡位主流价格带，与竞品形成价格优势" },
          { title: "建立差异化标签", content: "通过价格、技术、服务等维度建立差异化标签，快速建立品牌认知" },
          { title: "平台化降本", content: "通过技术创新和规模效应实现降本，而非简单减配" },
          { title: "避免定价反向操作", content: "定价策略要紧跟市场，顺应价格趋势，避免'买涨不买跌'观望情绪" }
      ]
  },
  {
      brand: "岚图",
      color: "#0066cc",
      desc: "用户中心、鸿蒙座舱、多元动力",
      recommendations: [
          { title: "坚持用户导向", content: "产品定位必须基于用户真实需求，避免'研发视角'" },
          { title: "定价回归主流", content: "价格要回归主流价格带，避免'高不成低不就'" },
          { title: "响应市场趋势", content: "技术路径要紧跟市场趋势，及时调整" },
          { title: "发挥传统优势", content: "传统车企要发挥品质背书等优势，差异化竞争" },
          { title: "持续优化", content: "转型不是一蹴而就的，需要持续优化产品和服务" }
      ]
  }
];
</script>

<template>
  <div class="max-w-6xl mx-auto py-12">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">策略总结</h2>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-md mb-16">
      <h3 class="text-2xl font-semibold mb-6 text-center text-red-500">经验与借鉴</h3>
      <div class="max-w-3xl mx-auto text-slate-700">
        <p class="mb-4">从五大品牌的"逆袭"案例中，在产品层面，我们可以总结出以下八条关键经验：</p>
        <ul class="space-y-3">
          <li class="flex items-start">
            <CheckCircle2 class="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
            <span><strong>避免"夹心层"困境：</strong>产品定位要清晰，要么高端要么主流，"高不成低不就"的定位最危险</span>
          </li>
          <li class="flex items-start">
            <CheckCircle2 class="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
            <span><strong>建立品牌护城河：</strong>在技术领域找到差异化优势，建立独特的品牌定位，避免陷入同质竞争</span>
          </li>
          <li class="flex items-start">
            <CheckCircle2 class="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
            <span><strong>回归用户需求：</strong>不要盲目堆配置，要精准命中用户核心痛点，解决用户的真实痛点</span>
          </li>
          <li class="flex items-start">
            <CheckCircle2 class="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
            <span><strong>定价策略关键：</strong>10-25万价格带是主流市场，合理的定价是打开市场的钥匙，需要与产品力相匹配</span>
          </li>
          <li class="flex items-start">
            <CheckCircle2 class="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
            <span><strong>善用生态协同：</strong>如果能与大厂合作，借助其生态资源快速建立品牌信任和技术优势</span>
          </li>
          <li class="flex items-start">
            <CheckCircle2 class="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
            <span><strong>保持产品力持续领先：</strong>技术迭代速度要快于市场，保持6-12个月的技术领先优势</span>
          </li>
          <li class="flex items-start">
            <CheckCircle2 class="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
            <span><strong>简化车型版本：</strong>明确用户需求，减少SKU，避免版本过多、配置复杂，降低用户决策成本</span>
          </li>
          <li class="flex items-start">
            <CheckCircle2 class="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
            <span><strong>探索创新商业模式：</strong>学习BaaS模式，通过金融创新降低购车门槛，提升可及性</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="mb-16">
      <h3 class="text-2xl font-semibold mb-8 text-center">
        <span class="border-b-4 border-blue-500 pb-2">共性策略</span>
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(item, idx) in commonStrategies" 
          :key="idx"
          class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div class="flex items-start">
            <div class="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
              <component :is="item.icon" class="w-6 h-6" />
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-2">{{ item.title }}</h4>
              <p class="text-slate-600 text-sm leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-2xl font-semibold mb-8 text-center">
        <span class="border-b-4 border-purple-500 pb-2">差异化路径</span>
      </h3>
      <div class="space-y-8">
        <div 
          v-for="(brand, idx) in brandStrategies" 
          :key="idx"
          class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
        >
          <div class="md:w-1/4 border-r border-gray-100 flex flex-col">
            <div class="h-2 w-full" :style="{ backgroundColor: brand.color }"></div>
            <div class="p-6 flex flex-col items-center justify-center flex-1 text-center">
              <h4 class="text-xl font-bold mb-2">{{ brand.brand }}</h4>
              <p class="text-sm text-slate-500 mb-3">{{ brand.desc }}</p>
              <div class="h-1 w-12 bg-purple-500 rounded-full"></div>
            </div>
          </div>

          <div class="md:w-3/4 p-6 bg-slate-50/50">
            <ul class="space-y-3">
              <li 
                v-for="(rec, rIdx) in brand.recommendations" 
                :key="rIdx"
                class="flex items-start"
              >
                <div class="bg-purple-100 p-1.5 rounded-full mr-3 mt-0.5 shrink-0">
                   <CheckCircle2 class="w-3 h-3 text-purple-600" />
                </div>
                <div class="text-sm">
                  <span class="font-semibold text-purple-700">{{ rec.title }}：</span>
                  <span class="text-slate-700">{{ rec.content }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>