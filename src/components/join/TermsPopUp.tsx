'use client';

import { termsOfUse } from '@/data/terms';
import PopUpLayout from '@/layouts/PopUpLayout';
import React from 'react';

function TermsPopUp() {
  return (
    <PopUpLayout closePopUp={() => {}}>
      <div className='flex flex-col gap-[20px] overflow-hidden px-[10px] py-[20px] text-gray-900'>
        <h5 className='text-body_lg_bold w-full border-b border-gray-400 pb-[12px] text-center'>
          제목
        </h5>
        <p className='text-body_lg flex-1 overflow-auto whitespace-pre-wrap'>
          {termsOfUse[1].view}
        </p>
        <button className='text-main text-body_lg_bold w-full border-t border-gray-400 pt-[12px]'>
          확인
        </button>
      </div>
    </PopUpLayout>
  );
}

export default TermsPopUp;
