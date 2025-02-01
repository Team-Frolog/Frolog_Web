import React from 'react';
import { TapKey, taps } from '@/constants/taps';
import { Taps } from '@/types/taps';
import CustomMotionLink from '../Link/CustomMotionLink';

interface Props {
  href: string;
  icon: React.ReactNode;
  label: Taps;
  tapKey: TapKey;
  isActive: boolean;
  onClick?: () => void;
}

/** Navigation Bar 아이템 */
function NavItem({ href, icon, label, tapKey, isActive, onClick }: Props) {
  return (
    <CustomMotionLink
      whileTap={{ scale: 1.2 }}
      href={href}
      tapKey={tapKey}
      className='navItem'
      onClick={onClick}
    >
      {icon}
      <span
        className={`text-body-sm-bold ${isActive ? 'text-gray-800' : 'text-gray-500'}`}
      >
        {taps[label]}
      </span>
    </CustomMotionLink>
  );
}

export default NavItem;
