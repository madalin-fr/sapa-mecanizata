<template>
  <div class="container">
    <div class="columns">
      <div class="column" v-for="item in datos" :key="item.title">
        <b-image ratio="1by1" :src="getImgUrl(item.image)" :rounded="true"></b-image>
        <div class="title">{{ item.title }}</div>
        <ul>
          <li v-for="linea in item.lista" :key="linea">
            {{ linea }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import * as Data from '~/data/volunteer.js'
export default {
  data() {
    const data = Data.default
    const lang = `${this.$i18n.locale}`
    return {
      data,
      lang
    }
  },
  methods: {
    getImgUrl(value) {
      return require(`@/assets/${value}`)
    }
  },
  computed: {
    //data according to language
    datos: function() {
      if (this.lang == 'en') {
        return this.data.en.doData
      } else {
        return this.data.ro.doData
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.title {
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    margin: 30px 0px;
}

.column {
  padding: 3rem;
}

ul {
  list-style-type: none;

  li:before {
    content: '\2605';
  }
}
</style>
