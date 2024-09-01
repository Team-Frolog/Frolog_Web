'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { MemoFormType } from '../../types/form';
import MemoForm from './MemoForm';
import { addNewMemo } from '../../api/memo.api';

function NewMemoForm() {
  const router = useRouter();
  const id = useSearchParams().get('id');
  const { data: session } = useSession();
  const methods = useForm<MemoFormType>({
    mode: 'onBlur',
    defaultValues: {
      images: [],
      memo: '',
      isPublic: true,
    },
  });

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
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleAddMemo)}
        className='flex h-dvh w-full flex-1 flex-col bg-white'
      >
        <MemoForm />
      </form>
    </FormProvider>
  );
}

export default NewMemoForm;
