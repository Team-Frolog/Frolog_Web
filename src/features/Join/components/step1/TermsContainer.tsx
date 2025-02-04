import React from 'react';
import { terms } from '@/data/terms/terms';
import CheckItem from './CheckItem';

/** 약관 리스트 */
function TermsContainer() {
  return (
    <div className='my-4 flex w-full flex-col gap-[20px]'>
      {terms.map((term) => (
        <CheckItem key={term.id} termsData={term} />
      ))}
    </div>
  );
}

export default TermsContainer;
