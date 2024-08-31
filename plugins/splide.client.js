import VueSplide from '@splidejs/vue-splide';


import { defineNuxtPlugin } from "nuxt/app";


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueSplide)
})