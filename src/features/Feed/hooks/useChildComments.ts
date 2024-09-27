import { useQuery } from '@tanstack/react-query';
import { getMemoComments, getReviewComments } from '../api/comments.api';
import { GetCommentsRes } from '../types/comment';

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
  const { data, isFetched } = useQuery<GetCommentsRes>({
    queryKey: ['childComments', parentId],
    queryFn: () =>
      isReview
        ? getReviewComments({ reviewId: itemId, depth: 1, parentId })
        : getMemoComments({ memoId: itemId, depth: 1, parentId }),
    enabled: more,
  });

  return { childComments: data ? data.comments : [], isFetched };
};
