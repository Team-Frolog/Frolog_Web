import React from 'react';
import { useFormContext } from 'react-hook-form';
import { checkNickname } from '@/features/Join';
import FormInput from '../Form/Input/FormInput';

interface Props {
  theme: 'dark' | 'light';
  originUsername?: string;
}

function NicknameInput({ theme, originUsername = '' }: Props) {
  const {
    register,
    trigger,
    setError,
    formState: { errors },
  } = useFormContext();
  return (
    <FormInput
      autoFocus
      hasCount
      theme={theme}
      maxCount={7}
      title='닉네임'
      type='text'
      fieldName='username'
      placeholder='2~7자 이내 한글, 영문 또는 숫자를 입력하세요 (공백, 초성 제외)'
      errorMessage={errors.username && String(errors.username.message)}
      {...register('username', {
        required: '닉네임을 입력해주세요',
        pattern: {
          value: /^[가-힣a-zA-Z0-9]{2,7}$/,
          message:
            '2~7자 이내 한글, 영문 또는 숫자를 입력하세요 (공백, 초성 제외)',
        },
        onChange: () => {
          if (errors.username) {
            trigger('username');
          }
        },
        onBlur: async (e) => {
          const isValid = await trigger('username');
          const value = e.target.value.trim();

          if (isValid && value !== originUsername && value !== '') {
            const data = await checkNickname({
              username: value,
            });
            if (!data) {
              setError('username', {
                type: 'manual',
                message: '이미 사용 중인 닉네임이에요',
              });
            }
          }
        },
      })}
    />
  );
}

export default NicknameInput;
