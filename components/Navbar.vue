<template>
  <b-navbar :type="type" wrapper-class="container sapa-mecanizata-navbar" centered spaced>
    <template v-slot:brand>
      <nuxt-link class="navbar-item" :to="logoPath">
        <img class="logo" src="/logo.png" alt="Sapa Mecanizata" />
      </nuxt-link>
    </template>
    <template v-slot:start>
      <nuxt-link :to="localePath('/gallery')" class="navbar-item">
        {{ $t('navbar.gallery') }}
      </nuxt-link>
      <b-navbar-item tag="a" role="button" @click="scrollToContributors">
        {{ $t('navbar.services') }}
      </b-navbar-item>
      <b-navbar-item tag="a" :href="localizedPath('/about')">
        <p>{{ $t('navbar.about') }}</p>
      </b-navbar-item>
    </template>
    <template v-slot:end>
      <b-navbar-dropdown :label="$t('navbar.lang')">
        <nuxt-link class="navbar-item" :to="switchLocalePath('ro')">română</nuxt-link>
        <nuxt-link class="navbar-item" :to="switchLocalePath('en')">english</nuxt-link>
      </b-navbar-dropdown>
      <b-navbar-item tag="div">
        <div class="contact-info">
          <p class="address">
            <b-icon icon="map-marker"></b-icon>
            Strada Domnească 66, Galați 800008
          </p>
          <p class="phone">
            <a href="tel:+40721512121">
              <b-icon icon="phone"></b-icon>
              +40721512121
            </a>
          </p>
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
      const trimmedPath = path.replace(/\/$/, '');
      if (trimmedPath === '' && this.locale !== this.defaultLocale) {
        return `/${this.locale}`;
      }
      return this.locale === this.defaultLocale ? trimmedPath || '/' : `/${this.locale}${trimmedPath}`;
    },
    scrollToContributors() {
      const contributorsSection = document.getElementById('contributors');
      if (contributorsSection) {
        contributorsSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  height: auto !important;
  max-height: none;
  width: 100px;
}

.contact-info {
  text-align: right;

  .address, .phone {
    margin: 0;
    line-height: 1.5;
    display: flex;
    align-items: center;
  }

  .address {
    font-weight: bold;
  }

  .phone a {
    color: #71ca95;
  }

  .icon {
    margin-right: 0.5rem;
  }


}
</style>
