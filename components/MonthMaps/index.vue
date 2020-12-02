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
    maps: [],
  }),
  mounted() {
    this.getMapsMonth()
  },
  methods: {
    async getMapsMonth() {
      try {
        const maps = await this.$axios.$get(
          'https://api-bootcovides.herokuapp.com/month-map'
        )
        Object.assign(this, { maps })
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>

<style></style>
