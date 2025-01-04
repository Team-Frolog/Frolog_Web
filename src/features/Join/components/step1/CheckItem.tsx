'use client';

import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import CheckButton from '@/components/Button/CheckButton';
import { Terms } from '@/data/terms/terms';
import TermsPopUp from './TermsPopUp';

export interface CheckItemProps {
  /** 약관 데이터 객체 */
  termsData: Terms;
}

/** 약관 동의 체크박스 아이템 */
function CheckItem({ termsData }: CheckItemProps) {
  const [openDetail, setOpenDetail] = useState<boolean>(false);
  const { watch, setValue } = useFormContext();
  const isChecked = watch(`consents.${termsData.name}.given`);

  return (
    <div className='flex justify-between gap-[20px]'>
      <div
        className='flex gap-[12px]'
        onClick={() => setValue(`consents.${termsData.name}.given`, !isChecked)}
      >
        <CheckButton isChecked={isChecked} />
        <span className='flex-1 cursor-default text-body-lg-bold'>
          {termsData.label}
        </span>
      </div>
      {termsData.view && (
        <button
          type='button'
          onClick={() => setOpenDetail(true)}
          className='w-[30px] text-end text-body-md text-gray-600'
        >
          보기
        </button>
      )}
      <AnimatePresence>
        {openDetail && (
          <TermsPopUp
            termsData={termsData}
            closePopUp={() => setOpenDetail(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default CheckItem;
