import BookInfo from '@/components/Book/BookInfo';
import MainLayout from '@/layouts/MainLayout';
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
      <MainLayout>
        <BookInfo bookId={id} />
        {children}
      </MainLayout>
    </>
  );
}

export default BookLayout;
