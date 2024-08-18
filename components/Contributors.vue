<template>
    <div class="container">
      <ListOfItems :data="sponsorsList.gold" :detailed="true" category="sponsor gold" type="is-warning" />
      <ListOfItems :data="sponsorsList.silver" :detailed="false" category="sponsor silver" type="is-light" />
      <ListOfItems :data="sponsorsList.bronze" :detailed="false" category="sponsor bronze" type="is-success" />
      <ListOfItems :data="patreonsList" :detailed="false" category="Patreon" type="is-primary" />
      <ListOfItems :data="contributorsList" :detailed="false" category="contributor" type="is-info" />
    </div>
  </template>
  
  <script setup>
  import ListOfItems from './ListOfItems.vue';
  import Contributors from '@/data/contributors.js';
  import Patreons from '@/data/patreons.js';
  import Sponsors from '@/data/sponsors.js';
  import { computed } from 'vue';
  
  // Define language
  const lang = 'en'; // Adjust this based on your i18n setup
  
  // Load data
  const contributors = Contributors.default;
  const patreons = Patreons.default;
  const sponsors = Sponsors.default;
  
  // Define computed properties
  const contributorsList = computed(() => {
    return lang === 'en' ? contributors.en.data : contributors.ro.data;
  });
  
  const patreonsList = computed(() => {
    return lang === 'en' ? patreons.en.data : patreons.ro.data;
  });
  
  const sponsorsList = computed(() => {
    return lang === 'en' ? sponsors.en : sponsors.ro;
  });
  
  </script>
  
  <style scoped>
  .container {
    padding: 5rem 0;
  }
  </style>
  