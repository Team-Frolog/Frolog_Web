import React from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '../common/button/Button';
import PasswordForm from '../common/form/password/PasswordForm';

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
