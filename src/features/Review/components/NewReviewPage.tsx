'use client';

import React from 'react';
import BookInfo from '@/components/Book/BookInfo';
import { useScroll } from '@/hooks/gesture/useScroll';
import MainLayout from '@/layouts/MainLayout';
import { GetBookRes } from '@frolog/frolog-api';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';
import { bottomSheet } from '@/modules/BottomSheet';
import { useRouter } from 'next/navigation';
import NewReviewForm from './ReviewForm/NewReviewForm';

interface Props {
  params: {
    wellId: string;
    userId: string;
    bookId: string;
  };
  bookData: GetBookRes;
}

/** 새로운 리뷰 작성 페이지 */
function NewReviewPage({
  params: { wellId, userId, bookId },
  bookData,
}: Props) {
  const router = useRouter();
  useScroll({ categoryColor: undefined });

  return (
    <>
      <ResponsiveHeaderLayout
        onClick={() => {
          bottomSheet.open({
            sheetKey: 'leave_while_write',
            onClick: () => {
              setTimeout(() => {
                router.back();
              }, 300);
            },
          });
        }}
      >
        <></>
      </ResponsiveHeaderLayout>
      <MainLayout>
        <BookInfo bookId={bookId} bookData={bookData} />
        <NewReviewForm isbn={bookId} userId={userId} wellId={wellId} />
      </MainLayout>
    </>
  );
}

export default NewReviewPage;
