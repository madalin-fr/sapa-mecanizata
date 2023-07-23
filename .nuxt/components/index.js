export const Banner = () => import('../..\\components\\Banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c))
export const Carrousel = () => import('../..\\components\\Carrousel.vue' /* webpackChunkName: "components/carrousel" */).then(c => wrapFunctional(c.default || c))
export const Collaborators = () => import('../..\\components\\Collaborators.vue' /* webpackChunkName: "components/collaborators" */).then(c => wrapFunctional(c.default || c))
export const Event = () => import('../..\\components\\Event.vue' /* webpackChunkName: "components/event" */).then(c => wrapFunctional(c.default || c))
export const EventHome = () => import('../..\\components\\EventHome.vue' /* webpackChunkName: "components/event-home" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const ImageButton = () => import('../..\\components\\ImageButton.vue' /* webpackChunkName: "components/image-button" */).then(c => wrapFunctional(c.default || c))
export const Information = () => import('../..\\components\\Information.vue' /* webpackChunkName: "components/information" */).then(c => wrapFunctional(c.default || c))
export const ListOfItems = () => import('../..\\components\\ListOfItems.vue' /* webpackChunkName: "components/list-of-items" */).then(c => wrapFunctional(c.default || c))
export const Memories = () => import('../..\\components\\Memories.vue' /* webpackChunkName: "components/memories" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const News = () => import('../..\\components\\News.vue' /* webpackChunkName: "components/news" */).then(c => wrapFunctional(c.default || c))
export const PhotoBanner = () => import('../..\\components\\PhotoBanner.vue' /* webpackChunkName: "components/photo-banner" */).then(c => wrapFunctional(c.default || c))
export const ProjectsHome = () => import('../..\\components\\ProjectsHome.vue' /* webpackChunkName: "components/projects-home" */).then(c => wrapFunctional(c.default || c))
export const ProjectsVolunteer = () => import('../..\\components\\ProjectsVolunteer.vue' /* webpackChunkName: "components/projects-volunteer" */).then(c => wrapFunctional(c.default || c))
export const SocialNetworkButton = () => import('../..\\components\\SocialNetworkButton.vue' /* webpackChunkName: "components/social-network-button" */).then(c => wrapFunctional(c.default || c))
export const Team = () => import('../..\\components\\Team.vue' /* webpackChunkName: "components/team" */).then(c => wrapFunctional(c.default || c))
export const Testimony = () => import('../..\\components\\Testimony.vue' /* webpackChunkName: "components/testimony" */).then(c => wrapFunctional(c.default || c))
export const Timeline = () => import('../..\\components\\Timeline.vue' /* webpackChunkName: "components/timeline" */).then(c => wrapFunctional(c.default || c))
export const VolunteerDo = () => import('../..\\components\\VolunteerDo.vue' /* webpackChunkName: "components/volunteer-do" */).then(c => wrapFunctional(c.default || c))
export const VolunteerProfile = () => import('../..\\components\\VolunteerProfile.vue' /* webpackChunkName: "components/volunteer-profile" */).then(c => wrapFunctional(c.default || c))

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
