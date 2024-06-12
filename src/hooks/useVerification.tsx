import { userAPI } from '@/api/user.api';
import useStore from '@/store/store';
import { useState } from 'react';

export const useVerification = () => {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [isSendFailed, setIsSendFailed] = useState(false);
  const { setEmailCodeToken, emailCodeToken, setEmailVerifiedToken } =
    useStore();

  const sendEmailCode = async (email: string) => {
    const data = await userAPI.requestCode({ email, target: 'signUp' });

    if (data!.result) {
      setEmailCodeToken(data!.email_code_token!);
    } else {
      setIsSendFailed(true);
    }
  };

  const verifyEmailCode = async (code: string) => {
    if (!emailCodeToken) {
      return;
    }

    const data = await userAPI.verifyCode({
      email_code: code,
      email_code_token: emailCodeToken!,
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
