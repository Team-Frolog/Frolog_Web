import React from 'react';

interface Props {
  id: string;
  isSelected: boolean;
  onClick: () => void;
}

function ColorButton({ id, isSelected, onClick }: Props) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`relative h-[40px] w-[40px] rounded-[50%] bg-category-bg-${id}`}
    >
      {isSelected && (
        <div className='absolute -left-[5px] -top-[5px] h-[50px] w-[50px] rounded-[50%] border-[3px] border-main' />
      )}
    </button>
  );
}

export default ColorButton;
