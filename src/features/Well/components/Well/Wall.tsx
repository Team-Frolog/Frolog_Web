import React from 'react';

interface Props {
  direction: 'right' | 'left';
}

function Wall({ direction }: Props) {
  return (
    <div
      className={`bg-wall absolute top-0 z-10 h-full w-[45px] ${direction === 'left' ? 'left-0' : 'right-0 rotate-180'}`}
    />
  );
}

export default Wall;
