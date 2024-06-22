import { Answer } from '@/data/test';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  data: Answer;
  isSelected: boolean;
}

function QuestionItem({ data, isSelected, ...props }: Props) {
  return (
    <button
      {...props}
      className={`box-border w-full cursor-pointer rounded-[12px] p-[30px] text-center ${isSelected ? 'bg-main text-white' : 'bg-gray-200'}`}
    >
      {data.value}
    </button>
  );
}

export default QuestionItem;
