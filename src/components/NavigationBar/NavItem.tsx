import React from 'react';
import { NAV_ITEM } from '@/constants/nav';
import { NavItemKey, NavItemLabel } from '@/types/nav';
import CustomMotionLink from '../Link/CustomMotionLink';

interface Props {
  href: string;
  icon: React.ReactNode;
  label: NavItemLabel;
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
        {NAV_ITEM[label].name}
      </span>
    </CustomMotionLink>
  );
}

export default NavItem;
