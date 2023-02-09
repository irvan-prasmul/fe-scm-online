<template>
  <nav>
    <router-link to="/login">Home</router-link> |
    <router-link to="/home/dashboard">About</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts" setup></script>

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
