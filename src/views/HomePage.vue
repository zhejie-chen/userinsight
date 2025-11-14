<script setup>
import PressConferenceCard from '../components/cards/PressConferenceCard.vue';
import OtaMapCard from '../components/cards/OtaMapCard.vue'; // 保留导入，但下面模板中会注释掉
import SalesCard from '../components/cards/SalesCard.vue';
import RegulationsCard from '../components/cards/RegulationsCard.vue';
import OverseasMapCard from '../components/cards/OverseasMapCard.vue';
import NewReleaseCard from '../components/cards/NewReleaseCard.vue';
import InsightReportCard from '../components/cards/InsightReportCard.vue'; // 1. 导入新卡片
</script>

<template>
  <main id="main-content" class="pt-11">
    <div class="px-4 pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PressConferenceCard />
      <SalesCard />
      <NewReleaseCard />
      <RegulationsCard />
      <OverseasMapCard />
      <InsightReportCard /> </div>
  </main>
</template>