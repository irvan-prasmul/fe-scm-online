/* eslint-disable @typescript-eslint/no-explicit-any */
import pinia from "@/plugins/pinia";
import { defineStore } from "pinia";
import axios from "axios";
import { User } from "@/stores/user";
import router from "@/router";

const useGlobalStore = defineStore("globalStore", {
  state: () => {
    return {
      currentLayout: "none",
      routerTransitionDuration: 300,
    };
  },
  actions: {
    handleAxiosError(e: any) {
      if (
        (axios.isAxiosError(e) && typeof e.response?.status == "number",
        e.response?.status >= 400)
      ) {
        if (e.response.status == 401) {
          User.removeAuth();
          router.push({ name: "login" });
        }

        const errors = e.response?.data.error;
        if (errors == null || errors == undefined) return "undefined error";
        let error = "";
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(errors).forEach(([key, value], index) => {
          error += value + "\n";
        });
        return error;
      }
      return "";
    },
  },
});

export const Global = useGlobalStore(pinia);
