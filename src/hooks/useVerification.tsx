import { userAPI } from '@/api/user.api';
import useStore from '@/store/store';
import { useState } from 'react';

export const useVerification = () => {
  const [isFailed, setIsFailed] = useState(false);
  const { setEmailCodeToken } = useStore();

  const sendEmailCode = async (email: string) => {
    const data = await userAPI.requestCode({ email, target: 'signUp' });

    if (data!.result) {
      setEmailCodeToken(data!.email_code_token!);
    } else {
      setIsFailed(true);
    }
  };

  return { isFailed, sendEmailCode };
};
