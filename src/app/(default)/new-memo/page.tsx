'use client';

import React from 'react';
import GenericForm from '@/components/Form/GenericForm';
import { MemoForm, MemoFormType } from '@/features/Memo';
import { addNewMemo } from '@/features/Memo/api/memo.api';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { PostMemoRes } from '@frolog/frolog-api';

function NewMemoPage() {
  const router = useRouter();
  const id = useSearchParams().get('id');
  const { data: session } = useSession();

  const defaultValues = {
    images: [],
    memo: '',
    isPublic: true,
  };

  const { mutate: handleAddMemo } = useMutation<
    PostMemoRes,
    Error,
    MemoFormType
  >({
    mutationFn: async (data: MemoFormType) => {
      const req = {
        writer: session!.user.id,
        isbn: id!,
        content: data.memo,
        is_public: data.isPublic,
        images: data.images,
      };

      const result = await addNewMemo(req);
      return result;
    },
    onSuccess: () => router.replace(`/well-book/${id}/memo`),
  });

  return (
    <GenericForm<MemoFormType>
      onSubmit={(data) => {
        if (!session || !id) return;
        handleAddMemo(data);
      }}
      className='flex h-dvh w-full flex-1 flex-col bg-white'
      formOptions={{
        mode: 'onBlur',
        defaultValues,
      }}
    >
      <MemoForm defaultValues={defaultValues} />
    </GenericForm>
  );
}

export default NewMemoPage;
