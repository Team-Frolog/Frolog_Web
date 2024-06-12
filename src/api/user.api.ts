import { BASE_URL } from '@/constants/api';
import {
  GetEmailAvailability,
  GetUsernameAvailability,
  RequestEmailCode,
  SignUp,
  SignUpReq,
} from '@frolog/frolog-api';

const baseOptions = {
  baseURL: BASE_URL,
};

const getEmailAvailability = new GetEmailAvailability(baseOptions);
const getUserNameAvailability = new GetUsernameAvailability(baseOptions);
const requestCode = new RequestEmailCode(baseOptions);

export const userAPI = {
  signUp: async (formData: SignUpReq) => {
    try {
      // new SignUp(baseOptions).fetch({});
    } catch (err) {
      // error handling
    }
  },
  checkEmail: async (email: string) => {
    try {
      const data = await getEmailAvailability.fetch({ email });
      return data.result;
    } catch (err) {
      window.alert('다시 시도해주세요.');
    }
  },
  checkNickname: async (username: string) => {
    try {
      //
    } catch (err) {
      // error handling
    }
  },
  requestCode: async (email: string) => {
    try {
      //
    } catch (err) {
      // error handling
    }
  },
  verifyCode: async () => {
    try {
      //
    } catch (err) {
      // error handling
    }
  },
};
