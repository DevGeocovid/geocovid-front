<template>
  <div class="container-fluid">
    <v-carousel class="carrossel">
      <a target="blank" style="text-decoration: none;" href="/news">
        <v-carousel-item
          target="_blank"
          v-for="(slide, i) in slides"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        <v-img
          height="100%"
          src="https://bn1304files.storage.live.com/y4msLbTAx_Kl9KtXDT2EkixqNbUtlWY1veU5Vy773q080HeS6ZZ3HVKro19IFXPbNhk2jTkcYAE9I1JVx78AnQWKCVLRG09dbBXZkozJV3YE98w4fDlyCDlQZMNcpZ-9GsUOh_YCVfOanDPf0dcx5VsWjvWQGtJkFpawof_SGN7lYfm6jEbydDMCb5RC9Yp4U_O?width=1300&height=600&cropmode=none"
        >
        <!--Legenda-->
        <div class="display-3">
          <h1 class="display">{{ slide }}</h1>
        </div>
        </v-img>
        </v-carousel-item>
      </a>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://bn1304files.storage.live.com/y4msLbTAx_Kl9KtXDT2EkixqNbUtlWY1veU5Vy773q080HeS6ZZ3HVKro19IFXPbNhk2jTkcYAE9I1JVx78AnQWKCVLRG09dbBXZkozJV3YE98w4fDlyCDlQZMNcpZ-9GsUOh_YCVfOanDPf0dcx5VsWjvWQGtJkFpawof_SGN7lYfm6jEbydDMCb5RC9Yp4U_O?width=1300&height=600&cropmode=none',
        },
      ],
      slides: [
        'Timelapse: Casos de Covid-19 no Espírito Santo em Abril de 2021',
        'Comprovantes para grávidas e pessoas com comorbidade se vacinarem',
        'Covid-19: profissional que trocar segunda dose no ES será punido',
        'Mapa de Risco no ES: confira onde pode ou não ter aula presencial',
        'Brasil lidera mortes diárias por Covid-19 no mundo em março',
        'Retrospestiva de 2020 dos casos de Covid-19 no ES',
      ],
    }
  },
}
</script>

<style>
#titulo{
  margin-bottom: 38px;
  width: 200px;
  text-align: center;
}
.display{
  font-size: 50px;
  font-weight: 500;
  opacity: 1;
  text-align: center;
  margin: 200px;
  line-height: 60px !important;
  transition: background-color .3s ease-in-out;
  color: white;
  padding: 0;
  text-transform: uppercase;
}
/**MOBILE PORTRAIT**/
@media (min-width: 320px) {
  .carrossel{
    height: 430px !important;
  }
  .display{
    font-size: 35px !important;
    line-height: 45px !important;
    padding: 20px;
    margin-top: 70px !important;
    margin: 0;
  }
}
/**MOBILE LANDSCAPE**/
@media (min-height: 321px) and (min-width: 320px) and (orientation: landscape){
  .carrossel{
    height: 300px !important;
  }
  .display{
    font-size: 38px !important;
    padding: 60px;
    margin-top: 0px !important;
  }
}
@media (min-width: 720px) and (min-height: 800px){
  .carrossel{
    height: 300px !important;
  }
  .display{
    font-size: 30px !important;
    font-weight: 500;
    line-height: 50px;
    margin-top: 35px !important;
    margin: 20px;
  }
}
/**PC 720p**/
@media (min-width: 1280px){
  .display{
    font-size: 42px !important;
    padding: 50px;
    margin-top: 40px !important;
  }
}
/**PC 1080p**/
@media (min-width: 1920px){
  .carrossel{
    height: 400px !important;
  }
  .display{
    font-size: 50px !important;
    padding: 0;
    margin-top: 130px !important;
    margin: 200px ;
    line-height: 70px !important;
  }
}
</style>
