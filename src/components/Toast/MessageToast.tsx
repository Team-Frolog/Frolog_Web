import { ToastPlus } from 'public/icons';
import React from 'react';

interface Props {
  message: string;
}

function MessageToast({ message }: Props) {
  return (
    <div id='message-toast' className='fixed inset-x-0 bottom-[92px] z-80 mx-auto flex w-fit gap-[10px] rounded-[9px] bg-gray-200 px-[24px] py-[12px] text-body-md text-gray-700'>
      <ToastPlus />
      <span>{message}</span>
    </div>
  );
}

export default MessageToast;
