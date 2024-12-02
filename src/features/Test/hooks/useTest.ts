'use client';

import { PAGES } from '@/constants/page';
import { STORAGE_KEY } from '@/constants/storage';
import { useStep, useStepActions } from '@/store/stepStore';
import { editProfile } from '@/api/profile.api';
import { getSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { EditProfileReq } from '@frolog/frolog-api';
import { testEvaluator } from '../utils/testEvaluator';
import { Question, questions } from '../data/test';

export const useTest = () => {
  const step = useStep();
  const router = useRouter();
  const callback = useSearchParams().get('callbackUrl');
  const testType = useSearchParams().get('type');
  const isLoading = useSearchParams().get('loading');
  const [isEdited, setIsEdited] = useState(false);
  const { moveStep } = useStepActions();
  const [testData, setTestData] = useState<Question>(questions[0]);
  const [answers, setAnswers] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const savedAnswers = sessionStorage.getItem(STORAGE_KEY.TEST_ANSWER_KEY);
      return savedAnswers ? JSON.parse(savedAnswers) : [];
    }
    return [];
  });

  const handleClickAnswer = (id: number) => {
    setAnswers((prev) => {
      const newArr = [...prev];
      newArr[step - 1] = id;
      sessionStorage.setItem(
        STORAGE_KEY.TEST_ANSWER_KEY,
        JSON.stringify(newArr)
      );
      return newArr;
    });

    setTimeout(() => {
      moveStep(1);
    }, 500);
  };

  const { mutate: editTestTypeOfUser } = useMutation({
    mutationFn: (reqData: EditProfileReq) => editProfile(reqData),
  });

  const postTestResult = async (type: string) => {
    if (callback) {
      sessionStorage.setItem(STORAGE_KEY.TEST_RESULT_FOR_EDIT, type);
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
    if (isLoading && !isEdited) {
      postTestResult(testType!);
      setIsEdited(true);
    }
  }, [isLoading, testType, isEdited]);

  useEffect(() => {
    if (step <= 7) {
      setTestData(questions[step - 1]);
      const currentAnswers = answers.slice(0, step);
      sessionStorage.setItem(
        STORAGE_KEY.TEST_ANSWER_KEY,
        JSON.stringify(currentAnswers)
      );
      setAnswers(currentAnswers);
    }
    if (step === 8) {
      const testResult = testEvaluator(answers);
      moveStep(1);
      router.replace(
        `${PAGES.TEST}?loading=true&type=${testResult}${callback ? `&callbackUrl=${callback}` : ''}`
      );
    }
  }, [step]);

  return { step, answers, handleClickAnswer, testData, isLoading };
};
