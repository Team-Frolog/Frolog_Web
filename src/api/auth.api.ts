import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import {
  GetEmailAvailability,
  GetEmailAvailabilityReq,
  GetProfile,
  Quit,
  RequestEmailCode,
  RequestEmailCodeReq,
  SignOut,
  SignOutReq,
  VerifyEmailCode,
  VerifyEmailCodeReq,
} from '@frolog/frolog-api';
import { getSession } from 'next-auth/react';
import { baseOptions } from './options';

const getEmailAvailability = new GetEmailAvailability(baseOptions);
const requestEmailCode = new RequestEmailCode(baseOptions);
const verifyEmailCode = new VerifyEmailCode(baseOptions);
const signOutInstance = new SignOut(baseOptions);
const quitInstance = new Quit(baseOptions);
const getProfileInstance = new GetProfile(baseOptions);

export const signOut = async () => {
  try {
    const session = await getSession();

    if (session) {
      const req: SignOutReq = {
        id: session?.user.id,
        refresh_token: session?.user.refreshToken,
      };
      const data = await signOutInstance.fetch(req);

      return data.result;
    }
    throw new Error();
  } catch (err) {
    toast.error(ERROR_ALERT);
  }
};

export const quit = async () => {
  const session = await getSession();
  if (session) {
    const data = await quitInstance.fetch({ id: session?.user.id });
    return data.result;
  }
};

export const checkEmail = async (req: GetEmailAvailabilityReq) => {
  try {
    const data = await getEmailAvailability.fetch(req);
    return data.result;
  } catch (err) {
    toast.error(ERROR_ALERT);
  }
};

export const requestCode = async (req: RequestEmailCodeReq) => {
  try {
    const data = await requestEmailCode.fetch(req);
    return data;
  } catch (err) {
    toast.error(ERROR_ALERT);
  }
};

export const verifyCode = async (req: VerifyEmailCodeReq) => {
  try {
    const data = await verifyEmailCode.fetch(req);
    return data;
  } catch (err) {
    toast.error(ERROR_ALERT);
  }
};

export const getProfile = async (id: string) => {
  try {
    const data = await getProfileInstance.fetch({ id });
    return data;
  } catch (err) {
    toast.error(ERROR_ALERT);
  }
};
