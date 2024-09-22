import FormInput from '@/components/Form/Input/FormInput';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function IntroInput() {
  // 디바운싱 적용
  const methods = useForm<{ intro: string }>({
    mode: 'onChange',
    defaultValues: { intro: '' },
  });

  return (
    <form>
      <FormProvider {...methods}>
        <FormInput
          type='text'
          fieldName='intro'
          theme='light'
          title='자기소개'
          placeholder='소개 글이 아직 없어요.'
          hasCount
          maxCount={50}
          {...methods.register('intro')}
        />
      </FormProvider>
    </form>
  );
}

export default IntroInput;
