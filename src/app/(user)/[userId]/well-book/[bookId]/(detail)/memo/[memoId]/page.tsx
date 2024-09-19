'use client';

import React from 'react';
import GenericForm from '@/components/Form/GenericForm';
import { MemoForm, MemoFormType } from '@/features/Memo';
import { useMemoDetail } from '@/features/Memo/hooks/useMemoDetail';

interface Props {
  params: {
    bookId: string;
    memoId: string;
  };
}

function WellBookMemoPage({ params: { bookId, memoId } }: Props) {
  const { memoDetail, handleEditMemo } = useMemoDetail(bookId, memoId);
  if (!memoDetail) return <></>;

  const defaultValues = {
    images: memoDetail.images,
    memo: memoDetail.content,
    isPublic: memoDetail.is_public,
  };

  return (
    <GenericForm<MemoFormType>
      onSubmit={(data) => handleEditMemo(data)}
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

export default WellBookMemoPage;
