'use client';

import { ReviewDetail } from '@/features/Review';
import { getReviewDetail } from '@/features/Review/api/review.api';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';
import BookInfo from '@/components/Book/BookInfo';
import { useProfile } from '@/hooks/useProfile';
import { useRouter } from 'next/navigation';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import { useScroll } from '@/hooks/gesture/useScroll';
import { useSession } from 'next-auth/react';

interface Props {
  params: {
    reviewId: string;
  };
}

function ReviewPage({ params: { reviewId } }: Props) {
  useScroll({ categoryColor: undefined });
  const router = useRouter();
  const { data: reviewDetail } = useQuery({
    queryKey: ['reviewDetail', reviewId],
    queryFn: () => getReviewDetail(reviewId),
  });
  const { data: session } = useSession();
  const { profile } = useProfile(reviewDetail?.writer);
  const isRootUser = session?.user.id === profile?.id;

  if (!reviewDetail || !profile) return <></>;

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
      <MainLayout>
        <div className='flex w-full flex-col gap-[36px] bg-gray-900'>
          <h1 className='w-fit max-w-[350px] px-page text-heading-md-bold text-white'>
            {profile?.username}의 리뷰
          </h1>
          <BookInfo bookId={reviewDetail.isbn} />
        </div>
        <ReviewDetail reviewDetail={reviewDetail} />
      </MainLayout>
    </>
  );
}

export default ReviewPage;
