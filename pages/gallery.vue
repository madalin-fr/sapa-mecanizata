<template>
  <ClientOnly>
  <div id="gallery" class="gallery-section">
    <Banner :type="type" :title="$t('pages.gallery')" />
    <div class="container">
      
      <!-- Access Ramps Gallery -->
      <PhotoBanner :type="type" title="Proyecto Inspira" image="/inspired.jpg"/>
      <div class="box gallery-container">
        <!-- Main Slider for Access Ramps -->
        <Splide
          ref="mainRamps"
          id="main-slider-ramps"
          :options="mainSliderOptions"
          aria-label="Main Images - Access Ramps"
        >
          <SplideSlide v-for="(slide, index) in rampSlides" :key="index">
            <figure class="image is-square">
              <img :src="slide.image" :alt="slide.alt" />
            </figure>
          </SplideSlide>
        </Splide>
        
        <!-- Thumbnail Slider for Access Ramps -->
        <Splide
          ref="thumbsRamps"
          id="thumbnail-slider-ramps"
          :options="thumbnailSliderOptions"
          aria-label="Thumbnails - Access Ramps"
          class="mt-2"
        >
          <SplideSlide v-for="(slide, index) in rampSlides" :key="index">
            <figure class="image">
              <img :src="slide.image" :alt="slide.alt" />
            </figure>
          </SplideSlide>
        </Splide>
      </div>
      
      <!-- Flooring Gallery -->
      <h2 class="title is-4 mt-5 mb-3">{{ $t('gallery.flooring') }}</h2>
      <div class="box gallery-container">
        <!-- Main Slider for Flooring -->
        <Splide
          ref="mainFlooring"
          id="main-slider-flooring"
          :options="mainSliderOptions"
          aria-label="Main Images - Flooring"
        >
          <SplideSlide v-for="(slide, index) in flooringSlides" :key="index">
            <figure class="image is-square">
              <img :src="slide.image" :alt="slide.alt" />
            </figure>
          </SplideSlide>
        </Splide>
        
        <!-- Thumbnail Slider for Flooring -->
        <Splide
          ref="thumbsFlooring"
          id="thumbnail-slider-flooring"
          :options="thumbnailSliderOptions"
          aria-label="Thumbnails - Flooring"
          class="mt-2"
        >
          <SplideSlide v-for="(slide, index) in flooringSlides" :key="index">
            <figure class="image">
              <img :src="slide.image" :alt="slide.alt" />
            </figure>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</ClientOnly>
</template>


<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useGlobalStore } from '~/store/useGlobalStore';
import PhotoBanner from "~/components/PhotoBanner.vue";
import Banner from '~/components/Banner.vue';
import { generateRampSlides, generateFlooringSlides } from '~/utils/useGalleryImages';

// Use global store
const store = useGlobalStore();

const props = defineProps({
  type: {
    type: String,
    default: 'is-danger',
  },
});

const type = ref(props.type);
const rampSlides = generateRampSlides();
const flooringSlides = generateFlooringSlides();

const mainSliderOptions = ref({
  type: 'fade',
  pagination: false,
  arrows: false,
  updateOnMove: false,
  perPage: 1
});

const thumbnailSliderOptions = ref({
  rewind: true,
  isNavigation: true,
  gap: 10,
  focus: 'center',
  pagination: false,
  cover: true,
  autoWidth: true,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  breakpoints: {
    640: {
      gap: 5,
    },
  },
});

const mainRamps = ref(null);
const thumbsRamps = ref(null);
const mainFlooring = ref(null);
const thumbsFlooring = ref(null);

onMounted(async () => {
  await nextTick();

  // Initialize Access Ramps gallery
  if (mainRamps.value && thumbsRamps.value) {
    const mainRampsSplide = mainRamps.value.splide;
    const thumbsRampsSplide = thumbsRamps.value.splide;
    if (mainRampsSplide && thumbsRampsSplide) {
      mainRampsSplide.sync(thumbsRampsSplide);
    }
  }

  // Initialize Flooring gallery
  if (mainFlooring.value && thumbsFlooring.value) {
    const mainFlooringSplide = mainFlooring.value.splide;
    const thumbsFlooringSplide = thumbsFlooring.value.splide;
    if (mainFlooringSplide && thumbsFlooringSplide) {
      mainFlooringSplide.sync(thumbsFlooringSplide);
    }
  }

  // Match color on all elements
  store.setType(props.type);
});
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.gallery-section {
  .container {
    max-width: 100%;
    padding: 0 15px;
    @media (min-width: 768px) {
      max-width: 900px;
      margin: 0 auto;
    }
  }

  .gallery-container {
    padding: 1.5rem;
    @media (min-width: 768px) {
      padding: 2.5rem;
    }
    background-color: #f9f9f9;
    border-radius: 8px;
  }

  .splide {
    margin-bottom: 0.75rem;
    @media (min-width: 768px) {
      margin-bottom: 1.25rem;
    }
  }

  #main-slider-ramps, #main-slider-flooring {
    .splide__slide {
      display: flex;
      justify-content: center;
      align-items: end;
      overflow: hidden;
    }

    .image.is-square {
      width: 100%;
      height: auto;
      img {
        object-fit: cover;
        width: 100%;
        height: auto;
      }
    }
  }


 
  #thumbnail-slider-ramps, #thumbnail-slider-flooring {
    .splide__slide {
      opacity: 0.6;
      transition: opacity 0.3s ease;
      &.is-active {
        opacity: 1;
      }
    }

    .image {
      width: 75px;
      height: 75px;
      border-radius: 4px;
      overflow: hidden;
      @media (min-width: 768px) {
        width: 90px;
        height: 90px;
      }
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
	
	
	