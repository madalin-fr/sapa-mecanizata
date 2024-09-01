<template>
  <div id="app">
    <Navbar :type="type" />
    <NuxtPage /> <!-- This renders the current page's content -->
    <Footer :type="type" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import { useGlobalStore } from '~/store/useGlobalStore' // Ensure correct path

// Access the Pinia store
const store = useGlobalStore()

// Compute the `type` value from the store
const type = computed(() => store.type)
</script>

<style lang="scss" scoped>



#app {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #363636;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .container {
    max-width: 1080px;
  }

  .button {
    font-weight: bold;
  }

  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }

  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-device-width: 1220px) {
    overflow-x: hidden;
  }
}
</style>