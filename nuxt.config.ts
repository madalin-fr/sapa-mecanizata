import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Șapă mecanizată',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Your Project Description',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }],
    },
  },
  ssr: true,
  css: [
    '@splidejs/splide/css/sea-green',
    '@mdi/font/css/materialdesignicons.css',
    'buefy/dist/buefy.css',
    'aos/dist/aos.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/main.scss',
  ],
  plugins: [
    { src: '@/plugins/aos.client.ts', mode: 'client' },
    { src: '@/plugins/splide.client.js', mode: 'client' },
    '@/plugins/fontawesome.js',
    '@/plugins/pinia.ts',
  ],
  modules: ['@nuxtjs/i18n'],
  components: true,

  i18n: {
    defaultLocale: 'ro',
    langDir: 'locales',
    strategy: 'prefix_except_default',
    lazy: true,
    locales: [
      {
        code: 'en',
        language: 'en-US', // Updated to language
        file: 'en.json',
      },
      {
        code: 'ro',
        language: 'ro-RO', // Updated to language
        file: 'ro.json',
      },
    ],
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  compatibilityDate: '2024-08-12',

  // Add Vite configuration
  vite: {
    build: {
      sourcemap: false, // Disable source maps
    },
  },
});
