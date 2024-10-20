import { PostWellItemReq } from '@frolog/frolog-api';
import { useMutation } from '@tanstack/react-query';
import { useStackMotionActions } from '@/store/stackMotionStore';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from '@/modules/Toast';
import { PAGES } from '@/constants/page';
import { CURRENT_WELL_ID } from '@/constants/storage';
import { addWellItem } from '../api/well.api';
import { useState } from 'react';

export const useAddWellItem = (
  wellId: string | null,
  userId: string | undefined
) => {
  const router = useRouter();
  const [well, setWell] = useState(wellId);
  const pathname = usePathname();
  const { setNewReviewId } = useStackMotionActions();

  const { mutate: handleAddWellItem } = useMutation({
    mutationFn: async (req: PostWellItemReq) => {
      setWell(req.well_id);
      return await addWellItem(req);
    },
    onSuccess: (res) => {
      if (!res.result) {
        toast.error('아이템 추가에 실패했습니다.');
        return;
      }

      const itemId = res.id!;
      const isAfterReview = pathname.includes(PAGES.NEW_REVIEW);
      const isExisting = res.existing;

      if (isExisting) {
        if (!isAfterReview) {
          toast.error('이미 해당 우물에 쌓인 책이에요!');
        }
      } else {
        setNewReviewId(itemId);
        localStorage.removeItem(CURRENT_WELL_ID);
        router.push(`/${userId}/well/${well}`);
      }
    },
  });

  return { handleAddWellItem };
};
