<template>
  <v-app>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Menu />
  </v-app>
</template>

<script>
import Menu from './Menu'

export default {
  components: {
    Menu,
  },
}
</script>
