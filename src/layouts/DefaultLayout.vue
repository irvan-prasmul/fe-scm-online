<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" class="nav-drawer">
      <template v-slot:prepend>
        <p class="pa-3 pt-4 nav-title">SCM ONLINE</p>
      </template>

      <v-divider color="blue-grey-darken-1" thickness="3"></v-divider>

      <v-list nav class="text-start pa-4" active-color="#42b983">
        <router-link to="/home/dashboard">
          <v-list-item
            :active="false"
            prepend-icon="mdi-form-select"
            title="Home"
            value="home"
          >
          </v-list-item>
        </router-link>
        <v-list-group value="fpb">
          <template v-slot:activator="{ props }">
            <v-list-item
              :active="false"
              v-bind="props"
              prepend-icon="mdi-cart"
              title="FPB"
            ></v-list-item>
          </template>

          <router-link to="/home/asd">
            <v-list-item
              :active="false"
              title="Reciept"
              prepend-icon="mdi-arrow-right-top-bold"
              value="reciept"
            ></v-list-item>
          </router-link>
        </v-list-group>
        <router-link to="/home/asd">
          <v-list-item
            :active="false"
            prepend-icon="mdi-table"
            title="Records"
            value="blastDashboard"
          ></v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      {{ selectedMenu }}
      <slot />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const drawer = ref(true);
const selectedMenu = ref<any>("asd");

// const vListTrigger = (payload: any) => {
//   console.log("payload", payload);
// };
</script>

<style>
nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.v-btn {
  text-transform: unset !important;
}

.nav-drawer {
  position: static;
  background-color: #343a40 !important;
  color: white !important;
}

.nav-title {
  font-weight: 300;
  font-size: x-large;
  color: #808081;
  padding-bottom: 14px;
  font-family: Impact;
}

a:link {
  text-decoration: none;
}
</style>
