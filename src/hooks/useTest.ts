import { PAGES } from '@/constants/pageConfig';
import { TEST_ANSWER_KEY } from '@/constants/storage';
import { Question, questions } from '@/data/test';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useTest = () => {
  const step = Number(useSearchParams().get('step')!);
  const router = useRouter();
  const [testData, setTestData] = useState<Question>(questions[0]);
  const [answers, setAnswers] = useState<number[]>(() => {
    const savedAnswers = localStorage.getItem(TEST_ANSWER_KEY);
    return savedAnswers ? JSON.parse(savedAnswers) : [];
  });

  const handleClickAnswer = (id: number) => {
    setAnswers((prev) => {
      const newArr = [...prev];
      newArr[step - 1] = id;
      localStorage.setItem(TEST_ANSWER_KEY, JSON.stringify(newArr));
      return newArr;
    });

    setTimeout(() => {
      router.push(`${PAGES.TEST}?step=${step + 1}`);
    }, 500);
  };

  useEffect(() => {
    setTestData(questions[step - 1]);

    const currentAnswers = answers.slice(0, step);
    localStorage.setItem(TEST_ANSWER_KEY, JSON.stringify(currentAnswers));
    setAnswers(currentAnswers);
  }, [step]);

  return { step, answers, handleClickAnswer, testData };
};
