import { terms } from '@/data/terms/terms';
import React from 'react';
import CheckItem from './CheckItem';

function TermsContainer() {
  return (
    <div className='my-[16px] flex w-full flex-col gap-[20px]'>
      {terms.map((term) => (
        <CheckItem key={term.id} termsData={term} />
      ))}
    </div>
  );
}

export default TermsContainer;
