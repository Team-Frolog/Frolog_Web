'use client';

import BookInfo from '@/components/Book/BookInfo';
import { sheetData } from '@/data/ui/bottomSheet';
import { NewReviewForm } from '@/features/Review';
import { useScroll } from '@/hooks/gesture/useScroll';
import MainLayout from '@/layouts/MainLayout';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';
import bottomSheet from '@/modules/BottomSheet';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

function NewReviewPage() {
  const router = useRouter();
  useScroll({ categoryColor: undefined });
  const bookId = useSearchParams().get('id');

  if (!bookId) return null;

  return (
    <>
      <ResponsiveHeaderLayout
        onClick={() => {
          bottomSheet.open({
            sheetData: sheetData.leave_while_write,
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
