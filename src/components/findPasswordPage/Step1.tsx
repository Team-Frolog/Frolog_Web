import React, { useState } from 'react';
import FormInput from '../common/form/FormInput';
import { useFormContext } from 'react-hook-form';
import { userAPI } from '@/app/api/user.api';
import Button from '../common/button/Button';
import { useVerification } from '@/hooks/auth/useVerification';
import { PAGES } from '@/constants/pageConfig';
import { useRouter } from 'next/navigation';

function Step1() {
  const router = useRouter();
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const { isSendFailed, sendEmailCode } = useVerification();
  const {
    register,
    setError,
    trigger,
    watch,
    formState: { errors, isValid },
  } = useFormContext();

  const handleSendCode = () => {
    sendEmailCode(watch('email'), 'resetPassword').then(() => {
      if (isSendFailed) {
        setError('email', {
          type: 'manual',
          message: '인증 요청을 다시 시도해주세요.',
        });
      } else {
        router.push(`${PAGES.FIND_PASSWORD}?step=2`);
      }
    });
  };

  return (
    <div className='flex h-full w-full flex-col justify-between'>
      <FormInput
        autoFocus
        type='email'
        placeholder='인증받을 이메일을 입력하세요'
        title='이메일'
        fieldName='email'
        errorMessage={errors.email && String(errors.email.message)}
        {...register('email', {
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            message: '이메일 형식을 확인해주세요.',
          },
          onChange: () => {
            setIsEmailChecked(false);
          },
          onBlur: async (e) => {
            const isVaild = await trigger('email');
            const value = e.target.value;

            if (isVaild && value.trim() !== '') {
              const data = await userAPI.checkEmail({
                email: value,
              });
              if (data) {
                setError('email', {
                  type: 'manual',
                  message: '존재하지 않는 이메일이에요.',
                });
              } else {
                setIsEmailChecked(true);
              }
            }
          },
        })}
      />
      <Button
        onClick={handleSendCode}
        disabled={!watch('email') || !isValid || !isEmailChecked}
      >
        다음
      </Button>
    </div>
  );
}

export default Step1;
