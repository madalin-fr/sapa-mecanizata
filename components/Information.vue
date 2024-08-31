<template>
    <div class="columns info-div">
      <slot v-if="type === 'left'">
        <div
          class="column is-6-desktop info-img"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-anchor-placement="center-bottom"
        >
          <img :class="type" :src="getImgUrl(image)" />
        </div>
      </slot>
  
      <div :class="{'column is-4-desktop': true, 'is-offset-2-desktop': type === 'right'}">
        <div :class="`info-text ${type}`">
          <h1 class="title">{{ titulo }}</h1>
          <h2 class="subtitle">{{ text }}</h2>
          <nuxt-link
            :to="path"
            :class="{
              'button is-rounded': true,
              'is-info': type === 'left',
              'is-success': type === 'right',
            }"
          >
            {{ boton }}
          </nuxt-link>
        </div>
      </div>
  
      <slot v-if="type === 'right'">
        <div
          :class="`column is-6-desktop info-img ${type}`"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-anchor-placement="center-bottom"
        >
          <img :class="type" :src="getImgUrl(image)" />
        </div>
      </slot>
    </div>
  </template>
  
  <script setup>
  
  // Define props
  const props = defineProps({
    type: String,
    image: String,
    text: String,
    boton: String,
    format: String,
    titulo: String,
    path: String,
  });
  
  // Method to get image URL
  const getImgUrl = (value) => {
    // Directly use the path for images in the public folder
    return `/${value}`;
  };
  </script>
  c