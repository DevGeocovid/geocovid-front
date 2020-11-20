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
      A seguir são apresentados gráficos e mapas gerados pelo projeto
      disponíveis para visualização e download.
      Na visualização para os mapas, encontram-se as pastas relativas a cada
      mês, e nelas estão contidos os mapas de novos casos diagnosticados e de
      casos acumulados para cada dia do respectivo mês.
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
