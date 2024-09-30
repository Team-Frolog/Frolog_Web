import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteComment } from '../api/comments.api';

export const useDeleteComment = (id: string, isReview: boolean) => {
  const queryClient = useQueryClient();

  const { mutate: handleDeleteComment } = useMutation({
    mutationFn: (req: { id: string; commentId: string }) =>
      deleteComment(req, isReview),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', id] });
    },
  });

  return { handleDeleteComment };
};
