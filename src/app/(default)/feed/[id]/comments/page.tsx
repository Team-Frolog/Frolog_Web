import BackHeader from '@/components/Header/BackHeader';
import CommentInput from '@/features/Feed/components/CommentList/CommentInput';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function CommentPage() {
  return (
    <div className='flex w-full flex-1 flex-col'>
      <BackHeader />
      <MainLayout>
        <div>dd</div>
      </MainLayout>
      <CommentInput />
    </div>
  );
}

export default CommentPage;
