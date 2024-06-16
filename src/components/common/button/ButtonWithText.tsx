import React from 'react';
import LinkButton from './LinkButton';
import Button from './Button';

interface Props {
  btnText: string;
  children: React.ReactNode;
  route: string;
  disabled: boolean;
  btnType?: 'button' | 'link';
  onClick?: () => void;
}

function ButtonWithText({
  children,
  btnText,
  route,
  disabled,
  btnType = 'link',
  onClick,
}: Props) {
  return (
    <div className='flex h-[120px] flex-col'>
      {btnType === 'button' ? (
        <Button type='button' onClick={onClick}>
          {btnText}
        </Button>
      ) : (
        <LinkButton disabled={disabled} route={route}>
          {btnText}
        </LinkButton>
      )}

      <div className='flex w-full flex-1 items-center justify-center'>
        {children}
      </div>
    </div>
  );
}

export default ButtonWithText;
