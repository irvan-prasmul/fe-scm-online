import axios from "axios";
import * as type from "./type";

export const AuthenticationApis = {
  postRegisterUser: async (payload: type.PostRegisterUserRequest) => {
    return await axios.post("user/register", payload);
  },
  postLoginUser: async (payload: type.PostLoginUserRequest) => {
    return await axios.post("user/login", payload);
  },
  postForgotPassword: async (payload: type.PostForgotPasswordRequest) => {
    return await axios.post("user/forget-password", payload);
  },
  postResetPassword: async (payload: type.PostResetPasswordRequest) => {
    return await axios.post("user/reset-password", payload);
  },
  postChangePassword: async (payload: type.PostChangePasswordRequest) => {
    return await axios.post("user/change-password", payload);
  },
  getLogout: async () => {
    return await axios.get("user/logout");
  },
  postAzureLogin: async (payload: type.PostAzureLoginRequest) => {
    return await axios.post("user/azure-login", payload);
  },

  getUserDetails: async () => {
    return await axios.get("user/details");
  },
};
