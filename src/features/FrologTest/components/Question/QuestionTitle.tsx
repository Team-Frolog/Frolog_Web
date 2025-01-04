import React from 'react';
import { Question } from '../../data/testQuestions';

interface Props {
  /** 단계별 테스트 데이터 */
  data: Question;
}

/** 테스트 페이지 내 타이틀 컴포넌트 */
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
