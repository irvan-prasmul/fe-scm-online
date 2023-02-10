<template>
  <div
    class="d-flex align-center justify-center flex-column"
    style="height: 100vh"
  >
    <v-card
      width="600"
      class="mx-auto pa-4 overflow-auto"
      elevation="5"
      style="object-fit: cover"
      v-cloak
    >
      <form @submit.prevent="submit">
        <v-row>
          <v-col cols="12">
            <img
              src="@/assets/logo-prasetiyamulya.png"
              class="d-flex mx-auto"
              style="width: 22%"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">
            <h5 style="color: #1d256a">SCM ONLINE</h5>
          </v-col>
        </v-row>
        <v-row class="px-9">
          <v-col>
            <v-text-field
              v-model="formLogin.email"
              :counter="255"
              :rules="emailRules"
              prepend-inner-icon="mdi-email"
              label="E-mail"
              variant="underlined"
            />
          </v-col>
          <v-col>
            <v-select
              v-model="formLogin.emailSelect"
              :items="items"
              variant="underlined"
            />
          </v-col>
        </v-row>

        <v-row class="px-9">
          <v-col>
            <v-text-field
              v-model="formLogin.password"
              :counter="255"
              :rules="passwordRules"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              required
              prepend-inner-icon="mdi-lock"
              label="Password"
              variant="underlined"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="10" class="pb-0">
            <v-btn
              class="me-4"
              theme="dark"
              rounded
              type="submit"
              :loading="isLoading"
              color="#1D256A"
              block
            >
              sign in
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-0 pl-0">
          <v-col cols="10">
            <v-btn
              class="pl-0"
              variant="plain"
              color="error"
              size="small"
              :loading="isLoading"
              style="text-transform: unset !important; font-style: italic"
            >
              Forgot Password?</v-btn
            >
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-0">
          <v-col cols="4" class="py-0" align-self="center">
            <hr />
          </v-col>
          <v-col cols="auto" class="py-0">OR</v-col>
          <v-col cols="4" class="py-0" align-self="center">
            <hr />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="auto" class="pt-1">
            <v-btn @click="azureLogin" :loading="isLoading" block color="info">
              <v-icon class="pr-1"> mdi-microsoft-azure </v-icon> Login with
              Azure
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="auto" class="pt-1">
            <p style="color: #039be5; font-size: 14px">
              Copyright @ Prasetiya Mulya
            </p>
          </v-col>
        </v-row>
      </form>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { User } from "@/stores/user";
import { reactive, ref } from "vue";

const showPassword = ref(false);
const isLoading = ref(false);
const isError = ref(false);
const isForget = ref(false);

const errorMessage = ref("");

const valid = ref(true);
const emailRules = [(v: string) => !!v || "E-mail is required"];
const passwordRules = [(v: string) => !!v || "Password is required"];

const formLogin = reactive({
  emailSelect: "@prasetiyamulya.ac.id",
  email: "",
  password: "",
});

const items = ref(["@prasetiyamulya.ac.id", "@pmbs.ac.id"]);

// onMounted(() => {
// });

// const auth = useAuth();

const submit = async (event: any) => {
  await event;
  //   console.log(import.meta.env.VUE_APP_API_URL);
  isLoading.value = true;
  try {
    // const response = await User.attempLogin(
    //   formLogin.email,
    //   formLogin.password
    // );
    // if (typeof response == "string") throw Error(response);
    // bypass login
    sessionStorage.setItem(
      "userData",
      JSON.stringify({ name: "irvan", userToken: "testToken" })
    );
    localStorage.setItem("userToken", "testToken");
    router.push({ name: "dashboard" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    errorMessage.value = e.message;
    alert(e);
    if (typeof errorMessage.value == "string" && errorMessage.value.length > 0)
      isError.value = true;
  } finally {
    isLoading.value = false;
  }
};

const azureLogin = async () => {
  alert(formLogin.email + formLogin.emailSelect);
};

// return { name, phone, email, select, checkbox, items, submit, handleReset }
</script>

<style>
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
