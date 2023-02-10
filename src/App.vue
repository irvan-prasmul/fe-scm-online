<template>
  <MainLayout :module="layoutModule">
    <nav>
      <router-link to="/login">Home</router-link> |
      <router-link to="/home/dashboard">About</router-link>
    </nav>
    <router-view />
  </MainLayout>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import MainLayout from "./layouts/MainLayout.vue";
import { Global } from "./stores/globals";
import { User } from "./stores/user";

const layoutModule = ref("none");

watch(Global, (data) => {
  layoutModule.value = data.currentLayout;
});

onMounted(() => {
  User.isAuth();
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
