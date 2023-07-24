<template>
    <div id="conduct-code">
        <Banner :type="this.type" :title="`${$t('pages.conductcode')}`" />
        <div class="container">
            <div class="formal-text">
            <p>
            En Niñas Pro valoramos la seguridad e integridad de todas las personas
            participantes y buscamos tener una comunidad inclusiva. Es por lo anterior
            que no toleraremos el acoso por parte de integrantes del equipo de Niñas Pro
            o participantes de cursos y eventos organizados o asociados a Niñas Pro,
            así como tampoco lo toleraremos en las actividades en línea.
            </p>

            <p>
            Este Código de Conducta fue creado para definir claramente lo que se considera
            como una comunidad libre de acoso y discriminación, por lo que se espera que
            todas las personas que participan en actividades de Niñas Pro cumplan con
            nuestro Código de conducta.
            </p>

            <p>
            No tenemos tolerancia para ninguna forma de acoso y esperamos que la totalidad
            de participantes actúen profesionalmente y sigan las normas sociales de la
            comunidad.
            </p>

            <p>
            Con el fin de fomentar un entorno abierto, como Niñas Pro nos comprometemos a
            hacer que la participación en nuestro proyecto y nuestra comunidad sea una
            experiencia sin hostigamientos para todas y todos, independientemente de la
            edad, el tipo de cuerpo, la discapacidad, el origen étnico, la identidad y
            expresión de género, el nivel de experiencia, la nacionalidad, la apariencia
            personal, raza, religión o identidad y orientación sexual.
            </p>

            <h2>Formas de acoso y discriminación: </h2>

            <p>
            Formas de acoso y discriminación incluyen lenguaje o imágenes de carácter sexual,
            bromas sexistas o racistas o que impliquen cualquier discriminación negativa,
            actos que insultan o menosprecian a otras asistentes.
            Estas formas no serán aceptadas en ninguna actividad relacionadas con Niñas Pro.
            Otras formas de acoso o discriminación incluyen, pero no están limitadas por:
            comentarios ofensivos, ya sea verbales o en línea, intimidación, persecución y contacto
            físico inapropiado.
            </p>

            <p>
            Si se le solicita a algún o alguna participante detener alguna acción de acoso,
            se espera que se detenga inmediatamente y la o el participante podrá ser
            expulsado de la actividad por miembros de Niñas Pro.
            </p>

            <p>
            En el desafortunado caso de que algún participante de la comunidad viole el
            Código de conducta, esta podrá ser informada a Niñas Pro al correo
            contacto@ninaspro.cl, por mensaje directo al Instagram @ninas_pro o hablando
            personalmente con cualquier integrante del directorio de Niñas Pro.
            </p>

            <h2>En caso de denuncia: </h2>

            <p>
            Todos los informes serán revisados e investigados, y resultará en una
            respuesta que se considere necesaria y apropiada a las circunstancias.
            Un miembro del equipo se acercará a cualquier persona identificada como
            participante en una conducta de acoso y se le pedirá que cese cualquier
            actividad inapropiada o que se desconecte de nuestra comunidad de inmediato.
            </p>

            <p>
            Detalles adicionales de políticas específicas a las medidas de aplicación
            pueden ser publicados por separado. Nos reservamos el derecho y la
            responsabilidad de eliminar comentarios u otras contribuciones que no
            estén alineadas con este Código de Conducta, o de prohibir temporal o
            permanentemente a cualquier miembro por otras conductas que se consideren
            inapropiadas, amenazantes, ofensivas o dañinas.
            </p>

            <p>
            El respeto es esencial para todos y todas, por eso si alguna persona se
            siente incómoda o sospecha del comportamiento de alguien, se le solicita
            acercarse a uno de los organizadores y miembros de equipo, manejaremos su
            reclamo con confidencialidad y cuidado. La “caza de brujas” y echarle la
            culpa a una persona por las acciones de alguien más también es considerado
            como una infracción.
            </p>

            <h2>Atribución:</h2>

            <p>Nuestro Código de conducta fue inspirado por Techqueria y Women Who Code</p>

            </div>
        </div>
    </div>
</template>

<script>
import Banner from "~/components/Banner.vue";


export default {
  name: "Alliances",
  components: {
      Banner
  },
  props: {
    type: {
      type: String,
      default: 'is-primary'
    }
  },
  mounted() {
    this.$store.commit('setType', this.type);
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.formal-text {

    padding-top: 2rem;
    padding-bottom: 2rem;

    p {
        font-size: 14pt;
        margin-top: 1rem;
    }

    h2 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 16pt;
        font-weight: 700;
        color: $primary;
    }
}

</style>
