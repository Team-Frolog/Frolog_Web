'use client';

import React from 'react';
import GenericForm from '@/components/Form/GenericForm';
import { MemoForm, MemoFormType, useMemoDetail } from '@/features/Memo';

interface Props {
  params: {
    wellId: string;
    bookId: string;
    memoId: string;
  };
}

function WellBookMemoPage({ params: { wellId, bookId, memoId } }: Props) {
  const { memoDetail, handleEditMemo, isPending } = useMemoDetail(
    wellId,
    bookId,
    memoId
  );
  if (!memoDetail) return <></>;

  const defaultValues = {
    images: memoDetail.images,
    memo: memoDetail.content,
    isPublic: memoDetail.is_public,
  };

  return (
    <GenericForm<MemoFormType>
      onSubmit={(data) => handleEditMemo(data)}
      className='safe-screen flex w-full flex-1 flex-col bg-white'
      formOptions={{
        mode: 'onBlur',
        defaultValues,
      }}
    >
      <MemoForm
        defaultValues={defaultValues}
        isPending={isPending}
        bookId={memoDetail.isbn}
      />
    </GenericForm>
  );
}

export default WellBookMemoPage;
