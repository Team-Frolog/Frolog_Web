import React, { useState } from 'react';
import FormInput from '../common/form/FormInput';
import { useFormContext } from 'react-hook-form';
import { authAPI } from '@/app/api/user.api';
import { useStepActions } from '@/store/stepStore';
import SendButton from '../common/form/SendButton';

function Step1() {
  const { goNextFindStep } = useStepActions();
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const {
    register,
    setError,
    trigger,
    watch,
    formState: { errors, isValid },
  } = useFormContext();

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
              const data = await authAPI.checkEmail({
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
      <SendButton
        onNext={goNextFindStep}
        isDisabled={!watch('email') || !isValid || !isEmailChecked}
        type='resetPassword'
      />
    </div>
  );
}

export default Step1;
