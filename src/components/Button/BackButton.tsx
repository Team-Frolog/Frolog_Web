'use client';

import React from 'react';
import BackIcon from 'public/icons/common/back/back.svg';

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
