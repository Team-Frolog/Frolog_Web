import { ToastPlus } from 'public/icons';
import React from 'react';

interface Props {
  message: string;
}

/** 우물 리스트 하단에 위치한 토스트 형태의 메시지 컴포넌트 */
function WellListMessage({ message }: Props) {
  return (
    <div
      id='message-toast'
      className='fixed inset-x-0 bottom-[92px] z-80 mx-auto flex w-fit gap-[10px] rounded-[9px] bg-gray-700 px-[24px] py-[12px] text-body-md text-white'
    >
      <ToastPlus />
      <span>{message}</span>
    </div>
  );
}

export default WellListMessage;
