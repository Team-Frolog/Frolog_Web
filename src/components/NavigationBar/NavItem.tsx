import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useUserActionStore from '@/store/userActionStore';
import { taps } from '@/constants/taps';

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
  const { setCurrentTap } = useUserActionStore((state) => state.actions);

  return (
    <MotionLink
      whileTap={{ scale: 1.2 }}
      href={href}
      className='navItem'
      onClick={() => {
        if (onClick) {
          onClick();
        }
        setCurrentTap(label);
      }}
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
