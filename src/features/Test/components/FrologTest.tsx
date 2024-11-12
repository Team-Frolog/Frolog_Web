'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { TEST_ANSWER_KEY } from '@/constants/storage';
import { useStepActions } from '@/store/stepStore';
import { useTest } from '../hooks/useTest';
import LoadingPage from './LoadingPage';
import ProgressHeader from './ProgressHeader';
import Question from './Question/Question';

function FrologTest() {
  const type = useSearchParams().get('type');
  const isLoading = useSearchParams().get('loading');
  const { resetStep } = useStepActions();
  const { testData, answers, handleClickAnswer, step, postTestResult } =
    useTest();

  useEffect(() => {
    return () => {
      sessionStorage.removeItem(TEST_ANSWER_KEY);
      resetStep();
    };
  }, []);

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
        testStep={step}
      />
    </>
  );
}

export default FrologTest;
