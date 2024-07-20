import BookInfo from '@/components/Book/BookInfo';
import BookHeader from '@/components/Header/BookHeader';
import React from 'react';

interface Props {
  children: React.ReactNode;
  params: {
    id: string;
  };
}

function BookLayout({ children, params: { id } }: Props) {
  return (
    <>
      <BookHeader />
      <BookInfo bookId={id} />
      {children}
    </>
  );
}

export default BookLayout;
