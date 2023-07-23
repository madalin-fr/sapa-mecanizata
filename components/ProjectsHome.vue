<template>
  <div class="container">
    <div class="card-image">
      <figure>
        <img :src="getImgUrl(image)" alt="Placeholder image">
      </figure>
    </div>
    <div class="content">
      <p class="title"> {{title}} </p>
      <p class="description"> {{description}} </p>
    </div>
    <div class="card-end">
      <nuxt-link :to="path" :class="`button ${type} is-rounded`">
        {{$t('home.readMore')}}
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    const lang = `${this.$i18n.locale}`

    return{
      lang
    }
  },
  props: {
    "type": String,
    "image": String,
    "title": String,
    "text": String,
    "description": String,
    "path": String,
  },
  methods: {
    getImgUrl(value) {
        return require(`@/assets/${value}`)
    },
  },
}
</script>

<style lang="scss" scoped>

.container {
  margin: 12px;

  .content {
    padding: 5px;
    min-height: 80px;
    text-align: left;

    .title {
      font-size: 20px;
      margin-bottom: 10px;
    }

  }

  .card-end {
    text-align: center;
  }
}

@media only screen and (max-device-width: 1220px) {
  .container {
    margin: 40px;

    .content {
      min-height: 0px;

      .title {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
