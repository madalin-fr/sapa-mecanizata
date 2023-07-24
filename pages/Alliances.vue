<template>
    <div id="event">
        <Banner :type="type" :title="`${$t('navbar.alliances')}`" :button="`También quiero Apoyar`" link="mailto:recaudacion@ninaspro.cl?subject=Me gustaría colaborar con Niñas Pro" />
        <contributors />
    </div>
</template>

<script>
import Banner from "~/components/Banner.vue";
import Contributors from "~/components/Contributors.vue";

export default {
  name: "Alliances",
  components: {
      Banner,
      Contributors
  },
  props: {
    type: {
      type: String,
      default: 'is-primary'
    }
  },
  mounted() {
    this.$store.commit('setType', this.type);
  },

}
</script>

<style scoped>

</style>
