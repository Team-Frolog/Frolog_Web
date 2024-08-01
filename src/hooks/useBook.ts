import { getBookInfo } from '@/features/Review';
import { useQuery } from '@tanstack/react-query';

export const useBook = (bookId: string) => {
  const { data } = useQuery({
    queryKey: ['bookInfo', bookId],
    queryFn: () => getBookInfo({ isbn: bookId }).then((res) => res),
    refetchOnWindowFocus: false,
  });

  return { bookData: data };
};
