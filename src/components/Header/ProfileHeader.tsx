'use client';

import React from 'react';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import { ChildArrowIcon, MenuIcon } from 'public/icons';
import Image from 'next/image';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { IMAGES } from '@/constants/images';
import { getPath } from '@/utils/getPath';
import { bottomSheet } from '@/modules/BottomSheet';
import { useReport } from '@/hooks/useReport';
import { useProfile } from '@/hooks/useProfile';
import { useUserId } from '@/store/sessionStore';
import { getImageSrc } from '@/utils/getImageSrc';
import { useFollowUser } from '@/features/Feed';
import ProfileHeaderSkeleton from '../Fallback/Skeleton/ProfileHeaderSkeleton';

interface Props {
  /** 사용 위치 */
  type: 'feed' | 'comment' | 'explore';
  /** 유저 id */
  userId: string;
  /** 삭제 여부 */
  isDeleted?: boolean;
  /** 팔로우 버튼 여부 */
  hasFollow?: boolean;
  /** 자식 댓글의 헤더인지 여부 */
  isChildComment?: boolean;
  /** 삭제 핸들러 */
  onDelete?: () => void;
  /** 프로필 클릭 핸들러 */
  onClick?: () => void;
}

/** 프로필 헤더 컴포넌트
 * - 피드 아이템, 댓글 아이템 등에서 활용됩니다.
 */
function ProfileHeader({
  type,
  userId,
  onDelete,
  onClick,
  isDeleted = false,
  hasFollow = false,
  isChildComment = false,
}: Props) {
  const sessionUserId = useUserId();
  const { navigate } = useCustomRouter('SEARCH');
  const isRootUser = sessionUserId === userId;
  const { profile, isLoading } = useProfile(userId);
  const { handleReport } = useReport(userId);
  const { handleFollow } = useFollowUser();
  const isFeed = type === 'feed';
  const canShowButton =
    (isFeed && !isRootUser) || (!isFeed && !(isDeleted && isRootUser));

  if (!profile || isLoading) return <ProfileHeaderSkeleton />;

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
          runWhenLoggedIn(() => {
            if (onClick) {
              onClick();
            }
            navigate(getPath.profile(profile.id));
          })
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
                unoptimized
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
