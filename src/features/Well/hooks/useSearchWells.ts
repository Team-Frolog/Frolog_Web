import { DEFAULT_LIMIT } from '@/constants/api';
import { QUERY_KEY } from '@/constants/query';
import { useInfiniteSearch } from '@/hooks/useInfiniteSearch';
import { GetWellRes } from '@frolog/frolog-api';

type GetSearchWellRes = {
  id: string;
  wells: GetWellRes[];
};

interface SearchWellRes {
  count: number;
  limit: number;
  page: number;
  wells: GetSearchWellRes[];
}

const fetchSearchWells = async ({ q, page }: { q: string; page: number }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/well/userwell/search?page=${page}&limit=${DEFAULT_LIMIT}&query=${q}`
  ).then((res) => res.json());

  return response;
};

export const useSearchWells = () =>
  useInfiniteSearch<SearchWellRes, GetSearchWellRes>({
    queryKey: QUERY_KEY.searchWells,
    queryFn: fetchSearchWells,
    returnData: (data) => data.wells,
  });
