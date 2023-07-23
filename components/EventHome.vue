<template>
    <div class="event-list">
        <div class="columns event-item" v-for="(inf, i) in eventos" :key="i" >
            <div class="column is-2-desktop">
                <p class="styled-text">{{new Date(inf.date).toLocaleDateString()}}</p>
            </div>
            <details class="column is-6-desktop">
                <summary class="styled-text">{{inf.event}}</summary>
                <article class="media">
                    <div class="media-content">
                        <p> {{inf.information}} </p>
                    </div>
                </article>
            </details>
            <div class="column is-4-desktop">
                <a class="button is-rounded is-success is-inverted" name="Incripción" title="Inscripción" :href="inf.link" target="_blank">
                    {{$t('event.signUp')}}
                </a>
            </div>
        </div>
    </div>
</template>


<script>
    import * as Event from '~/data/events.js';

    export default {
        data() {
            const data = Event.default;
            var fechaActual= new Date;
            return {
                data,
                fechaActual,
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
                    return this.data.en.events
                } else {
                    return this.data.ro.events
                }
            }
        },
        computed:
        {
            eventos: function () {
                var datos=[];
                var count=0;
                var array=this.sortJSON(this.datos(),'date','asc');
                for(let i=0;i<array.length;i++) {
                    if(new Date(array[i].date)>new Date && count<3){
                        datos.push(array[i]);
                        count++;
                    } else if(count>=3) {
                        return datos;
                    }
                }
                return datos;
            },
        }
    }

</script>

<style lang="scss" scoped>
.event-list {
    background-color: rgb(5, 161, 117);
    color: white;
    padding: 100px 50px;

    .styled-text{
        font-weight: bold;
        font-size: 20px;
    }
}

@media only screen and (max-device-width: 1220px) {
.event-list {
    .event-item {
        border-bottom: 1px white solid;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }

    .styled-text {
        font-size: 16px;
    }
}
}
</style>
