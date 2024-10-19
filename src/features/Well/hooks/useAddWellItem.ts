import { PostWellItemReq } from '@frolog/frolog-api';
import { useMutation } from '@tanstack/react-query';
import { addWellItem } from '../api/well.api';
import { useStackMotionActions } from '@/store/stackMotionStore';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from '@/modules/Toast';
import { PAGES } from '@/constants/page';
import { CURRENT_WELL_ID } from '@/constants/storage';

export const useAddWellItem = (
  wellId: string | null,
  userId: string | undefined
) => {
  const router = useRouter();
  const pathname = usePathname();
  const { setNewReviewId } = useStackMotionActions();

  const { mutate: handleAddWellItem } = useMutation({
    mutationFn: (req: PostWellItemReq) => addWellItem(req),
    onSuccess: (res) => {
      if (res.result) {
        const itemId = res.id!;
        setNewReviewId(itemId);
        localStorage.removeItem(CURRENT_WELL_ID);

        if (!pathname.includes(PAGES.NEW_REVIEW)) {
          router.push(`/${userId}/well/${wellId}`);
        }
      } else {
        toast.error('아이템 추가에 실패했습니다.');
      }
    },
  });

  return { handleAddWellItem };
};
