import React from 'react';
import { Answer } from '../../data/testQuestions';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 아이템 데이터 */
  data: Answer;
  /** 선택 상태 */
  isSelected: boolean;
}

/** 테스트 선택지 컴포넌트 */
function QuestionItem({ data, isSelected, ...props }: Props) {
  return (
    <button
      type='button'
      {...props}
      className={`box-border w-full cursor-pointer whitespace-pre-line rounded-[12px] p-[30px] text-center ${isSelected ? 'bg-main text-body-lg-bold text-white' : 'bg-gray-200 text-body-lg'}`}
    >
      {data.value}
    </button>
  );
}

export default QuestionItem;
