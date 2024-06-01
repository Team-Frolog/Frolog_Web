import { termsOfUse } from '@/data/terms';
import React from 'react';
import CheckItem from './CheckItem';

function TermsContainer() {
  return (
    <div className='my-[16px] flex w-full flex-col gap-[20px]'>
      {termsOfUse.map((terms) => (
        <CheckItem key={terms.id} text={terms.label} fieldName={terms.name} />
      ))}
    </div>
  );
}

export default TermsContainer;
