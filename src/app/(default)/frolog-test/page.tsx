'use client';

import {
  Question,
  useTest,
  LoadingPage,
  ProgressHeader,
} from '@/features/Test';
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
    <>
      <ProgressHeader />
      <Question
        testData={testData}
        answers={answers}
        handleClickAnswer={handleClickAnswer}
        testStep={testStep}
      />
    </>
  );
}

export default TestPage;
