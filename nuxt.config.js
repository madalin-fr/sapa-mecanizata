export default {
    head: {
        title: 'Șapă mecanizată',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Your Project Description' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    ssr: true,
    css: [
        'buefy/dist/buefy.min.css',
        'aos/dist/aos.css',
        '@/assets/main.scss',
        '@fortawesome/fontawesome-svg-core/styles.css',
    ],
    plugins: [
        {src: '~/plugins/aos.js', mode: 'client'},
        {src: '~/plugins/buefy.js'},
        {src:'~/plugins/fontawesome.js'},
        {src:'~/plugins/vue2-smooth-scroll.js'},
        {src:'~/plugins/vue-timeline.js'},
    ],
    buildModules: [],
    modules:[
        '@nuxtjs/i18n',
        'nuxt-buefy'
    ],
    buefy: {
        css: false,
        defaultIconPack: 'fas',
    },
    build: {


    },
    components: true,
    i18n: {
        defaultLocale: 'ro',
        fallbackLocale: 'ro',
        langDir: 'locales',
        strategy: 'prefix_except_default',
        lazy: true,
        vueI18nLoader: false,
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                file: 'en.json'
            },
            {
                code: 'ro',
                iso: 'ro-RO',
                file: 'ro.json'
            }
        ]
    }
}
