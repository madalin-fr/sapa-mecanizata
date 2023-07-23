<template>
  <div id="events">
    <Banner :type="type" :title="`${$t('navbar.events')}`"/>
    <Event :isCondensed="false"/>
  </div>
</template>

<script>
import Banner from "~/components/Banner.vue";
import Event from '~/components/Event.vue';


export default {
  name: "Events",
  data(){
    const lang = `${this.$i18n.locale}`;
    const type = 'is-primary';

    return{
      lang,
      type
    }
  },
  components: {
    Banner,
    Event
  },
};
</script>

<style lang="scss" scoped>

</style>
