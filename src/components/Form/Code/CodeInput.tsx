'use client';

import Timer from '@/components/Form/Code/Timer';
import { useCodeTime } from '@/store/authStore';
import React from 'react';

interface Props {
  /** 인증코드 값 */
  code: string;
  /** 인증코드 setter */
  setCode: React.Dispatch<React.SetStateAction<string>>;
  /** 인증코드 전송 함수 */
  handleSendCode: () => void;
  /** 인증코드 전송 실패 여부 */
  isSendFailed: boolean;
}

/** 인증번호 입력 input
 * - 외부에서 code 상태값과 setter 함수를 전달 받아야 합니다.
 * - 타이머 기능, 재전송 버튼이 포함되어 있습니다.
 */
function CodeInput({ code, setCode, handleSendCode, isSendFailed }: Props) {
  const expiredTime = useCodeTime();

  /** 인증코드 재전송 함수를 호출하고 코드 값을 초기화하는 함수 */
  const handleClickSend = () => {
    handleSendCode();
    setCode('');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === 'Enter' ||
      (event.key === 'Backspace' && code.length === 0)
    ) {
      event.currentTarget.blur();
    }
  };

  /** code 값을 업데이트하고 만약 값의 길이가 6인 경우 키보드를 내리는 함수 */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setCode(inputValue);

    if (inputValue.length === 6) {
      event.target.blur();
    }
  };

  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <h6 className='mb-[4px] text-body-md text-white'>
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
          disabled={expiredTime === 0}
          className={`input-code-common ${expiredTime === 0 || isSendFailed ? 'input-code-error' : 'input-default'}`}
        />
        <div className='absolute bottom-1/4 right-[16px] flex items-center gap-[8px]'>
          <Timer />
          <button
            type='button'
            onClick={handleClickSend}
            className='rounded-[6px] border border-gray-500 px-[10px] py-[6px] text-[12px] text-white'
          >
            재전송
          </button>
        </div>
      </div>
      {(expiredTime === 0 || isSendFailed) && (
        <span className='text-body-md text-error'>
          {expiredTime === 0
            ? '입력 유효시간이 지났어요. 다시 인증해주세요.'
            : '다시 시도해주세요.'}
        </span>
      )}
    </div>
  );
}

export default CodeInput;
