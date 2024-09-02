<template>
  <ClientOnly>
    <b-carousel 
      :pause-hover="false" 
      :pause-info="false" 
      :repeat="true"
      :interval="9000"
      class="carousel-container"
      :arrow="false"
      :arrow-both="true"
      :arrow-hover="false"
      :icon-pack="iconPack"
      :icon-prev="iconPrev"
      :icon-next="iconNext"
      :icon-size="iconSize"
    >
      <b-carousel-item v-for="(carousel, i) in datos" :key="i">
        <section :class="`hero ${type}`">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-vcentered">
                <div class="column is-full-mobile is-three-fifths-tablet banner-text">
                  <h1 class="title">{{ carousel.title }}</h1>
                  <h2 class="subtitle">{{ carousel.subtitle }}</h2>
                  <b-button
                    v-if="carousel.action"
                    class="is-info"
                    rounded
                    @click="scrollToContributors"
                  >
                    {{ carousel.action }}
                  </b-button>
                  <a
                    :tag="carousel.type"
                    v-if="carousel.join_link"
                    :href="carousel.join_link"
                    class="is-info button is-rounded"
                  >
                    {{ carousel.join_message }}
                  </a>
                </div>
                <div class="column is-full-mobile banner-image">
                  <img
                    :src="`${carousel.image}`"
                    alt="Carousel image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </ClientOnly>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import * as CarrouselData from '../data/home.js';

const { locale } = useI18n();
const carousels = CarrouselData.default;
const datos = computed(() => {
  return locale.value === 'en' ? carousels.en.carousels : carousels.ro.carousels;
});

// Arrow controls related data

const iconPack = ref('mdi');
const iconPrev = ref('arrow-left');
const iconNext = ref('arrow-right');
const iconSize = ref('');

// Define the prop type for carousel styling
defineProps({
  type: {
    type: String,
    default: 'is-primary'
  }
});

// Function to scroll to contributors section
const scrollToContributors = () => {
  const contributorsSection = document.getElementById('contributors');
  if (contributorsSection) {
    contributorsSection.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
};
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 100%;
}

.hero {
  padding: 3rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh; // Fixed height for desktop and larger screens
}

.hero-body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%; // Ensure the hero-body fills the section height
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.columns {
  display: flex;
  flex-wrap: wrap;
  align-items: center; // Vertically center align all items
  height: 100%; // Ensure columns fill the full height
}

button, a.button {
  font-size: clamp(0.875rem, 2vw, 1.25rem);
  padding: 0.5em 1em;
  margin-top: 1rem;
}

.banner-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; // Ensure banner-image fills the height
  
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
}

@media screen and (max-width: 768px) {
  .carousel-container {
    height: 82vh; // Fixed height for mobile screens
  }

  .hero {
    padding: 1.5rem 1rem;
    height: 80vh; // Fixed height for mobile screens
  }

  .columns {
    flex-direction: column;
    height: 100%; // Let columns fill the height
  }

  .banner-text {
    width: 100%;
    text-align: center; // Center text on mobile for better readability
    padding-bottom: 0.5rem; // Reduce padding to fit within mobile height
  }

  .banner-image {
    width: 100%;
    justify-content: center;
    align-items: center;

    img {
      max-width: 60%; // Slightly reduce image size on mobile for better fit
    }
  }
}
</style>
