<template>

  <b-navbar :transparent="true" :type="type" wrapper-class="container ninaspro-navbar" centered>

    <template v-slot:brand  >
      <nuxt-link class="navbar-item" :to="{ path: '/' }">
        <img
         src="~/assets/logo.png"
         alt="Corporación Niñas Pro"
        />
      </nuxt-link>
    </template>

    <template v-slot:start>
      <!-- <b-navbar-dropdown class="condensed" :label="`${$t('navbar.initiatives')}`" :boxed="true">
        <b-navbar-item tag="nuxt-link" :to="{ path: '/inspira' }">
          <p>{{$t('navbar.inspire')}}</p>
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/incentiva' }">
          <p>{{$t('navbar.incentive')}}</p>
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/empodera' }">
          <p>{{$t('navbar.empower')}}</p>
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/potencia' }">
          <p>{{$t('navbar.boost')}}</p>
        </b-navbar-item>
      </b-navbar-dropdown> -->

      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }" href="#projects" v-smooth-scroll>
        <p>{{$t('navbar.initiatives')}}</p>
      </b-navbar-item>

      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }" href="#information" v-smooth-scroll>
        <p>{{$t('navbar.about')}}</p>
      </b-navbar-item>

      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }" href="#events" v-smooth-scroll>
        <p>{{$t('navbar.events')}}</p>
      </b-navbar-item>

      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }" href="#contributors" v-smooth-scroll>
        <p>{{$t('navbar.portfolio')}}</p>
      </b-navbar-item>

      <!-- <b-navbar-item tag="a" href="https://blog.ninaspro.cl">
        <p>{{$t('navbar.news')}}</p>
      </b-navbar-item> -->

    </template>

    <template v-slot:end>
      <b-navbar-dropdown :label="`${$t('navbar.lang')}`">
          <nuxt-link class="navbar-item" :to="switchLocalePath('ro')">
            română
          </nuxt-link>
          <nuxt-link class="navbar-item" :to="switchLocalePath('en')">
            english
          </nuxt-link>
      </b-navbar-dropdown>

      <b-navbar-item tag="div">
        <div class="buttons">
          <nuxt-link :to="{ path: '/volunteer'}">
            <b-button
              id="involucrate-btn"
              v-bind:class="{
                'is-info':(type !== 'is-info'),
                'is-warning':(type == 'is-info')
              }" rounded>
              {{$t('navbar.involved')}}
            </b-button>
          </nuxt-link>

          <a href="https://yodono.cl/institucion/546/ninas_pro">
            <b-button
              id="dona-btn"
              v-bind:class="{
                'is-warning':(type !== 'is-warning' && type !== 'is-info'),
                'is-primary':(type === 'is-warning' || type === 'is-info')
              }" rounded>
              {{$t('navbar.donate')}}
            </b-button>
          </a>
        </div>
      </b-navbar-item>

    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    "type": String,
  },
};
</script>

<style lang="scss" scoped>


</style>
