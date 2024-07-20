import React from 'react';
import BackIcon from 'public/icons/common/back/back.svg';
import { useRouter } from 'next/navigation';
import { usePopUpActions } from '@/store/popUpStore';
import { ON_LEAVE_ROUTE } from '@/constants/storage';

interface Props {
  type: 'default' | 'edit';
  isDisabled: boolean;
  onClick?: () => void;
}

function TitleHeader({ type, isDisabled, onClick }: Props) {
  const router = useRouter();
  const { changePopUpState } = usePopUpActions();

  const handleClick = () => {
    if (type === 'edit') {
      sessionStorage.setItem(ON_LEAVE_ROUTE, 'back');
      changePopUpState('isOpenAlertSheet', true);
    } else {
      router.back();
    }
  };

  return (
    <div className='flex w-full justify-between border-b-[0.5px] border-gray-400 bg-white px-[24px] py-[10px] text-gray-800'>
      <button type='button' onClick={handleClick}>
        <BackIcon fill='#727484' />
      </button>
      <h2 className='text-body_xl_bold'>메리와 메리</h2>
      <button
        type={type === 'edit' ? 'submit' : 'button'}
        onClick={type === 'edit' ? undefined : onClick}
        className={`text-body_lg_bold text-main ${type === 'edit' && isDisabled && 'pointer-events-none opacity-50'}`}
      >
        {type === 'edit' ? '저장' : '수정'}
      </button>
    </div>
  );
}

export default TitleHeader;
