import React from 'react';
import QuestionTitle from './QuestionTitle';
import QuestionItem from './QuestionItem';
import { Question as QuestionType } from '../../data/testQuestions';

interface Props {
  testData: QuestionType;
  answers: number[];
  handleClickAnswer: (id: number) => void;
  testStep: number;
}

function Question({ testData, answers, handleClickAnswer, testStep }: Props) {
  return (
    <div className='flex w-full flex-1 flex-col gap-[50px] bg-white p-page text-gray-900 mobile:gap-0'>
      <QuestionTitle data={testData} />
      <div className='flex flex-1 flex-col justify-normal gap-[20px] mobile:justify-center'>
        {testData.answers.map((item) => (
          <QuestionItem
            key={item.id}
            data={item}
            isSelected={answers[testStep - 1] === item.id}
            onClick={() => handleClickAnswer(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
