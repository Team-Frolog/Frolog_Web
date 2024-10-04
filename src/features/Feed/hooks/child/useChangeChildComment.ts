import { useMutation, useQueryClient } from '@tanstack/react-query';
import { changeLikeThisComment } from '../../api/activity.api';
import { Comments, GetCommentsRes } from '../../types/comment';
import { toggleLike } from '../../utils/toggleLike';
import { deleteComment } from '../../api/comments.api';

interface Props {
  isReview: boolean;
  itemId: string;
  parentId: string;
}

export const useChangeChildComment = ({
  isReview,
  itemId,
  parentId,
}: Props) => {
  const queryClient = useQueryClient();

  const { mutate: handleChangeLikeChild } = useMutation({
    mutationFn: (req: { id: string; value: boolean }) =>
      changeLikeThisComment({ ...req, itemId }, isReview),
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({
        queryKey: ['childComments', parentId],
      });
      const prevComments = queryClient.getQueryData([
        'childComments',
        parentId,
      ]);

      if (!prevComments) return;

      queryClient.setQueryData(
        ['childComments', parentId],
        (oldData: GetCommentsRes) => ({
          ...oldData,
          comments: oldData.comments.map((item: Comments) => {
            if (item.id === id) {
              toggleLike(item);
            }
            return item;
          }),
        })
      );

      return { prevComments };
    },
    onError: (_err, _variables, context) => {
      queryClient.setQueryData(
        ['childComments', parentId],
        context?.prevComments
      );
    },
  });

  const { mutate: handleDeleteComment } = useMutation({
    mutationFn: (req: { id: string; commentId: string }) =>
      deleteComment(req, isReview),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['childComments', parentId] });
    },
  });

  return { handleChangeLikeChild, handleDeleteComment };
};
