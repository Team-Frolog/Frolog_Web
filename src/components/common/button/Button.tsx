'use client';

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
      className={`button ${disabled && `button-disabled`}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
