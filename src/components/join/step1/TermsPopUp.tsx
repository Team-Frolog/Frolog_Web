'use client';

import { ITermsOfUse, termsOfUse } from '@/data/terms';
import PopUpLayout from '@/layouts/PopUpLayout';
import React from 'react';

interface Props {
  termsData: ITermsOfUse;
  closePopUp: () => void;
}

function TermsPopUp({ termsData, closePopUp }: Props) {
  return (
    <PopUpLayout closePopUp={() => {}}>
      <div className='flex flex-col overflow-hidden px-[10px] py-[20px] text-gray-900'>
        <h5 className='text-body_lg_bold w-full border-b border-gray-400 pb-[12px] text-center'>
          {termsData.title}
        </h5>
        <p className='text-body_lg flex-1 overflow-auto whitespace-pre-wrap py-[20px]'>
          {termsData.view}
        </p>
        <button
          type='button'
          onClick={closePopUp}
          className='text-main text-body_lg_bold w-full border-t border-gray-400 pt-[12px]'
        >
          확인
        </button>
      </div>
    </PopUpLayout>
  );
}

export default TermsPopUp;
