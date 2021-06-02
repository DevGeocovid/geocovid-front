<template>
  <div class="noticia">
    <a :href="href" :target="target" class="text-decoration-none">
      <v-card class="mx-auto" max-width="400">
        <v-img class="white--text align-end" height="200px" :src="img"> </v-img>
        <v-card-subtitle class="legenda_card">
          {{ date }} - <strong>{{ source }}</strong>
        </v-card-subtitle>
        <v-card-title class="titulo_card">{{ title }}</v-card-title>
        <v-card-text class="text--primary"> </v-card-text>
      </v-card>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CardNews',
  props: {
    href: String,
    target: String,
    img: String,
    title: String,
    date: String,
    source: String,
  },
}
</script>

<style>
.titulo_card {
  margin-bottom: -20px;
  text-align: center;
  word-break: normal !important;
}
.legenda_card {
  margin-bottom: -30px;
  text-align: center !important;
}
</style>