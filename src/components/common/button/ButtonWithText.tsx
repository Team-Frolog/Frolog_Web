import React from 'react';
import LinkButton from './LinkButton';

interface Props {
  btnText: string;
  children: React.ReactNode;
  route: string;
}

function ButtonWithText({ children, btnText, route }: Props) {
  return (
    <div className='flex h-[120px] flex-col'>
      <LinkButton route={route}>{btnText}</LinkButton>
      <div className='flex w-full flex-1 items-center justify-center'>
        {children}
      </div>
    </div>
  );
}

export default ButtonWithText;
