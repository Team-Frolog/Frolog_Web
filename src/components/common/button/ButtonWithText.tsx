import React from 'react';
import Button from './Button';

interface Props {
  btnText: string;
  children: React.ReactNode;
}

function ButtonWithText({ children, btnText }: Props) {
  return (
    <div className='flex h-[110px] flex-col'>
      <Button>{btnText}</Button>
      <div className='flex w-full flex-1 items-center justify-center'>
        {children}
      </div>
    </div>
  );
}

export default ButtonWithText;
