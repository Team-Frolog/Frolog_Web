import BackHeader from '@/components/Header/BackHeader';
import { CommentInput, CommentList } from '@/features/Feed';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function CommentPage() {
  return (
    <div className='flex w-full flex-1 flex-col'>
      <BackHeader />
      <MainLayout>
        <CommentList />
      </MainLayout>
      <CommentInput />
    </div>
  );
}

export default CommentPage;
