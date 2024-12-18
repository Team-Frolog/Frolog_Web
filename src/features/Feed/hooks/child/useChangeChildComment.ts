import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
import { changeLikeThisComment } from '../../api/activity.api';
import { Comments, GetCommentsRes } from '../../types/comment';
import { toggleLike } from '../../utils/toggleLike';
import { deleteComment } from '../../api/comments.api';
import { CommentData } from '../comment/useChangeComment';

interface Props {
  isReview: boolean;
  itemId: string;
  parentId: string;
  isFirst: boolean;
}

export const useChangeChildComment = ({
  isReview,
  itemId,
  parentId,
  isFirst,
}: Props) => {
  const queryClient = useQueryClient();

  const { mutate: handleChangeLikeChild } = useMutation({
    mutationFn: (req: { id: string; value: boolean }) =>
      changeLikeThisComment({ ...req, itemId }, isReview),
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({
        queryKey: isFirst
          ? [QUERY_KEY.comments, itemId]
          : [QUERY_KEY.childComments, parentId],
      });
      const prevData = queryClient.getQueryData(
        isFirst
          ? [QUERY_KEY.comments, itemId]
          : [QUERY_KEY.childComments, parentId]
      );

      if (!prevData) return;

      if (isFirst) {
        queryClient.setQueryData(
          [QUERY_KEY.comments, itemId],
          (oldData: CommentData) => ({
            ...oldData,
            pages: oldData.pages.map((page) => ({
              ...page,
              comments: page.comments.map((item: Comments) => {
                if (item.id === parentId && item.replies) {
                  const prev = item.replies[0];
                  toggleLike(prev);
                  item.replies[0] = prev;
                }
                return item;
              }),
            })),
          })
        );
      } else {
        queryClient.setQueryData(
          [QUERY_KEY.childComments, parentId],
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
      }

      return { prevData };
    },
    onError: (_err, _variables, context) => {
      queryClient.setQueryData(
        [QUERY_KEY.childComments, parentId],
        context?.prevData
      );
    },
  });

  const { mutate: handleDeleteComment } = useMutation({
    mutationFn: (req: { id: string; commentId: string }) =>
      deleteComment(req, isReview),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.childComments, parentId],
      });
    },
  });

  return { handleChangeLikeChild, handleDeleteComment };
};
