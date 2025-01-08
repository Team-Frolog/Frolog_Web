import { QUERY_KEY } from '@/constants/query';
import { getBookInfo } from '@/features/Review';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useBook = (bookId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEY.bookInfo, bookId],
    queryFn: () => getBookInfo({ isbn: bookId }).then((res) => res),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return { bookData: data };
};
