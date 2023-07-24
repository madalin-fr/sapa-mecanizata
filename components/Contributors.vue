<!--<template>-->

<!--  <div class="container">-->
<!--    <ListOfItems :data="sponsorsList.gold" :detailed="true" category="sponsor gold" type='is-warning' />-->
<!--    <ListOfItems :data="sponsorsList.silver" :detailed="false" category="sponsor silver" type='is-light' />-->
<!--    <ListOfItems :data="sponsorsList.bronze" :detailed="false" category="sponsor bronze" type='is-success' />-->
<!--    <ListOfItems :data="patreonsList" :detailed="false" category="Patreon" type='is-primary' />-->
<!--    <ListOfItems :data="contributorsList" :detailed="false" category="contributor" type="is-info" />-->
<!--  </div>-->


<!--</template>-->


<!--<script>-->
<!--import * as Contributors from '~/data/contributors.js';-->
<!--import * as Patreons from '~/data/patreons.js';-->
<!--import * as Sponsors from '~/data/sponsors.js';-->
<!--import ListOfItems from './ListOfItems.vue';-->

<!--export default {-->
<!--  name: 'Contributors',-->

<!--  data () {-->
<!--    const contributors = Contributors.default-->
<!--    const patreons = Patreons.default-->
<!--    const sponsors = Sponsors.default-->

<!--    return {-->
<!--      contributors,-->
<!--      patreons,-->
<!--      sponsors-->
<!--    }-->
<!--  },-->
<!--  components: {-->
<!--    ListOfItems-->
<!--  },-->
<!--  methods: {-->
<!--    getImgUrl(value) {-->
<!--        return require(`~/assets/${value}`)-->
<!--    }-->
<!--  },-->
<!--  computed:-->
<!--    {-->
<!--        //contributors according to language-->
<!--        contributorsList: function(){-->
<!--            if(this.lang == "en") {-->
<!--                return this.contributors.en.data-->
<!--            } else {-->
<!--                return this.contributors.ro.data-->
<!--            }-->
<!--        },-->

<!--        patreonsList: function(){-->
<!--            if(this.lang == "en") {-->
<!--                return this.patreons.en.data-->
<!--            } else {-->
<!--                return this.patreons.ro.data-->
<!--            }-->
<!--        },-->

<!--        sponsorsList: function(){-->
<!--            if(this.lang == "en") {-->
<!--                return this.sponsors.en-->
<!--            } else {-->
<!--                return this.sponsors.ro-->
<!--            }-->
<!--        }-->

<!--    }-->


<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.container {-->
<!--  padding: 5rem 0;-->
<!--}-->
<!--</style>-->
