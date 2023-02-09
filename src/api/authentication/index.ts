import axios from "axios";
import {
  PostAzureLoginRequest,
  PostChangePasswordRequest,
  PostForgotPasswordRequest,
  PostLoginUserRequest,
  PostRegisterUserRequest,
  PostResetPasswordRequest,
} from "./type";

export const AuthenticationApis = {
  postRegisterUser: async (payload: PostRegisterUserRequest) => {
    return await axios.post("user/register", payload);
  },
  postLoginUser: async (payload: PostLoginUserRequest) => {
    return await axios.post("user/login", payload);
  },
  postForgotPassword: async (payload: PostForgotPasswordRequest) => {
    return await axios.post("user/forget-password", payload);
  },
  postResetPassword: async (payload: PostResetPasswordRequest) => {
    return await axios.post("user/reset-password", payload);
  },
  postChangePassword: async (payload: PostChangePasswordRequest) => {
    return await axios.post("user/change-password", payload);
  },
  getLogout: async () => {
    return await axios.get("user/logout");
  },
  postAzureLogin: async (payload: PostAzureLoginRequest) => {
    return await axios.post("user/azure-login", payload);
  },

  getCheckToken: async () => {
    return await axios.get("user/details");
  },
};
