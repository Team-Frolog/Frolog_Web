import { useQuery } from '@tanstack/react-query';
import { getReviewCount } from '../api/book.api';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useAddWellItem } from '@/features/Well/hooks/useAddWellItem';

export const useAddBookToWell = (isbn: string) => {
  const wellId = useSearchParams().get('wellId');
  const { data: session } = useSession();
  const { handleAddWellItem } = useAddWellItem(wellId || '', session?.user.id);

  const { data: reviewCount } = useQuery({
    queryKey: ['reviewCount', isbn],
    queryFn: () => getReviewCount({ isbn, writer: session!.user.id }),
    enabled: !!session,
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
      } else {
        // 우물 선택 -> 리뷰 작성
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
    }
  };

  return { reviewCount, handleAddReadBook, handleAddReadingBook };
};
