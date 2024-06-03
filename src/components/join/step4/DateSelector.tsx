import FormInput from '@/components/common/form/FormInput';
import FormTitleWithToggle from '@/components/common/form/FormTitleWithToggle';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function DateSelector() {
  const { watch, setValue } = useFormContext();
  return (
    <div className='flex w-full flex-col gap-[10px]'>
      <FormTitleWithToggle title='생년월일' fieldName='birthDate' />
      <input
        type='date'
        value={watch('birthDate')}
        onChange={(e) => setValue('birthDate', e.target.value)}
        className={`rounded-[12px] border border-gray-800 bg-gray-800 px-[16px] py-[18px] text-body_lg outline-none focus:border-main ${!watch('birthDate') ? 'text-gray-600' : 'text-white'}`}
      />
    </div>
  );
}

export default DateSelector;
