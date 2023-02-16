<template>
  <div>
    <Transition :name="props.module == 'none' ? 'slide-in' : 'slide-out'">
      <slot v-if="props.module == 'none'" />
      <DefaultLayout v-else>
        <slot />
      </DefaultLayout>
    </Transition>
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

<style lang="scss">
.slide-in-enter-active {
  transition: all 0.3s ease-out;
}

.slide-in-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(100vh);
  opacity: 0;
}

.slide-out-enter-active {
  transition: all 0.3s ease-out;
}

.slide-out-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-out-enter-from,
.slide-out-leave-to {
  transform: translateX(-100vh);
  opacity: 0;
}
</style>
