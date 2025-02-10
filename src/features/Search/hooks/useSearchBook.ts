import { QUERY_KEY } from '@/constants/query';
import { searchBook } from '@/features/Search/api/search.api';
import { useInfiniteSearch } from '@/hooks/useInfiniteSearch';
import { GetBookRes, SearchBookRes } from '@frolog/frolog-api';

/** 검색 핸들링 훅 */
export const useSearchBook = () =>
  useInfiniteSearch<SearchBookRes, GetBookRes>({
    queryKey: QUERY_KEY.searchResult,
    queryFn: searchBook,
    returnData: (data) => data.books,
  });
