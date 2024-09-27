import { useQuery } from '@tanstack/react-query';
import { getMemoComments, getReviewComments } from '../api/comments.api';
import { GetCommentsRes } from '../types/comment';

export const useChildComments = (
  isReview: boolean,
  parentId: string,
  more: boolean
) => {
  const { data, isFetched } = useQuery<GetCommentsRes>({
    queryKey: ['childComments', parentId],
    queryFn: () =>
      isReview ? getReviewComments(parentId) : getMemoComments(parentId),
    enabled: more,
  });

  return { childComments: data ? data.comments : [], isFetched };
};
