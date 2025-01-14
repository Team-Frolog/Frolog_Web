import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import * as Sentry from '@sentry/nextjs';
import {
  GetEmailAvailability,
  GetEmailAvailabilityReq,
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

// TODO: 처리 안됨
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
    Sentry.captureException(err);
    toast.error(ERROR_ALERT);
  }
};

export const checkEmail = async (req: GetEmailAvailabilityReq) => {
  try {
    const data = await getEmailAvailability.fetch(req);
    return data.result;
  } catch (err) {
    Sentry.captureException(err);
    toast.error(ERROR_ALERT);
  }
};

export const requestCode = async (req: RequestEmailCodeReq) => {
  try {
    const data = await requestEmailCode.fetch(req);
    return data;
  } catch (err) {
    Sentry.captureException(err);
    toast.error(ERROR_ALERT);
  }
};

export const verifyCode = async (req: VerifyEmailCodeReq) => {
  try {
    const data = await verifyEmailCode.fetch(req);
    return data;
  } catch (err) {
    Sentry.captureException(err);
    toast.error(ERROR_ALERT);
  }
};
