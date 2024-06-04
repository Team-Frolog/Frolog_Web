import { ICONS } from '@/constants/icons';
import { ITermsOfUse } from '@/data/terms';
import Image from 'next/image';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import TermsPopUp from './TermsPopUp';
import { AnimatePresence } from 'framer-motion';

interface Props {
  termsData: ITermsOfUse;
}

function CheckItem({ termsData }: Props) {
  const [openDetail, setOpenDetail] = useState<boolean>(false);
  const { watch, setValue } = useFormContext();
  const isIncluded = ['age', 'termsOfUse', 'privacyPolicy'].includes(
    termsData.name
  );
  const isChecked = isIncluded ? true : watch(`terms.${termsData.name}`);

  return (
    <div
      className='flex justify-between gap-[20px]'
      onClick={
        isIncluded
          ? () => {}
          : () => setValue(`terms.${termsData.name}`, !isChecked)
      }
    >
      <div className='flex gap-[12px]'>
        <button type='button' className='h-[24px] w-[24px]'>
          <Image
            src={
              isChecked
                ? ICONS.common.check.circle_checked
                : ICONS.common.check.circle_unchecked
            }
            alt='check'
            width={24}
            height={24}
          />
        </button>
        <span className='flex-1 cursor-default text-body_lg_bold'>
          {termsData.label}
        </span>
      </div>
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
