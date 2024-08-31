'use client';

import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import CheckButton from '@/components/Button/CheckButton';
import TermsPopUp from './TermsPopUp';
import { Terms } from '../../data/terms/terms';

interface Props {
  termsData: Terms;
}

function CheckItem({ termsData }: Props) {
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
        <span className='text-body-lg-bold flex-1 cursor-default'>
          {termsData.label}
        </span>
      </div>
      {termsData.view && (
        <button
          type='button'
          onClick={() => setOpenDetail(true)}
          className='text-body-md w-[30px] text-end text-gray-600'
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
