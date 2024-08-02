import { useQuery } from '@tanstack/react-query';
import { getBookDetail } from '../api/book.api';

export const useBookDetail = (isbn: string) => {
  const { data } = useQuery({
    queryKey: ['bookDetail', isbn],
    queryFn: () => getBookDetail(isbn),
  });

  return { bookData: data };
};
