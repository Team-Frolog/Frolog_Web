import Timer from '@/components/common/form/Timer';
import { inputStyle } from '@/styles/input';
import React, { useState } from 'react';

interface Props {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setErrorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCodeSend: () => void;
}

function CodeInput({ code, setCode, handleCodeSend, setErrorOpen }: Props) {
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [resetTimer, setResetTimer] = useState<boolean>(false);

  const handleClickSend = () => {
    setIsExpired(false);
    handleCodeSend();
    setResetTimer((prev) => !prev);
    setCode('');
    setErrorOpen(false);
  };

  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <h6 className='mb-[4px] text-body_md text-white'>
        이메일로 전송된 코드번호를 입력하세요
      </h6>
      <div className='relative w-full'>
        <input
          type='number'
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder='인증번호 입력'
          className={`w-full rounded-[12px] border px-[16px] py-[18px] pr-[110px] text-body_lg outline-none ${isExpired ? inputStyle.error : inputStyle.default}`}
        />
        <div className='absolute bottom-1/4 right-[16px] flex items-center gap-[8px]'>
          <Timer reset={resetTimer} setIsExpired={setIsExpired} />
          <button
            type='button'
            onClick={handleClickSend}
            className='rounded-[6px] border border-gray-500 px-[10px] py-[6px] text-[12px] text-white'
          >
            재전송
          </button>
        </div>
      </div>
      {isExpired && (
        <span className='text-body_md text-error'>
          입력 유효시간이 지났어요. 다시 인증해주세요.
        </span>
      )}
    </div>
  );
}

export default CodeInput;
