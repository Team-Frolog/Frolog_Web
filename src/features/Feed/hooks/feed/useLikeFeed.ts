import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
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

/** 피드 좋아요 핸들링 훅 */
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
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY.feed] });
      const prevFeed = queryClient.getQueryData([QUERY_KEY.feed]);

      if (!prevFeed) return;

      queryClient.setQueryData([QUERY_KEY.feed], (oldData: FeedData) => ({
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
      queryClient.setQueryData([QUERY_KEY.feed], context?.prevFeed);
    },
  });

  return { handleChangeLike };
};
