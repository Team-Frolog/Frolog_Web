import { IFindForm } from '@/app/(FormLayout)/find-password/page';
import { FIND_FORM_KEY, STEP_KEY } from '@/constants/storage';
import { useEffect, useState } from 'react';

export const useFindPassword = (getValues: () => IFindForm) => {
  const [step, setStep] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const current = sessionStorage.getItem(STEP_KEY.FIND_PASSWORD);
      return current ? Number(current) : 1;
    } else {
      return 1;
    }
  });

  // step별 폼 상태 저장
  useEffect(() => {
    if (typeof window !== 'undefined') {
      step === 1
        ? localStorage.removeItem(FIND_FORM_KEY)
        : localStorage.setItem(FIND_FORM_KEY, JSON.stringify(getValues()));
    }
  }, [step]);

  const goNextStep = () => {
    sessionStorage.setItem(STEP_KEY.FIND_PASSWORD, String(step + 1));
    setStep((prev) => prev + 1);
  };

  return { step, goNextStep };
};
