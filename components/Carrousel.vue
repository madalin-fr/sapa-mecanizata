<template>
  <b-carousel :pause-hover="false" :pause-info="false" :interval="10000">
    <b-carousel-item v-for="(carousel,i) in datos" :key="i">
      <section :class="`hero is-medium full-size ${type}`">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-8">
              <div class="column is-three-fifths banner-text">
                <h1 class="title"> {{carousel.title}} </h1>
                <h2 class="subtitle"> {{carousel.subtitle}} </h2>
                <b-button :tag="carousel.type" v-if="carousel.action" :to="carousel.link" class="is-info" rounded>
                  {{carousel.action}}
                </b-button>
                <a :tag="carousel.type" v-if="carousel.join_link" :href="carousel.join_link" class="is-info button is-rounded" >
                  {{carousel.join_message}}
                </a>
              </div>
              <div class="column banner-image">
                <img
                    :src="getImgUrl(carousel.image)"
                    alt="Corporación Niñas Pro"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
import * as Carrousel from '../data/home.js';


export default {
  name: "Carrousel",
  props: {
    "type": String,
  },
  data(){
    const lang=`${this.$i18n.locale}`
    const carousels=Carrousel.default
    return {
      carousel: 0,
      carousels,
      lang,
    }
  },
  methods: {
    getImgUrl(value) {
      return require(`~/assets/${value}`)
    }
  },
  computed:
      {
        //data according to language
        datos: function(){
          if(this.lang == "en") {
            return this.carousels.en.carousels
          } else {
            return this.carousels.ro.carousels
          }

        }
      }
};
</script>

<style lang="scss" scoped>

.banner-text {
  padding-top: 5rem;

  h1 {
    font-size: 65px;
  }
  h2 {
    font-size: 24px;
    padding-top: 2%;
  }
}

button {
  font-size: 20px;
  border-width: 4px;
}

@media only screen and (max-device-width: 1220px) {
  .banner-text {
    padding-top: 3rem;
    padding-left: 2rem;

    h1 {
      font-size: 45px;
    }
    h2 {
      font-size: 20px;
    }
  }

  .banner-image {
    text-align: center;

    img {
      max-width: 300px;
    }
  }
}
</style>
