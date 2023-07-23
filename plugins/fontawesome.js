import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Vue from 'vue'
import { fas, faFilePdf, faMapMarkerAlt, faCalendarAlt, faClock, faLanguage } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faFacebook, faInstagram, faLinkedin, fas, faFilePdf, faMapMarkerAlt, faCalendarAlt, faClock, faLanguage)
config.autoAddCss = false


Vue.component('vue-fontawesome', FontAwesomeIcon)
