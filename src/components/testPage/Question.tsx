'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import QuestionTitle from './QuestionTitle';
import QuestionItem from './QuestionItem';
import { questions } from '@/data/test';
import { PAGES } from '@/constants/pageConfig';

function Question() {
  const router = useRouter();
  const [answers, setAnswers] = useState<number[]>(Array(7).fill(0));
  const step = Number(useSearchParams().get('step')!);
  const data = questions[step - 1];

  const handleClickAnswer = (id: number) => {
    setAnswers((prev) => {
      const newArr = [...prev];
      newArr[step - 1] = id;
      return newArr;
    });

    setTimeout(() => {
      router.push(`${PAGES.TEST}?step=${step + 1}`);
    }, 500);
  };

  return (
    <div className='flex flex-1 flex-col gap-[50px] p-page mobile:gap-0'>
      <QuestionTitle data={data} />
      <div className='flex flex-1 flex-col justify-normal gap-[20px] mobile:justify-center'>
        {data.answers.map((item) => (
          <QuestionItem
            key={item.id}
            data={item}
            isSelected={answers[step - 1] === item.id}
            onClick={() => handleClickAnswer(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
