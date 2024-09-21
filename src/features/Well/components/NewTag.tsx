import React from 'react';

interface Props {
  position: string;
}

function NewTag({ position }: Props) {
  return (
    <span
      className={`absolute ${position} text-body-sm-bold rounded-[20px] bg-error px-[8px] py-[4px] text-white`}
    >
      NEW
    </span>
  );
}

export default NewTag;
