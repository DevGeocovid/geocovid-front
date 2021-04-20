<template>
<center>
  <div class="container">
    <div class="cabecalho">
      <p class="informacao"></p>
      <h1 class="titulo">Estes são os dados gerados pelo projeto</h1>
      </div>
      <div class="corpo">
      <p class="texto">Veja um Vídeo Timelapse com os Mapas Diários e os Mapas com Total de Casos Acumulados e Densidade por mil habitantes no ES entre 03/01/2020 e 31/01/2021:</p>
      <div class="instagram-frame">
        <iframe class="frame" width="720" height="720" src="https://www.instagram.com/p/CN3KGO-rVQ9/embed" frameborder="0"></iframe>
      </div>
      <h3 class="titulo-02">Arquivos dos mapas:</h3>
      <div class="container">
        <a class="drive" href="https://drive.google.com/drive/folders/1uEcolozNMpiMv1MwUa4hNjtgXZ9csqCS?usp=sharing" target="_blank">
          <img src="https://image.flaticon.com/icons/svg/716/716784.svg" alt="Pasta">
          <br>
          <h5>MAPAS</h5>
        </a>
        <a class="drive" href="https://drive.google.com/drive/folders/1MulBreRLNMOIvgoR4ZaPTYbi_C82YCDm?usp=sharing" target="_blank">
          <img src="https://image.flaticon.com/icons/svg/716/716784.svg" alt="Pasta">
          <br>
          <h5>PLANILHAS</h5>
        </a>
      </div>
    </div> 
  </div>
</center>
</template>

<script>
</script>

<style>
.drive{
  display:inline-block;
  text-decoration: none;
  margin: 10px;
  margin-right: 30px;
  
  width: 10%;
}
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