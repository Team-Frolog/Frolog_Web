import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
  route: string;
  disabled?: boolean;
}

function LinkButton({ children, route, disabled }: Props) {
  const classes = `button text-center ${disabled && `button-disabled`}`;
  return (
    <Link href={route} className={classes}>
      {children}
    </Link>
  );
}

export default LinkButton;
