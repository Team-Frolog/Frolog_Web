import { useQuery } from '@tanstack/react-query';
import {
  SearchMemoCommentRes,
  SearchReviewCommentRes,
} from '@frolog/frolog-api';
import { getMemoComments, getReviewComments } from '../api/comments.api';

export const useChildComments = (
  isReview: boolean,
  parentId: string,
  more: boolean
) => {
  const { data, isFetched } = useQuery<
    SearchMemoCommentRes | SearchReviewCommentRes
  >({
    queryKey: ['childComments', parentId],
    queryFn: () =>
      isReview ? getReviewComments(parentId) : getMemoComments(parentId),
    enabled: more,
  });

  return { childComments: data ? data.comments : [], isFetched };
};
