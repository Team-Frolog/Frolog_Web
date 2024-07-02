import { PAGES } from '@/constants/page';
import { TEST_ANSWER_KEY } from '@/constants/storage';
import { Question, questions } from '@/data/test';
import { useStepActions, useTestStep } from '@/store/stepStore';
import { testEvaluator } from '@/utils/testEvaluator';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import userAPI from '@/app/api/user.api';

export const useTest = () => {
  const testStep = useTestStep();
  const { moveTestStep } = useStepActions();
  const [testData, setTestData] = useState<Question>(questions[0]);
  const [answers, setAnswers] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const savedAnswers = sessionStorage.getItem(TEST_ANSWER_KEY);
      return savedAnswers ? JSON.parse(savedAnswers) : [];
    }
    return [];
  });

  const handleClickAnswer = (id: number) => {
    setAnswers((prev) => {
      const newArr = [...prev];
      newArr[testStep - 1] = id;
      sessionStorage.setItem(TEST_ANSWER_KEY, JSON.stringify(newArr));
      return newArr;
    });

    setTimeout(() => {
      moveTestStep(1);
    }, 500);
  };

  useEffect(() => {
    if (testStep <= 7) {
      setTestData(questions[testStep - 1]);
      const currentAnswers = answers.slice(0, testStep);
      sessionStorage.setItem(TEST_ANSWER_KEY, JSON.stringify(currentAnswers));
      setAnswers(currentAnswers);
    } else {
      setTimeout(async () => {
        const testResult = testEvaluator(answers);
        const session = await getSession();

        if (session) {
          const reqData = {
            id: session?.user.id,
            reading_preference: testResult.toString(),
          };

          const result = await userAPI.editTestType(reqData);

          if (result) {
            window.location.replace(
              `${PAGES.TEST}?loading=true&type=${testResult}`
            );
          }
        }
      }, 1000);
    }
  }, [testStep]);

  return { testStep, answers, handleClickAnswer, testData };
};
