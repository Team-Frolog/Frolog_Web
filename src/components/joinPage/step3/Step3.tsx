import React, { useEffect, useState } from 'react';
import CodeInput from './CodeInput';
import FormButton from '@/components/common/form/FormButton';
import { useRouter } from 'next/navigation';
import ErrorPopUp from '@/components/common/form/ErrorPopUp';
import { AnimatePresence } from 'framer-motion';
import { PAGES } from '@/constants/pageConfig';

function Step3() {
  const router = useRouter();
  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');

  const handleCodeSend = () => {
    // 코드 요청
  };

  const handleClickNext = () => {
    // 서버 인증코드 검증
    if (+code === 123456) {
      router.push('/join?step=4');
    } else {
      setErrorOpen(true);
    }
  };

  useEffect(() => {
    setErrorOpen(false);
  }, [code]);

  return (
    <div className='flex h-full w-full flex-col justify-between pb-page'>
      <div className='p-page'>
        <CodeInput
          code={code}
          setCode={setCode}
          handleCodeSend={handleCodeSend}
          setErrorOpen={setErrorOpen}
        />
      </div>

      <div className='flex w-full flex-col items-center gap-[12px]'>
        <AnimatePresence>
          {errorOpen && <ErrorPopUp errorMsg='인증코드를 다시 확인해주세요' />}
        </AnimatePresence>
        <FormButton
          route={`${PAGES.JOIN}?step=4`}
          onClick={handleClickNext}
          isTyping={false}
          disabled={!code}
        />
      </div>
    </div>
  );
}

export default Step3;
