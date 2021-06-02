<template>
  <div class="blog">
    <v-img class="carrossel" :src="img">
      <div class="display-3">
        <h1 class="display">
          Veja as principais notícias <br />sobre covid-19 no Espírito Santo
        </h1>
      </div>
    </v-img>
    <div id="titulo" class="mx-auto">
      <div
        class="d-flex justify-center primary rounded-lg px-12 mt-4 py-1"
        style="position: "
      >
        <span class="title white--text">NOTÍCIAS</span>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col" v-bind:key="news.id" v-for="news in allNews">
          <CardNews
            :title="news.title"
            :date="news.date"
            :source="news.source"
            :href="news.href"
            :target="news.target"
            :img="news.img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsPage',
  data() {
    return {
      img:
        'https://bn1304files.storage.live.com/y4msLbTAx_Kl9KtXDT2EkixqNbUtlWY1veU5Vy773q080HeS6ZZ3HVKro19IFXPbNhk2jTkcYAE9I1JVx78AnQWKCVLRG09dbBXZkozJV3YE98w4fDlyCDlQZMNcpZ-9GsUOh_YCVfOanDPf0dcx5VsWjvWQGtJkFpawof_SGN7lYfm6jEbydDMCb5RC9Yp4U_O?width=1300&height=600&cropmode=none',
      allNews: [
        {
          id: 1,
          href: '/news/retrospectiva-2020-casos-municipios-estado',
          target: '',
          img:
            'https://veja.abril.com.br/wp-content/uploads/2020/04/gettyimages-1215609255.jpg',
          title:
            'Retrospestiva de 2020 dos casos de covid-19 no Espírito Santo',
          date: '02/02/2021',
          source: 'GeoCovid ES',
        },
        {
          id: 2,
          href: '/news/faixa-etaria-casos-confirmados-covid-es',
          target: '',
          img:
            'https://veja.abril.com.br/wp-content/uploads/2020/04/gettyimages-1215609255.jpg',
          title: 'Casos confirmados',
          date: '02/02/2021',
          source: 'GeoCovid ES',
        },
      ],
    }
  },
  computed: {
    //allNews
  },
}
</script>

<style>
/**TÍTULO DO CARROSSEL**/
#titulo {
  margin-bottom: 38px;
  width: 200px;
  text-align: center;
}
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
.cards {
  margin-top: 30px;
}
.blog {
  margin-top: 20%;
  margin-left: auto;
  margin-right: auto;
}
/**CARROSSEL E TÍTULO**/
@media (min-width: 320px) and (max-width: 799px) {
  .carrossel {
    display: none;
  }
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
/**MOBILE PORTRAIT**/
@media (min-width: 320px) {
  .carrossel {
    height: 400px !important;
  }
  .display {
    font-size: 35px !important;
    line-height: 45px !important;
    padding: 50px;
    margin-top: 25px !important;
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
@media (min-width: 720px) and (max-height: 800px) {
  .carrossel {
    height: 300px !important;
  }
  .display {
    font-size: 30px !important;
    font-weight: 500;
    line-height: 50px;
    margin-top: 30px !important;
    margin: 20px;
  }
}
@media (min-width: 800px) {
  #titulo {
    display: none;
  }
  .carrossel {
    margin-bottom: 50px;
  }
}
/**PC 720p**/
@media (min-width: 1280px) {
  .display {
    font-size: 42px !important;
    padding: 50px;
    margin-top: 50px !important;
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