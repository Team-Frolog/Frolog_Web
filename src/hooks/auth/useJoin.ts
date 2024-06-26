import authAPI from '@/app/api/auth.api';
import { JOIN_FORM_KEY, TEMP_ACCOUNT_KEY } from '@/constants/storage';
import { transformJoinForm } from '@/utils/transformJoinForm';
import { useEffect } from 'react';
import { PAGES } from '@/constants/page';
import { useRouter } from 'next/navigation';
import { useAuthActions, useVerifyToken } from '@/store/authStore';
import { IJoinForm } from '@/types/form';
import { useJoinStep } from '@/store/stepStore';
import { ERROR_ALERT } from '@/constants/message';
import { useLogin } from './useLogin';

export const useJoin = (getValues: () => IJoinForm) => {
  const router = useRouter();
  const joinStep = useJoinStep();
  const verifyToken = useVerifyToken();
  const { resetToken } = useAuthActions();
  const { userLogin } = useLogin('test');

  const handleLogin = async () => {
    const account = localStorage.getItem(TEMP_ACCOUNT_KEY);

    if (account) {
      await userLogin(JSON.parse(account));
    } else {
      window.alert(ERROR_ALERT);
      router.back();
    }
  };

  // step별 폼 상태 저장
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (joinStep === 1) {
        localStorage.removeItem(JOIN_FORM_KEY);
      } else {
        localStorage.setItem(JOIN_FORM_KEY, JSON.stringify(getValues()));
      }
    }
  }, [getValues, joinStep]);

  const joinUser = async (data: IJoinForm) => {
    const formData = transformJoinForm(data, verifyToken!);
    const signUpResult = await authAPI.signUp(formData);

    if (signUpResult?.result) {
      resetToken();
      localStorage.removeItem(JOIN_FORM_KEY);
      localStorage.setItem(
        TEMP_ACCOUNT_KEY,
        JSON.stringify({ email: formData.email, password: formData.password })
      );
      router.push(`${PAGES.JOIN_FINISH}?username=${data.username}`);
      handleLogin();
    }
  };

  return { joinUser, joinStep };
};
