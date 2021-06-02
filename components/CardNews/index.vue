<template>
  <div class="noticia">
    <a :href="href" :target="target" class="text-decoration-none">
      <v-card class="mx-auto" max-width="400">
        <v-img class="white--text align-end" height="200px" :src="img"> </v-img>
        <v-card-subtitle class="legenda_card">
          {{ subtitle.date }} - <strong>{{ subtitle.source }}</strong>
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

  data() {
    return {
      href: '/news/retrospectiva-2020-casos-municipios-estado',
      target: '',
      img:
        'https://veja.abril.com.br/wp-content/uploads/2020/04/gettyimages-1215609255.jpg',
      title: 'Retrospestiva de 2020 dos casos de covid-19 no Espírito Santo',
      subtitle: {
        date: '02/02/2021',
        source: 'GeoCovid ES',
      },
    }
  },
}
</script>
