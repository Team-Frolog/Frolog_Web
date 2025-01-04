import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
import { getComments } from '../../api/comments.api';
import { GetCommentsRes } from '../../types/comment';

interface Props {
  isReview: boolean;
  contentId: string;
  parentId: string;
  more: boolean;
}

export const useChildComments = ({
  isReview,
  contentId,
  parentId,
  more,
}: Props) => {
  const { data, isFetched } = useQuery<GetCommentsRes>({
    queryKey: [QUERY_KEY.childComments, parentId],
    queryFn: () => getComments({ id: contentId, isReview, depth: 1, parentId }),
    enabled: more,
    staleTime: 0,
  });

  return {
    childComments: data ? data.comments : [],
    isFetched,
  };
};
