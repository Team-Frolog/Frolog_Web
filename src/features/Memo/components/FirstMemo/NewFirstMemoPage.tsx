'use client';

import GenericForm from '@/components/Form/GenericForm';
import React from 'react';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import FirstMemoForm from './FirstMemoForm';
import { useFirstMemoForm } from '../../hooks/useFirstMemoForm';

interface Props {
  bookId: string;
}

function NewFirstMemoPage({ bookId }: Props) {
  const { isLoading } = useFirstMemoForm();

  return (
    <GenericForm<FirstMemoFormType>
      onSubmit={() => {}}
      className='safe-screen flex w-full flex-1 flex-col bg-white'
      formOptions={{
        mode: 'onBlur',
        defaultValues: {
          keywords: [],
          reason: '',
          memo: '',
          isPublic: true,
        },
      }}
    >
      <FirstMemoForm isLoading={isLoading} bookId={bookId} />
      {isLoading && <LoadingOverlay theme='light' />}
    </GenericForm>
  );
}

export default NewFirstMemoPage;
