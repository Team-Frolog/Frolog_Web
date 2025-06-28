'use client';

import GenericForm from '@/components/Form/GenericForm';
import React from 'react';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import FirstMemoForm from './FirstMemoForm';
import { useFirstMemoDetail } from '../../hooks/useFirstMemoDetail';

interface Props {
  bookId: string;
  memoId: string;
}

function EditFirstMemoPage({ bookId, memoId }: Props) {
  const { isLoading, handleSubmitForm, firstMemoData } =
    useFirstMemoDetail(memoId);

  const defaultValues = {
    keywords: firstMemoData?.tags,
    memo: firstMemoData?.content,
    isPublic: firstMemoData?.is_public,
  };

  return (
    <GenericForm<FirstMemoFormType>
      onSubmit={handleSubmitForm}
      className='safe-screen flex w-full flex-1 flex-col bg-white'
      formOptions={{
        mode: 'onBlur',
        defaultValues,
      }}
    >
      <FirstMemoForm isLoading={isLoading} bookId={bookId} />
      {isLoading && <LoadingOverlay theme='light' />}
    </GenericForm>
  );
}

export default EditFirstMemoPage;
