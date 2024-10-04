'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import { ChildArrowIcon, MenuIcon } from 'public/icons';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import { bottomSheet } from '@/modules/BottomSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import { useReport } from '@/hooks/useReport';
import { useProfile } from '@/hooks/useProfile';
import { useSession } from 'next-auth/react';
import { useFollowUser } from '../hooks/feed/useFollowUser';

interface Props {
  type: 'feed' | 'comment';
  userId: string;
  isDeleted?: boolean;
  hasFollow?: boolean;
  isChildComment?: boolean;
  onDelete?: () => void;
}

function ProfileHeader({
  type,
  userId,
  onDelete,
  isDeleted = false,
  hasFollow = false,
  isChildComment = false,
}: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  const isMe = session?.user.id === userId;
  const { profile } = useProfile(userId);
  const { handleReport } = useReport(userId);
  const { handleFollow } = useFollowUser();
  const isFeed = type === 'feed';
  const canShowButton = (isFeed && !isMe) || (!isFeed && !(isDeleted && isMe));

  if (!profile) return <></>;

  const { username, image, follow } = profile;

  const getSheetData = () => {
    if (isMe) {
      return sheetData.delete_this_comment;
    }
    return isFeed ? sheetData.report_this_feed : sheetData.report_this_comment;
  };

  return (
    <div className='flex w-full items-center justify-between px-page'>
      <button
        type='button'
        onClick={() =>
          runWhenLoggedIn(() => router.push(`/${profile.id}/profile`))
        }
        className='flex items-center gap-[8px]'
      >
        {isChildComment ? (
          <div className='flex items-center gap-[4px]'>
            <ChildArrowIcon />
            <Image
              src={image || IMAGES.default_profile}
              alt='profile image'
              width={32}
              height={32}
              className='rounded-[50%]'
            />
          </div>
        ) : (
          <Image
            src={image || IMAGES.default_profile}
            alt='profile image'
            width={40}
            height={40}
            className='rounded-[50%]'
          />
        )}

        <h5 className='text-body-lg-bold text-gray-600'>{username}</h5>
      </button>
      <div className='flex items-center gap-[8px]'>
        {hasFollow && !isMe && (
          <button
            type='button'
            onClick={() =>
              runWhenLoggedIn(() =>
                handleFollow({ id: userId, value: !follow })
              )
            }
            className={follow ? 'following-tag' : 'not-following-tag'}
          >
            팔로우
          </button>
        )}
        {canShowButton && (
          <button
            type='button'
            onClick={() =>
              runWhenLoggedIn(() =>
                bottomSheet.open({
                  sheetData: getSheetData(),
                  onClick: !isFeed && isMe ? onDelete : handleReport,
                })
              )
            }
          >
            <MenuIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfileHeader;
