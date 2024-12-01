'use client';

import React, { useEffect } from 'react';
import { STORAGE_KEY } from '@/constants/storage';
import { useStepActions } from '@/store/stepStore';
import { useTest } from '../hooks/useTest';
import LoadingPage from './LoadingPage';
import ProgressHeader from './ProgressHeader';
import Question from './Question/Question';

function FrologTest() {
  const { resetStep } = useStepActions();
  const { testData, answers, handleClickAnswer, step, isLoading } = useTest();

  useEffect(() => {
    return () => {
      sessionStorage.removeItem(STORAGE_KEY.TEST_ANSWER_KEY);
      resetStep();
    };
  }, []);

  if (isLoading === 'true') {
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
