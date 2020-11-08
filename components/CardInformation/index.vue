<template>
  <v-card
    class="fill-height pa-6"
    :color="dataTypes[typeInformation].color"
    :style="getUrl"
    style="
      width: 100%;
      border-radius: 8px;
      background-blend-mode: multiply;
      background-size: 50%;
      background-position: top right;
    "
  >
    <h4 class="font-weight-regular pt-4 indigo-lighten--text">{{ title }}</h4>
    <h1 class="mt-16 mt-lg-auto white--text">
      {{ information }}
    </h1>
  </v-card>
</template>

<script>
export default {
  name: 'CardInformation',
  props: {
    title: String,
    information: Number,
    typeInformation: String,
  },
  data: () => ({
    dataTypes: {
      cases: {
        url:
          'https://842930.smushcdn.com/1760858/wp-content/uploads/2020/04/pandemic-01-bacteria.png?lossy=1&strip=1&webp=1',
        color: '#4B3F72',
      },
      deaths: {
        url:
          'https://842930.smushcdn.com/1760858/wp-content/uploads/2020/06/call-the-doctor-16-medicine.png?lossy=1&strip=1&webp=1',
        color: '#F97068',
      },
      suspects: {
        url:
          'https://842930.smushcdn.com/1760858/wp-content/uploads/2020/06/call-the-doctor-09-medicine.png?lossy=1&strip=1&webp=1',
        color: '#D1D646',
      },
      refuses: {
        url:
          'https://842930.smushcdn.com/1760858/wp-content/uploads/2020/06/call-the-doctor-20-medicine.png?lossy=1&strip=1&webp=1',
        color: '#57C4E5',
      },
    },
  }),
  computed: {
    getUrl() {
      return `background-image: url('${
        this.dataTypes[this.typeInformation].url
      }')`
    },
  },
}
</script>
