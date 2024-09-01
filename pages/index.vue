<template>
  <div id="home">
    <!-- Iniciativas -->
    <Carrousel :type="type" />
     <!-- Iniciativas -->


    <!-- services -->
    <ClientOnly>
      <section id="services">
        <div class="container" data-aos="fade-up">
          <h1 class="title">{{ $t('home.titleservices') }}</h1>
          <p class="subtitle">{{ $t('home.subtitleservices') }}</p>
          <div class="columns is-variable is-1">
            <div v-for="(project, i) in datosFunc('services')" :key="i" data-aos="fade-up" :data-aos-delay="300 + 100*i">
              <servicesHome 
                :title="project.title" 
                :type="project.type" 
                :image="project.image" 
                :path="project.path" 
                :description="project.description" 
                :description2="project.description2"
              />
            </div>
          </div>
        </div>
      </section>
    </ClientOnly>

     <!-- Information -->
    <ClientOnly>
     <section id="information">
      <div v-for="(item, i) in datosFunc('information')" :key="i">
        <Information :type="item.type" :image="item.image" :text="item.text" :titulo="item.titulo" :boton="item.boton" :path="item.Path" />
      </div>
      </section> 
    </ClientOnly>
  

    
    <!-- Eventos -->
    <!-- <section id="events">
      <div class="container">
        <h1 class="title">{{ $t('home.titleEvents') }}</h1>
        <p class="subtitle">{{ $t('home.subtitleEvents') }}</p>
        <Event :isCondensed="true" />
      </div>
    </section> -->

    <!-- Numbers -->
    <section id="metrics" class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <nav class="level">
            <div v-for="(item, i) in datosFunc('metrics')" :key="i">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">{{ item.name }}</p>
                  <p class="title">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>

    <ClientOnly>
    <!-- Contributors and partners -->
    <section id="contributors">
      <div class="container" data-aos="fade-up" data-aos-delay="200">
        <h1 class="title">{{ $t('home.titlePartners') }}</h1>
        <p class="subtitle">{{ $t('home.subtitlePartners') }}</p>
        <div class="buttons">
          <!-- Buttons code is commented out -->
        </div>

        <div class="left-moved">
          <ListOfItems
            :data="contributorsList.galati"
            :detailed="true"
            category="galati"
            type="is-warning"
          />
          <ListOfItems
            :data="contributorsList.bucuresti"
            :detailed="false"
            category="bucuresti"
            type="is-light"
          />
          <ListOfItems
            :data="contributorsList.ploiesti"
            :detailed="false"
            category="ploiesti"
            type="is-success"
          />
          <ListOfItems
            :data="contributorsList.constanta"
            :detailed="false"
            category="constanta"
            type="is-primary"
          />
        </div>
      </div>
    </section>
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watchEffect, onUpdated } from 'vue';
import { useNuxtApp } from '#app';
import { useGlobalStore } from '~/store/useGlobalStore';  // Adjust path as necessary
import AOS from 'aos';
import 'aos/dist/aos.css';

import Carrousel from '~/components/Carrousel.vue';
import servicesHome from '~/components/ServicesHome.vue';
import ListOfItems from '~/components/ListOfItems.vue';
import Information from '~/components/Information.vue';
import Event from '~/components/Event.vue';
import * as Data from '~/data/home.js';
import * as Contributors from '~/data/contributors.js';
import { useRoute } from 'nuxt/app';

const nuxtApp = useNuxtApp();
const i18n = nuxtApp.$i18n;
const store = useGlobalStore();

const data = Data.default;
const contributors = Contributors.default;

const lang = computed(() => i18n.locale.value);
const contributorsList = computed(() => contributors.ro);

// Define props
const props = defineProps({
  type: {
    type: String,
    default: 'is-primary',
  },
});

// Reactive reference for type, initially set to prop value
const type = ref(props.type);

// Function to retrieve data based on section and language
const datosFunc = (section) => {
  if (lang.value === 'en') {
    if (section === 'services') {
      return data.en.servicesHome;
    } else if (section === 'information') {
      return data.en.information;
    } else if (section === 'metrics') {
      return data.en.metrics;
    }
  } else {
    if (section === 'services') {
      return data.ro.servicesHome;
    } else if (section === 'information') {
      return data.ro.information;
    } else if (section === 'metrics') {
      return data.ro.metrics;
    }
  }
  return null;
};

// Initialize type from store, if available
onMounted(() => {
  AOS.init();
  if (store.type !== '') {
    type.value = store.type;
  } else {
    store.setType(props.type);
  }
});

onUpdated(() => {
  store.setType(props.type);
  type.value = store.type;
});



</script>

<style lang="scss" scoped>
.column,
.columns {
  border: 0px;
}

section {
  margin: 160px 0;

  .title {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }

  .subtitle {
    font-size: 18px;
    text-align: center;
    margin-bottom: 40px;
  }
}

#metrics {
  padding: 2rem 0 1rem 0;
}

#contributors {
  .left-moved {
    position: relative;
    left: -45px;
  }

  .buttons {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (max-device-width: 1220px) {
  #contributors {
    .left-moved {
      left: 0px;
    }
  }
}
</style>