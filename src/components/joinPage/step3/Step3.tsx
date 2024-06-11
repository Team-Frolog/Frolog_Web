'use client';

import React, { useEffect, useState } from 'react';
import CodeInput from './CodeInput';
import ErrorPopUp from '@/components/common/form/ErrorPopUp';
import { AnimatePresence } from 'framer-motion';
import { PAGES } from '@/constants/pageConfig';
import Button from '@/components/common/button/Button';
import { useRouter } from 'next/navigation';
import { requestCode } from '@/api/class';
import { useFormContext } from 'react-hook-form';
import { FetchError } from '@frolog/frolog-api';

function Step3() {
  const { watch } = useFormContext();
  const router = useRouter();
  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [isExpired, setIsExpired] = useState<boolean>(false);

  const handleCodeSend = async () => {
    try {
      const data = await requestCode.fetch({
        target: 'signUp',
        email: watch('email'),
      });
      console.log('request data', data);
    } catch (err) {
      if (err instanceof FetchError) {
        console.log(err);
      }
      console.log(err);
    }
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
    handleCodeSend();
  }, []);

  useEffect(() => {
    setErrorOpen(false);
  }, [code]);

  return (
    <div className='flex h-full w-full flex-col justify-between p-page'>
      <CodeInput
        code={code}
        setCode={setCode}
        handleCodeSend={handleCodeSend}
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
