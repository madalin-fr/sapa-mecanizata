import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b6701d56 = () => interopDefault(import('..\\pages\\Alliances.vue' /* webpackChunkName: "pages/Alliances" */))
const _7df1af4d = () => interopDefault(import('..\\pages\\Conduct-Code.vue' /* webpackChunkName: "pages/Conduct-Code" */))
const _2e374cee = () => interopDefault(import('..\\pages\\Empodera.vue' /* webpackChunkName: "pages/Empodera" */))
const _5d85e8ab = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _484f85a0 = () => interopDefault(import('..\\pages\\Events.vue' /* webpackChunkName: "pages/Events" */))
const _7af40f0d = () => interopDefault(import('..\\pages\\History.vue' /* webpackChunkName: "pages/History" */))
const _6b3e3220 = () => interopDefault(import('..\\pages\\Incentiva.vue' /* webpackChunkName: "pages/Incentiva" */))
const _11e8a762 = () => interopDefault(import('..\\pages\\Inspira.vue' /* webpackChunkName: "pages/Inspira" */))
const _48bfe894 = () => interopDefault(import('..\\pages\\Potencia.vue' /* webpackChunkName: "pages/Potencia" */))
const _d7a54f5e = () => interopDefault(import('..\\pages\\Projects.vue' /* webpackChunkName: "pages/Projects" */))
const _36bc5135 = () => interopDefault(import('..\\pages\\UndCons.vue' /* webpackChunkName: "pages/UndCons" */))
const _208cc6c3 = () => interopDefault(import('..\\pages\\Volunteer.vue' /* webpackChunkName: "pages/Volunteer" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Alliances",
    component: _b6701d56,
    name: "Alliances___ro"
  }, {
    path: "/Conduct-Code",
    component: _7df1af4d,
    name: "Conduct-Code___ro"
  }, {
    path: "/Empodera",
    component: _2e374cee,
    name: "Empodera___ro"
  }, {
    path: "/en",
    component: _5d85e8ab,
    name: "index___en"
  }, {
    path: "/Events",
    component: _484f85a0,
    name: "Events___ro"
  }, {
    path: "/History",
    component: _7af40f0d,
    name: "History___ro"
  }, {
    path: "/Incentiva",
    component: _6b3e3220,
    name: "Incentiva___ro"
  }, {
    path: "/Inspira",
    component: _11e8a762,
    name: "Inspira___ro"
  }, {
    path: "/Potencia",
    component: _48bfe894,
    name: "Potencia___ro"
  }, {
    path: "/Projects",
    component: _d7a54f5e,
    name: "Projects___ro"
  }, {
    path: "/UndCons",
    component: _36bc5135,
    name: "UndCons___ro"
  }, {
    path: "/Volunteer",
    component: _208cc6c3,
    name: "Volunteer___ro"
  }, {
    path: "/en/Alliances",
    component: _b6701d56,
    name: "Alliances___en"
  }, {
    path: "/en/Conduct-Code",
    component: _7df1af4d,
    name: "Conduct-Code___en"
  }, {
    path: "/en/Empodera",
    component: _2e374cee,
    name: "Empodera___en"
  }, {
    path: "/en/Events",
    component: _484f85a0,
    name: "Events___en"
  }, {
    path: "/en/History",
    component: _7af40f0d,
    name: "History___en"
  }, {
    path: "/en/Incentiva",
    component: _6b3e3220,
    name: "Incentiva___en"
  }, {
    path: "/en/Inspira",
    component: _11e8a762,
    name: "Inspira___en"
  }, {
    path: "/en/Potencia",
    component: _48bfe894,
    name: "Potencia___en"
  }, {
    path: "/en/Projects",
    component: _d7a54f5e,
    name: "Projects___en"
  }, {
    path: "/en/UndCons",
    component: _36bc5135,
    name: "UndCons___en"
  }, {
    path: "/en/Volunteer",
    component: _208cc6c3,
    name: "Volunteer___en"
  }, {
    path: "/",
    component: _5d85e8ab,
    name: "index___ro"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
