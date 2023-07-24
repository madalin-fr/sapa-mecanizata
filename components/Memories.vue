<template>
    <div class="memories-container">
        <div class="container">
            <p class="title" align="center"> {{$t('footer.memory')}} </p>
            <div class="columns memories-item is-vcentered" v-for="(memorie, i) in datos" :key="i">
                <div class="column" align="left">
                    <p class="memories-item-name"> {{memorie.title}} </p>
                </div>
                <div class="column is-one-fifth">
                    <b-button tag="a"
                        class="is-primary"
                        :href="memorie.url"
                        target="_blank"
                        rounded>
                        <vue-fontawesome :icon="['fas', 'file-pdf']"/>
                        Ver PDF
                    </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import * as Memories from '~/data/about.js';


export default {
    data(){
      const lang = `${this.$i18n.locale}`
    const data = Memories.default
        return{
            data,
            lang,
        }
    },
    computed:
    {
        //data according to language
        datos: function(){
            if(this.lang == "en") {
                return this.data.en.memory
            } else {
                return this.data.ro.memory
            }

        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.memories-container {
    // background-color:#fdca36
    margin: 30px 0 0 0;
    padding: 50px 0;

    .memories-item {
        margin: 20px 10%;
        border: 3px $primary dashed;
        border-radius: 2rem;
        padding: 0px 60px;

        .memories-item-name {
            font-size: 20px;
            font-weight: bold;
        }
    }
}

</style>
