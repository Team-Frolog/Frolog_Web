import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IMAGES } from '@/constants/images';
import { GetProfileDetailRes } from '@frolog/frolog-api';
import { getImageSrc } from '@/utils/getImageSrc';
import { formatUnit } from '../../utils/formatUnit';

interface Props {
  /** 프로필 상세 데이터 객체 */
  profileDetail: GetProfileDetailRes;
}

/** 유저 정보 통계 컴포넌트 */
function UserStatistics({ profileDetail }: Props) {
  const {
    max_item_cnt,
    follower_cnt,
    following_cnt,
    username,
    image,
    self_intro,
  } = profileDetail;

  return (
    <div className='flex w-full flex-col gap-[16px] px-page'>
      <div className='flex w-full items-center gap-[28px]'>
        <div className='relative h-[76px] w-[76px] shrink-0'>
          <Image
            src={
              image ? getImageSrc(image, 'profile')! : IMAGES.default_profile
            }
            alt='profile image'
            layout='fill'
            className='rounded-[50%] object-cover'
            loading='eager'
          />
        </div>
        <div className='flex flex-1 justify-around'>
          <div className='flex-column items-center justify-center'>
            <h3 className='text-title-xl-bold text-gray-800'>{max_item_cnt}</h3>
            <span className='text-body-sm text-gray-600'>최고 높이(권)</span>
          </div>
          <Link
            href={`/${profileDetail.id}/profile/follows?currentTap=followers`}
            className='flex-column items-center justify-center'
          >
            <h3 className='text-title-xl-bold text-gray-800'>
              {formatUnit(follower_cnt)}
            </h3>
            <span className='text-body-sm text-gray-600'>팔로워</span>
          </Link>
          <Link
            href={`/${profileDetail.id}/profile/follows?currentTap=followings`}
            className='flex-column items-center justify-center'
          >
            <h3 className='text-title-xl-bold text-gray-800'>
              {formatUnit(following_cnt)}
            </h3>
            <span className='text-body-sm text-gray-600'>팔로잉</span>
          </Link>
        </div>
      </div>
      <div className='flex w-full flex-col gap-[4px] text-gray-800'>
        <h5 className='text-body-lg-bold'>{username}</h5>
        <p className='break-all text-body-md'>{self_intro}</p>
      </div>
    </div>
  );
}

export default UserStatistics;
