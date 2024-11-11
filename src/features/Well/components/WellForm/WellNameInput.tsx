'use client';

import FormInput from '@/components/Form/Input/FormInput';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { checkWellName } from '../../api/well.api';

interface Props {
  setIsNameChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

function WellNameInput({ setIsNameChecked }: Props) {
  const { trigger, setError } = useFormContext();

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleValidateWellName = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isVaild = await trigger('name');
    const { value } = e.target;

    if (isVaild && value.trim() !== '') {
      const result = await checkWellName(value);

      if (result) {
        setIsNameChecked(true);
      } else {
        setError('name', {
          type: 'custom',
          message: '이미 같은 이름의 우물이 있어요',
        });
      }
    }
  };

  return (
    <FormInput
      type='text'
      title='우물 이름'
      fieldName='name'
      theme='light'
      placeholder='12자 이내로 입력하세요'
      errorMessage={errors.name && String(errors.name.message)}
      {...register('name', {
        required: '우물 이름을 입력해주세요',
        maxLength: {
          value: 12,
          message: '12자 이내로 입력하세요',
        },
        onChange: async (e) => {
          setIsNameChecked(false);
          if (errors.name) {
            const isPassed = await trigger('name');

            if (isPassed) {
              handleValidateWellName(e);
            }
          }
        },
        onBlur: (e) => handleValidateWellName(e),
      })}
    />
  );
}

export default WellNameInput;
