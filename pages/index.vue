<template>
  <v-row xs12 :style="$vuetify.breakpoint.xs ? 'padding-top:60px;' : ''">
    <v-col :cols="$vuetify.breakpoint.xs ? '12' : '8'">
      <Map />
    </v-col>
    <v-col class="pt-0">
      <v-row>
        <v-col class="mx-3">
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
              :information="informations.refuses"
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
              title="Mortes"
              :information="informations.deaths"
              typeInformation="deaths"
            />
          </v-row>
          <div class="mt-1 d-flex justify-end">
            <h6>
              Dados atualizados até o dia
              {{ informations.datetime | formatDateTime }}
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
      cases: 0,
      deaths: 0,
      suspects: 0,
      refuses: 0,
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
          'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/es'
        )
        Object.assign(this, { informations })
      } catch (e) {
        console.error('Impossivel carregar os casos!')
      }
    },
  },
}
</script>

<style></style>
