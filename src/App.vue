<template>
  <MainLayout :module="layoutModule">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </MainLayout>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import MainLayout from "./layouts/MainLayout.vue";
import { Global } from "./stores/globals";
import { User } from "./stores/user";

const layoutModule = ref("none");
// const transitionDur = ref(500);

watch(Global, (data) => {
  layoutModule.value = data.currentLayout;
  // transitionDur.value = data.routerTransitionDuration;
});

onMounted(() => {
  User.isAuth();
});
</script>

<style lang="scss">
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

html {
  overflow-y: auto !important;
}
</style>
