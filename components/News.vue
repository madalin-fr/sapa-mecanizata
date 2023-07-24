<template>
  <div class="container">
  <div class="card-image">
    <figure>
      <img src="~/assets/sororidad.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="content">
      <p class="title"> {{ title }} </p>
      <p class="description">Breve descripción de la noticia.</p>
      <nuxt-link :to="path" :class="`button ${type} is-rounded is-medium`">
        {{text}}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    "type": String,
    "text": String,
    "path": String,
    "title": String,
  },
  data() {
    return {
      title1: "Noticia",
      url: "url del sitio"
    }
  },
}
</script>

<style scoped>
.card-image {
  text-align: center;
}
.title {
  text-align: left;
  font-size: 16px;
  margin-left: 5%;
}
.description {
  text-align: left;
  font-size: 16px;
  margin-left: 5%;
  padding-bottom: 3%;
}
.columns, .content{
  text-align: center;
  padding-left: 5%;
}
figure {
  display: block;
  padding-top: 0px;
  padding-bottom: 5%;
  margin-left: 8%;
}
</style>
