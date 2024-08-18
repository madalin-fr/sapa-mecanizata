<template>
    <div id="events-main">
      <div class="container">
        <template v-if="!eventos || !eventos.length">
          <div class="no-events-message">{{ t('event.noEvents') }}</div>
        </template>
        <template v-else>
          <div class="columns is-mobile event-item" v-for="(event, i) in eventos" :key="i">
            <div class="column is-2-desktop is-3-mobile">
              <b-image ratio="1by1" :src="getImgUrl(event.image)" rounded></b-image>
            </div>
            <div class="column">
              <div>
                <span class="event-detail-item">
                  <vue-fontawesome :icon="['fas', 'map-marker-alt']" />
                  {{ event.locale }}
                </span>
                <span class="event-detail-item">
                  <vue-fontawesome :icon="['fas', 'clock']" />
                  {{
                    new Date(event.date).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  }}
                </span>
                <span class="event-detail-item">
                  <vue-fontawesome :icon="['fas', 'calendar-alt']" />
                  {{
                    new Date(event.date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })
                  }}
                </span>
              </div>
              <h1 class="title">{{ event.event }}</h1>
              <p>{{ event.information }}</p>
              <b-button
                tag="a"
                :href="event.link"
                class="is-primary is-rounded"
                :disabled="event.link === '' || event.status !== 'published'"
                target="_blank"
              >
                <div v-if="event.link !== '' && event.status === 'published'">
                  {{ t('event.signUp') }}
                </div>
                <div v-else-if="event.status === 'completed'">
                  {{ t('event.completed') }}
                </div>
                <div v-else-if="event.link === '' || event.status === 'soon'">
                  {{ t('event.soon') }}
                </div>
              </b-button>
            </div>
          </div>
          <!-- Condensed view button -->
          <!-- <template v-if="isCondensed">
              <div class="all-events">
                  <b-button tag="nuxt-link" class="is-primary is-rounded" to="/events">
                      {{ t('event.seeAll') }}
                  </b-button>
              </div>
          </template> -->
        </template>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import * as Events from '@/data/events.js';
  import moment from 'moment';
  
  // Access i18n context
  const { t, locale } = useI18n();
  
  // Define props
  const props = defineProps({
    isCondensed: Boolean,
  });
  
  // Reactive references
  const event = ref(Events.default);
  
  // Function to get image URL
  const getImgUrl = (value) => {
    try {
      return new URL(`${value}`, import.meta.url).href;
    } catch (error) {
      console.error(`Image not found: ${value}`, error);
      return '';
    }
  };
  
  // Function to sort JSON data
  const sortJSON = (data, key, orden) => {
    return data.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      if (orden === 'asc') {
        return x < y ? -1 : x > y ? 1 : 0;
      }
      if (orden === 'desc') {
        return x > y ? -1 : x < y ? 1 : 0;
      }
    });
  };
  
  // Computed property to get event data based on language
  const datos = computed(() => {
    if (locale.value === 'en') {
      return event.value.en.events;
    } else {
      return event.value.ro.events;
    }
  });
  
  // Computed property for events
  const eventos = computed(() => {
    const array = sortJSON(datos.value, 'date', 'asc');
    const filteredDatos = [];
    const today = new Date();
    array.forEach((item) => {
      if (new Date(item.date) > new Date(today.setDate(today.getDate() - 1))) {
        filteredDatos.push(item);
      } else if (moment(item.date).fromNow().includes('6 days ago')) {
        filteredDatos.push(item);
      }
    });
    if (props.isCondensed) return filteredDatos.slice(0, 3);
    return filteredDatos;
  });
  </script>
  
  
  <style lang="scss" scoped>
  @import '@/assets/main.scss';
  
  #events-main {
    padding-bottom: 3rem;
  }
  
  .no-events-message {
    color: $primary;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
  
  .event-item {
    border: 3px $primary dashed;
    border-radius: 2rem;
    margin: 20px 30px;
    padding: 20px 0;
  
    .event-detail-item {
      padding-right: 20px;
    }
  
    .title {
      margin: 10px 0;
    }
  
    p {
      margin: 10px 0 20px 0;
    }
  }
  
  .all-events {
    text-align: center;
  }
  
  @media only screen and (max-device-width: 1220px) {
    .event-item {
      .title {
        font-size: 22px;
        margin: 10px 0;
      }
    }
  }
  </style>
  