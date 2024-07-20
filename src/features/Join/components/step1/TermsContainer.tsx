import React from 'react';
import CheckItem from './CheckItem';
import { terms } from '../../data/terms/terms';

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
