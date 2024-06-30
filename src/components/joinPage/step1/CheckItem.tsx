'use client';

import { ITerms } from '@/data/terms';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import CheckButton from '@/components/common/button/CheckButton';
import TermsPopUp from './TermsPopUp';

interface Props {
  termsData: ITerms;
}

function CheckItem({ termsData }: Props) {
  const [openDetail, setOpenDetail] = useState<boolean>(false);
  const { watch, setValue } = useFormContext();
  const isChecked = watch(`consents.${termsData.name}.given`);

  return (
    <div className='flex justify-between gap-[20px]'>
      <button
        type='button'
        className='flex gap-[12px]'
        onClick={() => setValue(`consents.${termsData.name}.given`, !isChecked)}
      >
        <CheckButton isChecked={isChecked} />
        <span className='flex-1 cursor-default text-body_lg_bold'>
          {termsData.label}
        </span>
      </button>
      {termsData.view && (
        <button
          type='button'
          onClick={() => setOpenDetail(true)}
          className='w-[30px] text-end text-body_md text-gray-600'
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
