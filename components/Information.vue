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
  <style lang="scss" scoped>
  .info-div {
    max-height: 30rem;
    margin: 2rem 0;
  
    .info-text {
      text-align: left;
      max-height: inherit;
      padding: 100px 50px;
  
      .title {
        font-size: 30px;
      }
  
      .subtitle {
        font-size: 18px;
      }
    }
  
    .info-img {
      max-height: inherit;
  
      &.right {
        text-align: right;
      }
  
      img {
        object-fit: cover;
        width: 100%;
        max-height: inherit;
        padding: 0;
        
        // Right side image rounded on the left
        &.right {
          border-radius: 1000px 0px 0px 1000px;
        }
  
        // Left side image rounded on the right
        &.left {
          border-radius: 0px 1000px 1000px 0px;
        }
      }
    }
  }
  
  @media only screen and (max-device-width: 1220px) {
    .info-div {
      max-height: max-content;
  
      .info-text {
        padding: 30px 30px;
      }
  
      .info-img {
        img {
          width: 90%;
        }
      }
    }
  }
  </style>
  