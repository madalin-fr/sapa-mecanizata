<template>
  <div id="somos">
    <Banner :type="this.type" :title="`${$t('navbar.about')}`"/>

    <!-- Mission and Vision -->
    <section id="mision" class="container">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-4">
          <div class="tile is-child">
            <figure class="image is-1by1">
              <img src="@/assets/empower.jpg" alt="Sororidad y Colaboración">
            </figure>
          </div>
        </div>
        <div class="tile is-parent is-vertical" >
          <article class="tile is-child notification is-info">
              <p class="title"> Misión </p>
              <p class="subtitle">
                Empoderar a niñas y adolescentes a través de la enseñanza de programación
                e inspirar vocaciones científicas y tecnológicas.
              </p>
          </article>
          <article class="tile is-child notification is-success">
              <p class="title"> Visión </p>
              <p class="subtitle">
                Que todas las niñas de Chile vivan la ciencia y la tecnología libres de
                estereotipos de género.
              </p>
          </article>
        </div>
      </div>
    </section>

    <!-- History -->
    <section id="historia" class="container">
      <h1 class="custom-title"> Nuestra Historia </h1>
      <Timeline />
    </section>

    <!-- Memorias -->
    <section id="memories">
      <Memorie/>
    </section>
  </div>
</template>

<script>
import Banner from "~/components/Banner.vue";
import Memorie from "~/components/Memories.vue";
import Timeline from "~/components/Timeline.vue";
import * as Informacion from '~/data/about.js';


export default {
  name: "History",
  data(){
    const lang = `${this.$i18n.locale}`
    const data = Informacion.default
    const type = 'is-success'

    return{
      data,
      lang,
      type
    }
  },
  components: {
    Banner,
    Memorie,
    Timeline
  },
};
</script>

<style lang="scss" scoped>
  .custom-title {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 5rem;
  }

  #mision, #historia {
    margin-top: 130px;
    margin-bottom: 130px;
  }

</style>
