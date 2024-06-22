import { userAPI } from '@/app/api/user.api';
import { useAuthActions, useCodeToken } from '@/store/authStore';
import { useState } from 'react';

export const useVerification = () => {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [isSendFailed, setIsSendFailed] = useState<boolean>(false);
  const codeToken = useCodeToken();
  const { setEmailCodeToken, setEmailVerifiedToken } = useAuthActions();

  const sendEmailCode = async (
    email: string,
    target: 'signUp' | 'resetPassword'
  ) => {
    const data = await userAPI.requestCode({ email, target });

    if (data!.result) {
      setEmailCodeToken(data!.email_code_token!);
    } else {
      setIsSendFailed(true);
    }
  };

  const verifyEmailCode = async (code: string) => {
    if (!codeToken) {
      return;
    }

    const data = await userAPI.verifyCode({
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
