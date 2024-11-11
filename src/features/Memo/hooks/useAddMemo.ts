'use client';

import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useUserId } from '@/store/sessionStore';
import { addNewMemo } from '../api/memo.api';
import { MemoFormType } from '../types/form';

export const useAddMemo = (wellId: string, bookId: string) => {
  const router = useRouter();
  const userId = useUserId();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  const { mutate: handleAddMemo } = useMutation({
    mutationFn: async (data: MemoFormType) => {
      setIsLoading(true);

      const req = {
        writer: userId!,
        isbn: bookId,
        content: data.memo,
        is_public: data.isPublic,
        images: data.images,
      };

      const result = addNewMemo(req);
      return result;
    },
    onSuccess: () =>
      router.replace(`/${userId}/well/${wellId}/book/${bookId}/memo`),
  });

  return { handleAddMemo, isLoading };
};
