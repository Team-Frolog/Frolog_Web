import React from 'react';

interface Props {
  /** 색상 id */
  id: string;
  /** 선택 여부 */
  isSelected: boolean;
  /** 클릭 핸들러 */
  onClick: () => void;
}

/** 색상 버튼 컴포넌트 */
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
