import React from 'react';
import BookInfo from '@/components/Book/BookInfo';
import TitleHeader from '@/components/Header/TitleHeader';
import MainLayout from '@/layouts/MainLayout';
import { AboutBook } from '@/features/Book';
import { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: '도서 정보',
};

function BookPage({ params: { id } }: Props) {
  return (
    <>
      <TitleHeader
        type='no_border'
        theme='dark'
        title='도서 상세 페이지'
        hasButton={false}
      />
      <MainLayout>
        <BookInfo bookId={id} />
        <AboutBook bookId={id} />
      </MainLayout>
    </>
  );
}

export default BookPage;
