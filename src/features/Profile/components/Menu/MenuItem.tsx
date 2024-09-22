import { MenuArrowIcon } from 'public/icons';
import React from 'react';

interface Props {
  name: string;
  onClick: () => void;
}

function MenuItem({ name, onClick }: Props) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='flex w-full items-center justify-between'
    >
      <span className='text-body-xl text-gray-800'>{name}</span>
      <MenuArrowIcon />
    </button>
  );
}

export default MenuItem;
