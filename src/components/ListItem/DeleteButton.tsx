import { usePopUpActions } from '@/store/popUpStore';
import React from 'react';

interface Props {
  buttonText: string;
  onClick?: () => void;
}

function DeleteButton({ buttonText, onClick }: Props) {
  const { changePopUpState } = usePopUpActions();

  return (
    <div className='flex w-full flex-col px-[24px]'>
      <hr className='border-[0.5px] border-gray-400' />
      <button
        type='button'
        onClick={() => {
          if (onClick) {
            onClick();
          }
          changePopUpState('isOpenDeleteSheet', true);
        }}
        className='text-body-lg py-[24px] text-error'
      >
        {buttonText}
      </button>
    </div>
  );
}

export default DeleteButton;
