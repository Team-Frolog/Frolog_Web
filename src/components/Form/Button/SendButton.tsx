import React from 'react';
import { useVerification } from '@/hooks/auth/useVerification';
import { useFormContext } from 'react-hook-form';
import Button from '../../Button/Button';

interface Props {
  /** 컴포넌트 사용처 */
  type: 'signUp' | 'resetPassword';
  /** 인증번호 요청 후 동작 함수 */
  onNext: () => void;
  /** 비활성화 여부 */
  isDisabled: boolean;
}

/** 인증번호 요청 버튼 */
function SendButton({ onNext, isDisabled, type }: Props) {
  const { isSendFailed, sendEmailCode } = useVerification();
  const { watch, setError } = useFormContext();

  const handleSendCode = async () => {
    sendEmailCode(watch('email'), type).then(() => {
      if (isSendFailed) {
        setError('email', {
          type: 'custom',
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
