'use client';

import React from 'react';
import GenericForm from '@/components/Form/GenericForm';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import { MemoFormType } from '../types/form';
import MemoForm from './MemoForm/MemoForm';
import { useAddMemo } from '../hooks/useAddMemo';

interface Props {
  params: {
    wellId: string;
    bookId: string;
  };
}

function NewMemoPage({ params: { wellId, bookId } }: Props) {
  const { handleAddMemo, isLoading } = useAddMemo(wellId, bookId);

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
        isLoading={isLoading}
        bookId={bookId}
      />
      {isLoading && <LoadingOverlay theme='light' />}
    </GenericForm>
  );
}

export default NewMemoPage;
