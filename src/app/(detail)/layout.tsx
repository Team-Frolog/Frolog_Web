import BookInfo from '@/components/Book/BookInfo';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';
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
      <ResponsiveHeaderLayout onClick={() => {}}>
        <></>
      </ResponsiveHeaderLayout>
      <BookInfo bookId={id} />
      {children}
    </>
  );
}

export default BookLayout;
