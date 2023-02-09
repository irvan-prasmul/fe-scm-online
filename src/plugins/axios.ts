// Axios
import { User } from "@/stores/user";
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

axios.interceptors.request.use(
  (config) => {
    const token = User.access_token;
    if (token) {
      config.headers["Content-Type"] = "application/json";
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 302 || error.response.status === 401) {
//       User.removeAuth();
//       router.push({ name: "login" });
//     }
//   }
// );

export default axios;
