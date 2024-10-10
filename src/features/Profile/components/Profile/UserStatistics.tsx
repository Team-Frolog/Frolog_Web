import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IMAGES } from '@/constants/images';
import { GetProfileDetailRes } from '@frolog/frolog-api';
import { formatUnit } from '../../utils/formatUnit';

interface Props {
  profileDetail: GetProfileDetailRes;
}

function UserStatistics({ profileDetail }: Props) {
  const { max_height, follower_cnt, following_cnt, username, self_intro } =
    profileDetail;

  return (
    <div className='flex w-full flex-col gap-[16px] px-page'>
      <div className='flex w-full items-center gap-[28px]'>
        <Image
          src={IMAGES.default_profile}
          alt='profile image'
          width={76}
          height={76}
        />
        <div className='flex flex-1 justify-around'>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='text-title-xl-bold text-gray-800'>{max_height}</h3>
            <span className='text-body-sm text-gray-600'>최고높이(cm)</span>
          </div>
          <Link
            href={`/${profileDetail.id}/profile/follows?tap=followers`}
            className='flex flex-col items-center justify-center'
          >
            <h3 className='text-title-xl-bold text-gray-800'>
              {formatUnit(follower_cnt)}
            </h3>
            <span className='text-body-sm text-gray-600'>팔로워</span>
          </Link>
          <Link
            href={`/${profileDetail.id}/profile/follows?tap=followings`}
            className='flex flex-col items-center justify-center'
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
