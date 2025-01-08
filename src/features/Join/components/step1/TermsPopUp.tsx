'use client';

import PopUpLayout from '@/layouts/PopUpLayout';
import React from 'react';
import { Terms } from '@/data/terms/terms';
import TermsText from '@/components/Markdown/TermsText';

interface Props {
  /** 약관 데이터 객체 */
  termsData: Terms;
  /** 팝업 닫힘 핸들러 */
  closePopUp: () => void;
}

/** 약관 상세를 보여주는 팝업 */
function TermsPopUp({ termsData, closePopUp }: Props) {
  return (
    <PopUpLayout closePopUp={() => {}}>
      <div className='flex-column overflow-hidden px-[16px] py-[20px] text-gray-900'>
        <h5 className='w-full border-b border-gray-400 pb-[12px] text-center text-body-lg-bold'>
          {termsData.title}
        </h5>
        <TermsText text={termsData.view!} />
        <button
          type='button'
          onClick={closePopUp}
          className='w-full border-t border-gray-400 pt-[12px] text-body-lg-bold text-main'
        >
          확인
        </button>
      </div>
    </PopUpLayout>
  );
}

export default TermsPopUp;
