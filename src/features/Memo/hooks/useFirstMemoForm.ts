'use client';

import { PostMemoReq } from '@frolog/frolog-api';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { toast } from '@/modules/Toast';
import { getPath } from '@/utils/getPath';
import { addNewMemo } from '../api/memo.api';

export const useFirstMemoForm = (
  userId: string,
  wellId: string,
  bookId: string
) => {
  const router = useCustomRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { mutate: addNewFirstMemo } = useMutation({
    mutationFn: (req: PostMemoReq) => addNewMemo(req),
    onSuccess: () => {
      setIsLoading(false);
      router.replace(
        `/flash/first_memo?linkUrl=${getPath.memoList(userId, wellId, bookId)}`
      );
    },
    onError: () => {
      setIsLoading(false);
      toast.error('다시 시도해주세요.');
    },
  });

  const handleSubmitForm = (data: FirstMemoFormType) => {
    setIsLoading(true);
    const req: PostMemoReq = {
      writer: userId,
      isbn: bookId,
      content: data.memo,
      is_public: data.isPublic,
      images: [],
      is_first: true,
      tags: data.keywords,
    };

    addNewFirstMemo(req);
  };

  useEffect(
    () => () => {
      setIsLoading(false);
    },
    []
  );

  return { isLoading, handleSubmitForm };
};
