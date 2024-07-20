import React from 'react';
import { Question } from '../../data/test';

interface Props {
  data: Question;
}

function QuestionTitle({ data }: Props) {
  return (
    <div>
      <h1 className='text-h_lg_bold text-main'>{data.number}</h1>
      <h3 className='whitespace-pre-line text-title_xl_bold'>
        {data.question}
      </h3>
    </div>
  );
}

export default QuestionTitle;
