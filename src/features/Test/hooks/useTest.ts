'use client';

import { PAGES } from '@/constants/page';
import { TEST_ANSWER_KEY, TEST_RESULT_FOR_EDIT } from '@/constants/storage';
import { useStepActions, useTestStep } from '@/store/stepStore';
import { editProfile } from '@/api/profile.api';
import { getSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { EditProfileReq } from '@frolog/frolog-api';
import { testEvaluator } from '../utils/testEvaluator';
import { Question, questions } from '../data/test';

export const useTest = () => {
  const testStep = useTestStep();
  const router = useRouter();
  const callback = useSearchParams().get('callbackUrl');
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

  const { mutate: editTestTypeOfUser } = useMutation({
    mutationFn: (reqData: EditProfileReq) => editProfile(reqData),
  });

  const postTestResult = async (type: string) => {
    if (callback) {
      sessionStorage.setItem(TEST_RESULT_FOR_EDIT, type);
      return;
    }

    const session = await getSession();
    if (session) {
      const reqData = {
        id: session?.user.id,
        reading_preference: type,
      };
      editTestTypeOfUser(reqData);
    }
  };

  useEffect(() => {
    if (testStep <= 7) {
      setTestData(questions[testStep - 1]);
      const currentAnswers = answers.slice(0, testStep);
      sessionStorage.setItem(TEST_ANSWER_KEY, JSON.stringify(currentAnswers));
      setAnswers(currentAnswers);
    }
    if (testStep === 8) {
      const testResult = testEvaluator(answers);
      moveTestStep(1);
      router.replace(
        `${PAGES.TEST}?loading=true&type=${testResult}${callback ? `&callbackUrl=${callback}` : ''}`
      );
    }
  }, [testStep]);

  return { testStep, answers, handleClickAnswer, testData, postTestResult };
};
