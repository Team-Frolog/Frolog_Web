import { PostWellItemReq } from '@frolog/frolog-api';
import { useMutation } from '@tanstack/react-query';
import { useStackMotionActions } from '@/store/stackMotionStore';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from '@/modules/Toast';
import { PAGES } from '@/constants/page';
import useAddBookStore from '@/store/addBookStore';
import { addWellItem } from '../api/well.api';

/** 우물 아이템 추가 핸들링 훅 */
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
      /** 아이템 추가 실패 */
      if (!res.result) {
        toast.error('아이템 추가에 실패했습니다.');

        if (stopPending) {
          stopPending();
        }

        // 검색을 통해 추가한 경우
        if (isThroughSearch) {
          resetAll();
        }
        return;
      }

      /** 아이템 추가 성공 */
      const itemId = res.id!;
      const isAfterReview = pathname.includes(PAGES.NEW_REVIEW); // 리뷰 작성 직후인 경우
      const isExisting = res.existing; // 이미 존재하는 도서인 경우

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
