import { PAGES } from '@/constants/page';
import { TEMP_ACCOUNT_KEY, TEST_ANSWER_KEY } from '@/constants/storage';
import { Question, questions } from '@/data/test';
import { useStepActions, useTestStep } from '@/store/stepStore';
import { testEvaluator } from '@/utils/testEvaluator';
import { useEffect, useState } from 'react';
import { useLogin } from './auth/useLogin';
import { useRouter } from 'next/navigation';
import { ERROR_ALERT } from '@/constants/message';
import { getSession } from 'next-auth/react';
import { userAPI } from '@/app/api/user.api';

export const useTest = () => {
  const testStep = useTestStep();
  const router = useRouter();
  const { userLogin } = useLogin('test');
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

    setTimeout(() => {
      moveTestStep(1);
    }, 500);
  };

  const handleLogin = async () => {
    const account = localStorage.getItem(TEMP_ACCOUNT_KEY);

    if (account) {
      await userLogin(JSON.parse(account));
    } else {
      window.alert(ERROR_ALERT);
      router.back();
    }
  };

  useEffect(() => {
    if (testStep <= 7) {
      setTestData(questions[testStep - 1]);
      const currentAnswers = answers.slice(0, testStep);
      localStorage.setItem(TEST_ANSWER_KEY, JSON.stringify(currentAnswers));
      setAnswers(currentAnswers);
    } else {
      handleLogin();

      setTimeout(async () => {
        const testResult = testEvaluator(answers);
        const session = await getSession();

        const reqData = {
          id: session?.user.id!,
          reading_preference: testResult.toString(),
        };

        const result = await userAPI.editTestType(reqData);

        if (result) {
          window.location.replace(
            `${PAGES.TEST}?loading=true&type=${testResult}`
          );
        }
      }, 1000);
    }
  }, [testStep]);

  return { testStep, answers, handleClickAnswer, testData };
};
