import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useUserId } from '@/store/sessionStore';
import { TapKey } from '@/constants/taps';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAddWellItem } from '@/features/Well/hooks/useAddWellItem';
import { QUERY_KEY } from '@/constants/query';
import { getReviewCount } from '../api/book.api';

/** 도서를 우물에 추가하는 로직을 처리하는 훅 */
export const useAddBookToWell = (isbn: string) => {
  const userId = useUserId();
  const [step, setStep] = useState<string | null>('state');
  const [callback, setCallback] = useState<(value?: any) => void>(() => {});
  const [isPending, setIsPending] = useState(false); // 우물을 선택한 경우 완료되기까지 pending 여부
  const router = useRouter();
  const { handleAddWellItem, wellId, setWellId, setIsThroughSearch } =
    useAddWellItem({ userId, stopPending: () => setIsPending(false) });
  const currentTap = useSearchParams().get('tap') || TapKey.SEARCH;

  const { data: reviewCount } = useQuery({
    queryKey: [QUERY_KEY.reviewCount, isbn],
    queryFn: () => getReviewCount({ isbn, writer: userId }),
    enabled: !!userId,
    staleTime: 0,
  });

  /* ----- 다 읽었어요 ----- */
  const handleAddReadBook = () => {
    // case 1. 우물에서 접근
    if (wellId) {
      // 1-1. 기존 리뷰가 있는 경우 - 우물에 쌓기
      if (reviewCount) {
        handleAddWellItem({ well_id: wellId, isbn, status: 'done' });
      }
      // 1-2. 리뷰가 없는 경우 - 리뷰 작성 후 쌓기
      else {
        router.push(
          `/${userId}/well/${wellId}/new-review/${isbn}?tap=${currentTap}`
        );
      }
    }
    // case 2. 검색에서 접근
    else {
      setIsThroughSearch(true);
      // 2-1. 기존 리뷰가 있는 경우 - 우물 선택 후 쌓기
      if (reviewCount) {
        setStep('select-well');
        setCallback(() => (id: string) => {
          setWellId(id);
          handleAddWellItem({ well_id: id, isbn, status: 'done' });
        });
      }
      // 2-2. 리뷰가 없는 경우 - 우물 선택 및 리뷰 작성 후 쌓임
      else {
        setStep('select-well');
        setCallback(() => (id: string) => {
          setWellId(id);
          router.push(
            `/${userId}/well/${id}/new-review/${isbn}?tap=${currentTap}`
          );
        });
      }
    }
  };

  /* ----- 읽는 중이에요 ----- */
  const handleAddReadingBook = () => {
    // case 1. 우물에서 접근 - 우물에 쌓기
    if (wellId) {
      handleAddWellItem({ well_id: wellId, isbn, status: 'reading' });
    }
    // case 2. 검색에서 접근 - 우물 선택 후 쌓기
    else {
      setIsThroughSearch(true);
      setStep('select-well');
      setCallback(() => (id: string) => {
        setWellId(id);
        handleAddWellItem({ well_id: id, isbn, status: 'reading' });
      });
    }
  };

  return {
    step,
    setStep,
    userId,
    isPending,
    setIsPending,
    callback,
    reviewCount,
    handleAddReadBook,
    handleAddReadingBook,
  };
};
