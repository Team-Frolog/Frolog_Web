import FormInput from '@/components/Form/Input/FormInput';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function WellNameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormInput
      type='text'
      title='우물 이름'
      fieldName='name'
      theme='light'
      placeholder='12자 이내로 입력하세요.'
      errorMessage={errors.wellName && String(errors.wellName.message)}
      {...register('wellName', {
        maxLength: {
          value: 12,
          message: '12자 이내로 입력하세요.',
        },
      })}
    />
  );
}

export default WellNameInput;
