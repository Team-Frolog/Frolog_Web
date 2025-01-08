import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
import { getComments } from '../../api/comments.api';
import { GetCommentsRes } from '../../types/comment';

interface Props {
  /** 리뷰인지 여부 */
  isReview: boolean;
  /** 댓글 대상이 되는 컨텐츠의 id */
  contentId: string;
  /** 부모 댓글 id */
  parentId: string;
  /** 더보기 클릭 여부 */
  more: boolean;
}

/** 자식 댓글 쿼리 훅 */
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
