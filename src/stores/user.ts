/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthenticationApis } from "@/api/authentication";
import pinia from "@/plugins/pinia";
import { defineStore } from "pinia";
import router from "@/router";
import { Global } from "./globals";

const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      isAuthUser: false,
      userToken: "",
      name: "",
      backRoute: "",
      // hasPassword: true,
    };
  },
  actions: {
    isAuth() {
      if (this.isAuthUser == true) return true;

      this.getAuthStorage();
      return this.isAuthUser;
    },

    getAuthStorage() {
      const session = sessionStorage.getItem("userData");
      if (session !== null) {
        const jsonSession = JSON.parse(session).userStore;

        const isEmpty = Object.values(jsonSession).every(
          (x) => x === null || x === ""
        );
        if (!isEmpty) {
          this.setAuth(true, jsonSession.userToken, jsonSession.name);
          return;
        }
      }

      const token = localStorage.getItem("userToken");
      if (token != null) {
        this.userToken = token;
        this.getUserDetails();
      }
    },

    setAuth(isAuthUser: boolean, token: string, name: string) {
      this.userToken = token;
      this.isAuthUser = isAuthUser;
      this.name = name;
      sessionStorage.setItem(
        "userData",
        JSON.stringify({ name, userToken: token })
      );
      localStorage.setItem("userToken", "testToken");
    },

    async removeAuth() {
      router.push({ name: "loadingAuth" });
      try {
        await AuthenticationApis.getLogout();
      } catch (e) {
        Global.handleAxiosError(e);
      }
      this.setAuth(false, "", "");
      router.push({ name: "login" });
    },

    async getUserDetails() {
      try {
        const response = await AuthenticationApis.getUserDetails();
        if (response.status === 200) {
          const data = response.data;
          this.setAuth(true, data.access_token, data.name);
          return null;
        }
      } catch (e: any) {
        return Global.handleAxiosError(e);
      }
    },

    async attempLogin(email: string, password: string) {
      try {
        const response = await AuthenticationApis.postLoginUser({
          email: email,
          password: password,
        });
        if (response.status === 200) {
          const data = response.data;
          this.setAuth(true, data.access_token, data.name);
          return null;
        }
      } catch (e: any) {
        return Global.handleAxiosError(e);
      }
    },

    async attempLoginAzure(token: string) {
      try {
        const response = await AuthenticationApis.postAzureLogin({
          token: token,
        });
        if (response.status === 200) {
          const data = response.data;
          this.setAuth(true, data.access_token, data.name);
          return null;
        }
      } catch (e: any) {
        return Global.handleAxiosError(e);
      }
    },
  },
});

export const User = useUserStore(pinia);
