<template>
  <div class="container">
    <div class="columns">
      <div class="column" v-for="item in datos" :key="item.title">
        <b-image ratio="1by1" :src="getImgUrl(item.image)" :rounded="true"></b-image>
        <div class="title">{{ item.title }}</div>
        <ul>
          <li v-for="linea in item.lista" :key="linea">
            {{ linea }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script setup>
import * as Data from '~/data/volunteer.js';
import { useNuxtApp } from '#app';

// Get the Nuxt app context
const nuxtApp = useNuxtApp();
const i18n = nuxtApp.$i18n;

const data = Data.default;
const lang = i18n.locale.value;

const datos = computed(() => {
  return lang === 'en' ? data.en.doData : data.ro.doData;
});

const getImgUrl = (value) => {
  // Use dynamic import for images
  try {
    return `/${value}`;
  } catch (error) {
    console.error(`Image not found: ${value}`, error);
    return '';
  }
};
</script>

<style lang="scss" scoped>
.title {
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    margin: 30px 0px;
}

.column {
  padding: 3rem;
}

ul {
  list-style-type: none;

  li:before {
    content: '\2605';
  }
}
</style>