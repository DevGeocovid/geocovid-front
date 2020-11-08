<template>
  <v-card class="rounded-lg" style="height: 600px;">
    <iframe
      style="width: 100%; height: 600px;"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      title="Casos Diagnosticados de Covid 19 para o Espírito Santo"
      :src="
        !$vuetify.breakpoint.xs
          ? '////willian-cqueiroz.maps.arcgis.com/apps/Embed/index.html?webmap=2c5a7e7db23d48eaadac8ac4d5e0d373&extent=-43.4512,-21.0147,-37.7053,-18.1531&zoom=true&previewImage=false&scale=true&legendlayers=true&disable_scroll=true&theme=dark'
          : '////willian-cqueiroz.maps.arcgis.com/apps/Embed/index.html?webmap=2c5a7e7db23d48eaadac8ac4d5e0d373&extent=-43.4512,-21.0147,-37.7053,-18.1531&zoom=true&previewImage=false&scale=true&legendlayers=true&disable_scroll=false&theme=dark'
      "
    ></iframe>
  </v-card>
</template>
