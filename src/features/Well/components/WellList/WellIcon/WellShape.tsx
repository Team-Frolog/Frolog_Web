import React from 'react';
import Well1 from 'public/images/well/shape/svg/1.svg';
import Well2 from 'public/images/well/shape/svg/2.svg';
import Well3 from 'public/images/well/shape/svg/3.svg';
import Well4 from 'public/images/well/shape/svg/4.svg';
import Well5 from 'public/images/well/shape/svg/5.svg';
import Well6 from 'public/images/well/shape/svg/6.svg';
import Well7 from 'public/images/well/shape/svg/7.svg';
import Well8 from 'public/images/well/shape/svg/8.svg';
import Well9 from 'public/images/well/shape/svg/9.svg';

interface Props {
  /** 우물 모양 타입 id */
  welltype: number;
}

/** 우물 배경 모양 컴포넌트 */
function WellShape({ welltype }: Props) {
  switch (welltype) {
    case 1:
      return <Well1 className='h-full w-full object-cover' />;
    case 2:
      return <Well2 className='h-full w-full object-cover' />;
    case 3:
      return <Well3 className='h-full w-full object-cover' />;
    case 4:
      return <Well4 className='h-full w-full object-cover' />;
    case 5:
      return <Well5 className='h-full w-full object-cover' />;
    case 6:
      return <Well6 className='h-full w-full object-cover' />;
    case 7:
      return <Well7 className='h-full w-full object-cover' />;
    case 8:
      return <Well8 className='h-full w-full object-cover' />;
    case 9:
      return <Well9 className='h-full w-full object-cover' />;
    default:
      return null;
  }
}

export default WellShape;
