<template>
    <div id="volunteer">
      <Banner :type="type" :title="$t('volunteer.help')" />
  
      <section id="volunteer-intro">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="title">{{ $t('volunteer.titleIntro') }}</div>
              <div class="subtitle">{{ $t('volunteer.subtitleIntro') }}</div>
              <div class="subtitle">{{ $t('volunteer.invitationIntro') }}</div>
            </div>
            <div class="column is-4 is-offset-1">
              <div class="tile is-parent is-vertical">
                <div class="tile vspaced-tile">
                  <a class="button is-primary is-rounded is-fullwidth" href="#volunteer-do" v-smooth-scroll>
                    {{ $t('volunteer.titleDo') }}
                  </a>
                </div>
                <div class="tile vspaced-tile">
                  <a class="button is-success is-rounded is-fullwidth" href="#volunteer-profile" v-smooth-scroll>
                    {{ $t('volunteer.titleProfile') }}
                  </a>
                </div>
                <!-- <div class="tile vspaced-tile">
                  <a class="button is-success is-rounded is-fullwidth" href="#volunteer-internship" v-smooth-scroll>
                    {{ $t('volunteer.titleInternships') }}
                  </a>
                </div> -->
                <!-- <div class="tile vspaced-tile">
                  <a class="button is-primary is-rounded is-fullwidth is-outlined" href="#volunteer-alliance" v-smooth-scroll>
                    {{ $t('volunteer.titleAlliances') }}
                  </a>
                </div> -->
                <div class="tile vspaced-tile">
                  <a class="button is-primary is-rounded is-fullwidth" href="#volunteer-testimony" v-smooth-scroll>
                   {{ $t('volunteer.titleTestimony') }}
                  </a>
                </div>
                <div class="tile vspaced-tile">
                  <a class="button is-success is-rounded is-fullwidth" href="#volunteer-signup" v-smooth-scroll>
                    {{ $t('volunteer.titleSignup') }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section id="volunteer-do">
        <div class="title">{{ $t('volunteer.titleDo') }}</div>
        <div class="subtitle">{{ $t('volunteer.subtitleDo') }}</div>
        <Do />
      </section>
  
      <section id="volunteer-profile">
        <Profile />
      </section>
  
      <!-- <section id="volunteer-internship">
        <div class="container">
          <div class="title">{{ $t('volunteer.titleInternships') }}</div>
          <div class="subtitle">{{ $t('volunteer.subtitleInternships') }}</div>
          <div class="columns">
            <div class="column" v-for="(item, i) in datos('projects')" :key="i">
              <News :title="item.title" :type="item.type" :text="item.text" :path="item.path" />
            </div>
          </div>
        </div>
      </section> -->
  
      <!-- <section id="volunteer-alliance">
        <div class="container">
          <div class="title">{{ $t('volunteer.titleAlliances') }}</div>
          <div class="subtitle">{{ $t('volunteer.subtitleAlliances') }}</div>
        </div>
      </section> -->
  
      <section id="volunteer-testimony">
        <div class="container">
          <div class="title">{{ $t('volunteer.titleTestimony') }}</div>
          <div class="subtitle">{{ $t('volunteer.subtitleTestimony') }}</div>
          <div class="columns is-multiline">
            <div class="column is-one-third" v-for="(testimony, i) in datos('testimony')" :key="i">
              <Testimony :name="testimony.name" :title="testimony.title" :type="testimony.type" />
            </div>
          </div>
        </div>
      </section>
  
      <section id="volunteer-signup">
        <div class="container">
          <div class="title">{{ $t('volunteer.titleSignup') }}</div>
          <div class="subtitle">{{ $t('volunteer.subtitleSignup') }}</div>
          <div class="form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdOJAK9wNTVLLSQSAw3xUV-6sdNVW8hwonWIZlufkeyIg59ug/viewform?embedded=true" width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  import Banner from '~/components/Banner.vue';
  import Profile from '~/components/VolunteerProfile.vue';
  import Do from '~/components/VolunteerDo.vue';
  import Testimony from '~/components/Testimony.vue';
  // import News from '~/components/News.vue';
  import * as Data from '~/data/volunteer.js';
  
  // Use `useI18n` to access i18n locale
  const { t, locale } = useI18n();
  
  const type = 'is-success';
  const data = Data.default;
  const lang = locale.value; // Access current locale
  
  // Use `require` for static asset loading
  const datos = (section) => {
    if (lang === 'en') {
      return section === 'projects' ? data.en.projects : 
             section === 'testimony' ? data.en.testimony : null;
    } else {
      return section === 'projects' ? data.ro.projects : 
             section === 'testimony' ? data.ro.testimony : null;
    }
  };
  </script>
  
  <style lang="scss" scoped>
  section {
    margin: 200px 0;
  
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
  
    .form {
      text-align: center;
  
      iframe {
        width: 100%;
        max-width: 600px;
      }
    }
  }
  
  #volunteer-intro {
    .title, .subtitle {
      text-align: left;
    }
    .button {
      margin: 5px 0;
      border-width: 4px;
    }
  }
  </style>
  