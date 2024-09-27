import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { PostMemoCommentReq } from '@frolog/frolog-api';
import { addMemoComment, getMemoComments } from '../api/comments.api';

export const useMemoComments = (id: string) => {
  const queryClient = useQueryClient();

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['comments', id],
    queryFn: ({ pageParam }) => getMemoComments(id, pageParam),
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
    mutationFn: (req: PostMemoCommentReq) => addMemoComment(req),
    onSuccess: () => {
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
