'use client';

import BookInfo from '@/components/Book/BookInfo';
import { NewReviewForm } from '@/features/Review';
import { useScroll } from '@/hooks/gesture/useScroll';
import MainLayout from '@/layouts/MainLayout';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';
import { usePopUpActions } from '@/store/popUpStore';
import { useSearchParams } from 'next/navigation';
import React from 'react';

function NewReviewPage() {
  useScroll({ categoryColor: undefined });
  const bookId = useSearchParams().get('id');
  const { changePopUpState } = usePopUpActions();

  if (!bookId) return null;

  return (
    <>
      <ResponsiveHeaderLayout
        onClick={() => changePopUpState('isOpenAlertSheet', true)}
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
