import { PAGES } from '@/constants/page';
import { TEST_ANSWER_KEY } from '@/constants/storage';
import { Question, questions } from '@/data/test';
import { useStepActions, useTestStep } from '@/store/stepStore';
import { testEvaluator } from '@/utils/testEvaluator';
import { useEffect, useState } from 'react';

export const useTest = () => {
  const testStep = useTestStep();
  const { moveTestStep } = useStepActions();
  const [testData, setTestData] = useState<Question>(questions[0]);
  const [answers, setAnswers] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const savedAnswers = localStorage.getItem(TEST_ANSWER_KEY);
      return savedAnswers ? JSON.parse(savedAnswers) : [];
    } else {
      return [];
    }
  });

  const handleClickAnswer = (id: number) => {
    setAnswers((prev) => {
      const newArr = [...prev];
      newArr[testStep - 1] = id;
      localStorage.setItem(TEST_ANSWER_KEY, JSON.stringify(newArr));
      return newArr;
    });

    if (testStep === 7) {
      const result = testEvaluator(answers);
      window.location.replace(`${PAGES.TEST_RESULT}?type=${result}`);
    } else {
      setTimeout(() => {
        moveTestStep(1);
      }, 500);
    }
  };

  useEffect(() => {
    setTestData(questions[testStep - 1]);

    const currentAnswers = answers.slice(0, testStep);
    localStorage.setItem(TEST_ANSWER_KEY, JSON.stringify(currentAnswers));
    setAnswers(currentAnswers);
  }, [testStep]);

  return { testStep, answers, handleClickAnswer, testData };
};
