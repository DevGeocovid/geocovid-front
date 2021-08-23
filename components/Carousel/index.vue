<template>
  <div class="container-fluid">
    <v-carousel class="carrossel">
      <a style="text-decoration: none" href="/news">
        <v-carousel-item
          v-for="(title, i) in titles"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-img height="100%" :src="image">
            <!--Legenda-->
            <div class="display-3">
              <h1 class="display">{{ title }}</h1>
            </div>
          </v-img>
        </v-carousel-item>
      </a>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      image:
        'https://bn1304files.storage.live.com/y4msLbTAx_Kl9KtXDT2EkixqNbUtlWY1veU5Vy773q080HeS6ZZ3HVKro19IFXPbNhk2jTkcYAE9I1JVx78AnQWKCVLRG09dbBXZkozJV3YE98w4fDlyCDlQZMNcpZ-9GsUOh_YCVfOanDPf0dcx5VsWjvWQGtJkFpawof_SGN7lYfm6jEbydDMCb5RC9Yp4U_O?width=1300&height=600&cropmode=none',

      titles: [
        'Veja todos os mapas gerados pelo Projeto GeoCovid ES',
        'Criminosos invadem unidade de saúde e roubam testes de Covid-19 no ES',
        'Covid: Como o ES voltou a ter só duas cidades em risco moderado',
        '934 pessoas usaram documentos de mortos em vacinação no ES',
        'Brasil lidera mortes diárias por Covid-19 no mundo em março',
        'Retrospestiva de 2020 dos casos de Covid-19 no ES',
      ],
    }
  },
}
</script>

<style>
.display {
  font-size: 50px;
  font-weight: 500;
  opacity: 1;
  text-align: center;
  margin: 200px;
  line-height: 60px !important;
  transition: background-color 0.3s ease-in-out;
  color: white;
  padding: 0;
  text-transform: uppercase;
}
/**MOBILE PORTRAIT**/
@media (min-width: 320px) {
  .carrossel {
    height: 430px !important;
  }
  .display {
    font-size: 35px !important;
    line-height: 45px !important;
    padding: 20px;
    margin-top: 70px !important;
    margin: 0;
  }
}
/**MOBILE LANDSCAPE**/
@media (min-height: 321px) and (min-width: 320px) and (orientation: landscape) {
  .carrossel {
    height: 300px !important;
  }
  .display {
    font-size: 38px !important;
    padding: 60px;
    margin-top: 0px !important;
  }
}
@media (min-width: 720px) and (min-height: 800px) {
  .carrossel {
    height: 300px !important;
  }
  .display {
    font-size: 30px !important;
    font-weight: 500;
    line-height: 50px;
    margin-top: 35px !important;
    margin: 20px;
  }
}
/**PC 720p**/
@media (min-width: 1280px) {
  .display {
    font-size: 42px !important;
    padding: 50px;
    margin-top: 40px !important;
  }
}
/**PC 1080p**/
@media (min-width: 1920px) {
  .carrossel {
    height: 400px !important;
  }
  .display {
    font-size: 50px !important;
    padding: 0;
    margin-top: 130px !important;
    margin: 200px;
    line-height: 70px !important;
  }
}
</style>
