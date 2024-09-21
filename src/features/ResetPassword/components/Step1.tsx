import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useEmailValidation } from '@/hooks/auth/useEmailValidation';
import { useStepActions } from '@/store/stepStore';
import FormInput from '@/components/Form/Input/FormInput';
import SendButton from '@/components/Form/Button/SendButton';

function Step1() {
  const { goNextFindStep } = useStepActions();
  const { handleValidateEmail, isEmailChecked, setIsEmailChecked } =
    useEmailValidation('findPassword');
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useFormContext();

  return (
    <>
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
          onChange: () => setIsEmailChecked(false),
          onBlur: (e) => handleValidateEmail(e),
        })}
      />
      <SendButton
        onNext={goNextFindStep}
        isDisabled={!watch('email') || !isValid || !isEmailChecked}
        type='resetPassword'
      />
    </>
  );
}

export default Step1;
