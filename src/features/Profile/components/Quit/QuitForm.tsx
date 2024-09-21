'use client';

import CheckButton from '@/components/Button/CheckButton';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { quitReasons } from '../../data/quitForm';

interface QuitFormType {
  reason: number;
  description?: string;
}

function QuitForm() {
  const methods = useForm<QuitFormType>({
    mode: 'onChange',
    defaultValues: { reason: 1, description: '' },
  });
  const { watch, setValue } = methods;

  return (
    <form className='flex w-full flex-col justify-between'>
      <FormProvider {...methods}>
        <div className='flex w-full flex-col gap-[20px]'>
          <span className='text-body-lg text-gray-800'>
            탈퇴하는 이유를 알려주시면
            <br />더 좋은 제품을 만드는 데 참고하겠습니다.
          </span>
          <div className='flex w-full flex-col gap-[20px]'>
            {quitReasons.map((item) => (
              <button
                key={item.id}
                type='button'
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
              </button>
            ))}
          </div>
        </div>
      </FormProvider>
    </form>
  );
}

export default QuitForm;
