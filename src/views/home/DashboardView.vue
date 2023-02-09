<template>
  <DefaultLayout>
    <div>DASHBOARD</div>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import router from "@/router";
import { reactive, ref } from "vue";

const showPassword = ref(false);
const isLoading = ref(false);
const isError = ref(false);

const errorMessage = ref("");
</script>
