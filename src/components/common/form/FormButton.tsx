import Link from 'next/link';
import React from 'react';

const mode = {
  div: {
    default: `px-[24px]`,
    typing: `px-0 sticky`,
  },
  button: {
    default: `rounded-[30px]`,
    typing: `rounded-0`,
  },
};

interface Props {
  route: string;
  isTyping: boolean;
  disabled?: boolean;
  onClick?: () => void;
  buttonText?: string;
}

function FormButton({
  route,
  isTyping,
  disabled,
  onClick,
  buttonText = '다음',
}: Props) {
  const commonClasses = `bg-main text-body_lg_bold box-border w-full px-[30px] py-[18px] text-center ${isTyping ? mode.button.typing : mode.button.default} transition-all`;
  return (
    <div
      className={`w-full ${isTyping ? mode.div.typing : mode.div.default} flex transition-all`}
    >
      {onClick ? (
        <button
          type='button'
          onClick={onClick}
          disabled={disabled}
          className={`${commonClasses} ${disabled ? 'pointer-events-none opacity-[0.4]' : ''}`}
        >
          {buttonText}
        </button>
      ) : (
        <Link
          href={route}
          className={`${commonClasses} ${disabled ? 'pointer-events-none opacity-[0.4]' : ''}`}
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}

export default FormButton;
