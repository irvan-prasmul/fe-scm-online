import { AuthenticationApis } from "@/api/authentication";
import pinia from "@/plugins/pinia";
import { defineStore } from "pinia";
import Mixins from "@/mixins";
import router from "@/router";

const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      isAuthUser: false,
      access_token: "",
      name: "",
      email: "",
      backRoute: "",
      hasPassword: true,
    };
  },
  actions: {
    isAuth() {
      if (this.isAuthUser == true) return true;

      this.getAuthStorage();
      return this.isAuthUser;
    },

    getAuthStorage() {
      const auth = localStorage.getItem("authState");
      if (auth !== null) {
        const jsonAuth = JSON.parse(auth).userStore;

        const isEmpty = Object.values(jsonAuth).every(
          (x) => x === null || x === ""
        );

        if (!isEmpty)
          this.setAuth(
            true,
            jsonAuth.access_token,
            jsonAuth.name,
            jsonAuth.email,
            jsonAuth.hasPassword
          );
      }
    },

    setAuth(
      isAuthUser: boolean,
      token: string,
      name: string,
      email: string,
      hasPassword: boolean
    ) {
      this.access_token = token;
      this.isAuthUser = isAuthUser;
      this.name = name;
      this.email = email;
      this.hasPassword = hasPassword;
    },

    async removeAuth() {
      router.push({ name: "loadingAuth" });
      try {
        await AuthenticationApis.getLogout();
      } catch (e) {
        Mixins.methods.handleAxiosError(e);
      }
      this.setAuth(false, "", "", "", true);
      router.push({ name: "login" });
    },

    async attempLogin(email: string, password: string) {
      try {
        const response = await AuthenticationApis.postLoginUser({
          email: email,
          password: password,
        });
        if (response.status === 200) {
          const data = response.data;
          this.setAuth(
            true,
            data.access_token,
            data.name,
            data.email,
            data.has_password
          );
          return null;
        }
      } catch (e: any) {
        return Mixins.methods.handleAxiosError(e);
      }
    },

    async attempLoginAzure(token: string) {
      try {
        const response = await AuthenticationApis.postAzureLogin({
          token: token,
        });
        if (response.status === 200) {
          const data = response.data;
          this.setAuth(
            true,
            data.access_token,
            data.name,
            data.email,
            data.has_password
          );
          return null;
        }
      } catch (e: any) {
        return Mixins.methods.handleAxiosError(e);
      }
    },
  },
});

export const User = useUserStore(pinia);
