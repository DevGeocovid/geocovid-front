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
      disponíveis para visualização e download. Na visualização para os mapas,
      encontram-se as pastas relativas a cada mês, e nelas estão contidos os
      mapas de novos casos diagnosticados e de casos acumulados para cada dia do
      respectivo mês.
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
      >ARQUIVOS DOS MAPAS DE CASOS ACUMULADOS</span
    >
    <v-card class="mt-4" width="100%" height="800px">
      <PictureMapView />
    </v-card>
    <br />
    <div class="mt-4 d-flex justify-center align-center">
      <span>Link p/ download shape-file</span>

      <a
        style="text-decoration: none;"
        target="_blank"
        href="https://drive.google.com/drive/folders/1szOZkvBJclkUhIhj1XCAo5D5X6NqPKC6?usp=sharing"
      >
        <v-btn small class="ml-2" color="primary" rounded elevation="0">
          Download <v-icon dense>mdi-arrow-down</v-icon></v-btn
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Generated',
  data: () => ({}),
}
</script>

<style></style>
