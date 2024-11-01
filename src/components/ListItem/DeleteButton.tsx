import { bottomSheet } from '@/modules/BottomSheet';
import React from 'react';

interface Props {
  type: 'review' | 'memo';
  buttonText: string;
  onDelete: () => void;
  onClick?: () => void;
}

function DeleteButton({ type, buttonText, onDelete, onClick }: Props) {
  return (
    <div className='flex w-full flex-col px-[24px]'>
      <hr className='border-[0.5px] border-gray-400' />
      <button
        type='button'
        onClick={() => {
          if (onClick) {
            onClick();
          }
          bottomSheet.open({
            sheetKey: type === 'review' ? 'delete_review' : 'delete_memo',
            onClick: onDelete,
          });
        }}
        className='py-[24px] text-body-lg text-error'
      >
        {buttonText}
      </button>
    </div>
  );
}

export default DeleteButton;
