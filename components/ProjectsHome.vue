<template>
  <div class="project-card is-flex is-flex-direction-column">
    <div class="card-image">
      <figure class="image"> <!-- Adjust aspect ratio if necessary -->
        <img :src="`${image}`" alt="Project image">
      </figure>
    </div>
    <div class="content is-flex-grow-1">
      <p class="title">{{ title }}</p>
      <p class="description">{{ description }}</p>
    </div>
    <div class="card-end ">
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
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 12px;

  .card-image {
    figure {
      margin: 0;
      height: 300px; /* Set a fixed height for the image */
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }

  .content {
    padding: 20px 20px;
    flex-grow: 1;
    text-align: left;

    .title {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  .card-end {
    text-align: center;
    margin-top: auto;
    padding: 10px 0;
  }
}

.columns {
  display: flex;
  flex-wrap: wrap;
}

.column {
  display: flex;
  flex-direction: column;
}
</style>