import { useParams } from 'next/navigation';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { GetProfileFeedRes } from '@frolog/frolog-api';
import { QUERY_KEY } from '@/constants/query';
import { getProfileFeed } from '@/features/Profile/api/feed.api';

export const useProfileFeed = (initialProfileFeed: GetProfileFeedRes) => {
  const { userId } = useParams();

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: [QUERY_KEY.profileFeed, userId],
      queryFn: ({ pageParam }) => getProfileFeed(userId as string, pageParam),
      initialPageParam: 0,
      initialData: {
        pages: [initialProfileFeed],
        pageParams: [0],
      },
      getNextPageParam: (lastPage) => {
        const totalPages = Math.ceil(lastPage.count / lastPage.limit);
        const isLastPage = totalPages === lastPage.page + 1 || totalPages === 0;
        return isLastPage ? undefined : lastPage.page + 1;
      },
      select: (fetchedData) => ({
        pages: fetchedData
          ? fetchedData.pages.flatMap((page) => page.items)
          : [],
        pageParams: fetchedData.pageParams,
      }),
    });

  const isEmpty = data.pages.length === 0;

  return {
    profileFeed: data.pages,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isEmpty,
  };
};
