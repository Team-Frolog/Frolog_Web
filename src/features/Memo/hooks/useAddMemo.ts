'use client';

import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { getPath } from '@/utils/getPath';
import { useUserId } from '@/store/sessionStore';
import { addNewMemo } from '../api/memo.api';

/** 메모 작성 핸들링 훅 */
export const useAddMemo = (wellId: string, bookId: string) => {
  const { replace } = useCustomRouter('well');
  const userId = useUserId();
  const [isLoading, setIsLoading] = useState(false);

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
    onSuccess: () => replace(getPath.memoList(userId!, wellId, bookId)),
  });

  return { handleAddMemo, isLoading };
};
