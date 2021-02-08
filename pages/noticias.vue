<template>
<center>
  <div class="blog">
    <Carrossel />
    <br><br>
    <div class="container">
      <div class="row">
      <!--CARD 01-->
        <div class="col">
          <div class="noticia">
            <a href="../noticias-site/retrospectiva-2020-casos-municipios-estado" target="" class="text-decoration-none">
              <v-card
                class="mx-auto"
                max-width="400"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://veja.abril.com.br/wp-content/uploads/2020/04/gettyimages-1215609255.jpg"
                >
                </v-img>
                <v-card-subtitle class="legenda_card">
                  02/02/2021
                </v-card-subtitle>
                <v-card-title class="titulo_card">Retrospestiva de 2020 dos casos de <br> covid-19 no Espírito Santo</v-card-title>
                <v-card-text class="text--primary">
                </v-card-text>
              </v-card>
            </a>
          </div>
        </div>
        <!--FIM CARD 01-->
        <!--CARD 02-->
        <div class="col">
          <div class="noticia">
            <a href="../noticias-site/mortes-no-es-08-02-2021" target="" class="text-decoration-none">
              <v-card
                class="mx-auto"
                max-width="400"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://s2.glbimg.com/ObW7kkhOorqEqyqVXSGzZOLGYY0=/0x0:1700x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/r/s/q3NLI6RbA57U5eBnGGzA/mortes-coronavirus.jpg"
                >
                </v-img>
                <v-card-subtitle class="legenda_card">
                  08/02/2021
                </v-card-subtitle>
                <v-card-title class="titulo_card">ES chega a 5.995 mortes e 302.854 casos confirmados de Covid-19</v-card-title>
                <v-card-text class="text--primary">
                </v-card-text>
              </v-card>
            </a>
          </div>
        </div>
        <!--FIM CARD 02-->
        <!--FIM DA LINHA-->
        </div>
    </div>
  </div>
</center>
</template>

<script>
export default {
  name: 'Blog',
}
</script>

<style>
/**TÍTULO DO CARROSSEL**/
#titulo{
  display: none;
}
.cards{
margin-top: 30px;
}
.titulo_card{
margin-bottom: -20px;
}
.legenda_card{
margin-bottom: -30px;
}
.blog{
margin-top: 20%;
}
@media (min-height: 320px) and (orientation: landscape){
  .blog{
    margin-top: 1%;
    max-width: 90%;
  }
}
@media (min-width: 1200px){
  .blog{
    margin-top: 3%;
    max-width: 90%;
    text-align: center;
  }
}
</style>
