'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import { ChildArrowIcon, MenuIcon } from 'public/icons';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import { bottomSheet } from '@/modules/BottomSheet';
import { useReport } from '@/hooks/useReport';
import { useProfile } from '@/hooks/useProfile';
import { useUserId } from '@/store/sessionStore';
import { getImageSrc } from '@/utils/getImageSrc';
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
  const sessionUserId = useUserId();
  const router = useRouter();
  const isRootUser = sessionUserId === userId;
  const { profile } = useProfile(userId);
  const { handleReport } = useReport(userId);
  const { handleFollow } = useFollowUser();
  const isFeed = type === 'feed';
  const canShowButton =
    (isFeed && !isRootUser) || (!isFeed && !(isDeleted && isRootUser));

  if (!profile) return <></>;

  const { username, image, follow } = profile;

  const getSheetKey = () => {
    if (isRootUser) {
      return 'delete_this_comment';
    }
    return isFeed ? 'report_this_feed' : 'report_this_comment';
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
            <div className='relative flex h-[32px] w-[32px] shrink-0'>
              <Image
                src={
                  image
                    ? getImageSrc(image, 'profile')!
                    : IMAGES.default_profile
                }
                alt='profile image'
                layout='fill'
                className='rounded-[50%] object-cover'
              />
            </div>
          </div>
        ) : (
          <div className='relative flex h-[40px] w-[40px] shrink-0'>
            <Image
              src={
                image ? getImageSrc(image, 'profile')! : IMAGES.default_profile
              }
              alt='profile image'
              layout='fill'
              className='rounded-[50%] object-cover'
            />
          </div>
        )}

        <h5 className='text-body-lg-bold text-gray-600'>{username}</h5>
      </button>
      <div className='flex items-center gap-[8px]'>
        {hasFollow && !isRootUser && (
          <button
            type='button'
            onClick={() =>
              runWhenLoggedIn(() =>
                handleFollow({ id: userId, value: !follow })
              )
            }
            className={follow ? 'following-tag' : 'not-following-tag'}
          >
            {follow ? '팔로잉' : '팔로우'}
          </button>
        )}
        {canShowButton && (
          <button
            type='button'
            onClick={() =>
              runWhenLoggedIn(() =>
                bottomSheet.open({
                  sheetKey: getSheetKey(),
                  onClick: !isFeed && isRootUser ? onDelete : handleReport,
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
