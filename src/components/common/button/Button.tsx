import React from 'react';

interface Props {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

function Button({ children, type = 'button', disabled = false }: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-main text-body_lg_bold box-border w-full rounded-[30px] px-[30px] py-[18px] text-white transition-all`}
    >
      {children}
    </button>
  );
}

export default Button;
