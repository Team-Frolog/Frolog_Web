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
  const { resetTestStep } = useStepActions();
  const { testData, answers, handleClickAnswer, testStep, postTestResult } =
    useTest();

  useEffect(() => {
    return () => {
      sessionStorage.removeItem(TEST_ANSWER_KEY);
      resetTestStep();
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
        testStep={testStep}
      />
    </>
  );
}

export default FrologTest;
