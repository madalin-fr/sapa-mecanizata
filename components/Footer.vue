<template>
  <footer :class="`hero is-medium ${type}`">
    <div class="container">
      <div class="columns">
        <div class="column is-2" >
          <a href="/">
            <img class="logo" src="@/assets/logo.png" alt="Corporación Niñas Pro" width="100" height="100" >
          </a>
        </div>
        <div class="column is-2">
          <strong >{{$t('footer.project')}}</strong>
          <ul>
            <li><nuxt-link class="footer-link" to="/inspira/">{{$t('footer.inspire')}}</nuxt-link></li>
            <li><nuxt-link class="footer-link" to="/incentiva/">{{$t('footer.incentive')}}</nuxt-link></li>
            <li><nuxt-link class="footer-link" to="/empodera/">{{$t('footer.empower')}}</nuxt-link></li>
            <li><nuxt-link class="footer-link" to="/potencia/">{{$t('footer.boost')}}</nuxt-link></li>
          </ul>
        </div>
        <div class="column is-2">
          <strong >{{$t('footer.about')}}</strong>
          <ul>
            <li><nuxt-link class="footer-link" to="/history">{{$t('footer.purpose')}}</nuxt-link></li>
            <li><nuxt-link class="footer-link" to="/history">{{$t('footer.history')}}</nuxt-link></li>
            <!-- <li><nuxt-link class="footer-link" to="/equipo">{{$t('footer.team')}}</nuxt-link></li> -->
            <li><nuxt-link class="footer-link" to="/history#memoria">{{$t('footer.memory')}}</nuxt-link></li>
            <li><nuxt-link class="footer-link" to="/conduct-code">{{$t('pages.conductcode')}}</nuxt-link></li>
          </ul>
        </div>
        <div class="column is-2">
          <strong >{{$t('footer.help')}}</strong>
          <ul>
            <li><nuxt-link class="footer-link" to="/Alliances/">{{$t('footer.alliances')}}</nuxt-link></li>
            <li><nuxt-link class="footer-link" to="/volunteer/">{{$t('footer.volunteer')}}</nuxt-link></li>
            <li><a class="footer-link" href="https://yodono.cl/institucion/546/ninas_pro">{{$t('footer.donate')}}</a></li>
          </ul>
        </div>
        <div class="column is-3 is-offset-1">
          <div class="contactus">
            <strong>{{$t('footer.contact')}}</strong> <br>
            <a href="mailto:contacto@ninaspro.cl">contacto@ninaspro.cl</a>
          </div>
          <div class="rrss">
            <strong>{{$t('footer.rrss')}}</strong>
            <SocialNetworkButton
            pathTw="https://twitter.com/ninasPro"
            pathFb="https://www.facebook.com/NinasPro"
            pathIg="https://www.instagram.com/ninas_pro/"
            pathLi="https://www.linkedin.com/company/ninas-pro/"/>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialNetworkButton from "~/components/SocialNetworkButton.vue";

export default {
  name: "Footer",
  components: {
    SocialNetworkButton,
  },
  props: {
    "type": String,
  },
  data() {
    return {
      title: "Titulo",
    }
  },
}
</script>

<style lang="scss" scoped>
  footer {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  strong {
    color: white;
  }
  .container {
    width: 1080px;
  }
  .column {
    text-align: left;
    width: max-content;
  }
  .logo {
    margin-top: 20px;
  }
  .footer-link, a {
    color: white;
  }
  .contactus {
    margin-bottom: 15px;
  }

@media only screen and (max-device-width: 1220px) {

  .container {
    width: 100%;
    padding: 2rem 20%;
  }

}
</style>
