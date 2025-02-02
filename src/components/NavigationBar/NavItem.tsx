import React from 'react';
import { NavItemKey, navItem } from '@/constants/nav';
import { Taps } from '@/types/taps';
import CustomMotionLink from '../Link/CustomMotionLink';

interface Props {
  href: string;
  icon: React.ReactNode;
  label: Taps;
  navKey: NavItemKey;
  isActive: boolean;
  onClick?: () => void;
}

/** Navigation Bar 아이템 */
function NavItem({ href, icon, label, navKey, isActive, onClick }: Props) {
  return (
    <CustomMotionLink
      whileTap={{ scale: 1.2 }}
      href={href}
      navKey={navKey}
      className='navItem'
      onClick={onClick}
    >
      {icon}
      <span
        className={`text-body-sm-bold ${isActive ? 'text-gray-800' : 'text-gray-500'}`}
      >
        {navItem[label]}
      </span>
    </CustomMotionLink>
  );
}

export default NavItem;
