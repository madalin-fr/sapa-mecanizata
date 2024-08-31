<template>
  <b-navbar :transparent="true" :type="type" wrapper-class="container sapa-mecanizata-navbar" centered>
    <template v-slot:brand>
      <nuxt-link class="navbar-item" :to="logoPath">
        <img class="logo" src="/logo.png" alt="Sapa Mecanizata" />
      </nuxt-link>
    </template>
    <template v-slot:start>
      <b-navbar-item tag="nuxt-link" :to="localizedPath('/gallery')">
        <p>{{ $t('navbar.gallery') }}</p>
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="localizedPath('/services')">
        <p>{{ $t('navbar.services') }}</p>
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="localizedPath('/about')">
        <p>{{ $t('navbar.about') }}</p>
      </b-navbar-item>
    </template>
    <template v-slot:end>
      <b-navbar-dropdown :label="$t('navbar.lang')">
        <nuxt-link class="navbar-item" :to="switchLocalePath('ro')">română</nuxt-link>
        <nuxt-link class="navbar-item" :to="switchLocalePath('en')">english</nuxt-link>
      </b-navbar-dropdown>
      <b-navbar-item tag="div">
        <div class="buttons">
          <nuxt-link :to="localizedPath('/contact')">
            <b-button
              id="contact-btn"
              :class="{
                'is-info': type !== 'is-info',
                'is-warning': type === 'is-info'
              }"
              rounded
            >
              {{ $t('navbar.contact') }}
            </b-button>
          </nuxt-link>
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
      default: 'is-primary',
    },
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    defaultLocale() {
      return this.$i18n.defaultLocale;
    },
    logoPath() {
      return this.locale === this.defaultLocale ? '/' : `/${this.locale}`;
    }
  },
  methods: {
    localizedPath(path) {
      // Ensure no trailing slash in the path
      const trimmedPath = path.replace(/\/$/, '');
      
      // If it's the home page and not the default locale, return just the locale
      if (trimmedPath === '' && this.locale !== this.defaultLocale) {
        return `/${this.locale}`;
      }
      
      // If locale is default, use path as is, otherwise prepend locale
      return this.locale === this.defaultLocale
        ? trimmedPath || '/'  // Return '/' for empty path in default locale
        : `/${this.locale}${trimmedPath}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  height: auto !important;
  max-height: none; /* Reset any max-height applied by external styles */
  width: 100px; /* Ensure the width is set */ 
}
</style>