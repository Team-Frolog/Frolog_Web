'use client';

import React from 'react';
import QuestionTitle from './QuestionTitle';
import QuestionItem from './QuestionItem';
import { useTest } from '@/hooks/useTest';

function Question() {
  const { testData, answers, handleClickAnswer, step } = useTest();

  return (
    <div className='flex flex-1 flex-col gap-[50px] p-page mobile:gap-0'>
      <QuestionTitle data={testData} />
      <div className='flex flex-1 flex-col justify-normal gap-[20px] mobile:justify-center'>
        {testData.answers.map((item) => (
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
