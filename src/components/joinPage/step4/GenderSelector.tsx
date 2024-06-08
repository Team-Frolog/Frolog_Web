import FormTitleWithToggle from '@/components/common/form/FormTitleWithToggle';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function GenderSelector() {
  const { watch, setValue } = useFormContext();

  const handleClick = (value: string) => {
    setValue('personal_infos.gender.value', value);
  };

  return (
    <div className='flex w-full flex-col gap-[10px]'>
      <FormTitleWithToggle title='성별' fieldName='gender' />
      <div className='grid w-full grid-cols-3 gap-[12px]'>
        <button
          type='button'
          onClick={() => handleClick('남성')}
          className={`rounded-[12px] border border-gray-800 bg-gray-800 px-[16px] py-[18px] text-body_lg ${watch('personal_infos.gender.value') === '남성' && 'border-main text-body_lg_bold'}`}
        >
          남성
        </button>
        <button
          type='button'
          onClick={() => handleClick('여성')}
          className={`rounded-[12px] border border-gray-800 bg-gray-800 px-[16px] py-[18px] text-body_lg ${watch('personal_infos.gender.value') === '여성' && 'border-main text-body_lg_bold'}`}
        >
          여성
        </button>
        <button
          type='button'
          onClick={() => handleClick('기타')}
          className={`rounded-[12px] border border-gray-800 bg-gray-800 px-[16px] py-[18px] text-body_lg ${watch('personal_infos.gender.value') === '기타' && 'border-main text-body_lg_bold'}`}
        >
          기타
        </button>
      </div>
    </div>
  );
}

export default GenderSelector;
