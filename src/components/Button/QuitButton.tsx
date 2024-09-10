import Link from 'next/link';
import { CancelIcon } from 'public/icons';
import React from 'react';

interface Props {
  route: string;
  classes: string;
}

function QuitButton({ route, classes }: Props) {
  return (
    <Link className={classes} href={route}>
      <CancelIcon fill='#B3B6C5' width={24} height={24} />
    </Link>
  );
}

export default QuitButton;
