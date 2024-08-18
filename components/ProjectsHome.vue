<template>
  <div class="container">
    <div class="card-image">
      <figure>
        <img :src="`${image}`" alt="Placeholder image">
      </figure>
    </div>
    <div class="content">
      <p class="title">{{ title }}</p>
      <p class="description">{{ description }}</p>
    </div>
    <div class="card-end">
      <NuxtLink :to="path" :class="`button ${type} is-rounded`">
        {{ $t('home.readMore') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useNuxtApp } from '#app';

// Destructure $i18n from useNuxtApp
const { $i18n } = useNuxtApp();

const props = defineProps({
  type: String,
  image: String,
  title: String,
  description: String,
  path: String,
});

const lang = computed(() => $i18n.locale.value);
</script>

<style lang="scss" scoped>
.container {
  margin: 12px;

  .card-image {
    figure {
      margin: 0;
    }
  }

  .content {
    padding: 5px;
    min-height: 80px;
    text-align: left;

    .title {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  .card-end {
    text-align: center;
  }
}

@media only screen and (max-device-width: 1220px) {
  .container {
    margin: 40px;

    .content {
      min-height: 0px;

      .title {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
