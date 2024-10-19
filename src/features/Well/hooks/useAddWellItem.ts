import { PostWellItemReq } from '@frolog/frolog-api';
import { useMutation } from '@tanstack/react-query';
import { addWellItem } from '../api/well.api';
import { useStackMotionActions } from '@/store/stackMotionStore';
import { useRouter } from 'next/navigation';
import { toast } from '@/modules/Toast';

export const useAddWellItem = (wellId: string, userId: string | undefined) => {
  const router = useRouter();
  const { setNewReviewId } = useStackMotionActions();

  const { mutate: handleAddWellItem } = useMutation({
    mutationFn: (req: PostWellItemReq) => addWellItem(req),
    onSuccess: (res) => {
      if (res.result) {
        const itemId = res.id!;
        setNewReviewId(itemId);
        router.push(`/${userId}/well/${wellId}`);
      } else {
        toast.error('아이템 추가에 실패했습니다.');
      }
    },
  });

  return { handleAddWellItem };
};
