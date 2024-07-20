import { usePopUpActions, useToastState } from '@/store/popUpStore';
import { useEffect } from 'react';

export const useToastMessage = () => {
  const isOpenToast = useToastState();
  const { changePopUpState } = usePopUpActions();

  useEffect(() => {
    if (isOpenToast) {
      setTimeout(() => {
        changePopUpState('isOpenToast', false);
      }, 3000);
    }
  }, [isOpenToast, changePopUpState]);

  return { isOpenToast };
};
