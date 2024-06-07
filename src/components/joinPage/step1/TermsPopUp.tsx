'use client';

import { ITerms } from '@/data/terms';
import PopUpLayout from '@/layouts/PopUpLayout';
import React from 'react';
import TermsText from '../TermsText';

interface Props {
  termsData: ITerms;
  closePopUp: () => void;
}

function TermsPopUp({ termsData, closePopUp }: Props) {
  return (
    <PopUpLayout closePopUp={() => {}}>
      <div className='flex flex-col overflow-hidden px-[16px] py-[20px] text-gray-900'>
        <h5 className='w-full border-b border-gray-400 pb-[12px] text-center text-body_lg_bold'>
          {termsData.title}
        </h5>
        <TermsText text={termsData.view!} />
        <button
          type='button'
          onClick={closePopUp}
          className='w-full border-t border-gray-400 pt-[12px] text-body_lg_bold text-main'
        >
          확인
        </button>
      </div>
    </PopUpLayout>
  );
}

export default TermsPopUp;
