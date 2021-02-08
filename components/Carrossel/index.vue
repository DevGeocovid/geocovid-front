<template>
  <div class="container-fluid">
    <v-carousel cycle class="carrossel">
      <a target="blank" style="text-decoration: none;" href="/noticias">
        <v-carousel-item
          target="_blank"
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        <!--Legenda-->
        <div class="display-3">
          <h1 class="display">Veja as principais notícias <br>sobre covid-19 no Espírito Santo</h1>
        </div>
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
  margin: 0;
  line-height: 70px;
  transition: background-color .3s ease-in-out;
  color: white;
  padding: 0;
  text-transform: uppercase;
}
/**MOBILE PORTRAIT**/
@media (min-width: 320px) {
  .carrossel{
    height: 400px !important;
  }
  .display{
    font-size: 35px !important;
    line-height: 50px;
    padding: 50px;
    margin-top: 0px;
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
    margin-top: 0px;
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
    margin-top: 30px;
  }
}
/**PC 720p**/
@media (min-width: 1280px){
  .display{
    font-size: 42px !important;
    padding: 50px;
    margin-top: 50px;
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
    margin-top: 130px;
  }
}
</style>