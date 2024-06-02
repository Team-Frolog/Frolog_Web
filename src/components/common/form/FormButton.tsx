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
}

function FormButton({ route, isTyping, disabled }: Props) {
  return (
    <div
      className={`w-full ${isTyping ? mode.div.typing : mode.div.default} flex transition-all`}
    >
      <Link
        href={route}
        className={`bg-main text-body_lg_bold box-border w-full px-[30px] py-[18px] text-center ${isTyping ? mode.button.typing : mode.button.default} transition-all ${disabled ? `pointer-events-none opacity-[0.4]` : ``}`}
      >
        다음
      </Link>
    </div>
  );
}

export default FormButton;
