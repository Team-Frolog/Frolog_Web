import { useMutation } from '@tanstack/react-query';
import { deleteComment } from '../api/comments.api';

export const useDeleteComment = (isReview: boolean) => {
  const { mutate: handleDeleteComment } = useMutation({
    mutationFn: (req: { id: string; commentId: string }) =>
      deleteComment(req, isReview),
  });

  return { handleDeleteComment };
};
