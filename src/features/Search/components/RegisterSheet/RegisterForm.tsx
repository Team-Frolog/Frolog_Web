import Button from '@/components/Button/Button';
import FormInput from '@/components/Form/Input/FormInput';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export interface RegisterFormType {
  title: string;
  author: string;
}

interface Props {
  /** 제출 핸들러 */
  onSubmit: (data: RegisterFormType) => void;
}

/** 검색되지 않는 책을 등록하는 폼 */
function RegisterForm({ onSubmit }: Props) {
  const methods = useForm<RegisterFormType>();
  const { watch, register, handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-full flex-col gap-[20px]'
      >
        <FormInput
          type='text'
          title='제목'
          fieldName='title'
          placeholder='책 제목을 입력해주세요'
          isRequired
          {...register('title')}
        />
        <FormInput
          type='text'
          title='저자'
          fieldName='author'
          placeholder='저자를 입력해주세요'
          isRequired
          {...register('author')}
        />
        <Button type='submit' disabled={!watch('title') || !watch('author')}>
          책 등록하고 알림 받기
        </Button>
      </form>
    </FormProvider>
  );
}

export default RegisterForm;
