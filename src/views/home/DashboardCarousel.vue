<template>
  <v-carousel
    v-model="carouselCount"
    class="d-flex justify-space-around align-center"
    show-arrows="hover"
    cycle
  >
    <!-- <v-carousel-item cover src="@/assets/home1.jpg"> </v-carousel-item>
    <v-carousel-item cover src="@/assets/home2.jpg"> </v-carousel-item>
    <v-carousel-item cover src="@/assets/home3.jpg"> </v-carousel-item>
    <v-carousel-item cover src="@/assets/home4.jpg"> </v-carousel-item> -->
    <v-carousel-item cover id="car-1">
      <img src="@/assets/home1.jpg" class="d-flex mx-auto" />
    </v-carousel-item>
    <v-carousel-item cover id="car-2">
      <img src="@/assets/home2.jpg" class="d-flex mx-auto" />
    </v-carousel-item>
    <v-carousel-item cover id="car-3">
      <img
        src="@/assets/home3.jpg"
        class="d-flex mx-auto"
        style="object-fit: fill"
      />
    </v-carousel-item>
    <v-carousel-item cover id="car-4">
      <img src="@/assets/home4.jpg" class="d-flex mx-auto" />
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts" setup>
import router from "@/router";
import { reactive, ref } from "vue";

const carouselCount = ref(0);
const isLoading = ref(false);
const isError = ref(false);

const errorMessage = ref("");
</script>
