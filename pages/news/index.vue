<template>
  <div class="blog">
    <Carrossel id="carrossel" />
    <br /><br />
    <div class="container">
      <div class="row">
        <!--CARD 03-->
        <div class="col">
          <div class="noticia">
            <a
              href="/news/dois-pacientes-de-manaus-curados-de-covid-no-es"
              target=""
              class="text-decoration-none"
            >
              <v-card class="mx-auto" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://midias.agazeta.com.br/2021/01/22/chegadas-dos-pacientes-com-covid-19-vindos-de-manaus-404792-article.jpg"
                >
                </v-img>
                <v-card-subtitle class="legenda_card">
                  16/02/2021
                </v-card-subtitle>
                <v-card-title class="titulo_card"
                  >Dois pacientes de Manaus curados de Covid-19 no
                  ES</v-card-title
                >
                <v-card-text class="text--primary"> </v-card-text>
              </v-card>
            </a>
          </div>
        </div>
        <!--FIM CARD 03-->
        <!--CARD 02-->
        <div class="col">
          <div class="noticia">
            <a
              href="/news/mortes-covid-es-08-02-2021"
              target=""
              class="text-decoration-none"
            >
              <v-card class="mx-auto" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://s2.glbimg.com/ObW7kkhOorqEqyqVXSGzZOLGYY0=/0x0:1700x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/r/s/q3NLI6RbA57U5eBnGGzA/mortes-coronavirus.jpg"
                >
                </v-img>
                <v-card-subtitle class="legenda_card">
                  08/02/2021
                </v-card-subtitle>
                <v-card-title class="titulo_card"
                  >ES chega a quase 6 mil mortes e 300 mil casos confirmados de
                  Covid-19</v-card-title
                >
                <v-card-text class="text--primary"> </v-card-text>
              </v-card>
            </a>
          </div>
        </div>
        <!--FIM CARD 02-->
        <!--CARD 01-->
        <div class="col">
          <div class="noticia">
            <a
              href="/news/retrospectiva-2020-casos-municipios-estado"
              target=""
              class="text-decoration-none"
            >
              <v-card class="mx-auto" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://veja.abril.com.br/wp-content/uploads/2020/04/gettyimages-1215609255.jpg"
                >
                </v-img>
                <v-card-subtitle class="legenda_card">
                  02/02/2021
                </v-card-subtitle>
                <v-card-title class="titulo_card"
                  >Retrospestiva de 2020 dos casos de covid-19 no Espírito
                  Santo</v-card-title
                >
                <v-card-text class="text--primary"> </v-card-text>
              </v-card>
            </a>
          </div>
        </div>
        <!--FIM CARD 01-->
        <!--FIM DA LINHA-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
}
</script>

<style>
/**TÍTULO DO CARROSSEL**/
#titulo {
  display: none;
}
.cards {
  margin-top: 30px;
}
.titulo_card {
  margin-bottom: -20px;
  text-align: center;
  word-break: normal !important;
}
.legenda_card {
  margin-bottom: -30px;
}
.blog {
  margin-top: 20%;
  margin-left: auto;
  margin-right: auto;
}
@media (min-height: 320px) and (orientation: landscape) {
  .blog {
    margin-top: 1%;
    max-width: 90%;
  }
}
@media (min-width: 1200px) {
  .blog {
    margin-top: 3%;
    max-width: 90%;
    text-align: center;
  }
}
</style>
