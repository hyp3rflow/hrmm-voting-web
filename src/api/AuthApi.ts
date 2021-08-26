import { AxiosPromise, AxiosResponse } from 'axios';

import { createAxiosInstance } from 'api/BaseApi';

interface LoginResponse {
  accessToken: string;
  isTokenGenerated: boolean;
}

class AuthApi {
  async login(
    studentNumber: string,
    password: string
  ): Promise<AxiosResponse<LoginResponse>> {
    const response = await createAxiosInstance().post('/auth/login', {
      studentNumber,
      password,
    });
    window.localStorage.setItem('accessToken', response.data.accessToken);
    return response;
  }

  refresh(nickname: string, password: string): AxiosPromise {
    return createAxiosInstance().post('/auth/refresh', {
      nickname,
      password,
    });
  }
}

export default AuthApi;
