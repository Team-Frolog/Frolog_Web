import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

function Button({
  children,
  type = 'button',
  onClick,
  disabled = false,
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`bg-main text-body_lg_bold box-border w-full rounded-[30px] px-[30px] py-[18px] text-white transition-all`}
    >
      {children}
    </button>
  );
}

export default Button;
