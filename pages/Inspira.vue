<template>
  <div id="inspira">
    <Banner :type="this.type" :title="`${$t('inspire.banner')}`"/>

    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical is-4">
          <article class="tile is-child notification is-primary">
            <p class="title">Objetivo</p>
            <p class="subtitle">
              Generar espacios de aprendizaje de programación avanzada para niñas
              y fomentar la participación en competencias de programación
              nacional.
            </p>
            <p class="subtitle">
              Proponer desafíos y poner en práctica metodologías de aprendizaje continuo
              en un espacio de camaradería y compeñerismo.
            </p>
          </article>
          <article class="tile is-child">
            <figure class="image is-4by4">
              <img src="~/assets/initiatives/square-winners.png">
            </figure>
          </article>
        </div>
        <div class="tile is-vertical">
          <div class="tile is-parent">
            <article class="tile is-child">
              <figure class="image is-4by4">
                <img src="~/assets/initiatives/portrait-zoom.png">
              </figure>
            </article>
          </div>
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child notification is-info spaced">
                <p class="title">¿Cómo lo hacemos?</p>
                <p class="subtitle">
                  Realizamos cursos avanzados de programación en los que cubrimos
                  contenidos relacionados con algoritmos clásicos, estructuras de datos,
                  eficiencia algorítmica, entre otros. También realizamos mentorías para ayudar a
                  las niñas que desean participar en competencias de programación de forma
                  personalizada.
                </p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-primary spaced">
                <div class="content">
                  <p class="title">Olimpiada Chilena de Informática</p>
                  <p class="subtitle">
                    La Olimpiada Chilena de Informática es una competencia escolar en la que pueden
                    participar escolares de Chile. En esta competencia de 4 horas de duración, los
                    niños y niñas que participan deben resolver un conjunto de problemas usando
                    código.
                  </p>
                  <b-button tag="a" class="is-primary" rounded inverted href="http://www.olimpiada-informatica.cl/" target="_blank">
                    Ver página de la OCI
                  </b-button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child notification is-primary">
            <div class="content">
              <p class="title">Juntas a la Olimpiada Chilena de Informática</p>
              <p class="subtitle">
                Todos los años vamos acompañamos a las chicas a participar a la Olimpiada
                Chilena de Informática (OCI), competencia escolar de programación.
              </p>
              <p class="subtitle">
                Cerramos la actividad comiendo pizza y celebrando la experiencia vivida.
              </p>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child">
            <figure class="image">
              <img src="~/assets/initiatives/portrait-group.png">
            </figure>
          </article>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Banner from "~/components/Banner.vue";


export default {
  name: "Inspira",
  components: {
    Banner,
  },
  props: {
    type: {
      type: String,
      default: 'is-warning'
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
