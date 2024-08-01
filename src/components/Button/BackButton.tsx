'use client';

import { BackIcon } from 'public/icons';
import React from 'react';

interface Props {
  onClick: () => void;
  fill: string;
}

function BackButton({ onClick, fill }: Props) {
  return (
    <button type='button' className='cursor-pointer' onClick={onClick}>
      <BackIcon id='icon' fill={fill} />
    </button>
  );
}

export default BackButton;
