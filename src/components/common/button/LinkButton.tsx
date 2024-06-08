import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
  route: string;
  disabled?: boolean;
}

function LinkButton({ children, route, disabled }: Props) {
  const classes = `box-border w-full rounded-[30px] bg-main px-[30px] py-[18px] text-center text-body_lg_bold text-white transition-all ${disabled && `pointer-events-none opacity-[0.4]`}`;
  return (
    <Link href={route} className={classes}>
      {children}
    </Link>
  );
}

export default LinkButton;
