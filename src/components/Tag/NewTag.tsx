import React from 'react';

interface Props {
  /** absolute에 대한 포지션 값(top, left, right, bottom) */
  position: string;
}

/** 상점 아이템에 붙는 'NEW' 태그 */
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
