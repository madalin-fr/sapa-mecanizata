import { defineNuxtPlugin } from 'nuxt/app';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab} from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faMapMarkerAlt, faCalendarAlt, faClock, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'




// Add icons to the library
library.add(
  fab,
  fas
);

// Disable automatic CSS addition
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('vue-fontawesome', FontAwesomeIcon, {})
})