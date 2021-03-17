<template>
<center>
  <div class="container">
    <div class="cabecalho">
      <p class="informacao">05/03/2021</p>
      <h1 class="titulo">Principais Faixas Etárias dos casos de Covid-19 no ES</h1>
      <p class="texto">Cerca de 77% dos casos confimados de covid-19 no estado foram entre pessoas de 20 a 59 anos. Veja a representação gráfica!</p>
      <br>
      <p class="informacao" style="font-weight: 500">Curta e compartilhe!</p>
      <div class="share">
        <a class="redes-sociais" href="https://www.facebook.com/GeocovidES-108730517684301" target="_blank">
          <img width="30" height="30" src="https://image.flaticon.com/icons/svg/174/174848.svg" alt="Facebook">
        </a>
        <a class="redes-sociais" href="https://www.instagram.com/geocovid.es/?hl=pt-br" target="_blank">
          <img width="30" height="30" src="https://image.flaticon.com/icons/svg/174/174855.svg" alt="Instagram">
        </a>
        <a class="redes-sociais" href="https://api.whatsapp.com/send?text=Acompanhe as principais notícias do ES sobre covid-19 em nosso site: https://www.geocovides.com.br/news" target="_blank">
          <img width="30" height="30" src="https://image.flaticon.com/icons/svg/174/174879.svg" alt="Whatsapp">
        </a>
      </div>
        <br><br>
        <center>
          <img class="foto" src="https://veja.abril.com.br/wp-content/uploads/2020/04/gettyimages-1215609255.jpg" alt="Imagem de capa">
        </center>
      </div>
    <div class="corpo">
      <p class="texto">Os gráficos relatam as principais Faixas Etárias dos casos confirmados de Covid-19 no estado do Espírito Santo.<br><br>Veja abaixo:</p>
      <br>
      <center>
      <h2 class="titulo-02">CASOS ENTRE 20 E 59 ANOS:</h2>
      <img src="https://bn1304files.storage.live.com/y4mPY34fwSkTldl25ZYzJ0LO-c0DT_IfmCUqJy9oU_wLga4syNzaYw8pxpm8GxNQYgrLpCRxUiP4Rsaxsk8DY7Z2XhZOTlxEIjenXxQ8FqsMj7xwoneI7LeSkfI0_PLHaCip5HCvdLE-v8P3tom0oerw9o3Fnpyfd5cWaiila6fFQ0mjW35Epy_D5EJPS_Mn1Wi?width=1080&height=1080&cropmode=none" width="100%">
      <br>
      <h2 class="titulo-02">CASOS ENTRE TODAS AS FAIXAS ETÁRIAS:</h2>
      <img src="https://bn1304files.storage.live.com/y4musZwpNlBdq1wTtDoB05MMX5CqduAjKyHO9TasaFWtCep4E9yCuG0vtzD_K-oZfQi-OQkvFwJn7RUVA306T_JxXe_jx7_Y57rGv-5PFCZzgT8sy_QtgmWx7BcTFHgvdbxo0s50AwBQpeWfo6F2Mi5O3TmQllIlb9TUHYVrk8W2uHDbvdNVeC2MzzOXMfvDetC?width=1080&height=1080&cropmode=none" width="100%"/>
      </center>
      <br><br>
      <p class="texto">Os dados foram tirados do <a style="color: #181B34;" href="https://coronavirus.es.gov.br/painel-covid-19-es" target="_blank"><b style="color: #181B34;">Painel Covid-19 do Governo do Espírito Santo</b></a>.</p>
      <br><br>
      <h1 class="titulo-02">Sobre o Projeto GeoCovid ES</h1>
      <center>
        <img src="https://bn1304files.storage.live.com/y4mhbCCPBLrkq_ap8EOj76Lh9mL2K7cr20PHx9u2M0pqqnqhBdDaKT0OZHou329TmaDZwXiGhIHjrONAUOViOIu2qMd9irLUP0EC6Us_A5kJq60xgq3P5PlFhzBT-g1nUOu-rC-Il7l17lltr-hLNu85j6RUh8JOIfDfXKIpjoreEi2KLyKKZcmJP9FkaSRWFOn?width=479&height=278&cropmode=none" width="90%" />
      </center>
      <br>
      <p class="texto">
      O projeto GeoCovid ES teve início por meio da aprovação do edital 03/2020 da Fundação de Amparo à Pesquisa e Inovação do Espírito Santo - FAPES em meados do segundo semestre de 2020. O projeto visa subsidiar a formulação de soluções para o enfrentamento da pandemia causada pelo novo coronavírus (Covid-19), no estado do Espírito Santo, proposto mediante demanda induzida.
      <br><br>
      O trabalho é desenvolvido por uma equipe de bolsistas e voluntários multidisciplinares de caráter científico. Em nossa equipe, estão presentes alunos de graduação em geologia, sistemas de informação e ciência da computação. A equipe é chefiada pelo geólogo Reinaldo Baldotto Ribeiro Filho sob orientação da professora doutora Fabricia Benda de Oliveira.
      <br><br>
      Os dados do projeto GeoCovid ES são adquiridos da seguinte forma:<br>O <a class="links" target="_blank" href="https://coronavirus.es.gov.br/painel-covid-19-es">site Painel Covid ES</a> disponibiliza um arquivo no formato .csv para download no qual constam várias informações sobre cada caso. Nesse arquivo, as informações são organizadas por casos individuais. Em determinada hora do dia, um processo automático faz o download desse arquivo e separa três colunas para serem utilizadas, que são a <b style="color: #181B34;">data de diagnóstico</b>, (no caso de uma infecção, esse campo representa a data em que a pessoa recebeu o resultado de que era portadora do vírus), <b style="color: #181B34;">a classificação</b> (esse campo informa se o caso foi confirmado, suspeito ou descartado) e o <b style="color: #181B34;">município onde a pessoa reside.</b>
      <br><br>
      Com as colunas separadas são adicionados filtros para que apareçam somente casos confirmados e de pessoas residentes no Espírito Santo, então a quantidade de linhas é contada com base na data em questão e nos municípios para que se tenha a quantidade diária de casos no estado ou em determinado município. Além disso, é realizado um somatório para a obtenção da quantidade total de casos. Esses resultados são organizados em uma tabela na qual as linhas são compostas por cada município e as colunas por cada data. Para os gráficos de crescimento, uma tabela diferente é gerada, composta por três colunas, sendo <b style="color: #181B34;">data</b>, <b style="color: #181B34;">total de casos no dia</b> e <b style="color: #181B34;">total de casos até o dia</b>.
      <br><br>
      Os resultados após o processamento dos dados descritos acima são: <b style="color: #181B34;"><br><br>• Confecção de mapas diários de novos casos;<br><br>• Confecção de mapas com total de casos acumulados e densidade por 1000 habitantes;<br><br>• Geração de curvas de crescimento de notificações confirmadas no ES e nos municípios;<br><br>• Retrospectiva e análise dos números de casos positivos totais e diários do avanço da covid-19 no ano de 2020;<br><br>• Confecção de postagens informativas e curiosidades sobre o avanço da doença nas mídias digitais, além de outras atividades que emergirem durante a realização do projeto.</b>
      <br><br>
      A divulgação dos resultados são realizadas através de um <a class="links" target="_blank" href="https://www.geocovides.com.br/">site autoral</a>, por meio do endereço eletrônico: <a class="links" target="_blank" href="https://www.geocovides.com.br/">https://www.geocovides.com.br/</a>
      <br><br>
      Além de nosso site, os trabalhos podem ser contemplados por meio de nossas mídias digitais <a class="links" target="_blank" href="https://www.facebook.com/GeocovidES-108730517684301">Facebook</a> e <a class="links" target="_blank" href="https://www.instagram.com/geocovid.es/?hl=pt-br">Instagram</a>, através do perfil <a class="links" target="_blank" href="https://www.instagram.com/geocovid.es/?hl=pt-br">@geocovid.es</a>.
      <br><br><br>
      </p>
      <br>
      <div class="share" style="text-align: center">
        <p style="color: #181B34">Compartilhe com seus amigos e acesse as nossas redes sociais <br> para ficar ligado a cada conteúdo novo!</p>
        <a class="redes-sociais" href="https://www.facebook.com/GeocovidES-108730517684301" target="_blank">
            <img width="30" height="30" src="https://image.flaticon.com/icons/svg/174/174848.svg" alt="Facebook">
        </a>
        <a class="redes-sociais" href="https://www.instagram.com/geocovid.es/?hl=pt-br" target="_blank">
            <img width="30" height="30" src="https://image.flaticon.com/icons/svg/174/174855.svg" alt="Instagram">
        </a>
        <a class="redes-sociais" href="https://api.whatsapp.com/send?text=Acompanhe as principais notícias do ES sobre covid-19 em nosso site: https://www.geocovides.com.br/news" target="_blank">
          <img width="30" height="30" src="https://image.flaticon.com/icons/svg/174/174879.svg" alt="Whatsapp">
        </a>
      </div>
    </div> 
  </div>
</center>
</template>

<script>
</script>

<style>
.informacao{
  font-weight: 400;
}
.titulo, .titulo-02{
  color: #181B34;
}
.share{
  margin-top: -10px;
  font-weight: 500;
}
.redes-sociais{
  display: inline-block;
  margin: 0;
  padding-right: 5px;
}
.instagram-frame{
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #181B34;
  margin-top: 50px;
  margin-bottom: 50px;
}
.frame{
  width: 720px;
  max-height: 720px;
  border: .1px solid #181B34;
  border-radius: 10px;
  padding: 5px;
  margin-top: 10px;
}
.links{
  color: #181B34;
  font-weight: 600;
  text-decoration: none;
}
/**MOBILE PORTRAIT**/
@media (min-width: 320px) and (max-width: 720px){
  .frame{
    width: 100%;
    max-height: 575px;
  }
}
@media (min-width: 320px){
  .cabecalho{
    margin-top: 75px;
    text-align: left;
  }
  .titulo{
    margin-bottom: 50px;
  }
  .texto{
    font-size: 20px;
    margin-bottom: 50px;
    letter-spacing: 0.01rem;
  }
  .foto{
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .corpo{
    text-align: left;
  }
  .titulo{
    font-size: 40px;
    line-height: 2.8rem;
    letter-spacing: 0.02rem;
    margin-bottom: 50px;
  }
  .titulo-02{
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .foto{
    margin-top: 25px;
    margin-bottom: 25px;
    width:98%;
  }
}
  /**MOBILE LANDSCAPE**/
  @media (min-height: 320px) and (orientation: landscape){
  .cabecalho{
    width: 90%;
  }
  .corpo{
    width: 85%;
  }
  .titulo{
    font-size: 40px;
    line-height: 2.8rem;
    letter-spacing: 0.02rem;
    margin-bottom: 50px;
  }
  .foto{
    margin-top: 25px;
    margin-bottom: 25px;
    width:90%;
  }
  .frame{
    width: 100%;
    max-height: 720px;
  }
}
/**PC 720p**/
@media (min-width: 1024px) and (max-width: 1600px){
  .container {
    max-width: 900px !important;
  }
  .frame{
    width: 100%;
    max-height: 720px !important;
  }
}
/**PC 1080p**/
@media (min-width: 1920px){
  .cabecalho{
    width: 50%;
    margin-bottom: 50px;
    text-align: left;
  }
  .titulo{
    font-size: 58px;
    line-height: 3.8rem;
    letter-spacing: 0.02rem;
    margin-bottom: 50px;
    color: #181B34;
  }
  .texto{
    font-size: 20px;
    letter-spacing: 0.06rem;
    margin-bottom: 50px;
  }
  .compartilhar{
    padding: 5px;
  }
  .share{
    padding: 2px;
  }
  .corpo{
    width: 40%;
    text-align: left;
  }
  .foto{
    margin-top: 25px;
    margin-bottom: 25px;
    width:80%;
  }
  .titulo-02{
    margin-top: 25px;
    margin-bottom: 25px;
    color: #181B34;
  }
}
</style>