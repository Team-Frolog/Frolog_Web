'use client';

import React, { useEffect, useState } from 'react';
import ErrorToast from '@/components/Toast/ErrorToast';
import { AnimatePresence } from 'framer-motion';
import Button from '@/components/Button/Button';
import { useVerification } from '@/hooks/auth/useVerification';
import { useFormContext } from 'react-hook-form';
import { useCodeTime } from '@/store/authStore';
import CodeInput from './CodeInput';

interface Props {
  type: 'signUp' | 'resetPassword';
  onClickNext: () => void;
}

function CodeForm({ type, onClickNext }: Props) {
  const expiredTime = useCodeTime();
  const { watch } = useFormContext();
  const {
    isSendFailed,
    sendEmailCode,
    verifyEmailCode,
    isVerified,
    setIsVerified,
  } = useVerification();
  const [code, setCode] = useState<string>('');

  const handleSendCode = () => {
    setIsVerified(null);
    sendEmailCode(watch('email'), type);
  };

  useEffect(() => {
    if (isVerified) {
      onClickNext();
    }
  }, [isVerified, onClickNext]);

  useEffect(() => {
    setIsVerified(null);
  }, [code, setIsVerified]);

  return (
    <>
      <CodeInput
        code={code}
        setCode={setCode}
        handleSendCode={handleSendCode}
        isFailed={isSendFailed}
      />

      <div className='flex-col-center w-full gap-[12px]'>
        <AnimatePresence>
          {isVerified === false && (
            <ErrorToast errorMsg='인증코드를 다시 확인해주세요' />
          )}
        </AnimatePresence>
        <Button
          onClick={() => verifyEmailCode(code)}
          disabled={!code || !expiredTime || isSendFailed}
        >
          다음
        </Button>
      </div>
    </>
  );
}

export default CodeForm;
