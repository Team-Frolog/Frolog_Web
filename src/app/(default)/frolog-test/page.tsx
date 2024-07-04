'use client';

import ProgressHeader from '@/components/common/header/ProgressHeader';
import LoadingPage from '@/components/testPage/LoadingPage';
import Question from '@/components/testPage/Question';
import { useTest } from '@/hooks/useTest';
import { useSearchParams } from 'next/navigation';
import React from 'react';

function TestPage() {
  const type = useSearchParams().get('type');
  const isLoading = useSearchParams().get('loading');
  const { testData, answers, handleClickAnswer, testStep, postTestResult } =
    useTest();

  if (isLoading) {
    postTestResult(type!);
    return <LoadingPage />;
  }

  return (
    <div className='flex h-full flex-col bg-white text-gray-900'>
      <ProgressHeader />
      <Question
        testData={testData}
        answers={answers}
        handleClickAnswer={handleClickAnswer}
        testStep={testStep}
      />
    </div>
  );
}

export default TestPage;
