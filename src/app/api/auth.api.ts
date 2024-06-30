import { ERROR_ALERT } from '@/constants/message';
import {
  GetEmailAvailability,
  GetEmailAvailabilityReq,
  GetUsernameAvailability,
  GetUsernameAvailabilityReq,
  Quit,
  RequestEmailCode,
  RequestEmailCodeReq,
  ResetPassword,
  ResetPasswordReq,
  SignOut,
  SignOutReq,
  SignUp,
  SignUpReq,
  VerifyEmailCode,
  VerifyEmailCodeReq,
} from '@frolog/frolog-api';
import { getSession } from 'next-auth/react';
import { authOptions, baseOptions } from './options';

const signUp = new SignUp(baseOptions);
const getEmailAvailability = new GetEmailAvailability(baseOptions);
const getUserNameAvailability = new GetUsernameAvailability(baseOptions);
const requestEmailCode = new RequestEmailCode(baseOptions);
const verifyEmailCode = new VerifyEmailCode(baseOptions);
const resetPassword = new ResetPassword(baseOptions);
const signOut = new SignOut(authOptions);
const quit = new Quit(authOptions);

const authAPI = {
  signUp: async (formData: SignUpReq) => {
    try {
      const data = await signUp.fetch(formData);
      return data;
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
  signOut: async () => {
    try {
      const session = await getSession();

      if (session) {
        const req: SignOutReq = {
          id: session?.user.id,
          refresh_token: session?.user.refreshToken,
        };
        const data = await signOut.fetch(req);

        return data.result;
      }
      throw new Error();
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
  quit: async () => {
    try {
      const session = await getSession();
      if (session) {
        const data = await quit.fetch({ id: session?.user.id });
        return data.result;
      }
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
  checkEmail: async (req: GetEmailAvailabilityReq) => {
    try {
      const data = await getEmailAvailability.fetch(req);
      return data.result;
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
  checkNickname: async (req: GetUsernameAvailabilityReq) => {
    try {
      const data = await getUserNameAvailability.fetch(req);
      return data.result;
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
  requestCode: async (req: RequestEmailCodeReq) => {
    try {
      const data = await requestEmailCode.fetch(req);
      return data;
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
  verifyCode: async (req: VerifyEmailCodeReq) => {
    try {
      const data = await verifyEmailCode.fetch(req);
      return data;
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
  resetPassword: async (req: ResetPasswordReq) => {
    try {
      const data = await resetPassword.fetch(req);
      return data.result;
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
};

export default authAPI;
