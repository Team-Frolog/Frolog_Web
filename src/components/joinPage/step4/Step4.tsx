'use client';

import FormInput from '@/components/common/form/FormInput';
import React from 'react';
import JobSelector from './JobSelector';
import GenderSelector from './GenderSelector';
import DateSelector from './DateSelector';
import { useFormContext } from 'react-hook-form';
import { JOIN_FORM_KEY } from '@/constants/storage';
import { PAGES } from '@/constants/pageConfig';
import Button from '@/components/common/button/Button';
import { useRouter } from 'next/navigation';

function Step4() {
  const router = useRouter();
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();

  const handleSubmitJoin = () => {
    // 폼 상태 제거
    localStorage.removeItem(JOIN_FORM_KEY);

    // 실패한 경우
    router.push(PAGES.JOIN_FINISH);
  };

  return (
    <div className='flex h-full w-full flex-col justify-between gap-[24px] p-page'>
      <div className='flex w-full flex-col gap-[36px]'>
        <FormInput
          autoFocus
          title='닉네임'
          type='text'
          fieldName='username'
          placeholder='4~15자, 한글, 영문 또는 숫자를 입력하세요. (공백 제외)'
          errorMessage={errors.username && String(errors.username.message)}
          {...register('username', {
            pattern: {
              value: /^[가-힣a-zA-Z0-9]{4,15}$/,
              message: '4~15자, 한글, 영문 또는 숫자를 입력하세요. (공백 제외)',
            },
            onBlur: async (e) => {
              // const data = await getUserNameAvailability.fetch({
              //   username: e.target.value,
              // });
              // console.log(data);
            },
          })}
        />
        <JobSelector />
        <GenderSelector />
        <DateSelector />
      </div>
      <Button
        onClick={handleSubmitJoin}
        disabled={!watch('username') || Boolean(errors.username)}
      >
        가입완료
      </Button>
    </div>
  );
}

export default Step4;
