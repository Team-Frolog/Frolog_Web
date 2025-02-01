import React from 'react';
import Well1 from 'public/images/well/outline/1.svg';
import Well2 from 'public/images/well/outline/2.svg';
import Well3 from 'public/images/well/outline/3.svg';
import Well4 from 'public/images/well/outline/4.svg';
import Well5 from 'public/images/well/outline/5.svg';
import Well6 from 'public/images/well/outline/6.svg';
import Well7 from 'public/images/well/outline/7.svg';
import Well8 from 'public/images/well/outline/8.svg';
import Well9 from 'public/images/well/outline/9.svg';

interface Props {
  /** 우물 모양 타입 id */
  welltype: number;
  /** 색상 */
  fill: string;
}

/** 우물 모양 outline 컴포넌트 */
function WellOutline({ welltype, fill }: Props) {
  switch (welltype) {
    case 1:
      return <Well1 fill={fill} />;
    case 2:
      return <Well2 fill={fill} />;
    case 3:
      return <Well3 fill={fill} />;
    case 4:
      return <Well4 fill={fill} />;
    case 5:
      return <Well5 fill={fill} />;
    case 6:
      return <Well6 fill={fill} />;
    case 7:
      return <Well7 fill={fill} />;
    case 8:
      return <Well8 fill={fill} />;
    case 9:
      return <Well9 fill={fill} />;
    default:
      return null;
  }
}

export default WellOutline;
