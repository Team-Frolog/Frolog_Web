import Button from '@/components/Button/Button';
import PasswordForm from '@/components/Form/Password/PasswordForm';
import React from 'react';
import { useFormContext } from 'react-hook-form';

/** 비밀번호 재설정 3단계: 비밀번호 입력 폼 */
function Step3() {
  const {
    watch,
    formState: { isValid },
  } = useFormContext();

  return (
    <>
      <PasswordForm />
      <Button
        type='submit'
        disabled={!watch('password') || !watch('passwordCheck') || !isValid}
      >
        비밀번호 재설정 완료
      </Button>
    </>
  );
}

export default Step3;
