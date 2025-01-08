import { useState } from 'react';
import {
  useMutation,
  useQueryClient,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query';
import useCommentStore from '@/store/commentStore';
import { QUERY_KEY } from '@/constants/query';
import { addNewComment, getComments } from '../../api/comments.api';
import { GetCommentsRes, PostComments } from '../../types/comment';

/** 댓글 쿼리 훅 */
export const useComments = (id: string, isReview: boolean) => {
  const [comment, setComment] = useState('');
  const queryClient = useQueryClient();
  const setCommentUser = useCommentStore((state) => state.setCommentUser);

  const { data, fetchNextPage, hasNextPage, isFetching, isFetched } =
    useSuspenseInfiniteQuery<GetCommentsRes>({
      queryKey: [QUERY_KEY.comments, id],
      queryFn: ({ pageParam }) =>
        getComments({ id, isReview, page: pageParam as number, depth: 0 }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        const totalPages = Math.ceil(lastPage.count / lastPage.limit);
        const isLastPage = totalPages === lastPage.page + 1 || totalPages === 0;
        return isLastPage ? undefined : lastPage.page + 1;
      },
      select: (fetchedData) => ({
        pages: fetchedData
          ? fetchedData.pages.flatMap((page) => page.comments)
          : [],
        pageParams: fetchedData.pageParams,
      }),
      staleTime: 0,
    });

  const isEmpty = !data?.pages.length;

  const { mutate: handleAddComment } = useMutation({
    mutationFn: (req: PostComments) => addNewComment(req, isReview),
    onSuccess: (_, req) => {
      setCommentUser(undefined);
      setComment('');
      if (req.parent) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.childComments, req.parent],
        });
      }
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.comments, id] });
    },
  });

  return {
    comments: data ? data?.pages : [],
    comment,
    setComment,
    handleAddComment,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isEmpty,
    isFetched,
  };
};
