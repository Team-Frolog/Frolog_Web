import { MenuArrowIcon } from 'public/icons';
import React from 'react';
import { PAGES } from '@/constants/page';
import { usePathname, useRouter } from 'next/navigation';
import { STORAGE_KEY } from '@/constants/storage';
import { useFormContext, useWatch } from 'react-hook-form';
import { getTestTypeById } from '@/features/Test';

function FrologTestButton() {
  const router = useRouter();
  const pathname = usePathname();
  const { getValues } = useFormContext();
  const reading_preference = useWatch({ name: 'reading_preference' });

  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <h6 className='mb-[4px] text-body-md text-gray-700'>독서성향</h6>
      <button
        type='button'
        onClick={() => {
          router.push(`${PAGES.TEST}?callbackUrl=${pathname}`);
          sessionStorage.setItem(
            STORAGE_KEY.PROFILE_EDIT_FORM_KEY,
            JSON.stringify(getValues())
          );
        }}
        className='input-common input-light box-border flex w-full items-center justify-between'
      >
        <span className='text-body-lg-bold text-gray-800'>
          {getTestTypeById(reading_preference)}
        </span>
        <div className='flex items-center gap-[4px]'>
          <span className='text-body-lg text-gray-700'>
            {reading_preference ? '다시' : '독서 성향'} 진단하기
          </span>
          <MenuArrowIcon fill='#B3B6C4' />
        </div>
      </button>
    </div>
  );
}

export default FrologTestButton;
