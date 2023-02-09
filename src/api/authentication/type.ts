export interface PostRegisterUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface PostLoginUserRequest {
  email: string;
  password: string;
}

export interface PostForgotPasswordRequest {
  email: string;
}

export interface PostResetPasswordRequest {
  token: string;
  email: string;
  password: string;
}

export interface PostChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

export interface PostAzureLoginRequest {
  token: string;
}
