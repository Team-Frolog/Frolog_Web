'use client';

import React from 'react';
import GenericForm from '@/components/Form/GenericForm';
import { GetMemoRes } from '@frolog/frolog-api';
import { useMemoDetail } from '../hooks/useMemoDetail';
import MemoForm from './MemoForm/MemoForm';

interface Props {
  params: {
    wellId: string;
    bookId: string;
    memoId: string;
  };
  memoData: GetMemoRes;
}

/** 사용자 본인의 메모 상세 페이지 */
function MyMemoPage({ params: { wellId, bookId, memoId }, memoData }: Props) {
  const { memoDetail, handleEditMemo, isPending } = useMemoDetail(
    wellId,
    bookId,
    memoId,
    memoData
  );
  if (!memoDetail) return null;

  const defaultValues = {
    images: memoData.images,
    memo: memoData.content,
    isPublic: memoData.is_public,
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
