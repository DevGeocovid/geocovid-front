<template>
  <v-card
    class="d-flex justify-center rounded-lg"
    style="height: 600px; position: relative;"
  >
    <iframe
      v-if="mapCases"
      style="width: 100%; height: 600px; position: absolute; object-fit: cover;"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      title="Casos Diagnosticados de Covid 19 para o Espírito Santo"
      :src="getUrl('cases')"
    >
    </iframe>
    <iframe
      v-else
      style="width: 100%; height: 600px; position: absolute; object-fit: cover;"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      title="Mapa Vulnerabilidade do Espírito Santo"
      :src="getUrl('vulnerabilited')"
    >
    </iframe>
    <div
      class="d-flex justify-center primary rounded-lg px-12 mt-4 py-1"
      style="position: absolute;"
    >
      <span class="title white--text">{{ selected.title }}</span>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            @click="openDialog = true"
            size="30"
            color="white"
            class="ml-2"
            v-bind="attrs"
            v-on="on"
            >mdi-menu-down</v-icon
          >
        </template>
        <span>Alterne entre os mapas </span>
      </v-tooltip>
    </div>
    <v-dialog width="400" v-model="openDialog">
      <v-card>
        <v-card-title>
          Selecione mapa que deseja visualizar
        </v-card-title>
        <v-divider />
        <v-flex pa-2 d-flex justify-center flex-column>
          <v-btn
            text
            rounded
            hover
            @click="
              mapCases = true
              openDialog = false
            "
          >
            Mapa de novos casos
          </v-btn>
          <v-btn
            text
            rounded
            hover
            @click="
              mapCases = false
              openDialog = false
            "
          >
            Mapa de vulnerabilidade
          </v-btn>
        </v-flex>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
export default {
  name: 'Map',
  data: () => ({
    mapCases: true,
    openDialog: false,
    selected: {
      title: 'Mapa de novos casos',
    },
  }),
  methods: {
    getUrl(type) {
      if (type === 'vulnerabilited') {
        this.selected.title = 'Mapa de vulnerabilidade'
        return `//willian-cqueiroz.maps.arcgis.com/apps/Embed/index.html?webmap=fbbe01fd15dc4779aa64998a557c92b6&extent=-43.2381,-21.262,-37.1736,-17.9037&zoom=true&previewImage=false&scale=true&details=true&legend=true&active_panel=details&disable_scroll=${this.$vuetify.breakpoint.xs}&theme=dark`
      }
      if (type === 'cases') {
        this.selected.title = 'Mapa de novos casos'
        return `////willian-cqueiroz.maps.arcgis.com/apps/Embed/index.html?webmap=2c5a7e7db23d48eaadac8ac4d5e0d373&extent=-43.4512,-21.0147,-37.7053,-18.1531&zoom=true&previewImage=true&scale=true&legendlayers=true&disable_scroll=${this.$vuetify.breakpoint.xs}&theme=dark`
      }
    },
  },
}
</script>

<style></style>
