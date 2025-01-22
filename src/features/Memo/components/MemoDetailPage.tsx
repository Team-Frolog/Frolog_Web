'use client';

import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import BookInfo from '@/components/Book/BookInfo';
import { useProfile } from '@/hooks/useProfile';
import { useScroll } from '@/hooks/gesture/useScroll';
import DetailHeader from '@/components/Header/DetailHeader';
import { useMemoDetailPage } from '../hooks/useMemoDetailPage';
import MemoDetail from './MemoDetail';

interface Props {
  /** 메모 id */
  memoId: string;
}

/** 메모 상세 페이지 */
function MemoDetailPage({ memoId }: Props) {
  useScroll({ categoryColor: undefined });
  const { memoDetail } = useMemoDetailPage(memoId);
  const { profile } = useProfile(memoDetail?.writer);

  if (!memoDetail || !profile) return <></>;

  return (
    <>
      <DetailHeader profileUserId={profile.id} />
      <MainLayout extraClass='bg-white'>
        <div className='flex w-full flex-col gap-[36px] bg-gray-900'>
          <h1 className='w-fit max-w-[350px] px-page text-heading-md-bold text-white'>
            {profile.username}의 메모
          </h1>
          <BookInfo bookId={memoDetail.isbn} canClick />
        </div>
        <MemoDetail memoData={memoDetail} />
      </MainLayout>
    </>
  );
}

export default MemoDetailPage;
