<template>
  <div style="height: inherit;">
    <iframe
      class="fill-height"
      style="width: 100%;"
      :src="
        $vuetify.breakpoint.xs
          ? 'https://drive.google.com/embeddedfolderview?id=1iqVB2sSZt06rL-7LYWRm-IGnLk0_6R-n#list'
          : 'https://drive.google.com/embeddedfolderview?id=1iqVB2sSZt06rL-7LYWRm-IGnLk0_6R-n#grid'
      "
    />
  </div>
</template>

<script>
export default {
  name: 'PictureMapVue',
  data: () => ({}),
}
</script>

<style scoped></style>
