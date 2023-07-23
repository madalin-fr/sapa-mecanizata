<template>
  <div class="container">
    <div class="card-image">
      <figure>
        <img src="@/assets/sororidad.jpg" alt="Placeholder image">
      </figure>
    </div>
    <div class="content">
      <p class="title"> {{title}} </p>
      <p class="description">{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    "type": String,
    "image": String,
    "title": String,
    "description": String,
  },
  methods: {
    getImgUrl(value) {
        return require(`@/assets/${value}`)
    },
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
  font-size: 18px;
  margin-left: 5%;
}
.columns, .content{
  text-align: center;
  padding-left: 5%;
}
figure {
  display: block;
  padding-bottom: 5%;
  padding-left: 8%;
}
</style>