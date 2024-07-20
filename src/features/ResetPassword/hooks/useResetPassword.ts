import { PAGES } from '@/constants/page';
import { FIND_FORM_KEY } from '@/constants/storage';
import { useVerifyToken } from '@/store/authStore';
import { useFindStep } from '@/store/stepStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { requestResetPassword } from '../api/reset.api';
import { FindForm } from '../types/findForm';

export const useResetPassword = (getValues: () => FindForm) => {
  const findStep = useFindStep();
  const router = useRouter();
  const verifyToken = useVerifyToken();

  // step별 폼 상태 저장
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (findStep === 1) {
        localStorage.removeItem(FIND_FORM_KEY);
      } else {
        localStorage.setItem(FIND_FORM_KEY, JSON.stringify(getValues()));
      }
    }
  }, [findStep, getValues]);

  const resetPassword = async (data: FindForm) => {
    const result = await requestResetPassword({
      email: data.email,
      email_verified_token: verifyToken || '',
      password: data.password,
    });

    if (result) {
      router.replace(PAGES.LOGIN);
    }
  };

  return { findStep, resetPassword };
};
