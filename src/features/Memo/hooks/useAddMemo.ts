'use client';

import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { TapKey } from '@/constants/taps';
import { useUserId } from '@/store/sessionStore';
import { addNewMemo } from '../api/memo.api';
import { MemoFormType } from '../types/form';

/** 메모 작성 핸들링 훅 */
export const useAddMemo = (wellId: string, bookId: string) => {
  const router = useRouter();
  const userId = useUserId();
  const [isLoading, setIsLoading] = useState(false);
  const currentTap = useSearchParams().get('tap') || TapKey.WELL;

  useEffect(
    () => () => {
      setIsLoading(false);
    },
    []
  );

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
      router.replace(
        `/${userId}/well/${wellId}/book/${bookId}/memo?tap=${currentTap}`
      ),
  });

  return { handleAddMemo, isLoading };
};
