import BookInfo from '@/components/Book/BookInfo';
import TapHeader from '@/components/Header/TapHeader';
import React from 'react';

interface Props {
  children: React.ReactNode;
  params: {
    id: string;
  };
}

function ReviewMemoLayout({ children, params }: Props) {
  return (
    <>
      <TapHeader bookId={params.id} />
      <BookInfo bookId={params.id} />
      {children}
    </>
  );
}

export default ReviewMemoLayout;
