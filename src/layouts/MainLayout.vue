<template>
  <div>
    <slot v-if="props.module == 'none'" />
    <DefaultLayout v-else>
      <slot />
    </DefaultLayout>
  </div>
</template>

<script lang="ts" setup>
import DefaultLayout from "./DefaultLayout.vue";
import { defineProps } from "vue";

const props = defineProps({
  module: {
    type: String,
    required: true,
    default: "none",
  },
});
</script>
