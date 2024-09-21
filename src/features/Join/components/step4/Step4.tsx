'use client';

import FormInput from '@/components/Form/Input/FormInput';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '@/components/Button/Button';
import JobSelector from './JobSelector';
import GenderSelector from './GenderSelector';
import DateSelector from './DateSelector';
import { checkNickname } from '../../api/join.api';

function Step4() {
  const {
    watch,
    register,
    trigger,
    setError,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className='flex w-full flex-col gap-[36px]'>
        <FormInput
          autoFocus
          title='닉네임'
          type='text'
          fieldName='username'
          placeholder='4~15자 이내 한글, 영문 또는 숫자를 입력하세요. (공백 제외)'
          errorMessage={errors.username && String(errors.username.message)}
          {...register('username', {
            pattern: {
              value: /^[가-힣a-zA-Z0-9]{4,15}$/,
              message:
                '4~15자 이내 한글, 영문 또는 숫자를 입력하세요. (공백 제외)',
            },
            onBlur: async (e) => {
              const isValid = await trigger('username');
              const { value } = e.target;

              if (isValid && value.trim() !== '') {
                const data = await checkNickname({
                  username: value,
                });
                if (!data) {
                  setError('username', {
                    type: 'manual',
                    message: '이미 사용 중인 닉네임이에요.',
                  });
                }
              }
            },
          })}
        />
        <JobSelector />
        <GenderSelector />
        <DateSelector />
      </div>
      <Button
        type='submit'
        disabled={!watch('username') || Boolean(errors.username)}
      >
        가입완료
      </Button>
    </>
  );
}

export default Step4;
