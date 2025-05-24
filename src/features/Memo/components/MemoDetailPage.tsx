'use client';

import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import BookInfo from '@/components/Book/BookInfo';
import { useScroll } from '@/hooks/gesture/useScroll';
import { GetMemoRes, GetProfileRes } from '@frolog/frolog-api';
import DetailHeader from '@/components/Header/DetailHeader';
import { useUserActionActions } from '@/store/userActionStore';
import MemoDetail from './MemoDetail';

interface Props {
  memoData: GetMemoRes;
  profile: GetProfileRes;
  isFirstMemo?: boolean;
}

/** 메모 상세 페이지 */
function MemoDetailPage({ memoData, profile, isFirstMemo }: Props) {
  useScroll({ categoryColor: undefined });
  const { setIsInFeed } = useUserActionActions();

  useEffect(
    () => () => {
      setIsInFeed(false);
    },
    []
  );

  if (!memoData || !profile) return null;

  return (
    <>
      <DetailHeader profileUserId={profile.id} />
      <MainLayout extraClass='bg-white'>
        <div className='flex w-full flex-col gap-[36px] bg-gray-900'>
          <h1 className='w-fit max-w-[350px] px-page text-heading-md-bold text-white'>
            {profile.username}의 메모
          </h1>
          <BookInfo bookId={memoData.isbn} canClick />
        </div>
        <MemoDetail memoData={memoData} isFirstMemo={isFirstMemo} />
      </MainLayout>
    </>
  );
}

export default MemoDetailPage;
