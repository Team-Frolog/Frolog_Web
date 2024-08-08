import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { getCategories } from '../api/search.api';

export const useCategory = () => {
  const searchValue = useSearchParams().get('query');

  const { data } = useQuery({
    queryKey: ['category', searchValue],
    queryFn: () => getCategories({ q: searchValue! }),
    enabled: searchValue !== null,
  });

  return { categoryData: data, searchValue };
};