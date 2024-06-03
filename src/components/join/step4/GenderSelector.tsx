import ToggleButton from '@/components/common/form/ToggleButton';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function GenderSelector() {
  const { watch, setValue } = useFormContext();

  const handleClick = (value: string) => {
    setValue('gender', value);
  };

  return (
    <div className='flex w-full flex-col gap-[10px]'>
      <div className='flex w-full justify-between'>
        <h6 className='mb-[4px] text-body_md text-white'>성별</h6>
        <ToggleButton fieldName='gender' />
      </div>
      <div className='grid w-full grid-cols-3 gap-[12px]'>
        <button
          type='button'
          onClick={() => handleClick('남성')}
          className={`rounded-[12px] border border-gray-800 bg-gray-800 px-[16px] py-[18px] text-body_lg ${!watch('gender') ? 'text-gray-600' : 'text-white'} ${watch('gender') === '남성' && 'border-main text-body_lg_bold'}`}
        >
          남성
        </button>
        <button
          type='button'
          onClick={() => handleClick('여성')}
          className={`rounded-[12px] border border-gray-800 bg-gray-800 px-[16px] py-[18px] text-body_lg ${!watch('gender') ? 'text-gray-600' : 'text-white'} ${watch('gender') === '여성' && 'border-main text-body_lg_bold'}`}
        >
          여성
        </button>
        <button
          type='button'
          onClick={() => handleClick('기타')}
          className={`rounded-[12px] border border-gray-800 bg-gray-800 px-[16px] py-[18px] text-body_lg ${!watch('gender') ? 'text-gray-600' : 'text-white'} ${watch('gender') === '기타' && 'border-main text-body_lg_bold'}`}
        >
          기타
        </button>
      </div>
    </div>
  );
}

export default GenderSelector;
