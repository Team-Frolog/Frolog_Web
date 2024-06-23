import { IFindForm } from '@/app/(FormLayout)/find-password/page';
import { FIND_FORM_KEY } from '@/constants/storage';
import { useFindStep } from '@/store/stepStore';
import { useEffect } from 'react';

export const useFindPassword = (getValues: () => IFindForm) => {
  const findStep = useFindStep();

  // step별 폼 상태 저장
  useEffect(() => {
    if (typeof window !== 'undefined') {
      findStep === 1
        ? localStorage.removeItem(FIND_FORM_KEY)
        : localStorage.setItem(FIND_FORM_KEY, JSON.stringify(getValues()));
    }
  }, [findStep]);

  return { findStep };
};
