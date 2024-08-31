import React from 'react';
import { Answer } from '../../data/test';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  data: Answer;
  isSelected: boolean;
}

function QuestionItem({ data, isSelected, ...props }: Props) {
  return (
    <button
      type='button'
      {...props}
      className={`box-border w-full cursor-pointer whitespace-pre-line rounded-[12px] p-[30px] text-center ${isSelected ? 'text-body-lg-bold bg-main text-white' : 'text-body-lg bg-gray-200'}`}
    >
      {data.value}
    </button>
  );
}

export default QuestionItem;
