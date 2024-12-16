import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

interface Props {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

/** Navigation Bar 아이템 */
function NavItem({ href, icon, label, isActive, onClick }: Props) {
  return (
    <MotionLink
      whileTap={{ scale: 1.2 }}
      href={href}
      className='navItem'
      onClick={onClick}
    >
      {icon}
      <span
        className={`text-body-sm-bold ${isActive ? 'text-gray-800' : 'text-gray-500'}`}
      >
        {label}
      </span>
    </MotionLink>
  );
}

export default NavItem;
