import React from 'react';
import QuestionTitle from './QuestionTitle';
import QuestionItem from './QuestionItem';
import { Question as QuestionType } from '../../data/testQuestions';

interface Props {
  /** 단계별 테스트 데이터 */
  testData: QuestionType;
  /** 현재까지 선택한 답안 리스트 */
  answers: number[];
  /** 답안 선택 핸들러 */
  handleClickAnswer: (id: number) => void;
  /** 현재 스텝 */
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
