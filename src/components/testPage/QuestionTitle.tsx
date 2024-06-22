import { Question } from '@/data/test';
import React from 'react';

interface Props {
  data: Question;
}

function QuestionTitle({ data }: Props) {
  return (
    <div>
      <h1 className='text-h_lg_bold text-main'>{data.number}</h1>
      <h3 className='text-title_xl_bold whitespace-pre-line'>{data.question}</h3>
    </div>
  );
}

export default QuestionTitle;
