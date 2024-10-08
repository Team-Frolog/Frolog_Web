'use client';

import React from 'react';
import { MemoDetail } from '@/features/Memo';
import { getMemoDetail } from '@/features/Memo/api/memo.api';
import { useQuery } from '@tanstack/react-query';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';
import MainLayout from '@/layouts/MainLayout';
import BookInfo from '@/components/Book/BookInfo';
import { useProfile } from '@/hooks/useProfile';
import { useRouter } from 'next/navigation';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import { useScroll } from '@/hooks/gesture/useScroll';
import { useSession } from 'next-auth/react';

interface Props {
  params: {
    memoId: string;
  };
}

function MemoPage({ params: { memoId } }: Props) {
  useScroll({ categoryColor: undefined });
  const router = useRouter();
  const { data: memoDetail } = useQuery({
    queryKey: ['memo', memoId],
    queryFn: () => getMemoDetail({ id: memoId }),
  });
  const { data: session } = useSession();
  const { profile } = useProfile(memoDetail?.writer);
  const isMe = session?.user.id === profile?.id;

  if (!memoDetail || !profile) return <></>;

  return (
    <>
      <ResponsiveHeaderLayout onClick={() => router.back()}>
        {!isMe && (
          <div className='flex flex-1 justify-end'>
            <button
              type='button'
              onClick={() =>
                runWhenLoggedIn(() => router.push(`/${profile.id}/well`))
              }
              className='text-body-lg-bold text-main'
            >
              우물에 놀러가기
            </button>
          </div>
        )}
      </ResponsiveHeaderLayout>
      <MainLayout>
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

export default MemoPage;
