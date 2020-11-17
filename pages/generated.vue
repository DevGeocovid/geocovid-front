<template>
  <div
    class="mt-6 px-4 fill-height"
    :style="$vuetify.breakpoint.xs ? 'padding-top:120px' : ''"
  >
    <span class="display-3 font-weight-medium color-blue">
      Dados gerados pelo projeto
    </span>
    <br />
    <br />
    
    <!-- FIX-ME: TEXTO TEMPORÁRIO, APENAS PARA REMOVER O LOREM IPSUM DO SITE PRINCIPAL -->
    <!-- FIX-ME: A FONTE DO TEXTO ESTÁ BEM PEQUENA-->
    <!-- FIX-ME: ADICIONAR CARD PARA OS MAPAS DE VULNERABILIDADE -->
    <p class="body-2 text-justify">
      A seguir são apresentados gráficos e mapas gerados pelo projeto disponíveis para visualização e download.
    </p>
    <p class="body-2 text-justify">
      Na visualização para os mapas, encontran-se as pastas relativas a cada mês, e nelas estão contidas os mapas 
      de novos casos diagnosticados e de casos acumulados para cada dia do respectivo mês.
    </p>
    <br />
    <br />

    <span
      class="title font-weight-medium color-blue subtitle-main d-flex justify-center"
      >GRÁFICO COM A EVOLUÇÃO DO NÚMERO DE CASOS DIAGNOSTICADOS</span
    >
    <v-card
      class="mt-4"
      width="100%"
      :height="!$vuetify.breakpoint.xs ? '800px' : '200px'"
    >
      <CardCasesEvolution />
    </v-card>
     <br />
    <span
      class="title font-weight-medium color-blue subtitle-main d-flex justify-center mt-12"
      >MAPAS DE CASOS DISPONÍVEIS PARA DOWNLOAD</span
    >
    <v-card class="mt-4" width="100%" height="800px">
      <CardMapsFiles />
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
