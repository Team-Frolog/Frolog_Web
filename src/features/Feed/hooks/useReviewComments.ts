import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import useCommentStore from '@/store/commentStore';
import { PostReviewCommentReq } from '@frolog/frolog-api';
import { addReviewComment, getReviewComments } from '../api/comments.api';

export const useReviewComments = (id: string) => {
  const queryClient = useQueryClient();
  const setCommentUser = useCommentStore((state) => state.setCommentUser);

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['comments', id],
    queryFn: ({ pageParam }) => getReviewComments(id, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const isLastPage =
        Math.ceil(lastPage.count / lastPage.limit) === lastPage.page + 1;
      return isLastPage ? undefined : lastPage.page + 1;
    },
    select: (fetchedData) => ({
      pages: fetchedData
        ? fetchedData.pages.flatMap((page) => page.comments)
        : [],
      pageParams: fetchedData.pageParams,
    }),
    refetchOnWindowFocus: false,
  });

  const isEmpty = !data?.pages.length;

  const { mutate: handleAddComment } = useMutation({
    mutationFn: (req: PostReviewCommentReq) => addReviewComment(req),
    onSuccess: () => {
      setCommentUser(undefined);
      queryClient.invalidateQueries({ queryKey: ['comments', id] });
    },
  });

  return {
    comments: data ? data?.pages : [],
    handleAddComment,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isEmpty,
  };
};
