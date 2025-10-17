<template>
  <router-link to="/new-release" class="block">
    <div class="grid-item flex flex-col items-center pt-12 text-center" style="background-color:#ffffff; position: relative; overflow: hidden;">
      <h2 class="text-4xl font-bold">海外上新</h2>
      <p class="text-xl mt-2">友商海外动态及时掌握</p>
      <div class="card-hover-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </div>

      <div class="animation-container">
        <div class="info-card" :class="{ 'active': showInfo }">
          <div class="text-info">
            <p class="car-name">{{ currentCar.name }}</p>
            <p class="country">{{ currentCar.country }}</p>
            <p class="price-local">{{ currentCar.localPrice }}</p>
            <p class="price-rmb">{{ currentCar.rmbPrice }}</p>
          </div>
          <div class="car-image-container">
            <img :src="currentCar.image" class="car-image" />
          </div>
        </div>

        <div class="text-scroller" :style="{ transform: `translateY(-${carIndex * 100}px)` }">
          <div v-for="(car, index) in carData" :key="`text-${index}`" class="text-item">
            <p class="car-name">{{ car.name }}</p>
            <p class="country">{{ car.country }}</p>
            <p class="price-local">{{ car.localPrice }}</p>
            <p class="price-rmb">{{ car.rmbPrice }}</p>
          </div>
        </div>

        <div class="image-scroller" :style="{ transform: `translateX(-${carIndex * 200}px)` }">
          <div v-for="(car, index) in carData" :key="`image-${index}`" class="image-item">
            <img :src="car.image" />
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { newReleaseCarData } from '../../../public/newReleaseCardData.js';

export default {
  data() {
    return {
      carData: newReleaseCarData,
      currentCar: {},
      showInfo: false,
      carIndex: 0,
    };
  },
  methods: {
    startAnimation() {
      // Initialize with the first car
      this.currentCar = this.carData[0];

      const animate = () => {
        this.showInfo = false; // First, hide the card

        // After a delay (for the exit animation), update the content and start the entrance animation
        setTimeout(() => {
          this.carIndex = (this.carIndex + 1) % this.carData.length;
          this.currentCar = this.carData[this.carIndex];
          this.showInfo = true; // Then, show the card with new content
        }, 1500); // This should match the transition duration
      };

      // Initial display
      setTimeout(() => {
        this.showInfo = true;
      }, 100);

      // Set interval for subsequent animations
      setInterval(animate, 4000); // Time each car is displayed + animation time
    }
  },
  mounted() {
    if (this.carData.length > 0) {
      this.startAnimation();
    }
  }
};
</script>

<style scoped>
.animation-container {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 280px;
  height: 100px;
}

.info-card {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 10px;
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.23, 1, 0.32, 1);
}

.info-card.active {
  opacity: 1;
}

.text-info {
  width: 50%;
  color: white;
  text-align: left;
}

.car-name {
  font-weight: bold;
  font-size: 1rem;
}

.country, .price-local, .price-rmb {
  font-size: 0.8rem;
}

.car-image-container {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.car-image {
  max-width: 100%;
  max-height: 80px;
  object-fit: contain;
}

/* Scrollers are visible again to create the sliding effect */
.text-scroller, .image-scroller {
  position: absolute;
  opacity: 0; /* Start hidden */
  transition: all 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.info-card.active + .text-scroller,
.info-card.active ~ .image-scroller {
  opacity: 1;
}

.text-scroller {
  top: 100px; /* Start below the card */
  left: 10px;
  color: transparent; /* Hide text, only use for positioning */
}

.info-card.active + .text-scroller {
  transform: translateY(-100px); /* Move up into the card's position */
}

.image-scroller {
  top: 10px;
  left: 280px; /* Start to the right of the card */
  display: flex;
}

.info-card.active ~ .image-scroller {
  transform: translateX(-280px); /* Move left into the card's position */
}

.text-item, .image-item {
  height: 100px;
}

.image-item {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-item img {
  max-width: 180px;
  max-height: 90px;
}
</style>