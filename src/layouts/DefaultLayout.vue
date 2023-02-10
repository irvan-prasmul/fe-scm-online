<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" class="nav-drawer">
      <template v-slot:prepend>
        <p class="pa-3 pt-4 nav-title">SCM ONLINE</p>
        <v-divider color="blue-grey-darken-1" thickness="3"></v-divider>
      </template>

      <sidebar-menu
        id="sidebar-menu"
        :menu="menu"
        showOneChild
        relative
        hideToggle
      />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!-- {{ selectedMenu }} -->
      <slot />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const drawer = ref(true);
const menu = ref([
  {
    href: "/home/dashboard",
    title: "Dashboard",
    icon: "mdi mdi-home",
  },
  {
    title: "Reservation",
    icon: "mdi mdi-list-box",
    child: [
      {
        href: "/reservation/approval",
        icon: "mdi mdi-list-status",
        title: "Approval",
      },
    ],
  },
  {
    title: "FPB",
    icon: "mdi mdi-cart",
    child: [
      {
        href: "/fpb/receipt",
        icon: "mdi mdi-receipt-text",
        title: "Receipt",
      },
    ],
  },
  {
    href: "/stock-opname",
    title: "Stock Opname",
    icon: "mdi mdi-stethoscope",
  },
  {
    title: "Master",
    icon: "mdi mdi-dropbox",
    child: [
      {
        href: "/master/material",
        icon: "mdi mdi-package-variant-closed",
        title: "Material",
      },
    ],
  },
]);
//TODO #sidebar-menu > .v-sidebar-menu .vsm--link_level-1 .vsm--icon {
</script>

<style>
#sidebar-menu {
  background-color: transparent;
}

#sidebar-menu > .v-sidebar-menu .vsm--link_level-1 .vsm--icon {
  background-color: transparent;
}

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
