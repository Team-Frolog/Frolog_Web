import React from 'react';
import Button from './Button';

interface Props {
  btnText: string;
  children: React.ReactNode;
  disabled: boolean;
  btnType?: 'submit' | 'button';
  onClick?: () => void;
  /** children 내부 갭 */
  gap?: number;
}

/** 아래 텍스트를 가지는 버튼
 * - children으로 버튼 아래 텍스트를 적용합니다.
 * - btnType에 따라 일반 버튼 혹은 submit 버튼으로 적용됩니다.
 */
function ButtonWithText({
  children,
  btnText,
  disabled,
  btnType = 'button',
  onClick,
  gap,
}: Props) {
  return (
    <div className='flex h-fit w-full flex-col gap-[20px]'>
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
