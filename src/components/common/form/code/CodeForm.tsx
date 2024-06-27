'use client';

import React, { useEffect, useState } from 'react';
import CodeInput from './CodeInput';
import ErrorPopUp from '@/components/common/form/ErrorPopUp';
import { AnimatePresence } from 'framer-motion';
import Button from '@/components/common/button/Button';
import { useVerification } from '@/hooks/auth/useVerification';
import { useFormContext } from 'react-hook-form';
import { useCodeTime } from '@/store/authStore';

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
  }, [isVerified]);

  useEffect(() => {
    setIsVerified(null);
  }, [code]);

  return (
    <div className='flex h-full w-full flex-col justify-between'>
      <CodeInput
        code={code}
        setCode={setCode}
        handleSendCode={handleSendCode}
        isFailed={isSendFailed}
      />

      <div className='flex w-full flex-col items-center gap-[12px]'>
        <AnimatePresence>
          {isVerified === false && (
            <ErrorPopUp errorMsg='인증코드를 다시 확인해주세요' />
          )}
        </AnimatePresence>
        <Button
          onClick={() => verifyEmailCode(code)}
          disabled={!code || !expiredTime || isSendFailed}
        >
          다음
        </Button>
      </div>
    </div>
  );
}

export default CodeForm;
