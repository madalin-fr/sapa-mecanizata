<template>
  <footer :class="`hero is-medium ${type}`">
    <div class="container has-text-centered">
      <div class="columns is-multiline">
        <div class="column is-12-mobile is-2-tablet" >
          <a href="/">
            <img class="logo" src="~/assets/logo.png" alt="Corporación Niñas Pro" width="100" height="100" >
          </a>
        </div>

        <div class="column is-12-mobile is-3-tablet">
          <strong >{{$t('footer.about')}}</strong>
          <ul>
            <li><nuxt-link class="footer-link" to="/history">{{$t('footer.purpose')}}</nuxt-link></li>
            <li><nuxt-link class="footer-link" to="/history">{{$t('footer.history')}}</nuxt-link></li>
            <!-- <li><nuxt-link class="footer-link" to="/equipo">{{$t('footer.team')}}</nuxt-link></li> -->
            <li><nuxt-link class="footer-link" to="/history#memoria">{{$t('footer.memory')}}</nuxt-link></li>
            <li><nuxt-link class="footer-link" to="/conduct-code">{{$t('pages.conductcode')}}</nuxt-link></li>
          </ul>
        </div>
        <div class="column is-12-mobile is-3-tablet">
          <strong >{{$t('footer.help')}}</strong>
          <ul>
            <li><nuxt-link class="footer-link" to="/Alliances/">{{$t('footer.terms')}}</nuxt-link></li>
            <li><nuxt-link class="footer-link" to="/volunteer/">{{$t('footer.volunteer')}}</nuxt-link></li>
            <li><a class="footer-link" href="https://yodono.cl/institucion/546/ninas_pro">{{$t('footer.donate')}}</a></li>
          </ul>
        </div>
        <div class="column is-12-mobile is-3-tablet">
          <div class="contactus">
            <strong>{{$t('footer.contact')}}</strong> <br>
            <a href="mailto:sapa-mecanizata@gmail.com">sapa-mecanizata@gmail.com</a>
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

    width: 100%;
  }
  strong {
    color: white;
  }
  .container {
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

@media only screen and (max-device-width: 775px) {

  .column {
    text-align: center;
    width: auto;
  }

}
</style>
