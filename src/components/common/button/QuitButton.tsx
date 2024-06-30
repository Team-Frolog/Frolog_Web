import { ICONS } from '@/constants/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  route: string;
  classes: string;
}

function QuitButton({ route, classes }: Props) {
  return (
    <Link className={classes} href={route}>
      <Image src={ICONS.common.cancel} alt='x' width={24} height={24} />
    </Link>
  );
}

export default QuitButton;
