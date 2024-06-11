import React from 'react';
import LinkButton from './LinkButton';

interface Props {
  btnText: string;
  children: React.ReactNode;
  route: string;
  disabled: boolean;
}

function ButtonWithText({ children, btnText, route, disabled }: Props) {
  return (
    <div className='flex h-[120px] flex-col'>
      <LinkButton disabled={disabled} route={route}>
        {btnText}
      </LinkButton>
      <div className='flex w-full flex-1 items-center justify-center'>
        {children}
      </div>
    </div>
  );
}

export default ButtonWithText;
