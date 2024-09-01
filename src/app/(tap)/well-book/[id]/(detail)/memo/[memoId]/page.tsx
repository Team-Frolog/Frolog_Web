'use client';

import React from 'react';
import GenericForm from '@/components/Form/GenericForm';
import { MemoForm, MemoFormType } from '@/features/Memo';
import { useMemoDetail } from '@/features/Memo/hooks/useMemoDetail';

interface Props {
  memoId: string;
}

function WellBookMemoPage({ memoId }: Props) {
  const { memoDetail, handleEditMemo } = useMemoDetail(memoId);
  if (!memoDetail) return <></>;

  return (
    <GenericForm<MemoFormType>
      onSubmit={handleEditMemo}
      className='flex h-dvh w-full flex-1 flex-col bg-white'
      formOptions={{
        mode: 'onBlur',
        defaultValues: {
          images: memoDetail.images,
          memo: memoDetail.content,
          isPublic: memoDetail.is_public,
        },
      }}
    >
      <MemoForm />
    </GenericForm>
  );
}

export default WellBookMemoPage;
