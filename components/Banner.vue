<template>
  <div :class="`hero is-medium ${type}`">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-three-quarters np-banner-header">
            <h1 class="title">
              {{ title }}
            </h1>
            <button
              v-if="showButton"
              :href="link"
              :class="`${type} is-inverted is-rounded is-outlined`"
              class="button"
            >
              {{ button }}
            </button>
          </div>
          <div class="column is-one-quarter np-banner-symbol">
            <img
              :src="getColouredSymbolUrl(type)"
              alt="Coloured Star"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';

// Define props
const props = defineProps({
  type: String,
  title: String,
  button: String,
  link: String
});

// Computed property for showing button
const showButton = computed(() => props.link !== undefined);

// Function to get the colored symbol URL
const getColouredSymbolUrl = (type) => {
  if (type === 'is-primary' || type === 'is-warning') {
    return 'estrella-rosada.png'; // Adjust this path as needed
  } else {
    return 'estrella-amarilla.png'; // Adjust this path as needed
  }
};
</script>

<style lang="scss" scoped>
.hero.is-medium .hero-body {
  padding: 6rem 5rem 2rem 5rem;
  height: 18rem;

  .np-banner-header {
    .title {
      font-size: 5rem;
    }
    .button {
      padding: 0px 50px;
    }
  }

  .np-banner-symbol {
    text-align: center;

    img {
      height: 8rem;
    }
  }
}

@media only screen and (max-device-width: 1220px) {
  .hero.is-medium .hero-body {
    padding: 5rem 3rem 2rem 3rem;
    height: inherit;

    .np-banner-header {
      .title {
        font-size: 3rem;
      }
    }

    .np-banner-symbol {
      img {
        height: 0rem;
        visibility: hidden;
      }
    }
  }
}
</style>
