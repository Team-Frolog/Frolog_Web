import { ICONS } from '@/constants/icons';
import { ITermsOfUse, termsOfUse } from '@/data/terms';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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
  const value = isIncluded ? true : watch(`terms.${termsData.name}`);

  return (
    <div className='flex justify-between'>
      <div className='flex gap-[12px]'>
        <button
          type='button'
          onClick={
            isIncluded
              ? () => {}
              : () => setValue(`terms.${termsData.name}`, !value)
          }
        >
          <Image
            src={
              value
                ? ICONS.common.check.circle_checked
                : ICONS.common.check.circle_unchecked
            }
            alt='check'
            width={24}
            height={24}
          />
        </button>
        <span className='text-body_lg_bold'>{termsData.label}</span>
      </div>
      {termsData.view && (
        <button
          type='button'
          onClick={() => setOpenDetail(true)}
          className='text-body_md text-gray-600'
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
