import Timer from '@/components/common/form/Timer';
import React, { useState } from 'react';

interface Props {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setErrorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCodeSend: () => void;
  isExpired: boolean;
  setIsExpired: React.Dispatch<React.SetStateAction<boolean>>;
}

function CodeInput({
  code,
  setCode,
  handleCodeSend,
  setErrorOpen,
  isExpired,
  setIsExpired,
}: Props) {
  const [resetTimer, setResetTimer] = useState<boolean>(false);

  const handleClickSend = () => {
    setIsExpired(false);
    handleCodeSend();
    setResetTimer((prev) => !prev);
    setCode('');
    setErrorOpen(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === 'Enter' ||
      (event.key === 'Backspace' && code.length === 0)
    ) {
      event.currentTarget.blur();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setCode(inputValue);

    if (inputValue.length === 6) {
      event.target.blur(); // 입력 요소로부터 포커스를 제거하여 키보드를 내림
    }
  };

  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <h6 className='mb-[4px] text-body_md text-white'>
        이메일로 전송된 코드번호를 입력하세요
      </h6>
      <div className='relative w-full'>
        <input
          autoFocus
          type='text'
          pattern='[0-9]*'
          inputMode='numeric'
          value={code}
          onChange={handleChange}
          placeholder='인증번호 입력'
          onKeyDown={handleKeyPress}
          disabled={isExpired}
          className={`input-code-common ${isExpired ? 'input-code-error' : 'input-default'}`}
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
