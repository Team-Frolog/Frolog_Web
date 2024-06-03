import FormInput from '@/components/common/form/FormInput';
import React from 'react';
import JobSelector from './JobSelector';
import GenderSelector from './GenderSelector';

function Step4() {
  return (
    <div className='flex h-full w-full flex-col justify-between pb-page'>
      <div className='flex w-full flex-col p-page'>
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
      </div>
    </div>
  );
}

export default Step4;
