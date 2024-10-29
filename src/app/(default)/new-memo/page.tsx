'use client';

import React from 'react';
import GenericForm from '@/components/Form/GenericForm';
import { MemoForm, MemoFormType, useAddMemo } from '@/features/Memo';

function NewMemoPage() {
  const { handleAddMemo, isPending, isSuccess } = useAddMemo();

  const defaultValues = {
    images: [],
    memo: '',
    isPublic: true,
  };

  return (
    <GenericForm<MemoFormType>
      onSubmit={(data) => handleAddMemo(data)}
      className='flex h-dvh w-full flex-1 flex-col bg-white'
      formOptions={{
        mode: 'onBlur',
        defaultValues,
      }}
    >
      <MemoForm
        defaultValues={defaultValues}
        isPending={isPending || isSuccess}
      />
    </GenericForm>
  );
}

export default NewMemoPage;
