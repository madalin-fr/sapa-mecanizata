<template>
  <footer :class="`hero is-medium ${type}`">
    <div class="container is-fluid">
      <div class="is-flex is-align-items-center is-justify-content-space-between">
        <div class="logo-container">
          <a :href="localizedPath('/')">
            <img class="logo" src="/logo.png" alt="Sapa Mecanizata" width="100" height="100">
          </a>
        </div>
        <div class="links-container has-text-right has-text-weight-bold">
          <div>
            <p><a :href="localizedPath('/about')">{{ $t('footer.about') }}</a></p>
          </div>
          <div>
            <p class="footer-link"><a :href="localizedPath('/services')">{{ $t('footer.services') }}</a></p>
          </div>
          <div>
            <p class="footer-link"><nuxt-link :to="localePath('/gallery')"> {{ $t('footer.gallery') }}</nuxt-link></p>
          </div>
        </div>
      </div>

      <hr>

      <div class="is-flex is-justify-content-space-between">
        <p class="footer-link"><a :href="localizedPath('/contact')">{{ $t('footer.contact') }}</a></p>
        <div class="rrss has-text-right">
          <p class="footer-title">{{ $t('footer.rrss') }}</p>
          <SocialNetworkButton
            :pathFb="yourFacebookLink"
            :pathLi="yourLinkedInLink"
            :pathIg="yourInstagramLink"
          />
        </div>
      </div>

      <hr>

      <div class="content has-text-centered">
        <p>
          <a class="footer-link" :href="localizedPath('/privacy')">{{ $t('footer.privacy') }}</a>
        </p>
      </div>
    </div>
  </footer>
</template>


<script>
import SocialNetworkButton from '~/components/SocialNetworkButton.vue';

export default {
  name: 'Footer',
  components: {
    SocialNetworkButton,
  },
  props: {
    type: {
      type: String,
      default: 'is-primary',
    },
    yourFacebookLink: {
      type: String,
      required: true,
    },
    yourLinkedInLink: {
      type: String,
      required: true,
    },
    yourInstagramLink: {
      type: String,
      required: true,
    },
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    defaultLocale() {
      return this.$i18n.defaultLocale;
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
footer {
  padding-top: 20px;
  width: 100%;
}


p {
  color: white;
}

.logo {
  margin-top: 20px;
}

.footer-link, a {
  color: white;
}



.is-flex {
  display: flex;
}

.is-justify-content-space-between {
  justify-content: space-between;
}

.links-container {
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px; /* Adjust as needed */
}


.container {
  width: 25%;
}

@media only screen and (max-width:1200px) {
  .container {
  width: 40%;
  }
}


@media only screen and (max-width: 775px) {
  .container {
    width: 100%;
  }

  .links-container {
    text-align: center;
  }
}



</style>
