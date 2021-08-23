<template>
  <v-row xs12 :style="$vuetify.breakpoint.xs ? 'padding-top: 60px;' : ''">
    <v-col :cols="$vuetify.breakpoint.xs ? '12' : '10'" class="mx-auto">
      <div id="titulo-carrossel" class="mx-auto">
        <div class="d-flex justify-center primary rounded-lg px-12 mt-4 py-1">
          <span class="title white--text">NOTÍCIAS</span>
        </div>
      </div>
      <Carousel />
    </v-col>

    <v-col id="espacamento-topo" :cols="$vuetify.breakpoint.xs ? '12' : '8'">
      <Map />

      <div class="mt-1 d-flex justify-end">
        <h6 id="informacao-do-mapa">
          Mapa gerado pelo projeto. Atualizado em 18/08/2021.
        </h6>
      </div>
    </v-col>

    <v-col class="pt-6">
      <v-row>
        <v-col class="mx-3" id="espacamento-topo">
          <v-row>
            <CardInformation
              title="Casos registrados"
              :information="informations.cases"
              typeInformation="cases"
            />
          </v-row>
          <v-row>
            <CardInformation
              class="mt-4"
              title="Casos descartados"
              :information="informations.refused"
              typeInformation="refuses"
            />
          </v-row>
          <v-row>
            <CardInformation
              class="mt-4"
              title="Casos suspeitos"
              :information="informations.suspects"
              typeInformation="suspects"
            />
          </v-row>
          <v-row>
            <CardInformation
              class="mt-4"
              title="Óbitos"
              :information="informations.deaths"
              typeInformation="deaths"
            />
          </v-row>
          <div class="mt-1 d-flex justify-end">
            <h6 id="informacao-dos-dados">
              Dados obtidos do
              <a
                href="https://coronavirus.es.gov.br/painel-covid-19-es"
                target="_blank"
              >
                Painel Covid19 ES</a
              >
              em
              {{ informations.date_register | formatDateTime }}
              .
            </h6>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { formatDateTime } from '@/services/converters'
export default {
  name: 'Home',
  data: () => ({
    informations: {
      cases: '',
      deaths: '',
      suspects: '',
      refuses: '',
      datetime: '',
    },
  }),
  filters: {
    formatDateTime,
  },
  mounted() {
    this.getInformations()
  },
  methods: {
    async getInformations() {
      try {
        const informations = await this.$axios.$get(
          'https://api-bootcovides.herokuapp.com/information/last'
        )
        Object.assign(this, { informations })
      } catch (e) {
        const informations = await this.$axios.$get(
          'https://api-covides2.herokuapp.com/information/last'
        )
        Object.assign(this, { informations })
      }
    },
  },
}
</script>

<style>
#titulo-carrossel {
  margin-bottom: 38px;
  width: 200px;
  text-align: center;
}
#espacamento-topo {
  margin-top: 20px;
}
#informacao-dos-dados {
  margin-top: 30px;
}
#informacao-do-mapa {
  margin-top: 10px;
}
</style>
