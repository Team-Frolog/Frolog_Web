'use client';

import React from 'react';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';
import MainLayout from '@/layouts/MainLayout';
import BookInfo from '@/components/Book/BookInfo';
import { useProfile } from '@/hooks/useProfile';
import { useRouter } from 'next/navigation';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import { useScroll } from '@/hooks/gesture/useScroll';
import { useSession } from 'next-auth/react';
import { useMemoDetailPage } from '../hooks/useMemoDetailPage';
import MemoDetail from './MemoDetail';

interface Props {
  memoId: string;
}

function MemoDetailPage({ memoId }: Props) {
  const router = useRouter();
  const { data: session } = useSession();
  useScroll({ categoryColor: undefined });
  const { memoDetail } = useMemoDetailPage(memoId);
  const { profile } = useProfile(memoDetail?.writer);
  const isRootUser = session?.user.id === profile?.id;

  if (!memoDetail || !profile) return <></>;

  return (
    <>
      <ResponsiveHeaderLayout onClick={() => router.back()}>
        {!isRootUser && (
          <div className='flex flex-1 justify-end'>
            <button
              type='button'
              onClick={() =>
                runWhenLoggedIn(
                  () => router.push(`/${profile.id}/well`),
                  'feed'
                )
              }
              className='text-body-lg-bold text-main'
            >
              우물에 놀러가기
            </button>
          </div>
        )}
      </ResponsiveHeaderLayout>
      <MainLayout extraClass='bg-white'>
        <div className='flex w-full flex-col gap-[36px] bg-gray-900'>
          <h1 className='w-fit max-w-[350px] px-page text-heading-md-bold text-white'>
            {profile.username}의 메모
          </h1>
          <BookInfo bookId={memoDetail.isbn} />
        </div>
        <MemoDetail memoData={memoDetail} />
      </MainLayout>
    </>
  );
}

export default MemoDetailPage;