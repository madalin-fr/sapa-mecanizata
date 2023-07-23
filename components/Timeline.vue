<template>
    <div class="timeline-main">
        <vue-timeline-update
            :date="new Date('2016-06-26')"
            title="Primer curso de programación competitiva"
            description="Niñas Pro nace en el año 2016 como una agrupación de mujeres estudiantes
            de ingeniería que, al ser testigos de la poca participación femenina en sus salas de
            clases, comenzaron a realizar un curso gratuito de programación competitiva para niñas
            y con ello promover vocaciones tecnológicas en niñas y adolescentes."
            category="Evento Pro"
            icon="code"
            color="green"
        />

        <!-- Another update -->
        <vue-timeline-update
            :date="new Date('2019-03-15')"
            title="Creamos la Corporación"
            description="En el año 2019 formalizamos Niñas Pro como una asociación sin fines de lucro,
            empezamos a idear una estructura organizacional e hicimos un Piloto con un equipo de
            voluntarias de la Universidad de los Andes para la creación de sedes y poder expandir
            nuestro trabajo."
            category="Hito"
            icon="code"
            color="red"
        />

        <vue-timeline-update
            :date="new Date('2019-04-1')"
            title="Piloto Sede Las Condes"
            description="Piloto con un equipo de voluntarias de la Universidad de los Andes para la 
            creación de sedes y poder expandir nuestro trabajo."
            category="¡Nueva Sede!"
            icon="code"
            color="turquoise"
        />

        <vue-timeline-update
            :date="new Date('2020-04-1')"
            title="Nuevas Sedes Coquimbo y Concepción"
            description="En el 2020 se crearon nuevas sedes en Coquimbo y Concepción y todos los
            grupos de trabajo realizamos el curso anual de programación competitiva en formato
            virtual debido a la pandemia."
            category="¡Nueva Sede!"
            icon="code"
            color="turquoise"
        />

        <vue-timeline-update
            :date="new Date('2020-06-1')"
            title="Primera Versión Arduino Quest"
            description="Implementamos por primera vez este curso virtual de electrónica con
            arduino. Consistió en 4 semanas de actividades y trabajo personalizado con mentoras
            y las niñas que completaron el plan de trabajo recibieron un kit en sus casas para
            programar sus proyectos personales."
            category="Evento PRO"
            icon="code"
            color="green"
        />

        <vue-timeline-update
            :date="new Date('2020-10-10')"
            title="Primera Versión Semana Ada Lovelace"
            description="En el 2020 realizamos por primera vez el evento Semana de Ada Lovelace, 
            en el que niñas y mujeres pudieron conocer la historia de Mujeres Pro y participar
            en talleres de introducción a la programación y la electrónica."
            category="Evento PRO"
            icon="code"
            color="green"
        />

        <vue-timeline-update
            :date="new Date('2020-11-1')"
            title="Curso Intensivo de Entrenamiento para la OCI"
            description="En el 2020 hicimos un curso de programación específico para reforzar los contenidos
            avanzados que se evalúan en las diferentes fases de la Olimpiada Chilena de Informática. Dos de 
            las tres niñas que clasificaron en la última fase ¡participaron en los cursos de Niñas Pro!"
            category="Evento PRO"
            icon="code"
            color="green"
        />

        <vue-timeline-update
            :date="new Date('2021-03-15')"
            title="¡Cumplimos 2 años como Corporación Sin Fines de Lucro!"
            description="Hicimos las votaciones de renovación o elección de directorio, celebramos
            que somos más de 80 voluntaries y que hemos llegado a más de 1900 niñas y adolescentes."
            category="Hito"
            icon="code"
            color="red"
            is-last
        />
    </div>
</template>

<script>

export default {
    name: "Timeline"
}
</script>

<style lang="scss" scoped>
[class^="gb-"]:not(.gb-base-icon) {
  font-family: "Roboto", sans-serif !important;
}
</style>