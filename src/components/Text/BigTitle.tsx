import React from 'react';

interface Props {
  children: React.ReactNode;
  type: 'default' | 'bright';
  extraClass?: string;
}

function BigTitle({ children, extraClass, type }: Props) {
  return (
    <h1
      className={`text-heading-lg-bold ${extraClass} ${type === 'default' ? 'text-main' : 'text-main_bright'}`}
    >
      {children}
    </h1>
  );
}

export default BigTitle;
