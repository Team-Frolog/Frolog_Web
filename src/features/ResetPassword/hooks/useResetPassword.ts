import { PAGES } from '@/constants/page';
import { STORAGE_KEY } from '@/constants/storage';
import { useVerifyToken } from '@/store/authStore';
import { useStep } from '@/store/stepStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { requestResetPassword } from '../api/reset.api';
import { FindForm } from '../types/findForm';

/** 비밀번호 재설정 핸들링 훅 */
export const useResetPassword = (getValues: () => FindForm) => {
  const step = useStep();
  const router = useRouter();
  const verifyToken = useVerifyToken();

  // step별 폼 상태 저장
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (step === 1) {
        localStorage.removeItem(STORAGE_KEY.findFormKey);
      } else {
        localStorage.setItem(
          STORAGE_KEY.findFormKey,
          JSON.stringify(getValues())
        );
      }
    }
  }, [step, getValues]);

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

  return { step, resetPassword };
};
