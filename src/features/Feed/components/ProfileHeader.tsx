import React from 'react';
import { ChildArrowIcon, MenuIcon } from 'public/icons';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import { usePopUpActions } from '@/store/popUpStore';

interface Props {
  hasFollow?: boolean;
  isChildComment?: boolean;
}

function ProfileHeader({ hasFollow = false, isChildComment = false }: Props) {
  const { changePopUpState } = usePopUpActions();

  return (
    <div className='flex w-full justify-between px-page'>
      <div className='flex items-center gap-[8px]'>
        {isChildComment ? (
          <div className='flex items-center gap-[4px]'>
            <ChildArrowIcon />
            <Image
              src={IMAGES.default_profile}
              alt='profile image'
              width={32}
              height={32}
              className='rounded-[50%]'
            />
          </div>
        ) : (
          <Image
            src={IMAGES.default_profile}
            alt='profile image'
            width={40}
            height={40}
            className='rounded-[50%]'
          />
        )}

        <h5 className='text-body-lg-bold text-gray-600'>
          홍길동과고길동과도라에몽
        </h5>
      </div>
      <div className='flex items-center gap-[8px]'>
        {hasFollow && (
          <button
            type='button'
            className='rounded-[12px] border border-gray-400 bg-white px-[16px] py-[8px] text-body-sm-bold text-gray-600'
          >
            팔로우
          </button>
        )}
        {/* 본인인 경우 삭제 시트 */}
        <button
          type='button'
          onClick={() => changePopUpState('isOpenAlertSheet', true)}
        >
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
