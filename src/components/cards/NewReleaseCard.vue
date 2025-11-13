<template>
  <router-link to="/new-release" class="block h-full">
    <div class="grid-item flex flex-col h-full text-center" style="background-color:#F3F4F6; position: relative; overflow: hidden;">

      <div class="pt-12">
        <h2 class="text-4xl font-bold">海外上新</h2>
        <p class="text-xl mt-2">友商海外动态及时掌握</p>
      </div>

      <div class="card-hover-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </div>

      <div
          class="card-carousel-container"
          @mouseenter="pauseCarousel"
          @mouseleave="resumeCarousel"
      >
        <div class="card-stack">
          <div
              v-for="(car, index) in carData"
              :key="car.name"
              class="info-card"
              :style="getCardStyle(index)"
          >
            <div class="text-info">
              <p class="car-name">{{ car.name }}</p>
              <p class="country">{{ car.country }}</p>
              <p class="price-local">{{ car.localPrice }}</p>
              <p class="price-rmb">{{ car.rmbPrice }}</p>
            </div>
            <div class="car-image-container">
              <img :src="car.image" class="car-image" />
            </div>
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
      currentIndex: 0,
      intervalId: null,
      isPaused: false,
    };
  },
  methods: {
    getCardStyle(index) {
      const total = this.carData.length;
      const offset = (this.currentIndex - index + total) % total;

      let transform = '';

      if (offset < 5) {
        const scale = 1 - offset * 0.05;
        const translateY = offset * -25;
        const zIndex = total - offset;
        const opacity = 1 - offset * 0.2;

        transform = `translateY(${translateY}px) scale(${scale})`;

        if (this.isPaused && offset === 0) {
          transform += ' scale(1.05)';
        }

        return {
          transform: transform,
          zIndex: zIndex,
          opacity: opacity,
        };
      }

      return {
        transform: 'translateY(-125px) scale(0.75)',
        opacity: 0,
        zIndex: 0,
      };
    },
    startCarousel() {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex - 1 + this.carData.length) % this.carData.length;
      }, 3000);
    },
    pauseCarousel() {
      this.isPaused = true;
      clearInterval(this.intervalId);
    },
    resumeCarousel() {
      this.isPaused = false;
      this.startCarousel();
    }
  },
  mounted() {
    if (this.carData.length > 0) {
      this.currentIndex = this.carData.length - 1;
      this.startCarousel();
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>
/* Main container is now a flex column that fills height */
.grid-item {
  height: 100%;
}

.card-carousel-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card-stack {
  position: relative;
  width: 320px;
  height: 115px;
}

.info-card {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  border-radius: 18px;
  display: flex;
  align-items: center;
  padding: 15px;
  color: #333;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  will-change: transform, opacity;
}

.text-info {
  width: 55%;
  text-align: left;
  padding-left: 10px;
}

.car-name {
  font-weight: bold;
  font-size: 1.05rem;
}

.country, .price-local, .price-rmb {
  font-size: 0.85rem;
  opacity: 0.8;
}

.car-image-container {
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.car-image {
  max-width: 100%;
  max-height: 90px;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
}

/* FIX: Positioned the icon at the bottom right and restored its color */
.card-hover-icon {
  position: absolute;
  bottom: 16px; /* Changed from top to bottom */
  right: 16px;
  color: #374151; /* Restored to a solid, dark gray color */
}
</style>