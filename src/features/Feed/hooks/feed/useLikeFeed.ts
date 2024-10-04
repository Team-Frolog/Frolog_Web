import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import { changeLikeThisFeed } from '../../api/activity.api';
import { LikeFeedReq } from '../../types/like';

interface FeedData {
  pages: {
    contents: {
      review?: GetReviewRes;
      memo?: GetMemoRes;
    }[];
    count: number;
    limit: number;
    page: number;
  }[];
  pageParams: number[];
}

export const useLikeFeed = (isReview: boolean) => {
  const queryClient = useQueryClient();

  const toggleLike = (item: GetMemoRes | GetReviewRes) => {
    item.like = !item.like;
    item.like_count = item.like_count
      ? item.like_count + (item.like ? 1 : -1)
      : 1;
  };

  const { mutate: handleChangeLike } = useMutation({
    mutationFn: (req: LikeFeedReq) => changeLikeThisFeed(req, isReview),
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: ['feed'] });
      const prevFeed = queryClient.getQueryData(['feed']);

      if (!prevFeed) return;

      queryClient.setQueryData(['feed'], (oldData: FeedData) => ({
        ...oldData,
        pages: oldData.pages.map((page) => ({
          ...page,
          contents: page.contents.map((item) => {
            if (
              isReview
                ? item.review?.id === variables.id
                : item.memo?.id === variables.id
            ) {
              const targetItem = isReview ? item.review : item.memo;
              toggleLike(targetItem!);
            }
            return item;
          }),
        })),
      }));

      return { prevFeed };
    },
    onError: (_err, _variables, context) => {
      queryClient.setQueryData(['feed'], context?.prevFeed);
    },
  });

  return { handleChangeLike };
};
