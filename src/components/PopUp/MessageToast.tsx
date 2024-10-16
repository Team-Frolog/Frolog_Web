import { ToastPlus } from 'public/icons';
import React from 'react';

function MessageToast() {
  return (
    <div className='fixed inset-x-0 bottom-[92px] z-80 mx-auto flex w-fit gap-[10px] rounded-[9px] bg-gray-200 px-[24px] py-[12px] text-body-md text-gray-700'>
      <ToastPlus />
      <span>5cm를 쌓으면 새로운 개구리를 얻어요!</span>
    </div>
  );
}

export default MessageToast;
