import React from 'react';

interface Props {
  children: React.ReactNode;
  align?: 'text-start' | 'text-center';
}

function BigTitle({ children, align }: Props) {
  return <h1 className={`text-h_lg_bold text-main ${align}`}>{children}</h1>;
}

export default BigTitle;
