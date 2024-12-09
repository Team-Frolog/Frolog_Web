import React from 'react';

interface Props {
  position: string;
}

function NewTag({ position }: Props) {
  return (
    <span
      data-testid='New Tag'
      className={`absolute ${position} rounded-[20px] bg-error px-[8px] py-[4px] text-body-sm-bold text-white`}
    >
      NEW
    </span>
  );
}

export default NewTag;
