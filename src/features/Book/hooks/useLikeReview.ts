import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GetReviewRes } from '@frolog/frolog-api';
import { LikeFeedReq } from '@/features/Feed/types/like';
import { changeLikeThisFeed } from '@/features/Feed/api/activity.api';

interface ReviewData {
  pages: {
    reviews: GetReviewRes[];
    count: number;
    limit: number;
    page: number;
  }[];
  pageParams: number[];
}

export const useLikeReview = (isbn: string) => {
  const queryClient = useQueryClient();

  const toggleLike = (item: GetReviewRes) => {
    item.like = !item.like;
    item.like_count = item.like_count
      ? item.like_count + (item.like ? 1 : -1)
      : 1;
  };

  const { mutate: handleChangeLike } = useMutation({
    mutationFn: (req: LikeFeedReq) => changeLikeThisFeed(req, true),
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({ queryKey: ['reviews', isbn] });
      const prevReviews = queryClient.getQueryData(['reviews', isbn]);

      if (!prevReviews) return;

      queryClient.setQueryData(['reviews', isbn], (oldData: ReviewData) => ({
        ...oldData,
        pages: oldData.pages.map((page) => ({
          ...page,
          reviews: page.reviews.map((item) => {
            if (item.id === id) {
              toggleLike(item);
            }
            return item;
          }),
        })),
      }));

      return { prevReviews };
    },
    onError: (_err, _variables, context) => {
      queryClient.setQueryData(['reviews', isbn], context?.prevReviews);
    },
  });

  return { handleChangeLike };
};
