import { PostWellItemReq } from '@frolog/frolog-api';
import { useMutation } from '@tanstack/react-query';
import { useStackMotionActions } from '@/store/stackMotionStore';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from '@/modules/Toast';
import { PAGES } from '@/constants/page';
import useAddBookStore from '@/store/addBookStore';
import { addWellItem } from '../api/well.api';

export const useAddWellItem = (
  userId: string | undefined,
  stopPending?: () => void
) => {
  const router = useRouter();
  const {
    wellId,
    isThroughSearch,
    actions: { resetAll, setWellId, resetWellId, setIsThroughSearch },
  } = useAddBookStore();
  const pathname = usePathname();
  const { setNewReviewId } = useStackMotionActions();

  const { mutate: handleAddWellItem } = useMutation({
    mutationFn: (req: PostWellItemReq) => addWellItem(req),
    onSuccess: (res) => {
      if (!res.result) {
        toast.error('아이템 추가에 실패했습니다.');

        if (isThroughSearch) {
          resetAll();
        }
        return;
      }

      const itemId = res.id!;
      const isAfterReview = pathname.includes(PAGES.NEW_REVIEW);
      const isExisting = res.existing;

      if (isExisting) {
        if (stopPending) {
          stopPending();
        }
        if (!isAfterReview) {
          toast.error('이미 해당 우물에 쌓인 책이에요!');
        }
        if (isThroughSearch) {
          resetWellId();
        }
      } else {
        setNewReviewId(itemId);
        if (stopPending) {
          stopPending();
        }
        if (!isAfterReview) {
          router.push(`/${userId}/well/${wellId}`);
          resetAll();
        }
      }
    },
  });

  return {
    wellId,
    handleAddWellItem,
    resetWellId,
    resetAll,
    setWellId,
    isThroughSearch,
    setIsThroughSearch,
  };
};
