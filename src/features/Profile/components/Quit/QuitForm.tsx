'use client';

import CheckButton from '@/components/Button/CheckButton';
import React from 'react';
import { signOut } from 'next-auth/react';
import FormInput from '@/components/Form/Input/FormInput';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '@/components/Button/Button';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { quit } from '@/api/auth.api';
import { quitReasons } from '../../data/quitForm';

interface QuitFormType {
  reason: number;
  description?: string;
}

function QuitForm() {
  const router = useRouter();
  const methods = useForm<QuitFormType>({
    mode: 'onChange',
    defaultValues: { reason: 1, description: '' },
  });
  const { watch, setValue, register, handleSubmit } = methods;

  const { mutate: handleQuit } = useMutation({
    mutationFn: () => quit(),
    onSuccess: () => {
      signOut({ callbackUrl: '/landing', redirect: true });
    },
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(() => handleQuit())}
        className='flex w-full flex-1 flex-col justify-between gap-[40px]'
      >
        <div className='flex w-full flex-col gap-[20px]'>
          <span className='text-body-lg text-gray-800'>
            탈퇴하는 이유를 알려주시면
            <br />더 좋은 제품을 만드는 데 참고하겠습니다.
          </span>
          <div className='flex w-full flex-col gap-[20px]'>
            {quitReasons.map((item) => (
              <div
                key={item.id}
                className='flex items-center gap-[12px]'
                onClick={() => setValue('reason', item.id)}
              >
                <CheckButton
                  theme='light'
                  isChecked={watch('reason') === item.id}
                />
                <span className='cursor-default text-body-lg-bold text-gray-800'>
                  {item.content}
                </span>
              </div>
            ))}
          </div>
          <FormInput
            type='text'
            theme='light'
            fieldName='description'
            title='추가 설명 (선택)'
            placeholder='불편했던 점을 말씀해주시면 경청하겠습니다.'
            {...register('description')}
          />
        </div>
        <div className='flex w-full flex-col items-center gap-[12px]'>
          <p className='text-center text-body-lg-bold text-error'>
            탈퇴하면, 메모 / 리뷰 / 캐릭터 / 팔로워 등 프롤로그와 함께한 추억이
            깃든 모든 데이터가 삭제되고 복구가 불가능합니다.
          </p>
          <Button type='submit' theme='error'>
            탈퇴하기
          </Button>
          <button
            type='button'
            onClick={() => router.back()}
            className='py-[8px] text-body-lg-bold text-gray-600'
          >
            취소
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default QuitForm;
