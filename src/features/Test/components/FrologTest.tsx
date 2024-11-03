'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useTest } from '../hooks/useTest';
import LoadingPage from './LoadingPage';
import ProgressHeader from './ProgressHeader';
import Question from './Question/Question';

function FrologTest() {
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

export default FrologTest;
