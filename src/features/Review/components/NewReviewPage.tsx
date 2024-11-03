'use client';

import React from 'react';
import BookInfo from '@/components/Book/BookInfo';
import { useScroll } from '@/hooks/gesture/useScroll';
import MainLayout from '@/layouts/MainLayout';
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
}

function NewReviewPage({ params: { wellId, userId, bookId } }: Props) {
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
        <BookInfo bookId={bookId} />
        <NewReviewForm isbn={bookId} userId={userId} wellId={wellId} />
      </MainLayout>
    </>
  );
}

export default NewReviewPage;
