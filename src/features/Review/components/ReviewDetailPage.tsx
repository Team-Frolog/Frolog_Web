'use client';

import React, { useEffect } from 'react';
import { useScroll } from '@/hooks/gesture/useScroll';
import MainLayout from '@/layouts/MainLayout';
import BookInfo from '@/components/Book/BookInfo';
import { useUserActionActions } from '@/store/userActionStore';
import { ReviewDetail } from '@/features/Review';
import DetailHeader from '@/components/Header/DetailHeader';
import { GetReviewRes, GetProfileRes } from '@frolog/frolog-api';

interface Props {
  reviewData: GetReviewRes;
  profile: GetProfileRes;
}

/** 리뷰 상세 페이지 */
function ReviewDetailPage({ reviewData, profile }: Props) {
  useScroll({ categoryColor: undefined });
  const { setIsInFeed } = useUserActionActions();

  useEffect(
    () => () => {
      setIsInFeed(false);
    },
    []
  );

  if (!reviewData || !profile) return null;

  return (
    <>
      <DetailHeader profileUserId={profile.id} />
      <MainLayout>
        <div className='flex w-full flex-col gap-[36px] bg-gray-900'>
          <h1 className='w-fit max-w-[350px] px-page text-heading-md-bold text-white'>
            {profile.username}의 리뷰
          </h1>
          <BookInfo bookId={reviewData.isbn} canClick />
        </div>
        <ReviewDetail reviewDetail={reviewData} />
      </MainLayout>
    </>
  );
}

export default ReviewDetailPage;
