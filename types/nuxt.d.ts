import '@nuxt/types'
import { Options as I18nOptions } from '@nuxtjs/i18n'

declare module '@nuxt/types' {
  interface NuxtConfig {
    i18n?: I18nOptions
  }
}