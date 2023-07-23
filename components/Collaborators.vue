<template>

  <div class="container">
    <ListOfItems :data="sponsorsList.gold" :detailed="true" category="auspicio gold" type='is-warning' />
    <ListOfItems :data="sponsorsList.silver" :detailed="false" category="auspicio silver" type='is-light' />
    <ListOfItems :data="sponsorsList.bronze" :detailed="false" category="auspicio bronze" type='is-success' />
    <ListOfItems :data="patreonsList" :detailed="false" category="colaboración PRO" type='is-primary' />
    <ListOfItems :data="collaboratorsList" :detailed="false" category="colaboración" type="is-info" />
  </div>


</template>


<script>
import * as Collaborators from '~/data/collaborators.js';
import * as Patreons from '~/data/patreons.js';
import * as Sponsors from '~/data/sponsors.js';
import ListOfItems from './ListOfItems.vue';

export default {
  name: 'Collaborators',

  data () {
    const collaborators = Collaborators.default
    const patreons = Patreons.default
    const sponsors = Sponsors.default

    return {
      collaborators,
      patreons,
      sponsors
    }
  },
  components: {
    ListOfItems
  },
  methods: {
    getImgUrl(value) {
        return require(`@/assets/${value}`)
    }
  },
  computed:
    {
        //collaborators according to language
        collaboratorsList: function(){
            if(this.lang == "en") {
                return this.collaborators.en.data
            } else {
                return this.collaborators.ro.data
            }
        },

        patreonsList: function(){
            if(this.lang == "en") {
                return this.patreons.en.data
            } else {
                return this.patreons.ro.data
            }
        },

        sponsorsList: function(){
            if(this.lang == "en") {
                return this.sponsors.en
            } else {
                return this.sponsors.ro
            }
        }

    }


}
</script>

<style scoped>
.container {
  padding: 5rem 0;
}
</style>
