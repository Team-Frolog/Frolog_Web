'use client';

import React, { useEffect, useState } from 'react';
import CodeInput from './CodeInput';
import ErrorPopUp from '@/components/common/form/ErrorPopUp';
import { AnimatePresence } from 'framer-motion';
import { PAGES } from '@/constants/pageConfig';
import Button from '@/components/common/button/Button';
import { useRouter } from 'next/navigation';
import { useVerification } from '@/hooks/useVerification';
import { useFormContext } from 'react-hook-form';

function Step3() {
  const { watch } = useFormContext();
  const { isFailed, sendEmailCode } = useVerification();
  const router = useRouter();
  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [isExpired, setIsExpired] = useState<boolean>(false);

  const handleSendCode = () => {
    sendEmailCode(watch('email'));
  };

  const handleClickNext = () => {
    // 서버 인증코드 검증
    if (+code === 123456) {
      router.push(`${PAGES.JOIN}?step=4`);
    } else {
      setErrorOpen(true);
    }
  };

  useEffect(() => {
    handleSendCode();
  }, []);

  useEffect(() => {
    setErrorOpen(false);
  }, [code]);

  return (
    <div className='flex h-full w-full flex-col justify-between p-page'>
      <CodeInput
        code={code}
        setCode={setCode}
        handleSendCode={handleSendCode}
        setErrorOpen={setErrorOpen}
        isExpired={isExpired}
        setIsExpired={setIsExpired}
      />

      <div className='flex w-full flex-col items-center gap-[12px]'>
        <AnimatePresence>
          {errorOpen && <ErrorPopUp errorMsg='인증코드를 다시 확인해주세요' />}
        </AnimatePresence>
        <Button onClick={handleClickNext} disabled={!code || isExpired}>
          다음
        </Button>
      </div>
    </div>
  );
}

export default Step3;
