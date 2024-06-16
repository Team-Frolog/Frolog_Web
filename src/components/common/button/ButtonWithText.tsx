import React from 'react';
import LinkButton from './LinkButton';
import Button from './Button';

interface Props {
  btnText: string;
  children: React.ReactNode;
  route: string;
  disabled: boolean;
  btnType?: 'link' | 'submit';
}

function ButtonWithText({
  children,
  btnText,
  route,
  disabled,
  btnType = 'link',
}: Props) {
  return (
    <div className='flex h-[120px] w-full flex-col'>
      {btnType === 'link' ? (
        <LinkButton disabled={disabled} route={route}>
          {btnText}
        </LinkButton>
      ) : (
        <Button type={btnType} disabled={disabled}>
          {btnText}
        </Button>
      )}

      <div className='flex w-full flex-1 items-center justify-center'>
        {children}
      </div>
    </div>
  );
}

export default ButtonWithText;
