import { baseOptions } from './options';
import {
  GetEmailAvailability,
  GetEmailAvailabilityReq,
  GetUsernameAvailability,
  GetUsernameAvailabilityReq,
  RequestEmailCode,
  RequestEmailCodeReq,
  SignUp,
  SignUpReq,
  VerifyEmailCode,
  VerifyEmailCodeReq,
} from '@frolog/frolog-api';

const signUp = new SignUp(baseOptions);
const getEmailAvailability = new GetEmailAvailability(baseOptions);
const getUserNameAvailability = new GetUsernameAvailability(baseOptions);
const requestEmailCode = new RequestEmailCode(baseOptions);
const verifyEmailCode = new VerifyEmailCode(baseOptions);

export const userAPI = {
  signUp: async (formData: SignUpReq) => {
    try {
      const data = await signUp.fetch(formData);
      return data;
    } catch (err) {
      window.alert('다시 시도해주세요.');
    }
  },
  checkEmail: async (req: GetEmailAvailabilityReq) => {
    try {
      const data = await getEmailAvailability.fetch(req);
      return data.result;
    } catch (err) {
      window.alert('다시 시도해주세요.');
    }
  },
  checkNickname: async (req: GetUsernameAvailabilityReq) => {
    try {
      const data = await getUserNameAvailability.fetch(req);
      return data.result;
    } catch (err) {
      window.alert('다시 시도해주세요.');
    }
  },
  requestCode: async (req: RequestEmailCodeReq) => {
    try {
      const data = await requestEmailCode.fetch(req);
      return data;
    } catch (err) {
      window.alert('다시 시도해주세요.');
    }
  },
  verifyCode: async (req: VerifyEmailCodeReq) => {
    try {
      const data = await verifyEmailCode.fetch(req);
      return data;
    } catch (err) {
      window.alert('다시 시도해주세요.');
    }
  },
};
