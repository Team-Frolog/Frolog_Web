'use client';

import { ReviewDetail, useReviewDetailPage } from '@/features/Review';
import React from 'react';
import { useScroll } from '@/hooks/gesture/useScroll';
import MainLayout from '@/layouts/MainLayout';
import BookInfo from '@/components/Book/BookInfo';
import { useProfile } from '@/hooks/useProfile';
import DetailHeader from '@/components/Header/DetailHeader';

interface Props {
  /** 리뷰 id */
  reviewId: string;
}

/** 리뷰 상세 페이지 */
function ReviewDetailPage({ reviewId }: Props) {
  useScroll({ categoryColor: undefined });
  const { reviewDetail } = useReviewDetailPage(reviewId);
  const { profile } = useProfile(reviewDetail?.writer);

  if (!reviewDetail || !profile) return <></>;

  return (
    <>
      <DetailHeader profileUserId={profile.id} />
      <MainLayout>
        <div className='flex w-full flex-col gap-[36px] bg-gray-900'>
          <h1 className='w-fit max-w-[350px] px-page text-heading-md-bold text-white'>
            {profile.username}의 리뷰
          </h1>
          <BookInfo bookId={reviewDetail.isbn} canClick />
        </div>
        <ReviewDetail reviewDetail={reviewDetail} />
      </MainLayout>
    </>
  );
}

export default ReviewDetailPage;
