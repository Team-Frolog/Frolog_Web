import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { addNewMemo } from '../api/memo.api';
import { MemoFormType } from '../types/form';

export const useAddMemo = () => {
  const router = useRouter();
  const id = useSearchParams().get('id');
  const { data: session } = useSession();

  const { mutate: handleAddMemo } = useMutation({
    mutationFn: async (data: MemoFormType) => {
      const req = {
        writer: session!.user.id,
        isbn: id!,
        content: data.memo,
        is_public: data.isPublic,
        images: data.images,
      };

      const result = addNewMemo(req);
      return result;
    },
    onSuccess: () => router.replace(`/well-book/${id}/memo`),
  });

  return { handleAddMemo };
};
