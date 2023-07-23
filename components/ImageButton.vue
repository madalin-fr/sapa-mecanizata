<template>
  <div class="np-image-button">
    <figure class="image is-square">
      <nuxt-link :to="path">
        <img
           :src="getImgUrl(image)"
           alt="Corporación Niñas Pro"
        />
      </nuxt-link>
    </figure>
    <div class="np-footer">
      <nuxt-link :to="path" :class="`button ${type} is-rounded is-medium`">
        {{text}}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageButton",
  props: {
    "type": String,
    "image": String,
    "text": String,
    "path": String,
  },
  methods: {
    getImgUrl(value) {
        return require(`@/assets/${value}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.np-image-button {
  margin: 3rem 0.25rem 0rem 0.25rem;
  max-width: 600px;

  .np-footer {
    padding: 2rem;
    text-align: center;

    .button {
      padding: 0px 50px;
      font-weight: bold;
    }
  }
}
</style>
