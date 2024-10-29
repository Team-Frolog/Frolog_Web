'use client';

import React from 'react';
import BookInfo from '@/components/Book/BookInfo';
import { NewReviewForm } from '@/features/Review';
import { useScroll } from '@/hooks/gesture/useScroll';
import MainLayout from '@/layouts/MainLayout';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';
import { bottomSheet } from '@/modules/BottomSheet';
import { useRouter } from 'next/navigation';

interface Props {
  params: {
    bookId: string;
  };
}

function NewReviewPage({ params: { bookId } }: Props) {
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
        <NewReviewForm isbn={bookId} />
      </MainLayout>
    </>
  );
}

export default NewReviewPage;
