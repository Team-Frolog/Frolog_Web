import ProgressHeader from '@/components/common/header/ProgressHeader';
import Question from '@/components/testPage/Question';
import React from 'react';

function TestPage() {
  return (
    <div className='flex h-full flex-col bg-white text-gray-900'>
      <ProgressHeader />
      <Question />
    </div>
  );
}

export default TestPage;
