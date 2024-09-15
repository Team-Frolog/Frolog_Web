import { toast } from '@/modules/Toast';

export const useReport = () => {
  const handleReport = () => {
    toast.normal('신고가 완료되었어요');
  };

  return { handleReport };
};
