import React from 'react';
import { Question } from '../../data/testQuestions';

interface Props {
  data: Question;
}

function QuestionTitle({ data }: Props) {
  return (
    <div>
      <h1 className='text-heading-lg-bold text-main'>{data.number}</h1>
      <h3 className='whitespace-pre-line text-title-xl-bold'>
        {data.question}
      </h3>
    </div>
  );
}

export default QuestionTitle;
