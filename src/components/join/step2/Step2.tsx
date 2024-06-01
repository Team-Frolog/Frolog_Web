import LinkButton from '@/components/common/button/LinkButton';
import FormInput from '@/components/common/form/FormInput';
import React from 'react';

function Step2() {
  return (
    <div className='p-page flex h-full flex-col justify-between'>
      <div className='flex flex-col gap-[36px]'>
        <FormInput
          type='email'
          placeholder='이메일을 입력하세요'
          title='이메일'
        />
        <div>
          <FormInput
            type='password'
            placeholder='8~15자 영문 대소문자, 숫자 포함'
            title='비밀번호'
          />
          <FormInput type='password' placeholder='비밀번호를 재입력하세요' />
        </div>
      </div>
      <LinkButton route='/join?step=3'>다음</LinkButton>
    </div>
  );
}

export default Step2;
