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
        width="256px"
      >
        <!-- <template v-slot:toggle-icon>toggle-icon</template>
        <template v-slot:dropdown-icon="{ isOpen }">
          <span v-if="!isOpen">+</span>
          <span v-else>-</span>
        </template> -->
      </sidebar-menu>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
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
    href: "/fpb",
    title: "FPB",
    icon: "mdi mdi-cart",
  },
  {
    title: "Master",
    icon: "mdi mdi-dropbox",
    child: [
      {
        href: "/master/user",
        title: "User",
        icon: "mdi mdi-share",
      },
      {
        href: "/master/config-pjb",
        title: "Config PJB",
        icon: "mdi mdi-share",
      },
    ],
  },
  {
    title: "Reports",
    icon: "mdi mdi-table",
    child: [
      {
        href: "/reports/price-compare",
        title: "Price Comparison",
        icon: "mdi mdi-share",
      },
      {
        title: "request",
        icon: "mdi mdi-share",
        child: [
          {
            href: "/reports/request/vendor",
            title: "Vendor",
            icon: "mdi mdi-circle-outline",
          },
          {
            href: "/reports/request/material",
            title: "Material",
            icon: "mdi mdi-circle-outline",
          },
          {
            href: "/reports/request/pic",
            title: "PIC",
            icon: "mdi mdi-circle-outline",
          },
          {
            href: "/reports/request/department",
            title: "Department",
            icon: "mdi mdi-circle-outline",
          },
          {
            href: "/reports/request/status",
            title: "Status",
            icon: "mdi mdi-circle-outline",
          },
        ],
      },
      {
        href: "/reports/fpb-history",
        title: "FPB History",
        icon: "mdi mdi-share",
      },
      {
        href: "/reports/fpb-all",
        title: "FPB All",
        icon: "mdi mdi-share",
      },
    ],
  },
  {
    title: "Chart",
    icon: "mdi mdi-chart-areaspline-variant",
    child: [
      {
        href: "/chart/fpb",
        title: "FPB",
        icon: "mdi mdi-share",
      },
    ],
  },
]);
</script>

<style>
#sidebar-menu {
  background-color: transparent;
}

.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
  background-color: transparent !important;
}

.v-sidebar-menu .vsm--link {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
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
