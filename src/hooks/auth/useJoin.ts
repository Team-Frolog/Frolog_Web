import { userAPI } from '@/app/api/user.api';
import { JOIN_FORM_KEY } from '@/constants/storage';
import { transformJoinForm } from '@/utils/transformJoinForm';
import { useEffect } from 'react';
import { PAGES } from '@/constants/page';
import { useRouter } from 'next/navigation';
import { useAuthActions, useVerifyToken } from '@/store/authStore';
import { IJoinForm } from '@/types/form';
import { useJoinStep } from '@/store/stepStore';

export const useJoin = (getValues: () => IJoinForm) => {
  const router = useRouter();
  const joinStep = useJoinStep();
  const verifyToken = useVerifyToken();
  const { resetToken, resetCodeTime } = useAuthActions();

  // step별 폼 상태 저장
  useEffect(() => {
    if (typeof window !== 'undefined') {
      joinStep === 1
        ? localStorage.removeItem(JOIN_FORM_KEY)
        : localStorage.setItem(JOIN_FORM_KEY, JSON.stringify(getValues()));
    }
  }, [joinStep]);

  useEffect(() => {
    resetCodeTime();
  }, []);

  const joinUser = async (data: IJoinForm) => {
    const formData = transformJoinForm(data, verifyToken!);
    const signUpResult = await userAPI.signUp(formData);

    if (signUpResult?.result) {
      resetToken();
      localStorage.removeItem(JOIN_FORM_KEY);
      router.push(`${PAGES.JOIN_FINISH}?username=${data.username}`);
    }
  };

  return { joinUser, joinStep };
};
