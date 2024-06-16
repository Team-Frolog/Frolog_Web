import React from 'react';

interface Props {
  children: React.ReactNode;
  type: 'default' | 'bright';
  align?: 'text-start' | 'text-center';
}

function BigTitle({ children, align, type }: Props) {
  return (
    <h1
      className={`text-h_lg_bold ${align} ${type === 'default' ? 'text-main' : 'text-main_bright'}`}
    >
      {children}
    </h1>
  );
}

export default BigTitle;
