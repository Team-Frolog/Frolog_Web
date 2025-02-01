import { baseOptions } from '@/api/options';
import { toast } from '@/modules/Toast';
import { PostUserReport } from '@frolog/frolog-api';
import { useMutation } from '@tanstack/react-query';

/** 신고 핸들링 훅 */
export const useReport = (userId: string) => {
  const { mutate: handleReport } = useMutation({
    mutationFn: () => new PostUserReport(baseOptions).fetch({ target: userId }),
    onSuccess: () => {
      toast.normal('신고가 완료되었어요');
    },
  });

  return { handleReport };
};
