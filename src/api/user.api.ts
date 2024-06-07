import {
  IRequestCodeReq,
  ISignUpReq,
  IVerifyCodeReq,
} from '@/types/api/user/request';
import { clientInstance } from './instances/clientInstance';
import { AxiosResponse } from 'axios';
import {
  IValidationRes,
  IRequestCodeRes,
  ISignUpRes,
  IVerifyCodeRes,
} from '@/types/api/user/response';

export const userAPI = {
  signUp: async (formData: ISignUpReq) => {
    try {
      const { data }: AxiosResponse<ISignUpRes> = await clientInstance.post(
        '/v1/auth/signup',
        formData
      );
      return data;
    } catch (err) {
      // error handling
    }
  },
  checkEmail: async (email: string) => {
    try {
      const { data }: AxiosResponse<IValidationRes> = await clientInstance.get(
        `/v1/auth/signup?email=${email}`
      );
      return data;
    } catch (err) {
      // error handling
    }
  },
  checkNickname: async (username: string) => {
    try {
      const { data }: AxiosResponse<IValidationRes> = await clientInstance.get(
        `/v1/profile/validate-username?username=${username}`
      );
      return data;
    } catch (err) {
      // error handling
    }
  },
  requestCode: async (email: string) => {
    try {
      const req: IRequestCodeReq = {
        email,
        target: 'signUp',
      };
      const { data }: AxiosResponse<IRequestCodeRes> =
        await clientInstance.post(`/v1/auth/request-email-code`, req);
      return data;
    } catch (err) {
      // error handling
    }
  },
  verifyCode: async (codeData: IVerifyCodeReq) => {
    try {
      const { data }: AxiosResponse<IVerifyCodeRes> = await clientInstance.post(
        `/v1/auth/verify-email-code`,
        codeData
      );
      return data;
    } catch (err) {
      // error handling
    }
  },
};
