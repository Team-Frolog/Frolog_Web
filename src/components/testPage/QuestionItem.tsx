import { Answer } from '@/data/test';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  data: Answer;
  isSelected: boolean;
}

function QuestionItem({ data, isSelected, ...props }: Props) {
  return (
    <button
      type='button'
      {...props}
      className={`box-border w-full cursor-pointer whitespace-pre-line rounded-[12px] p-[30px] text-center ${isSelected ? 'bg-main text-body_lg_bold text-white' : 'bg-gray-200 text-body_lg'}`}
    >
      {data.value}
    </button>
  );
}

export default QuestionItem;
