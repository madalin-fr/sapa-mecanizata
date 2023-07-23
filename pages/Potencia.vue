<template>
  <div id="potencia">
    <Banner :type="type" :title="`${$t('boost.banner')}`"/>

    <div class="container">
      <!-- <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child notification is-primary">
            <p class="title">Objetivo</p>
            <p class="subtitle">
              Apoyar a niñas que ya están involucradas en áreas científicas
              y tecnológicas y potenciar sus habilidades para ayudarlas a
              alcanzar el siguiente nivel.
            </p>
          </article>
        </div>
        <div class="tile is-parent">
          <figure class="image is-4by4">
              <img src="@/assets/initiatives/square-presenting.png">
            </figure>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <p class="title">¿Cómo lo hacemos?</p>
            <p class="subtitle">
              Realizamos cursos de tecnologías más avanzadas o
              talleres intensivos y mentorías para ayudar a las niñas que desean
              participar en competencias de programación, robótica o ciencia.
            </p>
          </article>
        </div>
      </div> -->
      <div class="tile is-ancestor">
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child notification is-primary">
                <div class="content">
                  <p class="title">Arduino Quest</p>
                  <p class="subtitle">
                    Este curso avanzado de Arduino lo realizamos junto al Instituto Milenio
                    Fundamentos de los Datos por primera vez en Julio del 2020.
                  </p>
                  <p class="subtitle">
                    Está dirigido a niñas que ya tienen conocimiento básico de programación.
                  </p>
                  <b-button tag="a" class="is-primary" rounded inverted
                  href="https://youtube.com/playlist?list=PLy7SgTVK30ORvNSp3Bz50yNA6PpSRXzQ_"
                  target="_blank">
                    Ver cápsulas de contenido
                  </b-button>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child">
                <div class="videoWrapper">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/_By4hSGquhc"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Banner from "~/components/Banner.vue";

export default {
  name: "Potencia",
  components: {
    Banner,
  },
  props: {
    type: {
      type: String,
      default: 'is-info'
    }
  },
  mounted() {
    this.$store.commit('setType', this.type);
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';


.container {
  padding: 3rem 0;
}

</style>

