'use client';

import React from 'react';
import { ChildArrowIcon, MenuIcon } from 'public/icons';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import { bottomSheet } from '@/modules/BottomSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import { useReport } from '@/hooks/useReport';
import { useProfile } from '@/hooks/useProfile';
import { useSession } from 'next-auth/react';

interface Props {
  type: 'feed' | 'comment';
  userId: string;
  hasFollow?: boolean;
  isChildComment?: boolean;
  onDelete?: () => void;
}

function ProfileHeader({
  type,
  userId,
  onDelete,
  hasFollow = false,
  isChildComment = false,
}: Props) {
  const { data: session } = useSession();
  const isMe = session?.user.id === userId;
  const { profile } = useProfile(userId);
  const { handleReport } = useReport(userId);

  const getSheetData = () => {
    if (isMe) {
      return sheetData.delete_this_comment;
    }
    return type === 'feed'
      ? sheetData.report_this_feed
      : sheetData.report_this_comment;
  };

  return (
    <div className='flex w-full items-center justify-between px-page'>
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

        <h5 className='text-body-lg-bold text-gray-600'>{profile?.username}</h5>
      </div>
      {session?.user.id !== profile?.id && (
        <div className='flex items-center gap-[8px]'>
          {hasFollow && (
            <button
              type='button'
              className='rounded-[12px] border border-gray-400 bg-white px-[16px] py-[8px] text-body-sm-bold text-gray-600'
            >
              팔로우
            </button>
          )}
          <button
            type='button'
            onClick={() =>
              bottomSheet.open({
                sheetData: getSheetData(),
                onClick: type === 'comment' && isMe ? onDelete : handleReport,
              })
            }
          >
            <MenuIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileHeader;
