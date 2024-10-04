import { getBookInfo } from '@/features/Review';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useBook = (bookId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['bookInfo', bookId],
    queryFn: () => getBookInfo({ isbn: bookId }).then((res) => res),
  });

  return { bookData: data };
};
