import usePopUpStore from '@/store/popUpStore';
import { useEffect } from 'react';

export const useToastMessage = () => {
  const {
    toastMessage,
    actions: { changePopUpState },
  } = usePopUpStore();

  useEffect(() => {
    if (toastMessage) {
      setTimeout(() => {
        changePopUpState('toastMessage', false);
      }, 3000);
    }
  }, [toastMessage, changePopUpState]);

  return { isOpen: toastMessage };
};
