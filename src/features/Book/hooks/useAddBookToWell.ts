import { useQuery } from '@tanstack/react-query';
import { getReviewCount } from '../api/book.api';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useAddWellItem } from '@/features/Well/hooks/useAddWellItem';
import { useState } from 'react';

export const useAddBookToWell = (isbn: string) => {
  const [step, setStep] = useState('state');
  const [callback, setCallback] = useState<(value?: any) => void>(() => {});
  const wellId = useSearchParams().get('wellId');
  const { data: session } = useSession();
  const userId = session?.user.id;
  const { handleAddWellItem } = useAddWellItem(wellId || '', userId);

  const { data: reviewCount } = useQuery({
    queryKey: ['reviewCount', isbn],
    queryFn: () => getReviewCount({ isbn, writer: userId }),
    enabled: !!userId,
  });

  // 다 읽었어요
  const handleAddReadBook = () => {
    // 우물에서 접근
    if (wellId) {
      if (reviewCount) {
        handleAddWellItem({ well_id: wellId, isbn, status: 'done' });
      } else {
        // 리뷰 작성
      }
    }
    // 검색에서 접근
    else {
      if (reviewCount) {
        // 우물 선택 -> 쌓기
        setStep('select-well');
        setCallback(
          () => (wellId: string) =>
            handleAddWellItem({ well_id: wellId, isbn, status: 'done' })
        );
      } else {
        // 우물 선택 -> 리뷰 작성
        setStep('select-well');
      }
    }
  };

  // 읽는 중이에요
  const handleAddReadingBook = () => {
    // 우물에서 접근
    if (wellId) {
      handleAddWellItem({ well_id: wellId, isbn, status: 'reading' });
    }
    // 검색에서 접근
    else {
      // 우물 선택 -> 쌓기
      setStep('select-well');
      setCallback(
        () => (wellId: string) =>
          handleAddWellItem({ well_id: wellId, isbn, status: 'reading' })
      );
    }
  };

  return {
    step,
    userId,
    callback,
    reviewCount,
    handleAddReadBook,
    handleAddReadingBook,
  };
};
