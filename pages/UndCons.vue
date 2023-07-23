<template>
  <div id="underconstruction">
      <Banner :type="type" title="En Construcción" />
  </div>
</template>

<script>import Banner from "~/components/Banner.vue";

export default {
  name: "UnderConstruction",
  components: {
    Banner,
  },
  data() {
    const type = 'is-danger';
    return {
      type
    }
  },
  methods: {
    clickMe() {
      this.$buefy.notification.open('Clicked!!')
    }
  }
};
</script>

<style scoped>
  .title {
  font-size: larger;
  }
</style>
