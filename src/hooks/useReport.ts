import { usePopUpActions } from '@/store/popUpStore';
import toast from '@/modules/Toast';

export const useReport = () => {
  const { changePopUpState } = usePopUpActions();

  const handleReport = () => {
    changePopUpState('isOpenAlertSheet', false);
    toast.normal('신고가 완료되었어요');
  };

  return { handleReport };
};
