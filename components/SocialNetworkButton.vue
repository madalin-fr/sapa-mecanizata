<template>
   <client-only>
  <div class="block">
    
   <a class="rrss-icon" target="_blank" :href="pathTw">
      <vue-fontawesome :icon="['fab', 'twitter']"/>
    </a>
    <a class="rrss-icon" target="_blank" :href="pathFb">
      <vue-fontawesome :icon="['fab', 'facebook']"/>
      </a>
    <a class="rrss-icon" target="_blank" :href="pathLi">
      <vue-fontawesome :icon="['fab', 'linkedin']"/>
    </a>
    <a class="rrss-icon" target="_blank" :href="pathIg">
      <vue-fontawesome :icon="['fab', 'instagram']"/>
    </a>
  </div>
  </client-only>
</template>

<script setup>
const props = defineProps({
  type: String,
  pathTw: String,
  pathFb: String,
  pathIg: String,
  pathLi: String,
});
</script>

<style scoped>
  .container {
    text-align: center;
  }
  .title {
    font-size: small;
  }
  a {
    color: white;
  }
  .rrss-icon {
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
