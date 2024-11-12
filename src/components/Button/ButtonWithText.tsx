import React from 'react';
import LinkButton from './LinkButton';
import Button from './Button';

interface Props {
  btnText: string;
  children: React.ReactNode;
  route?: string;
  disabled: boolean;
  btnType?: 'link' | 'submit' | 'button';
  onClick?: () => void;
  gap?: number;
}

function ButtonWithText({
  children,
  btnText,
  route,
  disabled,
  btnType = 'link',
  onClick,
  gap,
}: Props) {
  return (
    <div className='flex h-fit w-full flex-col gap-[20px]'>
      {btnType === 'link' && (
        <LinkButton disabled={disabled} route={route!}>
          {btnText}
        </LinkButton>
      )}
      {btnType === 'submit' && (
        <Button type={btnType} disabled={disabled}>
          {btnText}
        </Button>
      )}
      {btnType === 'button' && (
        <Button type={btnType} onClick={onClick} disabled={disabled}>
          {btnText}
        </Button>
      )}

      <div
        className={`flex-center w-full flex-1 flex-col ${gap ? `gap-[${gap}px]` : ''}`}
      >
        {children}
      </div>
    </div>
  );
}

export default ButtonWithText;
