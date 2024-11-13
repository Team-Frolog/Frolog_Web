import Link from 'next/link';
import { MenuArrowIcon } from 'public/icons';
import React from 'react';

interface Props {
  name: string;
  href?: string;
  theme?: 'default' | 'highlight';
  onClick?: () => void;
}

function MenuItem({ name, href, onClick, theme = 'default' }: Props) {
  return href ? (
    <Link href={href} className='flex w-full items-center justify-between'>
      <span
        className={`text-body-xl ${theme === 'default' ? 'text-gray-800' : 'text-main'}`}
      >
        {name}
      </span>
      <MenuArrowIcon fill={theme === 'default' ? '#B3B6C4' : '#00CE4C'} />
    </Link>
  ) : (
    <button
      type='button'
      onClick={onClick}
      className='flex w-full items-center justify-between'
    >
      <span className='text-body-xl text-gray-800'>{name}</span>
      <MenuArrowIcon fill='#B3B6C4' />
    </button>
  );
}

export default MenuItem;
