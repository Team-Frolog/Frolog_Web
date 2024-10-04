import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getComments } from '../../api/comments.api';
import { Comments, GetCommentsRes } from '../../types/comment';
import { changeLikeThisComment } from '../../api/activity.api';
import { toggleLike } from '../../utils/toggleLike';

interface Props {
  isReview: boolean;
  itemId: string;
  parentId: string;
  more: boolean;
}

export const useChildComments = ({
  isReview,
  itemId,
  parentId,
  more,
}: Props) => {
  const queryClient = useQueryClient();

  const { data, isFetched } = useQuery<GetCommentsRes>({
    queryKey: ['childComments', parentId],
    queryFn: () => getComments({ id: itemId, isReview, depth: 1, parentId }),
    enabled: more,
  });

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

  return {
    childComments: data ? data.comments : [],
    isFetched,
    handleChangeLikeChild,
  };
};
