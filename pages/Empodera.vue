<template>
  <div id="empodera">
    <Banner :type="type" :title="`${$t('empower.banner')}`"/>

    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="title">Objetivo</p>
                <p class="subtitle">
                  Entregar herramientas y fortalecer la seguridad de las
                  niñas para que sigan explorando y profundizando sus
                  aprendizajes de forma independiente.
                </p>
                <p class="subtitle">
                  Derribar estereotipos de género relacionados a las
                  areas de la ciencia, la ingeniería, la física y las
                  matemáticas.
                </p>
              </article>
              <article class="tile is-child">
                <figure class="image is-4by4">
                  <img src="@/assets/initiatives/square-notebook.png">
                </figure>
              </article>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child">
                <figure class="image is-4by4">
                  <img src="@/assets/initiatives/square-presenting.png">
                </figure>
              </article>
              <article class="tile is-child notification is-light">
                <p class="title">¿Cómo lo hacemos?</p>
                <p class="subtitle">
                  Realizamos cursos anuales de programación en C++,
                  al mismo tiempo que generamos espacios seguros,
                  libre de estereotipos de género y creamos una comunidad
                  de niñas y mujeres con intereses en común.
                </p>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-primary">
              <p class="title">¿Cómo participar?</p>
              <p class="subtitle">
                El periodo de postulación para el curso anual de programación
                comienza en Marzo cada año y puedes escoger entre formato
                virtual o híbrido.
              </p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Curso Anual de Programación Competitiva</p>
              <p class="subtitle">
                En este curso aprenderás a programar en un lenguaje de programación
                que te permitirá dar instrucciones al computador para resolver
                interesantes problemas. Además desarrollarás habilidades socio-emocionales
                como el trabajo en equipo, la tolerancia a la frustración, resolución de
                problemas, entre otras.
              </p>
              <p class="subtitle">
                No necesitas tener conocimientos de programación para participar,
                basta con tu motivación y compromiso. Este curso también te entregará
                los contenidos básicos para participar en la Olimpiada Chilena de
                Informática que se realiza todos los años la primera semana de Octubre.
              </p>
              <p> El curso se compone de: </p>
              <ul>
                <li> 20 clases obligatorias los días sábado de 10 a 13 hrs.</li>
                <li> Actividades que deberás desarrollar en casa </li>
                <li> Ceremonia de Cierre en Octubre </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Banner from "~/components/Banner.vue";

export default {
  name: "Empodera",
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
