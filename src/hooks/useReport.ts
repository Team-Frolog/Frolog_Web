import { reportUser } from '@/api/report.api';
import { toast } from '@/modules/Toast';
import { useMutation } from '@tanstack/react-query';

/** 신고 핸들링 훅 */
export const useReport = (userId: string) => {
  const { mutate: handleReport } = useMutation({
    mutationFn: () => reportUser(userId),
    onSuccess: () => {
      toast.normal('신고가 완료되었어요');
    },
  });

  return { handleReport };
};
