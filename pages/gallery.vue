<template>
    <div id="privacy" class="mobile-friendly-gallery">
      <Banner :type="type" :title="$t('pages.gallery')" />
      <div class="container">
        <div class="box gallery-container">
          <!-- Main Slider -->
            <Splide
              ref="main"
              id="main-slider"
              :options="mainSliderOptions"
              aria-label="Main Images"
              class=""
            >
              <SplideSlide v-for="(slide, index) in slides" :key="index">
                <figure class="image">
                  <img :src="slide.image" :alt="slide.alt" />
                </figure>
              </SplideSlide>
            </Splide>
        </div>
          <!-- Thumbnail Slider -->
          <Splide
            ref="thumbs"
            id="thumbnail-slider"
            :options="thumbnailSliderOptions"
            aria-label="Thumbnails"
            class="mt-2 mt-md-4"
          >
            <SplideSlide v-for="(slide, index) in slides" :key="index">
              <figure class="image">
                <img :src="slide.image" :alt="slide.alt" />
              </figure>
            </SplideSlide>
          </Splide>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue';
  import { useNuxtApp } from '#app';
  import { useGlobalStore } from '~/store/useGlobalStore';
  import Banner from '~/components/Banner.vue';
  import { generateSlides } from '~/utils/useGalleryImages';
  
  const store = useGlobalStore();
  
  const props = defineProps({
    type: {
      type: String,
      default: 'is-danger',
    },
  });
  
  const type = ref(props.type);
  const slides = generateSlides();
  
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
  
  const main = ref(null);
  const thumbs = ref(null);
  
  onMounted(async () => {
    await nextTick();
    
    if (main.value && thumbs.value) {
      const mainSplide = main.value.splide;
      const thumbsSplide = thumbs.value.splide;
      
      if (mainSplide && thumbsSplide) {
        mainSplide.sync(thumbsSplide);
      }
    }
    
    if (store.type !== '') {
      type.value = store.type;
    } else {
      store.setType(props.type);
    }
  });
  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/main.scss';
  
  .mobile-friendly-gallery {
    .container {
      max-width: 100%;
      padding: 0 15px;
      
      @media (min-width: 768px) {
        max-width: 800px;
        margin: 0 auto;
      }
    }
    
    .gallery-container {
      padding: 1rem;
      
      @media (min-width: 768px) {
        padding: 2rem;
      }
    }
    
    .splide {
      margin-bottom: 0.5rem;
      
      @media (min-width: 768px) {
        margin-bottom: 1rem;
      }
    }
  
    
  
    #main-slider {
      .splide__slide {
        display: flex;
        justify-content: center;
        align-items: end;
        overflow:hidden;
      }
  
     
    }
    
    #thumbnail-slider {
      .splide__slide {
        opacity: 0.6;
        transition: opacity 0.3s ease;
        
        &.is-active {
          opacity: 1;
        }
      }
      
      .image {
        width: 80px;
        height: 60px;
        
        @media (min-width: 768px) {
          width: 100px;
          height: 75px;
        }
  
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  </style>