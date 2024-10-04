import { reportUser } from '@/api/report.api';
import { toast } from '@/modules/Toast';
import { useMutation } from '@tanstack/react-query';

export const useReport = (userId: string) => {
  const { mutate: handleReport } = useMutation({
    mutationFn: () => reportUser(userId),
    onSuccess: () => {
      toast.normal('신고가 완료되었어요');
    },
  });

  return { handleReport };
};
