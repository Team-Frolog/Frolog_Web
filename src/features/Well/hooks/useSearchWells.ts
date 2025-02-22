import { QUERY_KEY } from '@/constants/query';
import { getUserWellList } from '@/features/Well/api/well.api';
import { useInfiniteSearch } from '@/hooks/useInfiniteSearch';
import { GetUserWellRes, SearchUserWellRes } from '@frolog/frolog-api';

export const useSearchWells = (refTime: string) =>
  useInfiniteSearch<SearchUserWellRes, GetUserWellRes>({
    queryKey: QUERY_KEY.searchWells,
    params: { mode: 'search', ref_time: refTime },
    queryFn: getUserWellList,
    returnData: (data) => data.userwells,
  });
