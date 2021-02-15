<template>
  <v-layout fill-height>
    <v-app-bar
      absolute
      color="#181B34"
      dark
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      v-if="$vuetify.breakpoint.xs"
    >
      <v-app-bar-nav-icon @click="drawer = true" />

      <v-toolbar-title>
        <img
          src="~/assets/logo/write.svg"
          style="width: 30%;"
          alt="covid-write"
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      color="#181B34"
      :expand-on-hover="!$vuetify.breakpoint.xs ? true : false"
      :mini-variant="!$vuetify.breakpoint.xs ? true : false"
      app
      style="box-shadow: 0 4px 50px rgba(0, 0, 0, 0.05);"
    >
      <v-list dense nav class="py-4">
        <v-list-item two-line :class="'px-0'">
          <v-list-item-avatar>
            <img
              src="~/assets/logo/fig.png"
              style="width: 140%; height: 140%;"
              alt="GeoCovid Site Logo"
            />
          </v-list-item-avatar>

          <v-list-item-content class="pr-8">
            <img
              src="~/assets/logo/write.svg"
              style="width: 80%;"
              alt="GeoCovid Site Logo"
            />
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon left color="#DDE2FF">mdi-view-dashboard-outline </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color: #898989;" class="subtitle-1"
              >Dashboard</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/generated">
          <v-list-item-icon>
            <v-icon left color="#DDE2FF">mdi-database </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color: #898989;" class="subtitle-1"
              >Dados gerados</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/noticias">
          <v-list-item-icon>
            <v-icon left color="#DDE2FF">mdi-newspaper-variant-multiple </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color: #898989;" class="subtitle-1"
              >Notícias</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon left color="#DDE2FF">mdi-information-outline </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color: #898989;" class="subtitle-1"
              >Sobre</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-flex>
      <v-container>
        <transition-group name="fade" mode="out-in"> </transition-group>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      {
        text: 'Propostas',
        disabled: false,
        href: 'home',
        to: '/dashboard',
        link: true,
      },
      {
        text: 'Usuários',
        disabled: false,
        href: 'Users',
        to: '/users',
        link: true,
      },
      {
        text: 'Dados gerados',
        disabled: false,
        href: 'Generated',
        to: '/generated',
        link: true,
      },
    ],
  }),
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity, transform;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  transform: translateY(-2em);
  opacity: 0;
}

.breadcrumbActiveClass > div {
  color: #03bccc !important;
}

.v-breadcrumbs__item > div {
  color: #898989;
}
</style>
