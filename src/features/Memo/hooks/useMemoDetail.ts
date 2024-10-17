import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { editMemoDetail, getMemoDetail } from '../api/memo.api';
import { MemoFormType } from '../types/form';

export const useMemoDetail = (bookId: string, memoId: string) => {
  const router = useRouter();
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const { data: memoDetail } = useQuery({
    queryKey: ['memo', memoId],
    queryFn: () => getMemoDetail({ id: memoId }),
  });

  const { mutate: handleEditMemo } = useMutation({
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
      router.replace(`${session!.user.id}}/well-book/${bookId}/memo`);
    },
  });

  return { memoDetail, handleEditMemo };
};
