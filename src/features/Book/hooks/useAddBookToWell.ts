import { useQuery } from '@tanstack/react-query';
import { getReviewCount } from '../api/book.api';
import { useSession } from 'next-auth/react';

export const useAddBookToWell = (isbn: string, wellId: string | null) => {
  const { data: session } = useSession();

  const { data } = useQuery({
    queryKey: ['reviewCount', isbn],
    queryFn: () => getReviewCount({ isbn, writer: session!.user.id }),
    enabled: !!session,
  });

  // 다 읽었어요
  const handleAddReadBook = () => {
    // 우물에서 접근
    // 검색에서 접근
  };

  // 읽는 중이에요
  const handleAddReadingBook = () => {
    // 우물에서 접근
    // 검색에서 접근
  };

  return { reviewCount: data };
};
