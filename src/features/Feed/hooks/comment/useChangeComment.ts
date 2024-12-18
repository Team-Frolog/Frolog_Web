import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
import { changeLikeThisComment } from '../../api/activity.api';
import { GetCommentsRes } from '../../types/comment';
import { toggleLike } from '../../utils/toggleLike';
import { deleteComment } from '../../api/comments.api';

export interface CommentData {
  pages: {
    comments: GetCommentsRes[];
    count: number;
    limit: number;
    page: number;
  }[];
  pageParams: number[];
}

export const useChangeComment = (itemId: string, isReview: boolean) => {
  const queryClient = useQueryClient();

  const { mutate: handleChangeLike } = useMutation({
    mutationFn: (req: { id: string; value: boolean }) =>
      changeLikeThisComment({ ...req, itemId }, isReview),
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEY.comments, itemId],
      });
      const prevComments = queryClient.getQueryData([
        QUERY_KEY.comments,
        itemId,
      ]);

      if (!prevComments) return;

      queryClient.setQueryData(
        [QUERY_KEY.comments, itemId],
        (oldData: CommentData) => ({
          ...oldData,
          pages: oldData.pages.map((page) => ({
            ...page,
            comments: page.comments.map((item) => {
              if (item.id === id) {
                toggleLike(item);
              }
              return item;
            }),
          })),
        })
      );

      return { prevComments };
    },
    onError: (_err, _variables, context) => {
      queryClient.setQueryData(
        [QUERY_KEY.comments, itemId],
        context?.prevComments
      );
    },
  });

  const { mutate: handleDeleteComment } = useMutation({
    mutationFn: (req: { id: string; commentId: string }) =>
      deleteComment(req, isReview),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.comments, itemId] });
    },
  });

  return { handleChangeLike, handleDeleteComment };
};
