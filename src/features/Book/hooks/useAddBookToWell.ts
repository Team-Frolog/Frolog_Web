import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAddWellItem } from '@/features/Well/hooks/useAddWellItem';
import { useState } from 'react';
import { PAGES } from '@/constants/page';
import { getReviewCount } from '../api/book.api';

export const useAddBookToWell = (isbn: string) => {
  const [step, setStep] = useState<string | null>('state');
  const [callback, setCallback] = useState<(value?: any) => void>(() => {});
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.user.id;
  const { handleAddWellItem, wellId, setWellId, setIsThroughSearch } =
    useAddWellItem(userId);

  const { data: reviewCount } = useQuery({
    queryKey: ['reviewCount', isbn],
    queryFn: () => getReviewCount({ isbn, writer: userId }),
    enabled: !!userId,
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
        router.push(`${PAGES.NEW_REVIEW}?id=${isbn}`);
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
          router.push(`${PAGES.NEW_REVIEW}?id=${isbn}`);
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
    callback,
    reviewCount,
    handleAddReadBook,
    handleAddReadingBook,
  };
};
