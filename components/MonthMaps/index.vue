<template>
  <div class="mt-4">
    <div
      v-for="(map, index) in maps"
      :key="index"
      class="d-flex justify-center"
    >
      <v-card
        :href="map.path"
        target="_blank"
        width="400px"
        class="mt-4 d-flex justify-center primary pa-2 rounded-lg"
      >
        <span class="title white--text">{{ map.month }}</span>
      </v-card>
    </div>
  </div>
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
