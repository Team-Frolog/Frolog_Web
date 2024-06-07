import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: 'button' | 'submit';
}

function Button({
  children,
  type = 'button',
  disabled = false,
  ...props
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`box-border w-full rounded-[30px] bg-main px-[30px] py-[18px] text-body_lg_bold text-white transition-all`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
