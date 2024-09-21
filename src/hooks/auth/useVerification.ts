import { requestCode, verifyCode } from '@/api/auth.api';
import { CODE_EXPIRE_TIME } from '@/constants/auth';
import { useAuthActions, useCodeToken } from '@/store/authStore';
import { useState } from 'react';

export const useVerification = () => {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [isSendFailed, setIsSendFailed] = useState<boolean>(false);
  const codeToken = useCodeToken();
  const { setEmailCodeToken, setEmailVerifiedToken, setEndTime } =
    useAuthActions();

  const sendEmailCode = async (
    email: string,
    target: 'signUp' | 'resetPassword'
  ) => {
    setEndTime(Date.now() + CODE_EXPIRE_TIME);
    const data = await requestCode({ email, target });

    if (data!.result) {
      setEmailCodeToken(data!.email_code_token!);
    } else {
      setIsSendFailed(true);
    }
  };

  const verifyEmailCode = async (code: string) => {
    setIsVerified(null);

    if (!codeToken) {
      return;
    }

    const data = await verifyCode({
      email_code: code,
      email_code_token: codeToken!,
    });

    if (data!.result) {
      setIsVerified(true);
      setEmailVerifiedToken(data!.email_verified_token!);
    } else {
      setIsVerified(false);
    }
  };

  return {
    isSendFailed,
    sendEmailCode,
    verifyEmailCode,
    isVerified,
    setIsVerified,
  };
};
