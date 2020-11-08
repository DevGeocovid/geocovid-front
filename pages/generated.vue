<template>
  <div
    class="mt-6 px-4 fill-height"
    :style="$vuetify.breakpoint.xs ? 'padding-top:120px' : ''"
  >
    <span class="display-3 font-weight-medium color-blue">
      Estes são dados <br />
      gerados pelo projeto
    </span>
    <br />
    <br />
    <p class="body-2 text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolore impedit
      mollitia, itaque sapiente facilis ut, odio ducimus, veniam provident
      deserunt alias aspernatur. Suscipit, et laborum aut provident saepe vero.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsam sunt
      sed vero eum beatae eos ad assumenda, sapiente, praesentium delectus
      inventore aperiam perspiciatis odit quaerat enim et adipisci voluptate!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsam sunt
      sed vero eum beatae eos ad assumenda, sapiente, praesentium delectus
      inventore aperiam perspiciatis odit quaerat enim et adipisci voluptate!
    </p>
    <br />
    <br />

    <span
      class="title font-weight-medium color-blue subtitle-main d-flex justify-center"
      >NOVOS CASOS EM TIME LAPSE</span
    >
    <v-card
      class="mt-4"
      width="100%"
      :height="!$vuetify.breakpoint.xs ? '800px' : '200px'"
    >
      <CasesTimeLapse />
    </v-card>
     <br />
    <span
      class="title font-weight-medium color-blue subtitle-main d-flex justify-center mt-12"
      >MAPAS DE CASOS ACOMULADOS</span
    >
    <v-card class="mt-4" width="100%" height="800px">
      <PictureMapView />
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Generated',
  data: () => ({}),
}
</script>

<style></style>
