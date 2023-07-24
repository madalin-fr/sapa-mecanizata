<template>
  <div class="container background-container">
    <div class="columns">
      <div class="column is-4">
        <div class="title">{{ $t('volunteer.titleProfile') }}</div>
      </div>
      <div class="column">
        <ul class="">
          <li v-for="text in datos" :key="text.id">{{ text.text }}</li>
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
  computed: {
    //data according to language
    datos: function() {
      if (this.lang == 'en') {
        return this.data.en.profileData
      } else {
        return this.data.ro.profileData
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';


.background-container {
  background-color: $success;
  color: white;
  border-radius: 25px;
  padding: 3rem;
}

.title {
  color: white;
  font-size: 30px;
  font-weight: 600;
  text-align: left;
  margin: 10px 10px;
}

ul {
  list-style-type: none;
  font-size: 18px;

  li {
    padding: 10px 0px;
  }

  li:before {
      content: '\2605';
      margin: 0px 10px 0px -26px;
  }
}
</style>
