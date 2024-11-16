import { useRouter } from 'next/navigation';
import { useUserId } from '@/store/sessionStore';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { editMemoDetail, getMemoDetail } from '../api/memo.api';
import { MemoFormType } from '../types/form';

export const useMemoDetail = (
  wellId: string,
  bookId: string,
  memoId: string
) => {
  const router = useRouter();
  const userId = useUserId();
  const queryClient = useQueryClient();

  const { data: memoDetail } = useQuery({
    queryKey: ['memo', memoId],
    queryFn: () => getMemoDetail({ id: memoId }),
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
      queryClient.invalidateQueries({ queryKey: ['memo', memoId] });
      router.replace(`/${userId}/well/${wellId}/book/${bookId}/memo`);
      router.back();
    },
  });

  return { memoDetail, handleEditMemo, isPending };
};
