<template>
<div id="events-main">
    <div class="container">
        <template v-if="!eventos || !eventos.length">
            <div class="no-events-message">{{$t('event.noEvents')}}</div>
        </template>
        <template v-else>
            <div class="columns is-mobile event-item" v-for="(event, i) in eventos" :key="i">
                <div class="column is-2-desktop is-3-mobile">
                    <b-image ratio="1by1" :src="getImgUrl(event.image)" :rounded="true"></b-image>
                </div>
                <div class="column">
                    <div>
                        <span class="event-detail-item">
                            <vue-fontawesome :icon="['fas', 'map-marker-alt']"/>
                            {{event.locale}}
                        </span>
                        <span class="event-detail-item">
                            <vue-fontawesome :icon="['fas', 'clock']"/>
                            {{new Date(event.date).toLocaleTimeString(
                                [],
                                { hour: '2-digit', minute: '2-digit' }
                            )}}
                        </span>
                        <span class="event-detail-item">
                            <vue-fontawesome :icon="['fas', 'calendar-alt']"/>
                            {{new Date(event.date).toLocaleDateString(
                                undefined,
                                {year: 'numeric', month: 'long', day: 'numeric'
                            })}}
                        </span>
                    </div>
                    <h1 class="title"> {{event.event}} </h1>
                    <p> {{event.information}} </p>
                    <b-button
                        tag="a"
                        :href="event.link"
                        class="is-primary is-rounded"
                        :disabled="event.link === '' || event.status !== 'published'"
                        target="_blank">

                        <div v-if="event.link !== '' && event.status === 'published'">
                            {{$t('event.signUp')}}
                        </div>
                        <div v-else-if="event.status === 'completed'">
                            {{$t('event.completed')}}
                        </div>
                        <div v-else-if="event.link === '' || event.status === 'soon'">
                            {{$t('event.soon')}}
                        </div>
                    </b-button>
                </div>
            </div>
            <!-- <template v-if="isCondensed">
                <div class="all-events">
                    <b-button tag="nuxt-link" class="is-primary is-rounded" to="/events">
                        {{$t('event.seeAll')}}
                    </b-button>
                </div>
            </template> -->
        </template>
    </div>
</div>

</template>
<script>
import * as Events from '~/data/events.js';
var moment = require('moment')

export default {
    props: {
        "isCondensed": Boolean,
    },
    data() {
        const event = Events.default;
      const lang = `${this.$i18n.locale}`
        return {
            moment:moment,
            event,
            lang
        }
    },
    methods: {
            sortJSON(data, key, orden) {
                return data.sort(function (a, b) {
                    var x = a[key],
                    y = b[key];

                    if (orden === 'asc') {
                        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                    }

                    if (orden === 'desc') {
                        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
                    }
                });
            },
            //data according to language
            datos() {
                if(this.lang == "en") {
                    return this.event.en.events
                } else {
                    return this.event.ro.events
                }
            },
            getImgUrl(value) {
                return require(`@/assets/${value}`)
            }
    },
    computed:
        {
            eventos: function () {
                var datos=[];
                var array=this.sortJSON(this.datos(),'date','asc');
                for(let i=0;i<array.length;i++){
                    let today = new Date();
                    if(new Date(array[i].date)>new Date(today.setDate(today.getDate() - 1))){
                        datos.push(array[i]);
                    }
                    else if((moment(array[i].date).fromNow()).includes(`6 days ago`)){
                        datos.push(array[i]);
                    }
                }
                if (this.isCondensed)
                    return datos.slice(0,3);
                else
                    return datos;
            }
        }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';


#events-main {
    padding-bottom: 3rem;
}

.no-events-message{
    color: $primary;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
}

.event-item{
    border: 3px $primary dashed;
    border-radius: 2rem;

    margin: 20px 30px;
    padding: 20px 0px;

    .event-detail-item {
        padding-right: 20px;
    }

    .title {
        margin: 10px 0px;
    }

    p {
        margin: 10px 0px 20px 0px;
    }
}

.all-events{
    text-align: center;
}

@media only screen and (max-device-width: 1220px) {
    .event-item{
        .title {
            font-size: 22px;
            margin: 10px 0px;
        }
}
}
</style>
