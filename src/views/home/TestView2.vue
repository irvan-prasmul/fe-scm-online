<template>
  <div>TEST 2</div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { reactive, ref } from "vue";

const showPassword = ref(false);
const isLoading = ref(false);
const isError = ref(false);

const errorMessage = ref("");
</script>
