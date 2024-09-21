'use client';

import { BackIcon } from 'public/icons';
import React from 'react';

interface Props {
  onClick: () => void;
  fill: string;
  extraClass?: string;
}

function BackButton({ onClick, fill, extraClass }: Props) {
  return (
    <button
      type='button'
      className={`cursor-pointer ${extraClass}`}
      onClick={onClick}
    >
      <BackIcon id='icon' fill={fill} />
    </button>
  );
}

export default BackButton;
