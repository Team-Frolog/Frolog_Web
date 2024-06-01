import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
  route: string;
  disabled?: boolean;
}

function LinkButton({ children, route, disabled }: Props) {
  return (
    <Link
      href={route}
      className={`bg-main text-body_lg_bold box-border w-full rounded-[30px] px-[30px] py-[18px] text-center text-white transition-all ${disabled ? `pointer-events-none opacity-[0.4]` : ``}`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
