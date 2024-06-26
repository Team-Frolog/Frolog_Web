import React from 'react';
import Button from '../button/Button';
import { useVerification } from '@/hooks/auth/useVerification';
import { useFormContext } from 'react-hook-form';

interface Props {
  onNext: () => void;
  isDisabled: boolean;
  type: 'signUp' | 'resetPassword';
}

function SendButton({ onNext, isDisabled, type }: Props) {
  const { isSendFailed, sendEmailCode } = useVerification();
  const { watch, setError } = useFormContext();

  const handleSendCode = () => {
    sendEmailCode(watch('email'), type).then(() => {
      if (isSendFailed) {
        setError('email', {
          type: 'manual',
          message: '인증 요청을 다시 시도해주세요.',
        });
      } else {
        onNext();
      }
    });
  };

  return (
    <Button onClick={handleSendCode} disabled={isDisabled}>
      다음
    </Button>
  );
}

export default SendButton;
