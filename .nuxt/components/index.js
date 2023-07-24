export { default as Banner } from '../..\\components\\Banner.vue'
export { default as Carrousel } from '../..\\components\\Carrousel.vue'
export { default as Contributors } from '../..\\components\\Contributors.vue'
export { default as Event } from '../..\\components\\Event.vue'
export { default as EventHome } from '../..\\components\\EventHome.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as ImageButton } from '../..\\components\\ImageButton.vue'
export { default as Information } from '../..\\components\\Information.vue'
export { default as ListOfItems } from '../..\\components\\ListOfItems.vue'
export { default as Memories } from '../..\\components\\Memories.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as News } from '../..\\components\\News.vue'
export { default as PhotoBanner } from '../..\\components\\PhotoBanner.vue'
export { default as ProjectsHome } from '../..\\components\\ProjectsHome.vue'
export { default as ProjectsVolunteer } from '../..\\components\\ProjectsVolunteer.vue'
export { default as SocialNetworkButton } from '../..\\components\\SocialNetworkButton.vue'
export { default as Team } from '../..\\components\\Team.vue'
export { default as Testimony } from '../..\\components\\Testimony.vue'
export { default as Timeline } from '../..\\components\\Timeline.vue'
export { default as VolunteerDo } from '../..\\components\\VolunteerDo.vue'
export { default as VolunteerProfile } from '../..\\components\\VolunteerProfile.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
