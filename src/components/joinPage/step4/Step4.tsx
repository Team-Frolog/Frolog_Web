'use client';

import FormInput from '@/components/common/form/FormInput';
import React from 'react';
import JobSelector from './JobSelector';
import GenderSelector from './GenderSelector';
import DateSelector from './DateSelector';
import FormButton from '@/components/common/form/FormButton';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { JOIN_FORM_KEY } from '@/constants/storage';
import { PAGES } from '@/constants/pageConfig';

function Step4() {
  const router = useRouter();
  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const handleSubmitJoin = () => {
    // 폼 상태 제거
    localStorage.removeItem(JOIN_FORM_KEY);

    router.push('/join/finish');
  };

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
        route={PAGES.JOIN_FINISH}
        onClick={handleSubmitJoin}
        buttonText='가입완료!'
        isTyping={false}
        disabled={!watch('nickname') || Boolean(errors.nickname)}
      />
    </div>
  );
}

export default Step4;
