'use client';

import React, { useEffect, useState } from 'react';
import ErrorToast from '@/components/Toast/ErrorToast';
import { AnimatePresence } from 'framer-motion';
import Button from '@/components/Button/Button';
import { useVerification } from '@/hooks/form/useVerification';
import { useFormContext } from 'react-hook-form';
import { useCodeTime } from '@/store/authStore';
import CodeInput from './CodeInput';

interface Props {
  /** 컴포넌트 사용처 */
  type: 'signUp' | 'resetPassword';
  /** 인증번호 확인 버튼 클릭 시 동작 함수 */
  onClickNext: () => void;
}

/** input, button이 포함된 폼 컴포넌트 */
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

  /** isVerified를 초기화하고 인증코드를 전송하는 함수 */
  const handleSendCode = () => {
    setIsVerified(null);
    sendEmailCode(watch('email'), type);
  };

  /** 인증 완료된 경우, 함수를 실행하는 useEffect */
  useEffect(() => {
    if (isVerified) {
      onClickNext();
    }
  }, [isVerified, onClickNext]);

  /** 인증코드가 변경된 경우, isVerified를 초기화하는 useEffect */
  useEffect(() => {
    setIsVerified(null);
  }, [code, setIsVerified]);

  return (
    <>
      <CodeInput
        code={code}
        setCode={setCode}
        handleSendCode={handleSendCode}
        isSendFailed={isSendFailed}
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
