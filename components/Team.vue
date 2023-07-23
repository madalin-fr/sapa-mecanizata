<template>
    <div class="columns is-multiline is-centered team" >
        <div  class="column is-one-quarter" v-for="item in team" :key="item.id">
                <div class="card-image">
                    <figure>
                        <b-image :src="getImgUrl(item.image)" :rounded="true"/>
                    </figure>
                </div>
                <div class="card-content">
                    <h1 class="title">{{ item.text }}</h1>
                    <p class="subtitle">{{ item.workstation }}</p>
                    <p class="description">{{ item.description }} </p>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    props:
    {
        "team":Array,
    },
    methods:{
        getImgUrl(value) {
        return require(`@/assets/${value}`)
    }
    }
}
</script>

<style lang="scss" scoped>

.card-image {
  padding-top: 15px;
  text-align: center;

  figure {
  display: block;
  padding-top: 0px;
  padding-bottom: 10px;
  margin-left: 15px;
  margin-right: 15px;

  }
}


.card-content {
  text-align: center;
  margin-bottom: 10px;

  .title {
  text-align: center;
  font-size: 20px;
  margin-left: 10px;
  }
  .subtitle{
    text-align: center;
    font-size: 18px;
    margin-left: 10px;
  }

  .description {
  text-align: center;
  font-size: 14px;
  margin-left: 10px;
  }
}

.team{
  padding-top: 10px;
}

vue-fontawesome {
  color: black;
}
</style>
