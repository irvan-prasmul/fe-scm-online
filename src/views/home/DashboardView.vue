<template>
  <div v-for="i in 30" :key="i">DASHBOARD</div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { reactive, ref } from "vue";

const showPassword = ref(false);
const isLoading = ref(false);
const isError = ref(false);

const errorMessage = ref("");
</script>
