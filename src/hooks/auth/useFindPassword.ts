import { IFindForm } from '@/app/(FormLayout)/find-password/page';
import authAPI from '@/app/api/auth.api';
import { PAGES } from '@/constants/page';
import { FIND_FORM_KEY } from '@/constants/storage';
import { useVerifyToken } from '@/store/authStore';
import { useFindStep } from '@/store/stepStore';
import { useEffect } from 'react';

export const useFindPassword = (getValues: () => IFindForm) => {
  const findStep = useFindStep();
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

  const resetPassword = async (data: IFindForm) => {
    const result = await authAPI.resetPassword({
      email: data.email,
      email_verified_token: verifyToken || '',
      password: data.password,
    });

    if (result) {
      window.location.replace(PAGES.LOGIN);
    }
  };

  return { findStep, resetPassword };
};
