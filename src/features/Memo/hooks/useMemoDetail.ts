import { useUserId } from '@/store/sessionStore';
import { QUERY_KEY } from '@/constants/query';
import { getPath } from '@/utils/getPath';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { GetMemoRes } from '@frolog/frolog-api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { editMemoDetail, getMemoDetail } from '../api/memo.api';
import { MemoFormType } from '../types/form';

/** 메모 상세 쿼리 및 수정 핸들링 훅 */
export const useMemoDetail = (
  wellId: string,
  bookId: string,
  memoId: string,
  memoData: GetMemoRes
) => {
  const { replace, router } = useCustomRouter('well');
  const userId = useUserId();
  const queryClient = useQueryClient();

  const { data: memoDetail } = useQuery({
    queryKey: [QUERY_KEY.memoDetail, memoId],
    queryFn: () => getMemoDetail({ id: memoId }),
    staleTime: 0,
    initialData: memoData,
  });

  const { mutate: handleEditMemo, isPending } = useMutation({
    mutationFn: (data: MemoFormType) =>
      editMemoDetail({
        id: memoId,
        content: memoDetail?.content === data.memo ? undefined : data.memo,
        is_public:
          memoDetail?.is_public === data.isPublic ? undefined : data.isPublic,
        images: memoDetail?.images === data.images ? undefined : data.images,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.memoDetail, memoId],
      });

      replace(getPath.memoList(userId!, wellId, bookId));
      router.back();
    },
  });

  return { memoDetail, handleEditMemo, isPending };
};
