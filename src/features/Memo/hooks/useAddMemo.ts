import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { addNewMemo } from '../api/memo.api';
import { MemoFormType } from '../types/form';

export const useAddMemo = (bookId: string) => {
  const router = useRouter();
  const { data: session } = useSession();

  const {
    mutate: handleAddMemo,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (data: MemoFormType) => {
      const req = {
        writer: session!.user.id,
        isbn: bookId,
        content: data.memo,
        is_public: data.isPublic,
        images: data.images,
      };

      const result = addNewMemo(req);
      return result;
    },
    onSuccess: () =>
      router.replace(`${session!.user.id}/well-book/${bookId}/memo`),
  });

  return { handleAddMemo, isPending, isSuccess };
};
