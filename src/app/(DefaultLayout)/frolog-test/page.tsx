'use client';

import ProgressHeader from '@/components/common/header/ProgressHeader';
import LoadingPage from '@/components/testPage/LoadingPage';
import Question from '@/components/testPage/Question';
import { useSearchParams } from 'next/navigation';
import React from 'react';

function TestPage() {
  const isLoading = useSearchParams().get('loading');

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className='flex h-full flex-col bg-white text-gray-900'>
      <ProgressHeader />
      <Question />
    </div>
  );
}

export default TestPage;
