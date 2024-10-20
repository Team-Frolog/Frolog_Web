import { useSuspenseQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { getCategories } from '../api/search.api';

export const useCategory = () => {
  const searchValue = useSearchParams().get('query');

  const { data } = useSuspenseQuery({
    queryKey: ['category', searchValue],
    queryFn: async () => {
      if (searchValue === null) {
        return [];
      }
      const res = await getCategories({ q: searchValue! });
      return res;
    },
    select: (fetchedData) => fetchedData.sort((a, b) => b.count - a.count),
  });

  return { categoryData: data, searchValue };
};
