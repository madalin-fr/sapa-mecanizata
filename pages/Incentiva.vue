<template>
  <div id="incentiva">
    <Banner :type="type" :title="`${$t('incentive.banner')}`"/>

    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child notification is-success spaced">
                <p class="title">Objetivo</p>
                <p class="subtitle">
                  Visibilizar a mujeres que se desempeñan en áreas científicas, ingeniería,
                  tecnología o matemáticas para crear modelos de rol.
                </p>
                <p class="subtitle">
                  Demostrar a niñas y adolescentes que ellas pueden aprender sobre áreas STEM
                  y que puede ser muy entretenido. Motivarlas a que después de esta
                  primera experiencia sigan aprendiendo.
                </p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info spaced">
                <div class="content">
                  <p class="title">¿Cómo lo hacemos?</p>
                  <p class="subtitle">
                    Realizamos charlas inspiradoras y talleres introductorios de 2 a 4 horas de
                    programación o electrónica.
                  </p>
                  <p class="subtitle">
                    Si eres una organización o colegio y te gustaría que hicieramos una charla o
                    taller solicita una cotización a contacto@ninaspro.cl
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child">
              <figure class="image is-4by4">
                <img src="@/assets/initiatives/portrait-charlas.png">
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent is-vertical is-4">
          <article class="tile is-child">
            <figure class="image is-4by4">
              <img src="@/assets/initiatives/square-inspired.png">
            </figure>
          </article>
          <article class="tile is-child notification is-success">
            <p class="title">Django Girls 2020</p>
            <p class="subtitle">
              En Enero del 2020 organizamos Django Girls y en una jornada
              de 6 horas, mujeres de diferentes edades crearon su primera
              aplicación web. Para este evento contamos con el apoyo de
              Entel Ocean, Microsoft, Equifax, Cornershop, FCFM y el IMFD.
            </p>
            <b-button tag="a" class="is-success" rounded inverted href="https://djangogirls.org/santiago/" target="_blank">
            Ver página del evento
            </b-button>
          </article>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent is-5">
          <div class="tile is-child notification is-success">
            <p class="title">Summer Python</p>
            <p class="subtitle">
              En Enero del 2021 realizamos un taller virtual de 6 horas de Python con el apoyo de Fintual.
              Participaron 70 niñas y jóvenes de entre 13 y 17 años.
            </p>
            <p class="subtitle">
              Pedro Pineda, CEO de Fintual, escribió una columna de la experiencia, te invitamos a leerla.
            </p>
            <div class="buttons">
            <b-button tag="a" class="is-success" rounded inverted href="https://www.instagram.com/p/CMf2a2CjoGI/" target="_blank">
            Leer en Instagram
            </b-button>
            <b-button tag="a" class="is-success" rounded inverted href="https://www.litoralpress.cl/sitio/Prensa_Texto?LPKey=/ra73lsfx.S8ly.C.G.Dn.P.T.A.Cvf.W.Bi5.N.C.Eq.T.M.Y9.Mzpgt.Z2.Y.%C3%96" target="_blank">
            Leer en Litoralpress
            </b-button>
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child">
           <figure class="image is-4by4">
              <img src="@/assets/initiatives/portrait-django.png">
            </figure>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Banner from "~/components/Banner.vue";

export default {
  name: "Incentiva",
  components: {
    Banner,
  },
  props: {
    type: {
      type: String,
      default: 'is-danger'
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
