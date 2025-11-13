<script setup>
import PressConferenceCard from '../components/cards/PressConferenceCard.vue';
import OtaMapCard from '../components/cards/OtaMapCard.vue';
import SalesCard from '../components/cards/SalesCard.vue';
import RegulationsCard from '../components/cards/RegulationsCard.vue';
import OverseasMapCard from '../components/cards/OverseasMapCard.vue';
import NewReleaseCard from '../components/cards/NewReleaseCard.vue';
</script>

<template>
  <main id="main-content" class="pt-11">
    <div class="px-4 pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PressConferenceCard />
      <SalesCard />
      <NewReleaseCard />
      <RegulationsCard />
      <OverseasMapCard />
      <OtaMapCard />
    </div>
  </main>
</template>