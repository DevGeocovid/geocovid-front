<template>
  <div
    class="mt-6 px-4 fill-height"
    :style="$vuetify.breakpoint.xs ? 'padding-top:120px' : ''"
  >
    <span class="display-3 font-weight-medium color-blue">
      Entenda tudo <br />
      sobre o GeoCovid
    </span>
    <br />
    <br />
    <ul>
      <li>
        <p class="body-2 text-justify">
          De acordo com o Ministério da Saúde (2020) o Brasil confirmou em 13 de
          maio de 2020, 188.974 casos de COVID-19 e 13.149 óbitos, possui taxa
          de letalidade de 7%, ocupando a nona posição no ranking mundial da
          Organização Mundial da Saúde. No Espírito Santo, na mesma data,
          confirmaram-se 5.401 casos, com 233 óbitos, com taxa de letalidade de
          aproximadamente 4,3% (PAINELCOVID19ES, 2020). O Governo do Espírito
          Santo adotou um Mapa de Gestão de Risco para estabelecer medidas
          direcionadas para cada município, porém leva-se em consideração
          somente algumas estatísticas, classificando os municípios em Baixo,
          Moderado e Alto risco.
        </p>
      </li>
      <li>
        <p class="body-2 text-justify">
          Diferente do que vem sendo feito, esse projeto propõe o estudo do
          comportamento da dispersão da doença, o vetor de crescimento, a
          densidade de casos confirmados e associando a isso a vulnerabilidade
          social de alguns municípios selecionados, podendo revelar uma
          tendência temporal da prevalência de contaminação.
        </p>
      </li>
      <li>
        <p class="body-2 text-justify">
          O monitoramento da evolução espacial do Covid-19 é de suma importância
          para auxiliar na tomada de decisões quanto às ações para contenção da
          contaminação, planejamento da gestão de recursos e na movimentação de
          profissionais para áreas com maior vulnerabilidade.
        </p>
      </li>
      <li>
        <p class="body-2 text-justify">
          Assim, através do banco de dados disponibilizado pelo Painel
          COVID-19-Espírito Santo serão elaborados mapas atualizados
          periodicamente, que serão úteis para indicar a tendência de
          contaminação no estado, munindo os gestores de ferramenta para tomada
          de decisões em alvos potenciais e preferenciais de políticas públicas.
          Como não podemos recolher amostras na população inteira, estes mapas
          podem ser úteis para indicar locais a serem amostrados de forma mais
          racional e decidir que regiões estão mais ou menos preparadas para
          sair do isolamento de forma estratificada.
        </p>
      </li>
    </ul>
    <br />
    <br />
    <span
      class="title font-weight-medium color-blue subtitle-main d-flex justify-center"
      >FONTES</span
    >
    <ol class="mt-4">
      <li>
        <p>
          Painel COVID-19
          <strong>Estado do Espírito Santo</strong>. Disponível em:
          <a
            href="https://coronavirus.es.gov.br/painel-covid-19-es"
            target="_blank"
            style="color: #666666;"
            rel="noopener noreferrer"
            >https://coronavirus.es.gov.br/painel-covid-19-es</a
          >. Acesso em: 20 out. 2020.
        </p>
      </li>
      <li>
        <p>
          GEOBASES. <strong>Portal do sistema GEOBASES </strong>. Disponível em:
          <a
            href="https://geobases.es.gov.br"
            target="_blank"
            style="color: #666666;"
            rel="noopener noreferrer"
          >
            https://geobases.es.gov.br</a
          >. Acesso em: 20 out. 2020.
        </p>
      </li>
      <li>
        <p>
          IBGE. Censo 2010.<strong>O Instituto Brasileiro de Geografia e Estatistica</strong>. 
          Disponível em:
          <a
            href="https://censo2010.ibge.gov.br/"
            target="_blank"
            style="color: #666666;"
            rel="noopener noreferrer"
          >
            https://censo2010.ibge.gov.br/</a
          >. Acesso em: 20 out. 2020.
        </p>
      </li>
      <li>
        <p>
          Ipea.
          <strong>O Atlas da Vulnerabilidade Social nas Regiões Metropolitanas
            Brasileiras</strong>. Disponível em:
          <a
            href="http://ivs.ipea.gov.br/images/publicacoes/Ivs/publicacao_atlas_ivs_rm.pdf"
            target="_blank"
            style="color: #666666;"
            rel="noopener noreferrer"
          >
            http://ivs.ipea.gov.br/images/publicacoes</a
          >. Acesso em: 20 out. 2020.
        </p>
      </li>
      <li>
        <p>
          Seddon, Danielle Santos do Nascimento.
            <strong>
            Vulnerabilidade Social no Espírito Santo: conceito e mensuração.
            2014. Dissertação de Mestrado - Universidade Federal do Espírito
            Santo.
            </strong>
          Disponível em:
          <a
            href="http://repositorio.ufes.br/handle/10/1168"
            target="_blank"
            style="color: #666666;"
            rel="noopener noreferrer"
          >
            http://repositorio.ufes.br/handle/10/1168</a
          >. Acesso em: 20 out. 2020.
        </p>
      </li>
    </ol>
    <br />
    <br />
    <span
      class="title font-weight-medium color-blue subtitle-main d-flex justify-center"
      >EQUIPE</span
    ><br<br>
    <v-row>
      <v-col :cols="$vuetify.breakpoint.xs ? '12' : '6'">
        <div class="mt-4">
          <a
            href="http://lattes.cnpq.br/9513837515797451"
            class="text-decoration-none"
            target="blank"
          >
            <strong>Prof. Dra. Fabricia Benda de Oliveira</strong>
          </a>
          <br />
          <span>Departamento de Geologia</span>
          <br />
          <span> Centro de Ciências Exatas, Naturais e da Saúde | CCENS </span>
          <br />
          <span>Universidade Federal do Espírito Santo | UFES</span>
          <br />
        </div>
        <div class="mt-4">
          <a
            href="http://lattes.cnpq.br/1293627013882628"
            class="text-decoration-none"
            target="blank"
          >
            <strong>Prof. Dr. Carlos Henrique de Oliveira</strong>
          </a>
          <br />
          <span>Coordenadoria de Bacharelado e Licenciatura em Ciências Biológicas</span>
          <br />
          <span> Instituto Federal do Espírito Santo | IFES <i>campus</i> de Alegre </span>
          <br />
        </div>
        <div class="mt-4">
          <a
            href="http://lattes.cnpq.br/7599323771219296"
            class="text-decoration-none"
            target="blank"
          >
            <strong>Prof. Dr. Edmar Hell Kampke</strong>
          </a>
          <br />
          <span>Departamento de Computação</span>
          <br />
          <span> Centro de Ciências Exatas, Naturais e da Saúde | CCENS </span>
          <br />
          <span>Universidade Federal do Espírito Santo | UFES</span>
          <br />
        </div>
        <div class="mt-4">
          <a
            href="http://lattes.cnpq.br/8170052761123546"
            class="text-decoration-none"
            target="blank"
          >
            <strong>M. Sc. Friedemann Berger</strong>
          </a>
          <br />
          <span>Departamento de Farmácia e Nutrição / DFN</span>
          <br />
          <span> Centro de Ciências Exatas, Naturais e da Saúde | CCENS </span>
          <br />
          <span>Universidade Federal do Espírito Santo | UFES</span>
          <br />
        </div>
        <div class="mt-4">
          <a
            href="http://lattes.cnpq.br/3835863219290414"
            class="text-decoration-none"
            target="blank"
          >
            <strong>Reinaldo Baldotto Ribeiro Filho</strong>
          </a>
          <br />
          <span>Graduado do curso de Geologia</span>
          <br />
          <span> Centro de Ciências Exatas, Naturais e da Saúde | CCENS </span>
          <br />
          <span>Universidade Federal do Espírito Santo | UFES</span>
          <br />
        </div>
        <div class="mt-4">
          <a
            href="http://lattes.cnpq.br/9213685527968955"
            class="text-decoration-none"
            target="blank"
          >
            <strong>Marx Engel Martins</strong>
          </a>
          <br />
          <span>Graduado do curso de Geologia</span>
          <br />
          <span> Centro de Ciências Exatas, Naturais e da Saúde | CCENS </span>
          <br />
          <span>Universidade Federal do Espírito Santo | UFES</span>
          <br />
        </div>
        <div class="mt-4">
          <a
            href="http://lattes.cnpq.br/6507773411362028"
            class="text-decoration-none"
            target="blank"
          >
            <strong>William Carlos Rodrigues Gonçalves</strong>
          </a>
          <br />
          <span>Graduado do curso de Geografia (Bacharelado e Licenciatura)</span>
          <br />
          <span> Centro de Ciência Humanas e Naturais | CCHN</span>
          <br />
          <span>Universidade Federal do Espírito Santo | UFES</span>
          <br />
        </div>
      </v-col>
      <v-col :cols="$vuetify.breakpoint.xs ? '12' : '6'">
      <div class="mt-4">
          <a
            href="http://lattes.cnpq.br/1666681283698473"
            class="text-decoration-none"
            target="blank"
          >
            <strong>Cícero Dias Bottacin</strong>
          </a>
          <br />
          <span>Graduando do curso de Geologia</span>
          <br />
          <span> Centro de Ciências Exatas, Naturais e da Saúde | CCENS </span>
          <br />
          <span>Universidade Federal do Espírito Santo | UFES</span>
          <br />
        </div>
      <div class="mt-4">
          <a
            href="http://lattes.cnpq.br/9535346183199211"
            class="text-decoration-none"
            target="blank"
          >
            <strong>Diego Pael de Paula</strong>
          </a>
          <br />
          <span>Graduando do curso de Geologia</span>
          <br />
          <span> Centro de Ciências Exatas, Naturais e da Saúde | CCENS </span>
          <br />
          <span>Universidade Federal do Espírito Santo | UFES</span>
          <br />
        </div>
      <div class="mt-4">
          <a
            href="http://lattes.cnpq.br/3813144583521556"
            class="text-decoration-none"
            target="blank"
          >
            <strong>Gabriel Namã Lopes do Nascimento </strong>
          </a>
          <br />
          <span>Graduando do curso de Sistemas de Informação </span>
          <br />
          <span> Centro de Ciências Exatas, Naturais e da Saúde | CCENS </span>
          <br />
          <span>Universidade Federal do Espírito Santo | UFES</span>
          <br />
        </div>
        
        <div class="mt-4">
          <a
            href="http://lattes.cnpq.br/5334852329445517 "
            class="text-decoration-none"
            target="blank"
          >
            <strong>Matheus da Silva Rocha</strong>
          </a>
          <br />
          <span>Graduando do curso de Ciência da Computação</span>
          <br />
          <span> Centro de Ciências Exatas, Naturais e da Saúde | CCENS </span>
          <br />
          <span>Universidade Federal do Espírito Santo | UFES</span>
          <br />
        </div>
        <div class="mt-4">
          <a
            href="http://lattes.cnpq.br/3152337024742924"
            class="text-decoration-none"
            target="blank"
          >
            <strong>Rafael de Andrade Prenholato </strong>
          </a>
          <br />
          <span>Graduando do curso de Sistemas de Informação </span>
          <br />
          <span> Centro de Ciências Exatas, Naturais e da Saúde | CCENS </span>
          <br />
          <span>Universidade Federal do Espírito Santo | UFES</span>
          <br />
        </div>
        <div class="mt-4">
          <a
            href="http://lattes.cnpq.br/3667236602015290"
            class="text-decoration-none"
            target="blank"
          >
            <strong>Willian Conceição Queiroz</strong>
          </a>
          <br />
          <span>Graduando do curso de Ciência da Computação</span>
          <br />
          <span> Centro de Ciências Exatas, Naturais e da Saúde | CCENS </span>
          <br />
          <span>Universidade Federal do Espírito Santo | UFES</span>
          <br />
        </div>
      </v-col>
    </v-row>
    <br><br><br><br>
    <span
      class="title font-weight-medium color-blue subtitle-main d-flex justify-center"
      >PARCEIROS:</span
    ><br>
    <div
      class="d-flex justify-center align-center mt-4"
      :class="$vuetify.breakpoint.xs ? 'flex-column' : ''"
    >
      <img src="~/assets/logos/ufes.png" alt="ufes" style="width: 150px;" />
      <img
        src="~/assets/logos/ccens.png"
        alt="ccens"
        class="ml-4"
        style="width: 200px;"
      />
      <img
        src="https://sigeventos.ifes.edu.br/sigeventos/img/ifes-horizontal-cor.png"
        alt="fapes"
        class="ml-4"
        style="width: 230px;"
      />
      <img
        src="~/assets/logos/fapes.png"
        alt="fapes"
        class="ml-4"
        style="width: 200px;"
      />
      <img
        src="~/assets/logos/es.png"
        alt="es"
        class="ml-4"
        style="width: 200px;"
      />
    </div>
    <br><br><br><br>
    <span
      class="title font-weight-medium color-blue subtitle-main d-flex justify-center"
      >APOIADORES:</span
    ><br>
    <div
      class="d-flex justify-center align-center mt-4"
      :class="$vuetify.breakpoint.xs ? 'flex-column' : ''"
    >
    <b style="text-align: center">Geotecnologia, Tectus Júnior, I9 Pharma, MUSES UFES, Prefeitura de Alegre, UFES International, <br>Teatro Universitário da Ufes, TV Ufes, DCE Ufes, SAC do Coronga e Alegre em Depressão.</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style>
.color-blue {
  color: #181b34;
}
li > p {
  color: #181b34;
}
.text-justify {
  text-align: justify;
  text-justify: inter-word;
}
.margin-top-title {
  margin-top: 3000px;
}
</style>
