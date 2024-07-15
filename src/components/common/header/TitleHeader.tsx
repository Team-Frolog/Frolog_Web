import React from 'react';
import BackIcon from 'public/icons/common/back/back.svg';
import { useRouter } from 'next/navigation';

interface Props {
  buttonType: 'submit' | 'button';
  isDisabled: boolean;
  onClick?: () => void;
}

function TitleHeader({ buttonType, isDisabled, onClick }: Props) {
  const router = useRouter();
  return (
    <div className='flex w-full justify-between border-b-[0.5px] border-gray-400 bg-white px-[24px] py-[10px] text-gray-800'>
      <button type='button' onClick={() => router.back()}>
        <BackIcon fill='#727484' />
      </button>
      <h2 className='text-body_xl_bold'>메리와 메리</h2>
      <button
        type={buttonType === 'submit' ? 'submit' : 'button'}
        onClick={buttonType === 'button' ? onClick : undefined}
        className={`text-body_lg_bold text-main ${buttonType === 'submit' && isDisabled && 'pointer-events-none opacity-50'}`}
      >
        {buttonType === 'button' ? '수정' : '저장'}
      </button>
    </div>
  );
}

export default TitleHeader;
