import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useUserActionStore from '@/store/userActionStore';
import { NavigationTap, taps } from '@/constants/taps';
import { useUserId } from '@/store/sessionStore';

const MotionLink = motion(Link);

interface Props {
  href: string;
  icon: React.ReactNode;
  label: Taps;
  isActive: boolean;
  onClick?: () => void;
}

/** Navigation Bar 아이템 */
function NavItem({ href, icon, label, isActive, onClick }: Props) {
  const userId = useUserId();
  const { setCurrentTap } = useUserActionStore((state) => state.actions);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    const isProfileTap = label === NavigationTap.PROFILE;
    if (!isProfileTap || userId) {
      setCurrentTap(label);
    }
  };

  return (
    <MotionLink
      whileTap={{ scale: 1.2 }}
      href={href}
      className='navItem'
      onClick={handleClick}
    >
      {icon}
      <span
        className={`text-body-sm-bold ${isActive ? 'text-gray-800' : 'text-gray-500'}`}
      >
        {taps[label]}
      </span>
    </MotionLink>
  );
}

export default NavItem;
