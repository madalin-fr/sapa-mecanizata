<template>
  <div id="projects">
    <Banner :type="type" title="Proyectos" button="Únete hoy" link="/volunteer/"/>
    <PhotoBanner :type="type" title="Proyecto Inspira" image="inspired.jpg"/>
    <div class="container">
      <div class="description">
        <p class="title is-primary">
          Charlas de Mujeres en
          <b-tooltip
            label="Acrónimo en Inglés para Science, Technology, Engineering, Arts
            and Mathematics"
            dashed multilined>
            STEAM
          </b-tooltip>
        </p>
        Llevamos a mujeres que se desempeñan áreas
        <b-tooltip
          label="Acrónimo en Inglés para Science, Technology, Engineering, Arts
          and Mathematics"
          dashed multilined>
            STEAM
        </b-tooltip>
        y que utilizan la programación de alguna forma en su día a día. El objetivo
        es inspirar a las niñas al presentarles profesiones que no son tan
        visibles o que están comunmente masculinizadas.
      </div>
    </div>
    <PhotoBanner :type="type" title="Proyecto Incentiva" image="django-girls.jpg"/>
    <div class="container">
      <div class="description">
        <p class="title is-primary">
          Talleres Introductorios de Programación o Electrónica
        </p>
        Talleres de 2 a 6 horas de duración en los que se realizan actividades
        prácticas de programación, con el objetivo de acercar a las niñas a la tecnología
        e incentivarlas a continuar aprendiendo sobre estas materias.
      </div>
    </div>
    <PhotoBanner :type="type" title="Proyecto Empodera" image="programming.jpg"/>
    <div class="container">
      <div class="description">
        <p class="title is-primary">
          Programación Competitiva para Niñas
        </p>
        Curso teorico-práctico de programación en
        <b-tooltip
          label="Lenguaje de programación de alto rendimiento y muy usado en la actualidad.
          Se utiliza en programación competitiva, en programación de arduinos, para
          el desarrollo de videojuegos, entre otros."
          dashed multilined>
          C++
        </b-tooltip>
        en donde las niñas desarrollan
        habilidades del pensamiento computacional y de resolución de problemas.
        Este curso de 18 sesiones también busca potenciar habilidades socioemocionales
        como la autoconfianza, la tolerancia a la frustración y la colaboración.
      </div>
    </div>
    <PhotoBanner :type="type" title="Proyecto Potencia" image="mentoria.jpg"/>
    <div class="container">
      <div class="description">
        <p class="title is-primary">
          "Ellas Programan"
        </p>
        Proyecto de identificación de talentos y fortalecimiento académico en
        programación competitiva. Este consiste en 10 sesiones teórico-prácticas
        con contenidos de nivel intermedio o avanzado, acompañamiento en
        instancias de entrenamiento intensivas y coaching para competencias
        durante el año.
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "~/components/Banner.vue";
import PhotoBanner from "~/components/PhotoBanner.vue";

export default {
  name: "Projects",
  components: {
    Banner,
    PhotoBanner
  },
  data() {
    const type = 'is-warning';
    return {
      type
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';


.description {
  min-height: 500px;
  padding: 150px 0px;
  color: black;
  font-size: 2rem;
  font-weight: 600;

  .title {
    color: black;
    font-size: 3rem;
    padding: 20px 0px;
  }
}

@media only screen and (max-device-width: 768px) {
  .description {
    min-height: 100px;
    padding: 50px 0px;
    font-size: 1rem;
    font-weight: 400;

    .title {
      font-size: 2rem;
      padding: 10px 0px;
    }
  }
}

</style>
