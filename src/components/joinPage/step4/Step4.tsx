import FormInput from '@/components/common/form/FormInput';
import React from 'react';
import JobSelector from './JobSelector';
import GenderSelector from './GenderSelector';
import DateSelector from './DateSelector';
import FormButton from '@/components/common/form/FormButton';
import { useFormContext } from 'react-hook-form';

function Step4() {
  const {
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <div className='flex h-full w-full flex-col justify-between gap-[24px] pb-page'>
      <div className='flex w-full flex-col gap-[36px] p-page'>
        <FormInput
          title='닉네임'
          type='text'
          fieldName='nickname'
          placeholder='4~15자, 한글, 영문 또는 숫자를 입력하세요.'
          options={{
            pattern: {
              value: /^[가-힣a-zA-Z0-9]{4,15}$/,
              message: '4~15자, 한글, 영문 또는 숫자를 입력하세요.',
            },
          }}
        />
        <JobSelector />
        <GenderSelector />
        <DateSelector />
      </div>
      <FormButton
        route='/join/finish'
        buttonText='가입완료!'
        isTyping={false}
        disabled={!watch('nickname') || Boolean(errors.nickname)}
      />
    </div>
  );
}

export default Step4;
