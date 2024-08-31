import React from 'react';
import { Question } from '../../data/test';

interface Props {
  data: Question;
}

function QuestionTitle({ data }: Props) {
  return (
    <div>
      <h1 className='text-heading-lg-bold text-main'>{data.number}</h1>
      <h3 className='text-title-xl-bold whitespace-pre-line'>
        {data.question}
      </h3>
    </div>
  );
}

export default QuestionTitle;
