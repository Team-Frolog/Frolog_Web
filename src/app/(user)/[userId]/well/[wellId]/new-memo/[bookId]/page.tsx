'use client';

import React from 'react';
import GenericForm from '@/components/Form/GenericForm';
import { MemoForm, MemoFormType, useAddMemo } from '@/features/Memo';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';

interface Props {
  params: {
    wellId: string;
    bookId: string;
  };
}

function NewMemoPage({ params: { wellId, bookId } }: Props) {
  const { handleAddMemo, isPending, isSuccess, isLoading } = useAddMemo(
    wellId,
    bookId
  );

  const defaultValues = {
    images: [],
    memo: '',
    isPublic: true,
  };

  return (
    <GenericForm<MemoFormType>
      onSubmit={(data) => handleAddMemo(data)}
      className='safe-screen flex w-full flex-1 flex-col bg-white'
      formOptions={{
        mode: 'onBlur',
        defaultValues,
      }}
    >
      <MemoForm
        defaultValues={defaultValues}
        isPending={isPending || isSuccess}
        bookId={bookId}
      />
      {isLoading && <LoadingOverlay theme='light' />}
    </GenericForm>
  );
}

export default NewMemoPage;
