<template>
    <div class="columns info-div">
        <slot v-if="type === 'left'">
            <div class="column  is-6-desktop info-img" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500" data-aos-anchor-placement="center-center">
                <img :class="type" :src="getImgUrl(image)">
            </div>
        </slot>

        <div v-bind:class="{'column is-4-desktop': true, 'is-offset-2-desktop': (type === 'right')}">
            <div :class="`info-text ${type}`">
                <h1 class="title"> {{titulo}} </h1>
                <h2 class="subtitle"> {{text}} </h2>
                <nuxt-link :to="path"
                    v-bind:class="{'button is-rounded': true, 'is-info': (type === 'left'), 'is-success': (type === 'right')}">
                    {{boton}}
                </nuxt-link>
            </div>
        </div>

        <slot v-if="type === 'right'">
            <div :class="`column  is-6-desktop info-img ${type}`" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500" data-aos-anchor-placement="center-center">
                <img :class="type" :src="getImgUrl(image)">
            </div>
        </slot>
    </div>
</template>

<script>

export default {
    props: {
        "type": String,
        "image" : String,
        "text" : String,
        "boton" : String,
        "format" :String,
        "titulo":String,
        "path" : String,
    },
    methods: {
        getImgUrl(value) {
            return require(`~/assets/${value}`)
        }
    }
}

</script>

<style lang="scss" scoped>
    .info-div {
        max-height: 30rem;
        margin: 2rem 0px;

        .info-text {
            text-align: left;
            max-height: inherit;
            padding: 100px 50px;

            .title {
                font-size: 30px;
            }

            .subtitle {
                font-size: 18px;
            }
        }

        .info-img {
            max-height: inherit;

            &.right {
                text-align: right;
            }

            img {
                object-fit: cover;
                width: 100%;
                max-height: inherit;
                padding: 0px;

                &.right {
                    border-radius: 1000px 0px 0px 1000px;
                }

                &.left{
                    border-radius: 0px 1000px 1000px 0px;
                }
            }
        }
    }


@media only screen and (max-device-width: 1220px) {

    .info-div {
        max-height: max-content;

        .info-text {
            padding: 30px 30px;
        }

        .info-img {
            img {
                width: 90%;
            }
        }
    }
}
</style>
