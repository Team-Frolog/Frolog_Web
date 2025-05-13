'use client';

import { EditMemoReq } from '@frolog/frolog-api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { QUERY_KEY } from '@/constants/query';
import { useRouter } from 'next/navigation';
import { toast } from '@/modules/Toast';
import { editMemoDetail, getMemoDetail } from '../api/memo.api';

export const useFirstMemoDetail = (memoId: string) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { data: firstMemoData } = useQuery({
    queryKey: [QUERY_KEY.firstMemoDetail, memoId],
    queryFn: () => getMemoDetail({ id: memoId }),
    enabled: !!memoId,
  });

  const { mutate: editFirstMemo } = useMutation({
    mutationFn: (req: EditMemoReq) => editMemoDetail(req),
    onSuccess: () => {
      setIsLoading(false);
      router.back();
    },
    onError: () => {
      setIsLoading(false);
      toast.error('다시 시도해주세요.');
    },
  });

  const handleSubmitForm = (data: FirstMemoFormType) => {
    setIsLoading(true);
    const req: EditMemoReq = {
      id: memoId,
      content: data.memo,
      is_public: data.isPublic,
      images: [],
      tags: data.keywords,
    };

    editFirstMemo(req);
  };

  useEffect(
    () => () => {
      setIsLoading(false);
    },
    []
  );

  return { isLoading, handleSubmitForm, firstMemoData };
};
