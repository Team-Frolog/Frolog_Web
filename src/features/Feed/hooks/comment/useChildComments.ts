import { useQuery } from '@tanstack/react-query';
import { getComments } from '../../api/comments.api';
import { GetCommentsRes } from '../../types/comment';

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
    queryFn: () => getComments({ id: itemId, isReview, depth: 1, parentId }),
    enabled: more,
  });

  return { childComments: data ? data.comments : [], isFetched };
};
