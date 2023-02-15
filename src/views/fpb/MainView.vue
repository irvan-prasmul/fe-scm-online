<template>
  <div>
    <v-card>
      <v-card-title class="text-start">
        <v-icon class="pb-1">mdi-cart</v-icon>
        FPB Dashboard (Non-Stock)
      </v-card-title>
      <v-card-item>
        <v-row align-content="start">
          <v-col cols="auto" align-self="center">
            <h4>FPB</h4>
          </v-col>
          <v-col cols="auto">
            <v-btn color="primary">
              <v-icon class="pr-2">mdi-plus</v-icon>
              Create new
            </v-btn>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { reactive, ref } from "vue";

const isLoading = ref(false);
const isError = ref(false);

const errorMessage = ref("");
</script>
