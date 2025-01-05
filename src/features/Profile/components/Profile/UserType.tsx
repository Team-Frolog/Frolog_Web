import Slider from '@/components/Slider/Slider';
import { getTestTypeById } from '@/features/FrologTest';
import { GetProfileDetailRes } from '@frolog/frolog-api';
import React from 'react';
import { getAgeCategory } from '../../utils/getAge';

interface Props {
  /** 프로필 상세 데이터 객체 */
  profileDetail: GetProfileDetailRes;
}

type InfoType = 'occupation' | 'birth_date' | 'gender';

interface Info {
  type: string;
  value?: string;
  visibility: boolean;
}

/** 유저 타입 컴포넌트 */
function UserType({ profileDetail }: Props) {
  const { reading_preference, personal_infos } = profileDetail;

  const infoMap = personal_infos.reduce(
    (acc, info) => {
      acc[info.type as InfoType] = info;
      return acc;
    },
    {} as Record<InfoType, Info | undefined>
  );

  const { occupation, birth_date, gender } = infoMap;

  return (
    <Slider
      isBetween
      sliderClass='flex w-full overflow-hidden'
      slideClass='gap-[8px]'
    >
      <div className='flex-column items-center gap-[4px]'>
        <div
          className={
            reading_preference ? 'user-type-chip' : 'user-type-chip-disabled'
          }
        >
          {reading_preference ? getTestTypeById(reading_preference) : '?'}
        </div>
        <span className='text-body-sm text-gray-600'>독서성향</span>
      </div>
      <div className='flex-column items-center gap-[4px]'>
        <div
          className={
            birth_date?.visibility
              ? 'user-type-chip'
              : 'user-type-chip-disabled'
          }
        >
          {birth_date?.visibility
            ? getAgeCategory(birth_date.value!)
            : '비공개'}
        </div>
        <span className='text-body-sm text-gray-600'>연령대</span>
      </div>
      <div className='flex-column items-center gap-[4px]'>
        <div
          className={
            gender?.visibility ? 'user-type-chip' : 'user-type-chip-disabled'
          }
        >
          {gender?.visibility ? gender.value : '비공개'}
        </div>
        <span className='text-body-sm text-gray-600'>성별</span>
      </div>
      <div className='flex-column items-center gap-[4px]'>
        <div
          className={
            occupation?.visibility
              ? 'user-type-chip'
              : 'user-type-chip-disabled'
          }
        >
          {occupation?.visibility ? occupation.value : '비공개'}
        </div>
        <span className='text-body-sm text-gray-600'>직업</span>
      </div>
    </Slider>
  );
}

export default UserType;
