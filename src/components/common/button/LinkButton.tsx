import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
  route: string;
}

function LinkButton({ children, route }: Props) {
  return (
    <Link
      href={route}
      className={`bg-main text-body_lg_bold box-border w-full rounded-[30px] px-[30px] py-[18px] text-center text-white transition-all`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
