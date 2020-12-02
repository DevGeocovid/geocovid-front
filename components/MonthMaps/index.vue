<template>
  <v-carousel
    progress
    progress-color="primary"
    continuous
    v-model="selected"
    hide-delimiters
    height="fit-content"
  >
    <v-carousel-item v-for="(map, index) in maps" :key="index">
      <v-card class="mt-4 d-flex justify-center" width="100%" height="800px">
        <iframe
          style="
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border: none;
          "
          title="Mapa de casos/mês"
          :src="map.path"
        />
        <div
          class="d-flex justify-center primary rounded-lg px-12 mt-4 py-1"
          style="position: absolute;"
        >
          <span class="title white--text">{{ map.month }}</span>
        </div>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'MonthMaps',
  data: () => ({
    selected: false,
    maps: [
      {
        month: 'Março',
        path:
          '//www.arcgis.com/apps/Embed/index.html?webmap=40160ddf6d5540d0b80cb4a902c08a88&extent=-43.528,-20.5389,-37.7822,-17.9356&zoom=true&previewImage=true&scale=true&disable_scroll=true&theme=light',
      },
      {
        month: 'Abril',
        path:
          '//www.arcgis.com/apps/Embed/index.html?webmap=f26d8eb86047460cbed0d162ed1ba904&extent=-43.6379,-20.6314,-37.892,-18.0296&zoom=true&previewImage=true&scale=true&disable_scroll=true&theme=light',
      },
      {
        month: 'Maio',
        path:
          '//www.arcgis.com/apps/Embed/index.html?webmap=70efc91c3c9440b0965feda95d59a40d&extent=-43.4236,-20.6827,-37.6778,-18.0817&zoom=true&previewImage=true&scale=true&disable_scroll=true&theme=light',
      },
      {
        month: 'Junho',
        path:
          '//www.arcgis.com/apps/Embed/index.html?webmap=61e20db3fdc34bf4879835609249c8b9&extent=-43.6489,-20.4668,-37.903,-17.8623&zoom=true&previewImage=true&scale=true&disable_scroll=true&theme=light',
      },
      {
        month: 'Julho',
        path:
          '//www.arcgis.com/apps/Embed/index.html?webmap=8110c07ca450420bb62b69f2cc4f949e&extent=-43.5939,-20.5697,-37.8481,-17.9668&zoom=true&previewImage=true&scale=true&disable_scroll=true&theme=light',
      },
      {
        month: 'Agosto',
        path:
          '//www.arcgis.com/apps/Embed/index.html?webmap=34f4790b84444df59c439076f88f9177&extent=-43.7093,-20.7297,-37.9635,-18.1295&zoom=true&previewImage=true&scale=true&disable_scroll=true&theme=light',
      },
      {
        month: 'Setembro',
        path:
          '//www.arcgis.com/apps/Embed/index.html?webmap=dcc869d314f14e69b63bb8da917ade32&extent=-43.7862,-20.6699,-38.0404,-18.0687&zoom=true&previewImage=true&scale=true&disable_scroll=true&theme=light',
      },
      {
        month: 'Outubro',
        path:
          '//www.arcgis.com/apps/Embed/index.html?webmap=5c44e0d08cbf45e9bb21cf6587e54b88&extent=-43.6489,-20.4668,-37.903,-17.8623&zoom=true&previewImage=true&scale=true&disable_scroll=true&theme=light',
      },
    ],
  }),
}
</script>

<style></style>
