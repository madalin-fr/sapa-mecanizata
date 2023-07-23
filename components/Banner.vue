<template>
  <div :class="`hero is-medium ${type}`">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-three-quarters np-banner-header">
            <h1 class="title">
              {{title}}
            </h1>
            <b-button :href="link" tag="a" v-if="showButton"
              :class="`${type} is-inverted is-rounded is-outlined`">
              {{button}}
            </b-button>
          </div>
          <div class="column is-one-quarter np-banner-symbol">
            <img
               :src="getColouredSymbolUrl(type)"
               alt="Coloured Star"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Banner",
  props: {
    type: String,
    title: String,
    button: String,
    link: String
  },
  methods: {
    getColouredSymbolUrl(type) {
      if(type === "is-primary" || type === "is-warning")
          return require(`@/assets/estrella-rosada.png`);
      else
          return require(`@/assets/estrella-amarilla.png`);
    }
  },
  computed: {
    showButton: function() {
      if (this.link === undefined)
        return false;
      else
        return true;
    }
  }
};
</script>

<style lang="scss" scoped>

.hero.is-medium .hero-body {
  padding: 6rem 5rem 2rem 5rem;
  height: 18rem;

  .np-banner-header {
    .title {
      font-size: 5rem;
    }
    .button {
      padding: 0px 50px;
    }
  }

  .np-banner-symbol {
    text-align: center;

    img {
      height: 8rem;
    }
  }
}

@media only screen and (max-device-width: 1220px) {
  .hero.is-medium .hero-body {
    padding: 5rem 3rem 2rem 3rem;
    height: inherit;

    .np-banner-header {
      .title {
        font-size: 3rem;
      }
    }

    .np-banner-symbol {
      img {
        height: 0rem;
        visibility: hidden;
      }
    }
  }
}
</style>
