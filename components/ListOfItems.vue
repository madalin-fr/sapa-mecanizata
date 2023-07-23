<template>

    <div class="tile is-ancestor"> 
        <!-- All other tile elements -->
        <div class="tile is-1 is-parent category">
            <article :class="`tile is-child notification ${type}`">
                <div> {{category}} </div>
            </article>
        </div>
        <div class="tile is-11 is-vertical is-parent">
            <article :class="`tile is-child notification category-mobile ${type}`">
                <div> {{category}} </div>
            </article>
            <div class="tile is-child columns is-multiline is-mobile is-centered">
                <div :class="{
                    'column':true, 
                    'is-4-desktop is-12-mobile': detailed, 
                    'is-3-desktop is-6-mobile': !detailed}" 
                    v-for="(item, i) in data" :key="i"
                >
                    <article class="box">
                        <a :href="item.url">
                            <img :src="getImgUrl(item.image)">
                        </a>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ListOfItems",
    props: {
        data: Array,
        detailed: Boolean,
        category: String,
        type: String
    },
    methods: {
        getImgUrl(value) {
            return require(`@/assets/${value}`)
    }
  },
}

</script>

<style lang="scss" scoped>

.category {
    text-align: center;
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
    font-size: 20px;
    font-weight: 700;
    text-orientation: mixed;
    text-transform: uppercase;
    display: block;
}

.category-mobile {
    display: none;
}

@media only screen and (max-device-width: 1220px) {
.category {
    display: none;
}

.category-mobile {
    display: block;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
}
}

</style>
