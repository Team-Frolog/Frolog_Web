'use client';

import React from 'react';
import GenericForm from '@/components/Form/GenericForm';
import { MemoForm, MemoFormType } from '@/features/Memo';
import { addNewMemo } from '@/features/Memo/api/memo.api';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

function NewMemoPage() {
  const router = useRouter();
  const id = useSearchParams().get('id');
  const { data: session } = useSession();

  const handleAddMemo = (data: MemoFormType) => {
    if (!session || !id) return;

    addNewMemo({
      writer: session.user.id,
      isbn: id,
      content: data.memo,
      is_public: data.isPublic,
      images: data.images,
    }).then((res) => {
      if (res?.result) {
        router.push(`/well-book/${res.id}/memo`);
      }
    });
  };

  return (
    <GenericForm<MemoFormType>
      onSubmit={handleAddMemo}
      className='flex h-dvh w-full flex-1 flex-col bg-white'
      formOptions={{
        mode: 'onBlur',
        defaultValues: {
          images: [],
          memo: '',
          isPublic: true,
        },
      }}
    >
      <MemoForm />
    </GenericForm>
  );
}

export default NewMemoPage;
