'use client';

import React, { useEffect } from 'react';
import { STORAGE_KEY } from '@/constants/storage';
import { useStepActions } from '@/store/stepStore';
import { useTest } from '../hooks/useTest';
import LoadingPage from './LoadingPage';
import ProgressHeader from './ProgressHeader';
import Question from './Question/Question';

/** 독서 성향 테스트 컴포넌트 */
function FrologTest() {
  const { resetStep } = useStepActions();
  const { testData, answers, handleClickAnswer, step, isLoading } = useTest();

  useEffect(
    () => () => {
      sessionStorage.removeItem(STORAGE_KEY.testAnswerKey);
      resetStep();
    },
    []
  );

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
