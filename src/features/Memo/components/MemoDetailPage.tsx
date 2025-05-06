'use client';

import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import BookInfo from '@/components/Book/BookInfo';
import { useProfile } from '@/hooks/user/useProfile';
import { useScroll } from '@/hooks/gesture/useScroll';
import DetailHeader from '@/components/Header/DetailHeader';
import { useUserActionActions } from '@/store/userActionStore';
import { useMemoDetailPage } from '../hooks/useMemoDetailPage';
import MemoDetail from './MemoDetail';

interface Props {
  /** 메모 id */
  memoId: string;
  /** 첫 메모 여부 */
  isFirstMemo?: boolean;
}

/** 메모 상세 페이지 */
function MemoDetailPage({ memoId, isFirstMemo }: Props) {
  useScroll({ categoryColor: undefined });
  const { memoDetail } = useMemoDetailPage(memoId);
  const { profile } = useProfile(memoDetail?.writer);
  const { setIsInFeed } = useUserActionActions();

  useEffect(
    () => () => {
      setIsInFeed(false);
    },
    []
  );

  if (!memoDetail || !profile) return null;

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
        <MemoDetail memoData={memoDetail} isFirstMemo={isFirstMemo} />
      </MainLayout>
    </>
  );
}

export default MemoDetailPage;
