'use client';

import React from 'react';
import GenericForm from '@/components/Form/GenericForm';
import { useMemoDetail } from '../hooks/useMemoDetail';
import MemoForm from './MemoForm/MemoForm';

interface Props {
  params: {
    wellId: string;
    bookId: string;
    memoId: string;
  };
}

/** 사용자 본인의 메모 상세 페이지 */
function MyMemoPage({ params: { wellId, bookId, memoId } }: Props) {
  const { memoDetail, handleEditMemo, isPending } = useMemoDetail(
    wellId,
    bookId,
    memoId
  );
  if (!memoDetail) return null;

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
        isLoading={isPending}
        bookId={memoDetail.isbn}
      />
    </GenericForm>
  );
}

export default MyMemoPage;
