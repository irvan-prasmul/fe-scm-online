import axios from "axios";
import { User } from "@/stores/user";
import router from "@/router";

export default {
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
};
