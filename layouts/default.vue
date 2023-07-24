<template>
  <div id="app">
    <Navbar :type="type" />
    <nuxt />
    <Footer :type="type" />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    type() {
      return this.$store.state.type
    }
  },
  head() {
    let title;
    let description;
    switch (this.$i18n.locale) {
      case 'en':
        title = 'Mechanized screed';
        description = 'English description of the page';
        break;
      case 'ro':
        title = 'Șapă mecanizată';
        description = 'Descrierea în română a paginii';
        break;
    }
    return {
      title: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        }
      ]
    }
  }
}
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

