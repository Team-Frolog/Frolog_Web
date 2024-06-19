import { userAPI } from '@/app/api/user.api';
import { JOIN_FORM_KEY } from '@/constants/storage';
import { transformJoinForm } from '@/utils/transformJoinForm';
import { useEffect } from 'react';
import { PAGES } from '@/constants/pageConfig';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthActions, useVerifyToken } from '@/store/authStore';
import { IJoinForm } from '@/types/form';

export const useJoin = (getValues: () => IJoinForm) => {
  const router = useRouter();
  const verifyToken = useVerifyToken();
  const { resetToken } = useAuthActions();
  const step = Number(useSearchParams().get('step')!);

  // step별 폼 상태 저장
  useEffect(() => {
    if (typeof window !== 'undefined') {
      step === 1
        ? localStorage.removeItem(JOIN_FORM_KEY)
        : localStorage.setItem(JOIN_FORM_KEY, JSON.stringify(getValues()));
    }
  }, [step]);

  const joinUser = async (data: IJoinForm) => {
    const formData = transformJoinForm(data, verifyToken!);
    const signUpResult = await userAPI.signUp(formData);

    if (signUpResult?.result) {
      resetToken();
      localStorage.removeItem(JOIN_FORM_KEY);
      router.push(`${PAGES.JOIN_FINISH}?username=${data.username}`);
    }
  };

  return { step, joinUser };
};
