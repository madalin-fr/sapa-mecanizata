<template>
  <b-navbar :transparent="true" :type="type" wrapper-class="container ninaspro-navbar" centered>
    <!-- Brand section -->
    <template v-slot:brand>
      <nuxt-link class="navbar-item" :to="{ path: '/' }">
        <img class="logo" src="/logo.png" alt="Corporación Niñas Pro" />
      </nuxt-link>
    </template>

    <!-- Navigation links -->
    <template v-slot:start>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }" href="#projects">
        <p>{{ $t('navbar.initiatives') }}</p>
      </b-navbar-item>

      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }" href="#information">
        <p>{{ $t('navbar.about') }}</p>
      </b-navbar-item>

      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }" href="#events">
        <p>{{ $t('navbar.events') }}</p>
      </b-navbar-item>

      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }" href="#contributors">
        <p>{{ $t('navbar.involved') }}</p>
      </b-navbar-item>
    </template>

    <!-- End section with language dropdown and buttons -->
    <template v-slot:end>
      <b-navbar-dropdown :label="$t('navbar.lang')">
        <nuxt-link class="navbar-item" :to="switchLocalePath('ro')">română</nuxt-link>
        <nuxt-link class="navbar-item" :to="switchLocalePath('en')">english</nuxt-link>
      </b-navbar-dropdown>

      <b-navbar-item tag="div">
        <div class="buttons">
          <nuxt-link :to="{ path: '/volunteer' }">
            <b-button
              id="involucrate-btn"
              :class="{
                'is-info': type !== 'is-info',
                'is-warning': type === 'is-info'
              }"
              rounded
            >
              {{ $t('navbar.involved') }}
            </b-button>
          </nuxt-link>

          <a href="https://yodono.cl/institucion/546/ninas_pro">
            <b-button
              id="dona-btn"
              :class="{
                'is-warning': type !== 'is-warning' && type !== 'is-info',
                'is-primary': type === 'is-warning' || type === 'is-info'
              }"
              rounded
            >
              {{ $t('navbar.donate') }}
            </b-button>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    type: {
      type: String,
      default: 'is-primary', // Provide a default value if applicable
    },
  },
};
</script>

<style lang="scss" scoped>

.logo {
  height:auto !important;
  max-height: none; /* Reset any max-height applied by external styles */
  height: auto; /* Adjust height if needed */
  width: 100px; /* Ensure the width is set */
}

</style>
