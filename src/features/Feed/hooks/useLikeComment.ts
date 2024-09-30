import { useMutation, useQueryClient } from '@tanstack/react-query';
import { changeLikeThisComment } from '../api/activity.api';
import { GetCommentsRes } from '../types/comment';

interface CommentData {
  pages: {
    comments: GetCommentsRes[];
    count: number;
    limit: number;
    page: number;
  }[];
  pageParams: number[];
}

export const useLikeComment = (itemId: string, isReview: boolean) => {
  const queryClient = useQueryClient();

  const toggleLike = (item: GetCommentsRes) => {
    item.like = !item.like;
    item.like_count = item.like_count
      ? item.like_count + (item.like ? 1 : -1)
      : 1;
  };

  const { mutate: handleChangeLike } = useMutation({
    mutationFn: (req: { id: string; value: boolean }) =>
      changeLikeThisComment({ ...req, itemId }, isReview),
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: ['comments', itemId] });
      const prevComments = queryClient.getQueryData(['comments', itemId]);

      console.log(prevComments);

      if (!prevComments) return;

      queryClient.setQueryData(
        ['comments', itemId],
        (oldData: CommentData) => ({
          ...oldData,
          pages: oldData.pages.map((page) => ({
            ...page,
            contents: page.comments.map((item) => {
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
        })
      );

      return { prevComments };
    },
    onError: (_err, _variables, context) => {
      queryClient.setQueryData(['comments', itemId], context?.prevComments);
    },
  });

  return { handleChangeLike };
};
