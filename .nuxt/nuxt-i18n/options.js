export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"en","iso":"en-US","file":"en.json"},{"code":"ro","iso":"ro-RO","file":"ro.json"}],
  defaultLocale: "ro",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "C:\\Users\\marius_\\Documents\\ninaspro\\locales",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  fallbackLocale: "ro",
  normalizedLocales: [{"code":"en","iso":"en-US","file":"en.json"},{"code":"ro","iso":"ro-RO","file":"ro.json"}],
  localeCodes: ["en","ro"],
  additionalMessages: [],
}

export const localeMessages = {
  'en.json': () => import('../..\\locales\\en.json' /* webpackChunkName: "lang-en.json" */),
  'ro.json': () => import('../..\\locales\\ro.json' /* webpackChunkName: "lang-ro.json" */),
}
